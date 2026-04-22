/**
 * Oman Celebrities - Main JavaScript
 * Handles all interactive features
 */

// ==================== LANGUAGE SUPPORT ====================
const translations = {
    en: {
        loading: "Loading Oman Experience...",
        gallery: "Image Gallery",
        video: "Interactive Video",
        audio3d: "3D Experience",
        audio: "Audio Journey",
        upload: "Upload Media",
        footer: "Oman Celebrities Project | Educational Media Assignment",
        route1: "Route 1: Royal Heritage",
        route2: "Route 2: Cultural Traditions",
        watchFull: "Watch Full Video",
        clickToUpload: "Click to upload or drag and drop",
        processedFiles: "Processed Files"
    },
    ar: {
        loading: "جاري تحميل تجربة عُمان...",
        gallery: "معرض الصور",
        video: "فيديو تفاعلي",
        audio3d: "تجربة ثلاثية الأبعاد",
        audio: "رحلة صوتية",
        upload: "تحميل الوسائط",
        footer: "مشهور عُمان | مهمة الوسائط التعليمية",
        route1: "المسار 1: التراث الملكي",
        route2: "المسار 2: التقاليد الثقافية",
        watchFull: "شاهد الفيديو الكامل",
        clickToUpload: "انقر للتحميل أو اسحب وأفلت",
        processedFiles: "الملفات المعالجة"
    },
    hi: {
        loading: "ओमान अनुभव लोड हो रहा है...",
        gallery: "छवि गैलरी",
        video: "इंटरैक्टिव वीडियो",
        audio3d: "3D अनुभव",
        audio: "ऑडियो यात्रा",
        upload: "मीडिया अपलोड करें",
        footer: "ओमान सेलिब्रिटीज़ प्रोजेक्ट | शैक्षिक मीडिया असाइनमेंट",
        route1: "मार्ग 1: राजकीय विरासत",
        route2: "मार्ग 2: सांस्कृतिक परंपराएं",
        watchFull: "पूरा वीडियो देखें",
        clickToUpload: "अपलोड करने के लिए क्लिक करें",
        processedFiles: "प्रोसेस की गई फाइलें"
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
    }
    
    // Save preference
    localStorage.setItem('oman-lang', lang);
}

// ==================== LOADING SCREEN ====================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('opacity-0', 'pointer-events-none');
        }, 2000);
    }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'scale-80', 'translate-y-4');
                entry.target.classList.add('opacity-100', 'scale-100', 'translate-y-0');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.gallery-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// ==================== TITLE ANIMATION ====================
function animateTitle() {
    const title = document.getElementById('main-title');
    if (!title) return;
    
    const text = title.textContent;
    title.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = (i * 0.05) + 's';
        span.className = 'inline-block';
        title.appendChild(span);
    }
}

// ==================== VIDEO INTERACTION ====================
let isPlaying = false;
let progress = 0;
const videoDuration = 180;

function togglePlay() {
    isPlaying = !isPlaying;
    const icon = document.getElementById('play-icon');
    if (icon) {
        icon.className = isPlaying ? 'fas fa-pause text-oman-dark' : 'fas fa-play text-oman-dark';
    }
    
    if (isPlaying) {
        startProgress();
        const placeholder = document.getElementById('video-placeholder');
        if (placeholder) placeholder.style.opacity = '0.5';
        
        setTimeout(() => {
            const branchOptions = document.getElementById('branch-options');
            if (branchOptions) {
                branchOptions.classList.remove('hidden');
                branchOptions.classList.add('flex');
            }
        }, 5000);
    }
}

function startProgress() {
    if (isPlaying && progress < 100) {
        progress += 0.5;
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) progressFill.style.width = progress + '%';
        
        const currentTime = Math.floor((progress / 100) * videoDuration);
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        
        const timeDisplay = document.getElementById('time-display');
        if (timeDisplay) {
            timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')} / 3:00`;
        }
        
        setTimeout(startProgress, 100);
    }
}

function seekVideo(event) {
    const rect = event.target.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    progress = percent * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) progressFill.style.width = progress + '%';
}

function playRoute(route) {
    const routeName = route === 1 ? 'Royal Heritage' : 'Cultural Traditions';
    alert(`Playing Route ${route}: ${routeName}`);
    const branchOptions = document.getElementById('branch-options');
    if (branchOptions) {
        branchOptions.classList.add('hidden');
        branchOptions.classList.remove('flex');
    }
}

function playFullVideo() {
    window.open('https://youtube.com', '_blank');
}

function toggleFullscreen() {
    const container = document.querySelector('.video-container');
    if (!container) return;
    
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        container.requestFullscreen();
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') { 
        e.preventDefault(); 
        togglePlay(); 
    }
    if (e.code === 'ArrowRight') { 
        progress = Math.min(100, progress + 10); 
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) progressFill.style.width = progress + '%';
    }
    if (e.code === 'ArrowLeft') { 
        progress = Math.max(0, progress - 10); 
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) progressFill.style.width = progress + '%';
    }
});

// ==================== 3D INTERACTIVE ====================
let isAutoRotating = false;
let mouseDown = false;
let previousMousePosition = { x: 0, y: 0 };
let rotationX = 0, rotationY = 0;
let scale = 1;

function init3DObject() {
    const threeDObject = document.getElementById('threeDObject');
    if (!threeDObject) return;
    
    threeDObject.addEventListener('mousedown', (e) => {
        mouseDown = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!mouseDown) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        rotationY += deltaX * 0.5;
        rotationX -= deltaY * 0.5;
        update3DObject();
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    document.addEventListener('mouseup', () => { mouseDown = false; });
    threeDObject.addEventListener('mouseleave', () => { mouseDown = false; });
}

function update3DObject() {
    const threeDObject = document.getElementById('threeDObject');
    if (threeDObject) {
        threeDObject.style.transform = `translate(-50%, -50%) perspective(500px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${scale})`;
    }
}

function resetCamera() { 
    rotationX = 0; 
    rotationY = 0; 
    scale = 1; 
    update3DObject(); 
}

function toggleAutoRotate() {
    isAutoRotating = !isAutoRotating;
    const threeDObject = document.getElementById('threeDObject');
    const btn = document.getElementById('rotateBtn');
    
    if (!threeDObject || !btn) return;
    
    if (isAutoRotating) {
        threeDObject.style.animation = 'none';
        threeDObject.style.transition = 'transform 0.3s ease';
        btn.classList.add('bg-oman-gold', 'text-oman-dark');
        btn.classList.remove('bg-white/10', 'text-white');
        autoRotate();
    } else {
        threeDObject.style.animation = 'rotate3d 10s linear infinite, float3d 4s ease-in-out infinite';
        btn.classList.remove('bg-oman-gold', 'text-oman-dark');
        btn.classList.add('bg-white/10', 'text-white');
    }
}

function autoRotate() {
    if (!isAutoRotating) return;
    rotationY += 1;
    update3DObject();
    requestAnimationFrame(autoRotate);
}

function zoomIn() { 
    scale = Math.min(2, scale + 0.2); 
    update3DObject(); 
}

function zoomOut() { 
    scale = Math.max(0.5, scale - 0.2); 
    update3DObject(); 
}

function changeView(view) {
    if (view === 'front') { 
        rotationX = 0; 
        rotationY = 0; 
    }
    else if (view === 'top') { 
        rotationX = -90; 
        rotationY = 0; 
    }
    update3DObject();
}

// ==================== FILE UPLOAD ====================
function handleFiles(files) {
    if (files.length > 0) {
        const filePreview = document.getElementById('filePreview');
        if (filePreview) filePreview.classList.remove('hidden');
        
        const fileList = document.getElementById('fileList');
        if (!fileList) return;
        
        fileList.innerHTML = '';
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const div = document.createElement('div');
            div.className = 'bg-gray-100 rounded-lg p-3 text-center';
            div.innerHTML = `
                <i class="fas fa-file text-oman-gold text-2xl mb-2"></i>
                <p class="text-sm truncate">${file.name}</p>
                <p class="text-xs text-gray-400">${(file.size / 1024).toFixed(1)} KB</p>
            `;
            fileList.appendChild(div);
        }
    }
}

async function handleUpload(e) {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    if (!fileInput || fileInput.files.length === 0) {
        alert('Please select files to upload');
        return;
    }
    
    const formData = new FormData();
    for (let i = 0; i < fileInput.files.length; i++) {
        formData.append('file', fileInput.files[i]);
    }
    
    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        alert('File uploaded successfully!');
    } catch (error) {
        console.error('Upload error:', error);
        alert('Upload failed. Please try again.');
    }
}

// ==================== EASTER EGG ====================
let easterEggPlayed = false;

function playEasterEgg() {
    if (easterEggPlayed) return;
    easterEggPlayed = true;
    
    document.body.style.animation = 'rainbow 2s linear infinite';
    const style = document.createElement('style');
    style.textContent = '@keyframes rainbow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }';
    document.head.appendChild(style);
    
    alert('🎉 You found the Easter Egg! 🎉\n\nThis hidden feature demonstrates audio integration in web applications.');
    
    setTimeout(() => { 
        document.body.style.filter = ''; 
    }, 5000);
}

function initEasterEgg() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'O') {
            e.preventDefault();
            playEasterEgg();
        }
    });
    
    // Show hint after 30 seconds
    setTimeout(() => {
        const hint = document.getElementById('easter-egg-hint');
        if (hint) hint.classList.remove('opacity-0');
    }, 30000);
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// ==================== AUDIO PLAYER ====================
function initAudioPlayer() {
    const audio = document.getElementById('narrative-audio');
    const visualizer = document.getElementById('audioVisualizer');
    
    if (audio && visualizer) {
        audio.addEventListener('play', () => {
            visualizer.querySelectorAll('.audio-bar').forEach(bar => {
                bar.style.animationPlayState = 'running';
            });
        });
        
        audio.addEventListener('pause', () => {
            visualizer.querySelectorAll('.audio-bar').forEach(bar => {
                bar.style.animationPlayState = 'paused';
            });
        });
    }
}

// ==================== IMAGE LAZY LOADING ====================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================== VIDEO CONTROLS ====================
function initVideoControls() {
    const video = document.getElementById('mainVideo');
    const playPause = document.getElementById('playPause');
    const muteBtn = document.getElementById('muteBtn');
    const progressBar = document.getElementById('progressBar');
    const volumeBar = document.getElementById('volumeBar');
    const timeDisplay = document.getElementById('timeDisplay');
    
    if (video) {
        video.addEventListener('timeupdate', () => {
            if (progressBar) {
                progressBar.value = (video.currentTime / video.duration) * 100;
            }
            if (timeDisplay) {
                const current = formatTime(video.currentTime);
                const total = formatTime(video.duration);
                timeDisplay.textContent = `${current} / ${total}`;
            }
        });
        
        video.addEventListener('loadedmetadata', () => {
            if (timeDisplay) {
                timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
            }
        });
    }
    
    if (playPause && video) {
        playPause.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playPause.textContent = '⏸️';
            } else {
                video.pause();
                playPause.textContent = '▶️';
            }
        });
    }
    
    if (muteBtn && video) {
        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            muteBtn.textContent = video.muted ? '🔇' : '🔊';
        });
    }
    
    if (progressBar && video) {
        progressBar.addEventListener('input', () => {
            video.currentTime = (progressBar.value / 100) * video.duration;
        });
    }
    
    if (volumeBar && video) {
        volumeBar.addEventListener('input', () => {
            video.volume = volumeBar.value;
        });
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ==================== PICTURE ELEMENT RESPONSIVE ====================
function initResponsiveImages() {
    // Check for WebP support
    const hasWebP = (() => {
        const elem = document.createElement('canvas');
        if (elem.getContext && elem.getContext('2d')) {
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        }
        return false;
    })();
    
    // Fallback to JPEG if WebP not supported
    if (!hasWebP) {
        document.querySelectorAll('picture source[type="image/webp"]').forEach(source => {
            const img = source.nextElementSibling;
            if (img) {
                img.src = img.src.replace('.webp', '.jpg');
            }
        });
    }
}

// ==================== INITIALIZE ALL ====================
document.addEventListener('DOMContentLoaded', () => {
    // Check saved language preference
    const savedLang = localStorage.getItem('oman-lang');
    if (savedLang) {
        setLanguage(savedLang);
    }
    
    // Initialize all features
    initLoadingScreen();
    initScrollAnimations();
    animateTitle();
    init3DObject();
    initEasterEgg();
    initSmoothScroll();
    initMobileMenu();
    initAudioPlayer();
    initLazyLoading();
    initVideoControls();
    initResponsiveImages();
    
    // Upload form
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', handleUpload);
    }
});

// ==================== TABS FUNCTIONALITY ====================
function openTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Reset all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-oman-blue', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    // Show selected tab content
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
    
    // Highlight selected button
    const selectedBtn = document.getElementById('tab-btn-' + tabId.replace('tab', ''));
    if (selectedBtn) {
        selectedBtn.classList.remove('bg-gray-200', 'text-gray-700');
        selectedBtn.classList.add('bg-oman-blue', 'text-white');
    }
}

// Export for global use
window.omanProject = {
    togglePlay,
    seekVideo,
    playRoute,
    playFullVideo,
    toggleFullscreen,
    resetCamera,
    toggleAutoRotate,
    zoomIn,
    zoomOut,
    changeView,
    handleFiles,
    setLanguage,
    playEasterEgg,
    openTab
};
