# TECHNICAL MEDIA SPECIFICATION
Oman Celebrities Website

## 1. STILL IMAGES SPECIFICATIONS

### 1.1 File Types and Compression
- **Primary Format**: WebP (Chrome, Firefox, Edge)
- **Fallback Format**: JPEG with progressive loading
- **Lossless Option**: PNG for transparency

### 1.2 Resolution Matrix
| Use Case | Dimensions | Quality | Target Size |
|---------|------------|---------|-------------|
| Hero/Desktop | 1920x1080 | 85% | 400KB |
| Tablet | 1024x768 | 80% | 200KB |
| Smartphone | 640x480 | 75% | 100KB |
| Thumbnail | 320x240 | 70% | 50KB |
| 3x Retina | 3x scale | 85% | Per device |
| 2x Retina | 2x scale | 85% | Per device |

### 1.3 Picture Element Implementation
```html
<picture>
  <source srcset="image-desktop.webp" media="(min-width: 1024px)">
  <source srcset="image-tablet.webp" media="(min-width: 768px)">
  <source srcset="image-mobile.webp" media="(max-width: 767px)">
  <img src="image-desktop.webp" alt="Oman Celebrity">
</picture>
```

### 1.4 Pixel Density Support
```html
<img srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
     src="image-1x.jpg"
     alt="Oman Celebrity Portrait">
```

## 2. AUDIO SPECIFICATIONS

### 2.1 Formats and Browser Support
| Format | Extension | Browser Support | Priority |
|--------|-----------|-----------------|----------|
| MP3 | .mp3 | All modern browsers | 1 |
| OGG Vorbis | .ogg | Chrome, Firefox | 2 |
| AAC | .aac | Safari, iOS | 3 |

### 2.2 Technical Parameters
- Sample Rate: 44100Hz
- Bit Depth: 16-bit
- Channels: Mono (voice), Stereo (ambient)
- Bitrate: 128kbps (standard), 192kbps (high)
- Normalization: -16 LUFS
- Peak Level: -1dB

### 2.3 HTML5 Audio Implementation
```html
<audio id="narrative-audio" controls>
  <source src="narrative.mp3" type="audio/mpeg">
  <source src="narrative.ogg" type="audio/ogg">
  Your browser does not support audio playback.
</audio>
```

## 3. VIDEO SPECIFICATIONS

### 3.1 Interactive Video Format
- Primary: H.264/MP4
- Resolution: 1920x1080 (1080p)
- Frame Rate: 30fps
- Codec: H.264 with AAC audio

### 3.2 Controls Replacement
- Custom HTML/CSS controls matching site design
- JavaScript event handling for interactivity
- Keyboard support (Space=play/pause, Arrow keys=seek)

### 3.3 Branching Implementation
```javascript
function handleVideoInteraction(time) {
  if (time > 30 && !userClicked) {
    showBranchOptions();
  }
}
```

## 4. 3D CONTENT SPECIFICATIONS

### 4.1 WebGL/Three.js
- Format: GLTF/GLB
- Max File Size: 10MB
- Textures: 2048x2048 max
- Animation: 30fps

### 4.2 YouTube Integration
- Video Resolution: 1080p minimum
- Privacy: Public or Unlisted
- Embed Responsive: Yes

### 4.3 Fallback Implementation
```html
<div id="3d-container">
  <div id="webgl-view">
    <script>load3DContent();</script>
  </div>
  <iframe id="youtube-fallback"
          src="youtube-embed-url"
          style="display:none">
  </iframe>
</div>
```

## 5. ANIMATION AND TRANSITIONS

### 5.1 CSS Transitions
- Duration: 300-500ms
- Easing: ease-in-out
- Trigger: hover, focus, page load

### 5.2 Keyframe Animations
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 6. EASTER EGG AUDIO

### 6.1 Hidden Audio Trigger
- Activation: Keyboard shortcut (Ctrl+Shift+O)
- Duration: 10-30 seconds
- Format: MP3, low bitrate (64kbps)

## 7. BROWSER COMPATIBILITY

| Feature | Chrome | Firefox | Edge |
|---------|--------|----------|------|
| WebP | 17+ | 65+ | 79+ |
| WebGL | 56+ | 51+ | 79+ |
| Picture element | 56+ | 51+ | 79+ |
| Audio/Video | All | All | All |

## 8. FEATURE DETECTION AND POLYFILLS

### 8.1 WebGL Detection
```javascript
function checkWebGL() {
  try {
    var canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl'));
  } catch(e) { return false; }
}
```

### 8.2 Fallback Chain
- Primary: WebGL 3D content
- Fallback 1: YouTube iframe
- Fallback 2: Static images

## 9. TECHNICAL SPECIFICATION SUMMARY (500 words)

This document specifies technical requirements for media elements in the Oman Celebrities interactive web application. All specifications balance quality, performance, and cross-browser compatibility.

Still Images: WebP format with JPEG fallback provides optimal compression while maintaining broad support. Resolution variants address art direction for different viewport sizes, while pixel density support (1x, 2x, 3x) ensures crisp rendering across device pixel ratios. The picture element enables responsive image delivery without JavaScript dependency.

Audio: Multi-format approach (MP3, OGG, AAC) ensures universal browser support without plugins. The 128kbps bitrate balances quality with file size, achieving transparency for voice content while keeping downloads manageable. HTML5 native audio elements provide consistent experience without custom player dependencies.

Video: Interactive video requires custom controls replacing browser defaults for design consistency. Branching logic uses JavaScript event listeners at specific timestamps to trigger user choices. YouTube integration provides reliable fallback with broader device support, especially mobile.

3D Content: Three.js with WebGL renders interactive 3D elements directly in browsers supporting hardware acceleration. The GLTF format offers compact file sizes with broad tool support. YouTube iframe fallback ensures functionality on older devices. Feature detection at page load determines which delivery method serves users.

Animation: CSS transitions and keyframe animations use standard properties with vendor prefixes removed for modern browser targets. Hover triggers on interactive elements engage users without disrupting content consumption.

Easter Egg: Hidden audio playback via keyboard shortcut provides enhanced discovery for engaged users without impacting mainstream experience. The brief duration and low bitrate minimize performance impact when activated.

Browser Compatibility: Chrome, Firefox, and Edge receive targeted support as specified. Feature detection ensures appropriate content delivery based on actual capability rather than user-agent assumptions. Polyfills extend functionality gracefully where native support is absent.

Load Performance: Targets of under 5 seconds for 3D content and under 500KB for individual images guide optimization decisions. These thresholds reflect typical connection speeds and user attention spans for web media.