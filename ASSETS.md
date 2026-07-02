# 🎨 Graphics & Assets Guide

Complete guide to all graphical assets for the "Les Gardiens du Lys" website.

---

## 📊 Asset Inventory

### ✅ Already Created (SVG)

#### 1. Favicon (Fleur-de-Lis)
- **File**: `favicon.svg`
- **Type**: SVG (scalable, no quality loss)
- **Size**: 100x100 viewBox (scales to any size)
- **Colors**: Purple gradient (#9d4edd to #c77dff)
- **Usage**:
  - Browser tab icon (32x32)
  - PWA app icon (192x512)
  - Apple touch icon (180x180)
  - Social media avatars (1:1)

#### 2. Discord Icon
- **File**: `assets/images/discord-icon.svg`
- **Type**: SVG (scalable)
- **Size**: 100x100 viewBox
- **Colors**: Purple (#9d4edd) with light highlights
- **Usage**:
  - Contact page icon (30x30)
  - Discord link in navbar (24x24)
  - Footer social icon (20x20)

---

## ⚠️ Must Add (User-Provided)

### 1. Main Background Image
```
File: assets/images/bg.jpg
Type: JPG (compressed)
Size: 1920x1080px (16:9 aspect ratio)
Quality: High (85-95 JPEG quality)
Purpose: Main page background, visible behind all content

Characteristics:
- Space/cosmic theme preferred
- Dark tones (blacks, dark blues, purples)
- Some texture or detail to avoid plainness
- Optimized for web (< 500KB)

Recommended sources:
- Unsplash: space, galaxy, cosmic
- Pexels: space, planets, stars
- Pixabay: universe, cosmic, night sky

Optimization:
- Resize to 1920x1080
- Reduce colors slightly
- Save as progressive JPEG
- Aim for < 300KB file size
```

### 2. Opacity Overlay
```
File: assets/images/opacity.jpg
Type: JPG (compressed)
Size: 200x200px (will tile/repeat)
Quality: Medium (70-80 JPEG quality)
Purpose: Texture overlay on top of bg.jpg

Characteristics:
- Subtle pattern or texture
- Semi-transparent friendly
- Stars, dots, noise, or simple pattern
- Light to medium tones

Options:
A) Star pattern
   - Small white dots on dark background
   - Random spacing

B) Subtle noise
   - Film grain effect
   - Adds dimension

C) Wave pattern
   - Soft ripples
   - Subtle directional flow

D) Grid/circuit pattern
   - Tech-inspired
   - Very subtle opacity

Recommended size: 200x200px
Will repeat seamlessly across page
```

### 3. Navbar Background Video
```
File: assets/videos/moon.mp4
Type: MP4 (H.264 codec)
Duration: 5-15 seconds (loopable)
Resolution: 1920x1080px or lower (will be cropped)
Frame Rate: 24-30 fps
Bitrate: 2-5 Mbps
File Size: 5-20 MB expected

Purpose:
- Background video in navbar
- Plays on loop
- Set at 0.65 opacity
- Creates dynamic effect with black onyx background

Content Ideas:
- Moon rising/moving
- Stars twinkling
- Space particles moving
- Galaxy rotation
- Aurora borealis
- Cosmic nebula
- Space exploration theme

Creating from scratch:
1. Option A: Use Blender (free 3D software)
2. Option B: Screen record from space simulator
3. Option C: Compile stock footage clips

Finding stock video:
- Pexels Videos (pexels.com/videos)
- Pixabay Videos (pixabay.com/videos)
- Unsplash Videos (videos.unsplash.com)
- Search: "space", "moon", "stars", "cosmic"

Conversion:
ffmpeg -i input.mov -c:v libx264 -preset medium -crf 23 moon.mp4
```

---

## 🛠️ Asset Creation Guide

### For Web Designers

#### Background Image (bg.jpg)
```
Tool: Photoshop, GIMP, or Online Editor
1. Create 1920x1080px canvas
2. Fill with space theme (gradient or image)
3. Add depth with layers (stars, nebula, planets)
4. Ensure dark colors (RGB values < 100 in most areas)
5. Flatten layers
6. Export as JPG at 85-90% quality
7. Save to: assets/images/bg.jpg
```

#### Opacity Overlay (opacity.jpg)
```
Tool: Photoshop, GIMP, Illustrator
1. Create 200x200px canvas
2. Add subtle pattern (Filters > Render > Clouds)
3. Reduce opacity to 50%
4. Add some noise (Filters > Noise > Add Noise)
5. Flatten
6. Export as JPG at 70-80% quality
7. Save to: assets/images/opacity.jpg
```

### For Video Creators

#### Moon Video (moon.mp4)
```
Tool: OBS Studio, Blender, or DaVinci Resolve

Option 1: Screen Recording (Easiest)
1. Open space simulation (Celestia, Stellarium)
2. Record 10-15 seconds of movement
3. Export as MP4
4. Save to: assets/videos/moon.mp4

Option 2: Video Editing
1. Download space clips from Pexels/Pixabay
2. Trim to 10-15 seconds
3. Add effects if desired (optional)
4. Export as MP4 (H.264, 24-30 fps)
5. Save to: assets/videos/moon.mp4

Option 3: Create from Scratch (Advanced)
1. Use Blender or After Effects
2. Create simple space scene
3. Animate camera or objects
4. Render 10-15 seconds
5. Export as MP4
6. Save to: assets/videos/moon.mp4
```

---

## 📐 Asset Specifications Summary

| Asset | Format | Size | Location | Notes |
|-------|--------|------|----------|-------|
| Favicon | SVG | 100x100 | favicon.svg | ✅ Already created |
| Discord Icon | SVG | 100x100 | assets/images/discord-icon.svg | ✅ Already created |
| Background | JPG | 1920x1080 | assets/images/bg.jpg | ⚠️ Must add |
| Opacity | JPG | 200x200 | assets/images/opacity.jpg | ⚠️ Must add |
| Video | MP4 | 1920x1080 | assets/videos/moon.mp4 | ⚠️ Must add |

---

## 🎯 Visual Integration

### How Assets Work Together

```
Layer 1 (Bottom):
  - bg.jpg (main background)

Layer 2 (Middle):
  - opacity.jpg tiled at 0.325 opacity
  - Creates texture effect

Layer 3 (Navbar):
  - moon.mp4 video at 0.65 opacity
  - Behind navbar text
  - Black onyx background (#1a1a1a)

Layer 4 (Content):
  - Text, cards, buttons (z-index: 10)
```

### Expected Visual Result
- **Overall**: Dark, cosmic theme with purple accents
- **Background**: Space-like with texture
- **Navbar**: Animated video with text overlay (text should be readable)
- **Text Color**: Purple-gray (#d4d4f5) on dark background
- **Buttons**: Purple gradient pop against background

---

## ⚙️ Technical Setup

### File Paths (MUST be exact)
```
Correct:
  assets/images/bg.jpg
  assets/images/opacity.jpg
  assets/videos/moon.mp4

NOT:
  assets/images/Background.jpg (uppercase B)
  assets/images/opacity.PNG (PNG instead of JPG)
  assets/video/moon.mp4 (missing 's' in 'videos')
```

### CSS Reference
```css
/* How assets are used in CSS */

.bg-layer {
    background-color: #0a0e27; /* fallback */
}

.bg-image {
    background-image: url('assets/images/bg.jpg');
    background-size: cover;
}

.bg-opacity {
    background-image: url('assets/images/opacity.jpg');
    opacity: 0.325; /* 32.5% transparency */
}

.navbar::before {
    background: url('assets/videos/moon.mp4');
    opacity: 0.65; /* 65% transparency */
}
```

---

## 💾 File Size Guidelines

For optimal web performance:

| Asset | Max Size | Typical | Compressed |
|-------|----------|---------|-----------|
| bg.jpg | 500KB | 200-300KB | 100-150KB (ImageOptim) |
| opacity.jpg | 50KB | 20-30KB | 10-15KB |
| moon.mp4 | 50MB | 5-20MB | 3-8MB (HandBrake) |

### How to Compress

**JPGs**:
```bash
# Using ImageMagick
convert bg.jpg -quality 85 -strip bg_optimized.jpg

# Online: tinypng.com, compressjpeg.com
```

**MP4 Videos**:
```bash
# Using FFmpeg
ffmpeg -i moon.mov -c:v libx264 -preset medium -crf 23 -c:a aac -b:a 128k moon.mp4

# GUI: HandBrake (free app)
# Online: cloudconvert.com
```

---

## 🎨 Free Resources

### Background Images
- **Unsplash**: unsplash.com (search: "space", "galaxy", "cosmic")
- **Pexels**: pexels.com (search: "space backgrounds")
- **Pixabay**: pixabay.com (search: "universe")
- **Adobe Stock**: Limited free images

### Textures & Overlays
- **Textures.com**: Free tier available
- **Subtle Patterns**: subtlepatterns.com
- **OpenGameArt.org**: Free textures

### Videos
- **Pexels Videos**: pexels.com/videos (search: "space", "moon")
- **Pixabay Videos**: pixabay.com/videos
- **Unsplash Videos**: videos.unsplash.com
- **YouTube**: Creative Commons videos

### Design Tools
- **Free**: GIMP, Inkscape, Krita, DaVinci Resolve
- **Freemium**: Canva, Pixlr, Photopea
- **Online**: photopea.com, pixlr.com, canva.com

---

## 📋 Asset Checklist

Before deployment:

General:
- [ ] All assets are in correct file paths
- [ ] File names match exactly (case-sensitive)
- [ ] File sizes are optimized for web
- [ ] No placeholder filenames remain

bg.jpg:
- [ ] Dimensions: 1920x1080 (or greater)
- [ ] Format: JPG (not PNG)
- [ ] Quality: 85-90%
- [ ] File size: < 300KB
- [ ] Colors: Dark with space theme
- [ ] Content: Appropriate for space alliance

opacity.jpg:
- [ ] Dimensions: 200x200 (or greater)
- [ ] Format: JPG (not PNG)
- [ ] Quality: 70-80%
- [ ] File size: < 20KB
- [ ] Pattern: Subtle and tileable
- [ ] Purpose: Clear overlay effect

moon.mp4:
- [ ] Duration: 5-15 seconds
- [ ] Format: MP4 with H.264 codec
- [ ] Resolution: 1920x1080 or less
- [ ] Frame rate: 24-30 fps
- [ ] File size: 3-20MB
- [ ] Loopable: No abrupt cuts at edges
- [ ] Content: Space/moon themed

Testing:
- [ ] Website loads without 404 errors
- [ ] Background displays correctly
- [ ] Navbar video plays smoothly
- [ ] Mobile view is responsive
- [ ] Performance is acceptable (< 2s load)

---

## 🚀 Deployment Checklist

1. **Prepare Assets**
   - [ ] Create/download bg.jpg
   - [ ] Create/download opacity.jpg
   - [ ] Create/download moon.mp4

2. **Optimize**
   - [ ] Compress images (< 300KB and 20KB)
   - [ ] Compress video (3-20MB)
   - [ ] Test on slow internet (throttling)

3. **Place Files**
   - [ ] bg.jpg → assets/images/
   - [ ] opacity.jpg → assets/images/
   - [ ] moon.mp4 → assets/videos/

4. **Test Locally**
   - [ ] Run: `python -m http.server 8000`
   - [ ] Open: http://localhost:8000
   - [ ] Verify all assets display
   - [ ] Check mobile view
   - [ ] Test DevTools (Network tab)

5. **Deploy**
   - [ ] Commit files: `git add assets/`
   - [ ] Push to GitHub: `git push origin main`
   - [ ] Check GitHub Pages deployment
   - [ ] Verify live site looks correct

---

## 📞 Troubleshooting

### Images Not Showing
```
Problem: Gray boxes instead of images
Solution:
1. Check file path in browser DevTools (F12)
2. Verify file exists: assets/images/bg.jpg
3. Check spelling and capitalization (case-sensitive)
4. Ensure files are committed to Git
```

### Video Not Playing
```
Problem: Navbar background is black, no video
Solution:
1. Check file format (must be MP4)
2. Verify video codec (H.264)
3. Check file size (not too large)
4. Try different browser
5. Check browser console for errors (F12)
```

### Slow Loading
```
Problem: Website takes > 2 seconds to load
Solution:
1. Compress images more (use TinyPNG)
2. Reduce video quality/bitrate
3. Use CloudFlare CDN
4. Enable browser caching
```

---

## 📚 References

- Web Accessibility: [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- Image Optimization: [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights)
- Video Formats: [MDN Media Types](https://developer.mozilla.org/en-US/docs/Web/Media/Formats)
- FFmpeg Docs: [ffmpeg.org](https://ffmpeg.org/documentation.html)

---

**Next Steps**:
1. Gather/create the 3 required assets
2. Optimize file sizes
3. Place in correct directories
4. Test locally
5. Deploy to GitHub Pages

**All resources and guides are ready!** 🚀
