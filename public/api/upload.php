<?php
header('Content-Type: application/json');

$uploadDir = __DIR__ . '/../uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

$response = ['success' => false, 'files' => [], 'error' => null];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_FILES)) {
        foreach ($_FILES as $key => $file) {
            if ($file['error'] === UPLOAD_ERR_OK) {
                $tmpName = $file['tmp_name'];
                $name = basename($file['name']);
                $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
                
                $allowed = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'mp4', 'webm', 'mov', 'avi'];
                
                if (in_array($ext, $allowed)) {
                    $newName = time() . '_' . $name;
                    $target = $uploadDir . $newName;
                    
                    if (move_uploaded_file($tmpName, $target)) {
                        $response['files'][] = [
                            'name' => $name,
                            'saved' => $newName,
                            'url' => '/uploads/' . $newName
                        ];
                    }
                }
            }
        }
        if (!empty($response['files'])) {
            $response['success'] = true;
        } else {
            $response['error'] = 'No valid files uploaded';
        }
    } else {
        $response['error'] = 'No files uploaded';
    }
} else {
    $response['error'] = 'Invalid request method';
}

echo json_encode($response);
?>