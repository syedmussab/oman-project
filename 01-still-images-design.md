# STILL IMAGES DESIGN DOCUMENT
Oman Celebrities Media Project

## 1. PROJECT OVERVIEW
This project demonstrates still image manipulation skills for an interactive web application showcasing Omani celebrities. The images will be used in an interactive media-rich website.

## 2. SOURCE MATERIAL REQUIREMENTS

### 2.1 Original Photographs (Required)
- **Portrait Image**: High-resolution photo of an Omani celebrity (Sultan Qaboos or similar)
- **Scene/Building**: Historic Omani location (Sultan Qaboos Grand Mosque or Nizwa Fort)
- **Object Image**: Traditional Omani item (Khanjar dagger) with removable elements
- **Group Scene**: Cultural event with multiple subjects

### 2.2 Technical Specifications
- Format: JPEG/PNG
- Resolution: Minimum 2000x1500 pixels for editing
- Color Space: sRGB
- Bit Depth: 8-bit

## 3. EDITING EFFECTS AND TECHNIQUES

### 3.1 Element Removal
- Remove distracting background elements (power lines, signs)
- Use content-aware fill and clone stamp tools

### 3.2 Color Correction
- Highlight specific color (e.g., gold in traditional dress)
- Adjust white balance and saturation
- Selective color enhancement using adjustment layers

### 3.3 Filter Effects
- Filter 1: High-pass sharpening for detail enhancement
- Filter 2: Soft focus/glow for promotional use

### 3.4 Exposure Correction
- Shadow/highlight adjustment
- Noise reduction for low-light photos
- Sharpening for clarity

### 3.5 Portrait Enhancement
- Skin retouching (subtle)
- Contrast enhancement
- Subject isolation/background blur

### 3.6 Scene Enhancement
- HDR tone mapping
- Perspective correction
- Architectural straightening

## 4. RESPONSIVE IMAGE DELIVERY

### 4.1 Art Direction (picture element)
- Desktop: 1920x1080
- Tablet: 1024x768
- Smartphone: 480x320

### 4.2 Pixel Density
- Standard: 1x resolution
- Retina: 2x resolution
- High-DPI: 3x resolution

## 5. OUTPUT FILES

### 5.1 High Quality (Master)
- Format: PNG
- Resolution: Original
- Use: Printing/archival

### 5.2 Web Optimized
- Format: WebP with JPEG fallback
- Max-width: 1920px
- Quality: 85%
- File size target: <500KB

## 6. DESIGN RATIONALE (250 words required)

The image manipulation strategy for this Oman Celebrities project prioritizes both aesthetic excellence and functional performance. Each editing decision serves specific purposes aligned with the project's educational and cultural objectives.

Color correction and highlighting of traditional gold tones in Omani dress (the Khanjar belt, ceremonial jewelry) creates visual emphasis on cultural identity. This intentional design choice guides viewer attention to the rich heritage depicted in each image while maintaining authenticity.

The dual-filter approach addresses different viewing contexts: high-pass sharpening ensures architectural details of Omani forts remain crisp on large displays, while soft-focus effects create promotional imagery suitable for social sharing. This versatility maximizes the media assets' utility across platforms.

Responsive image delivery using the picture element addresses the diverse device landscape of web users. The art direction approach (cropping for different aspect ratios) ensures visual impact across desktop, tablet, and smartphone form factors. Pixel density variants (1x, 2x, 3x) prevent unnecessary bandwidth consumption on lower-resolution displays while preserving quality for high-DPI devices.

Element removal serves the professional presentation standard required for educational media, removing anachronistic or distracting elements that would detract from the core content. This editorial approach mirrors industry standards in documentary and educational media production.

The technical choices reflect careful consideration of compression quality versus file size, ensuring fast loading times without visible degradation. WebP with JPEG fallback provides broad browser compatibility while optimizing performance.