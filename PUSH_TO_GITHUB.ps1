# GitHub Push Script
# Right-click this file > "Run with PowerShell"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Oman Castles - GitHub Push Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$token = Read-Host "Enter your GitHub Personal Access Token"

if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Host "Token required hai!" -ForegroundColor Red
    exit
}

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow

cd "C:\Users\QT\Desktop\oman- project"

try {
    # Add all files
    git add .
    
    # Commit
    git commit -m "Oman Castles - Interactive Educational Website"
    
    # Push with token
    git remote set-url origin "https://ghp_$token@github.com/syedmussab/oman-castles.git"
    git branch -M main
    git push -u origin main
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  SUCCESS! GitHub pe push ho gaya!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Ab Settings > Pages mein jaao" -ForegroundColor Yellow
    Write-Host "aur 'main' branch select karo" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Live website: https://syedmussab.github.io/oman-castles/" -ForegroundColor Cyan
}
catch {
    Write-Host ""
    Write-Host "Error: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Commands manually try karo:" -ForegroundColor Yellow
    Write-Host 'git push https://ghp_TOKEN@github.com/syedmussab/oman-castles.git main' -ForegroundColor Gray
}

Write-Host ""
Write-Host "Press Enter to exit..."
Read-Host