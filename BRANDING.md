# 🎨 Branding & Design Guide - Les Gardiens du Lys

## Alliance Identity

### Official Name & Tag
- **Full Name**: Les Gardiens du Lys
- **Alliance Tag**: **GDL** (always uppercase)
- **French**: Gardiens du Lys
- **English**: Guardians of the Lily

---

## 🎖️ Color Palette

### Primary Colors
```
Primary Purple:        #9d4edd (RGB: 157, 78, 221)
Secondary Purple:      #c77dff (RGB: 199, 125, 255)
Accent Light Purple:   #e0aaff (RGB: 224, 170, 255)
Very Light Purple:     #e8e8f5 (RGB: 232, 232, 245)
```

### Background Colors
```
Dark Blue (Main):      #0a0e27 (RGB: 10, 14, 39)
Darker Blue:           #05070f (RGB: 5, 7, 15)
Black Onyx:            #1a1a1a (RGB: 26, 26, 26)
```

### Text Colors
```
Primary Text:          #d4d4f5 (Purple-Gray)
Light Text:            #e8e8f5 (Almost White)
Muted Text:            #a0a0c5 (Muted Purple-Gray)
```

### Usage Rules
- Use `#9d4edd` for primary CTA buttons and important elements
- Use `#c77dff` for secondary highlights and hover states
- Use `#e0aaff` for subtle accents and glows
- Always maintain contrast ratio > 4.5:1 for accessibility

---

## 🔤 Typography

### Font Families

#### Headers & Titles
- **Font**: StarCraft
- **Fallback**: Orbitron (Google Fonts)
- **Use**: All major headings, titles, section subtitles
- **Case**: UPPERCASE with letter-spacing
- **Color**: `#c77dff` (Secondary Purple)

#### Body & Menu Text
- **Font**: Black Ops One (Google Fonts)
- **Use**: Navigation, body text, labels, buttons
- **Weight**: Regular (400)
- **Color**: `#d4d4f5` (Purple-Gray)

### Font Sizes

| Element | Size | Usage |
|---------|------|-------|
| Page Title | 2.5rem | Main section headers |
| Section Subtitle | 1.8rem | Secondary headers |
| Card Title | 1.5rem | Card headers |
| Body Text | 1.1rem | Regular content |
| Small Text | 0.9rem | Metadata, captions |

---

## 🎯 Logo & Favicon

### Fleur-de-Lis Symbol (Favicon)

**File**: `favicon.svg`

**Design**:
- Traditional fleur-de-lis shape
- 3 petals (center, left, right)
- Stem with flourishes
- Crown accent at top

**Colors**:
- Fill: `#9d4edd`
- Stroke: `#c77dff` (0.5px)
- Background: `#0a0e27`

**Usage**:
- Website favicon
- PWA app icon
- Social media profile picture (1:1)
- Email signature
- Document headers

### Discord Icon

**File**: `assets/images/discord-icon.svg`

**Design**:
- Discord chat bubbles
- Adapted to GDL color scheme
- Coordinated with fleur-de-lis aesthetic

**Colors**:
- Icon: `#9d4edd`
- Highlight: `#c77dff`
- Background: `#0a0e27`

**Usage**:
- Contact page (30x30px)
- Social media links
- Footer Discord link

---

## 🎨 Visual Elements

### Cards & Components

#### Standard Card
```
Background: rgba(26, 26, 26, 0.7)
Border: 1px solid rgba(199, 125, 255, 0.3)
Border Radius: 8px
Padding: 2rem
Hover Border: #c77dff
Hover Shadow: 0 0 20px rgba(199, 125, 255, 0.2)
```

#### Featured Card
```
Border: 2px solid #9d4edd
Background: rgba(157, 78, 221, 0.1)
Hover Shadow: 0 0 30px rgba(157, 78, 221, 0.3)
```

#### GDL Tag Badge
```
Background: linear-gradient(135deg, #9d4edd, #c77dff)
Padding: 0.5rem 1.5rem
Border-Radius: 20px
Text: WHITE, UPPERCASE, bold
Box Shadow: 0 4px 15px rgba(157, 78, 221, 0.3)
```

### Buttons

#### Primary Button
```
Background: linear-gradient(135deg, #9d4edd, #c77dff)
Color: White
Padding: 0.8rem 2rem
Border-Radius: 4px
Box Shadow: 0 4px 15px rgba(157, 78, 221, 0.3)
Hover Transform: translateY(-2px)
Hover Shadow: 0 6px 20px rgba(157, 78, 221, 0.5)
```

#### Secondary Button
```
Background: transparent
Border: 2px solid #c77dff
Color: #c77dff
Hover Background: rgba(199, 125, 255, 0.1)
```

---

## 🎬 Media Assets

### Background Image (bg.jpg)
- **Location**: `assets/images/bg.jpg`
- **Recommended Size**: 1920x1080px (16:9 aspect ratio)
- **Opacity on Site**: Full
- **Overlay**: opacity.jpg at 0.325 opacity
- **Mood**: Space-themed, dark, with purple/blue tones

### Opacity Overlay (opacity.jpg)
- **Location**: `assets/images/opacity.jpg`
- **Recommended Size**: 200x200px (will tile)
- **Opacity on Site**: 0.325
- **Style**: Subtle texture or star pattern
- **Purpose**: Add visual depth to background

### Navbar Video (moon.mp4)
- **Location**: `assets/videos/moon.mp4`
- **Duration**: 5-15 seconds (loopable)
- **Resolution**: 1920x1080px or less
- **Format**: H.264 MP4
- **Opacity on Site**: 0.65
- **Background**: Black onyx (#1a1a1a)
- **Content**: Space/moon theme

---

## 📏 Spacing & Layout

### Padding Standards
```
Container Padding:     2rem (32px)
Section Margin:        3rem (48px)
Element Gap:           2rem (32px)
Card Padding:          2rem (32px)
Form Group Margin:     1.5rem (24px)
```

### Breakpoints
```
Desktop:               1920px+
Tablet:                768px - 1399px
Mobile:                480px - 767px
Small Mobile:          320px - 479px
```

---

## ✨ Effects & Animations

### Transitions
```
Default Duration:      0.3s (--transition-smooth)
Easing:                ease-in-out
Properties:            color, border-color, box-shadow, transform
```

### Glows & Shadows
```
Text Glow:             0 0 10px rgba(199, 125, 255, 0.5)
Box Shadow:            0 0 20px rgba(199, 125, 255, 0.2)
Heavy Shadow:          0 0 30px rgba(157, 78, 221, 0.3)
```

### Animations
```
Fade In:               Opacity 0→1, Transform Y: 10px→0
Pulse:                 Opacity oscillates 1↔0.7
Slide In:              Opacity 0→1, Transform X: -20px→0
Hover Lift:            Transform: translateY(-2px)
```

---

## 🖼️ Page-Specific Design

### Home Page
- **Hero Section**: GDL tag badge, title with glow, twin CTAs
- **Welcome Card**: Large, featured style with alliance intro
- **Features Grid**: 6 equal cards in responsive grid
- **Statistics**: Large numbers with card backgrounds
- **CTA**: Prominent button to action

### About Page
- **Title**: Large, centered with glow effect
- **Values Cards**: Individual cards for each value
- **Strategic Plan**: Color-coded sections (Short/Mid/Long term)
- **Focus Pillars**: Featured cards with gradient backgrounds
- **Timeline**: Vertical line with milestone entries
- **Vision**: Large featured card at bottom

### Contact Page
- **Cards Grid**: Email, Discord, OGame in 3-column grid
- **Form**: Full-width within featured card
- **FAQ**: 6 individual collapsible or separate cards
- **Process**: 4-step visual flow
- **CTA**: Final call-to-action card

---

## 📱 Responsive Adaptations

### Tablet (768px)
- Font sizes reduced by ~15%
- Padding reduced to 1rem (16px)
- Cards in 2-column layout
- Menu items condensed

### Mobile (480px)
- Font sizes reduced by ~25%
- Full-width cards (1 column)
- Navbar in stack layout
- Touch-friendly button sizes (min 44x44px)

### Small Mobile (320px)
- Minimal padding (0.8rem)
- Font sizes reduced by ~35%
- Hamburger menu consideration
- Simplified forms

---

## 🎯 Brand Voice & Tone

### Writing Style
- **Tone**: Professional yet inviting, strategic yet fun
- **Language**: French (with English fallback for code)
- **Voice**: Command-like for headers, welcoming for body

### Emoji Usage
- Use strategically for visual breaks
- Each section should have 1-2 related emojis
- Avoid emoji spam in body text
- Examples: ⚔️, 🎖️, 🌟, 🎯, 🏆, 🚀

---

## ♿ Accessibility Standards

### Color Contrast
- Text: Minimum 4.5:1 ratio (WCAG AA)
- Large text: Minimum 3:1 ratio
- Visual elements: Test with ColorContrast tools

### Interactive Elements
- Minimum 44x44px touch target size
- Keyboard navigation support
- Focus indicators visible
- ARIA labels where needed

### Motion
- Respect `prefers-reduced-motion` setting
- No auto-playing videos with sound
- Animations optional, not essential

---

## 🌐 Web Standards

### Performance Targets
- Page Load: < 2 seconds
- Lighthouse Score: > 90
- Mobile Performance: > 85
- Accessibility: > 95

### SEO Optimization
- Meta descriptions for each page
- Open Graph tags with proper formatting
- Schema markup for organization
- Sitemap.xml and robots.txt

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📋 Design Checklist

Before launching:
- [ ] All colors match the palette
- [ ] Fonts are properly imported
- [ ] Buttons have hover/active states
- [ ] Cards have proper shadows and borders
- [ ] Forms have proper focus states
- [ ] Mobile layout is responsive
- [ ] Touch targets are 44x44px minimum
- [ ] Contrast ratios are WCAG AA compliant
- [ ] Animations are smooth and purposeful
- [ ] No broken links or 404 images
- [ ] Metadata is complete
- [ ] PWA manifest is valid
- [ ] Service Worker caching works
- [ ] Page load time is acceptable

---

## 🔗 File Structure Reference

```
assets/
├── images/
│   ├── favicon.svg              # Fleur-de-lis logo
│   ├── discord-icon.svg         # Discord link icon
│   ├── bg.jpg                   # Main background (user-provided)
│   └── opacity.jpg              # Overlay texture (user-provided)
├── styles/
│   ├── main.css                 # All colors, components, animations
│   └── responsive.css           # All media queries
├── scripts/
│   └── app.js                   # Navigation and interactions
├── videos/
│   └── moon.mp4                 # Navbar background (user-provided)
└── fonts/
    └── starcraft.css            # Font configuration
```

---

## 🎓 Further Reading

- W3C Web Content Accessibility Guidelines (WCAG 2.1)
- Material Design Color System
- Accessibility for Web Design (A Book Apart)
- The Principles of Beautiful Web Design

---

**Design created for Les Gardiens du Lys (GDL)**
*Alliance Tag: GDL | Established 2024*
