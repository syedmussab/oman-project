# AUDIO DESIGN DOCUMENT
Oman Celebrities Media Project

## 1. PROJECT OVERVIEW
This project demonstrates audio editing skills for an interactive web application showcasing Omani celebrities. The audio will provide an immersive auditory experience accompanying the visual media.

## 2. SOURCE MATERIAL REQUIREMENTS

### 2.1 Original Voice-Over Material
- Duration: 2-3 minutes
- Format: WAV (uncompressed)
- Sample Rate: 44.1kHz
- Bit Depth: 16-bit
- Recording Environment: Controlled studio or quiet location

### 2.2 Audio Characteristics
- Clear speech intelligibility
- Consistent volume levels
- Minimal background noise
- Proper pacing for narration

## 3. EDITING TECHNIQUES

### 3.1 Noise Reduction
- Remove background hiss
- Eliminate electrical hum (50/60Hz)
- Reduce room reverberation
- Clean clicks and pops

### 3.2 Audio Effects
- Dynamic range compression
- Equalization for clarity
- Reverb (subtle, for depth)
- Compression ratio: 3:1 to 4:1

### 3.3 Volume Matching
- Normalize to -16 LUFS (broadcast standard)
- Peak limiting at -1dB
- Consistent levels betweenSegments

## 4. OUTPUT FILES

### 4.1 Native HTML5 Audio Formats
- **MP3**: Primary format (broadest compatibility)
  - Bitrate: 128kbps (standard), 192kbps (high quality)
- **OGG Vorbis**: Firefox, Chrome support
  - Bitrate: 128kbps
- **AAC**: Safari, mobile browsers
  - Bitrate: 128kbps

### 4.2 Specifications for Web
- Sample Rate: 44100Hz
- Channels: Mono (voice), Stereo (ambient)
- Duration: 60-180 seconds for optimal engagement
- File size target: <5MB

## 5. DESIGN RATIONALE (250 words required)

The audio production strategy for Oman Celebrities prioritizes accessibility, performance, and cultural authenticity. The multi-format approach ensures playback across all major browsers and mobile devices without requiring plugins or additional software.

The extensive noise reduction processing addresses common recording artifacts that diminish professional presentation quality. Electrical hum removal (targeting 50Hz AC interference common in recording environments) and hiss reduction create clean audio tracks suitable for educational contexts where listener focus must remain on content rather than technical artifacts.

Volume normalization to broadcast standards (-16 LUFS) ensures consistent playback levels across different scenes and audio segments. This prevents jarring volume jumps that disrupt user experience and aligns with established best practices in digital media production.

The multi-format output strategy recognizes that no single audio codec achieves universal support. MP3 provides broadest legacy compatibility, OGG Vorbis serves open-source browser communities, and AAC delivers optimal quality on Apple platforms. This redundancy ensures the audio plays reliably regardless of user browser preference.

Dynamic range compression enhances intelligibility across varied listening environments - from quiet offices to more audible public settings. The subtle application (3:1 ratio) preserves natural dynamics while ensuring soft speech remains audible without aggressive pumping effects.

The duration optimization (60-180 seconds) balances engagement with attention span data from digital media research. Longer segments risk abandonment, while shorter segments fail to convey meaningful content about Omani culture and celebrity significance.

The technical specifications (44.1kHz sample rate, appropriate bitrates) balance audio fidelity with web performance requirements. These settings achieve near-CD quality while maintaining reasonable file sizes for web delivery.