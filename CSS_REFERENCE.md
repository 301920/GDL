# 🎨 CSS Components & Classes Reference

Complete reference guide to all available CSS classes in the website.

---

## Table of Contents
1. [Layout Classes](#layout-classes)
2. [Typography Classes](#typography-classes)
3. [Card & Component Classes](#card--component-classes)
4. [Button Classes](#button-classes)
5. [Form Classes](#form-classes)
6. [Utility Classes](#utility-classes)
7. [Animation Classes](#animation-classes)
8. [Responsive Design](#responsive-design)

---

## Layout Classes

### Container & Wrapper Classes

#### `.navbar-wrapper`
```css
/* Sticky navigation container */
position: sticky;
top: 0;
z-index: 100;
width: 100%;
background-color: var(--color-onyx);
box-shadow: 0 8px 32px rgba(157, 78, 221, 0.15);
```
**Usage**: Applied automatically to navbar element
**Contains**: Logo, navigation menu, brand

#### `.navbar`
```css
/* Navigation bar inner container */
display: flex;
justify-content: space-between;
align-items: center;
padding: 1.5rem 2rem;
max-width: 1400px;
margin: 0 auto;
```

#### `.content-wrapper`
```css
/* Main content container between navbar and footer */
position: relative;
z-index: 10;
min-height: calc(100vh - 300px);
max-width: 1400px;
margin: 0 auto;
padding: 3rem 2rem;
```

#### `.footer-wrapper`
```css
/* Footer container */
position: relative;
z-index: 10;
background-color: rgba(10, 14, 39, 0.95);
border-top: 1px solid rgba(199, 125, 255, 0.3);
margin-top: 4rem;
```

---

## Typography Classes

### Heading Classes

#### `.section-title`
```css
/* Main section heading */
font-family: var(--font-header);  /* StarCraft */
font-size: 2.5rem;
color: var(--color-secondary);     /* #c77dff */
margin-bottom: 1.5rem;
text-transform: uppercase;
letter-spacing: 2px;
text-shadow: 0 0 20px rgba(199, 125, 255, 0.3);
```
**Usage**: `<h1 class="section-title">Alliance Overview</h1>`
**Example**: "Plan Stratégique et Focus de l'Alliance"

#### `.section-subtitle`
```css
/* Secondary section heading */
font-family: var(--font-header);   /* StarCraft */
font-size: 1.8rem;
color: var(--color-primary);       /* #9d4edd */
margin: 2rem 0 1rem 0;
letter-spacing: 1px;
```
**Usage**: `<h2 class="section-subtitle">Short-term Goals</h2>`

#### `.card-title`
```css
/* Card header */
font-family: var(--font-header);
font-size: 1.5rem;
color: var(--color-secondary);
margin-bottom: 1rem;
```

### Text Classes

#### `.section-text`
```css
/* Body text paragraphs */
font-size: 1.1rem;
line-height: 1.8;
color: var(--color-text);          /* #d4d4f5 */
margin-bottom: 1rem;
```

#### `.card-text`
```css
/* Text inside cards */
color: var(--color-text);
line-height: 1.7;
```

#### `.highlight-text`
```css
/* Highlighted text */
color: #c77dff;
font-weight: bold;
```

#### `.glow`
```css
/* Text with glow effect */
text-shadow: 0 0 10px rgba(199, 125, 255, 0.5);
```

---

## Card & Component Classes

### Standard Cards

#### `.card`
```css
/* Base card component */
background: rgba(26, 26, 26, 0.7);
border: 1px solid rgba(199, 125, 255, 0.3);
border-radius: 8px;
padding: 2rem;
margin-bottom: 2rem;
transition: all 0.3s ease-in-out;
backdrop-filter: blur(10px);
```
**Hover Effect**:
- Border becomes `#c77dff`
- Box shadow: `0 0 20px rgba(199, 125, 255, 0.2)`
- Transform: `translateY(-5px)`

**Usage**:
```html
<div class="card">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">Card content goes here...</p>
</div>
```

#### `.card.featured`
```css
/* Featured/highlighted card */
border: 2px solid #9d4edd;
background: rgba(157, 78, 221, 0.1);
```
**Hover Effect**: `box-shadow: 0 0 30px rgba(157, 78, 221, 0.3)`

**Usage**: Use for important content like hero sections or calls-to-action
```html
<div class="card featured">
    <h3 class="card-title">Join GDL</h3>
    <p>Become part of our elite alliance...</p>
</div>
```

#### `.gdl-tag`
```css
/* GDL Alliance tag badge */
display: inline-block;
background: linear-gradient(135deg, #9d4edd, #c77dff);
color: white;
padding: 0.5rem 1.5rem;
border-radius: 20px;
font-size: 0.9rem;
font-weight: bold;
letter-spacing: 2px;
text-transform: uppercase;
box-shadow: 0 4px 15px rgba(157, 78, 221, 0.3);
```
**Hover Effect**:
- Scale: `1.05`
- Box shadow: `0 6px 20px rgba(157, 78, 221, 0.5)`

**Usage**:
```html
<span class="gdl-tag">🎖️ Tag: GDL</span>
```

#### `.alliance-badge`
```css
/* Alliance information badge */
display: inline-block;
background: rgba(157, 78, 221, 0.15);
border-left: 3px solid #9d4edd;
padding: 1rem;
border-radius: 4px;
margin: 1rem 0;
font-style: italic;
```

#### `.focus-card`
```css
/* Strategic focus cards */
background: linear-gradient(135deg, rgba(157, 78, 221, 0.1), rgba(199, 125, 255, 0.05));
border-left: 5px solid #9d4edd;
padding: 1.5rem;
border-radius: 4px;
margin: 1rem 0;
```

### Team Components

#### `.team-member`
```css
/* Individual team member card */
text-align: center;
padding: 1.5rem;
border-radius: 8px;
background: rgba(26, 26, 26, 0.5);
border: 1px solid rgba(199, 125, 255, 0.3);
transition: all 0.3s ease-in-out;
```
**Hover Effect**:
- Transform: `translateY(-5px)`
- Border: `var(--color-secondary)`
- Box shadow: `0 0 20px rgba(199, 125, 255, 0.2)`

#### `.team-member-name`
```css
/* Member's name */
font-family: var(--font-header);
font-size: 1.3rem;
color: var(--color-secondary);
margin-bottom: 0.5rem;
```

#### `.team-member-role`
```css
/* Member's role/title */
color: var(--color-primary);
font-size: 0.9rem;
text-transform: uppercase;
letter-spacing: 1px;
margin-bottom: 0.5rem;
```

---

## Button Classes

### Primary Button

#### `.btn`
```css
/* Standard button */
display: inline-block;
padding: 0.8rem 2rem;
background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
color: var(--color-text-light);
text-decoration: none;
text-transform: uppercase;
font-family: var(--font-body);
font-size: 0.95rem;
letter-spacing: 1px;
border: none;
border-radius: 4px;
cursor: pointer;
transition: all 0.3s ease-in-out;
box-shadow: 0 4px 15px rgba(157, 78, 221, 0.3);
```
**Hover Effect**:
- Transform: `translateY(-2px)`
- Box shadow: `0 6px 20px rgba(157, 78, 221, 0.5)`

**Active State**: `transform: translateY(0)`

**Usage**:
```html
<a href="#" class="btn">Join Alliance</a>
<!-- or -->
<button class="btn">Submit Form</button>
```

### Secondary Button

#### `.btn-secondary`
```css
/* Alternative button style */
background: transparent;
border: 2px solid var(--color-secondary);
color: var(--color-secondary);
box-shadow: none;
```
**Hover Effect**:
- Background: `rgba(199, 125, 255, 0.1)`
- Box shadow: `0 0 15px rgba(199, 125, 255, 0.3)`

**Usage**:
```html
<a href="#" class="btn btn-secondary">Learn More</a>
```

### Discord Button

#### `.discord-link`
```css
/* Discord integration button */
display: inline-flex;
align-items: center;
gap: 0.5rem;
padding: 0.8rem 1.5rem;
background: linear-gradient(135deg, #5865F2, #7289DA);
color: white;
text-decoration: none;
border-radius: 4px;
transition: all 0.3s ease-in-out;
font-weight: bold;
```
**Hover Effect**:
- Transform: `translateY(-2px)`
- Box shadow: `0 6px 20px rgba(88, 101, 242, 0.4)`

**Usage**:
```html
<a href="https://discord.gg/ctPkEjKVQ5" class="discord-link" target="_blank">
    <img src="assets/images/discord-icon.svg" alt="Discord">
    Join Discord
</a>
```

---

## Form Classes

### Form Groups

#### `.form-group`
```css
/* Wrapper for form controls */
margin-bottom: 1.5rem;
```

#### `.form-group label`
```css
/* Form labels */
display: block;
margin-bottom: 0.5rem;
font-family: var(--font-body);
font-size: 1rem;
color: var(--color-secondary);
text-transform: uppercase;
```

#### `.form-group input`
#### `.form-group textarea`
#### `.form-group select`
```css
/* Form input elements */
width: 100%;
padding: 0.8rem 1rem;
background: rgba(26, 26, 26, 0.7);
border: 1px solid rgba(199, 125, 255, 0.3);
border-radius: 4px;
color: var(--color-text);
font-family: var(--font-body);
font-size: 1rem;
transition: all 0.3s ease-in-out;
```
**Focus State**:
- Border: `#9d4edd`
- Box shadow: `0 0 10px rgba(157, 78, 221, 0.3)`

#### `.form-group input[type="submit"]`
```css
/* Submit button in form */
background: linear-gradient(135deg, #9d4edd, #c77dff);
color: white;
cursor: pointer;
text-transform: uppercase;
font-weight: bold;
```

---

## Utility Classes

### Display & Visibility

#### `.hidden`
```css
display: none !important;
```

#### `.page-content`
```css
animation: fadeIn 0.5s ease-in-out;
```

### Color & Styling

#### `.accent-underline`
```css
/* Underlined text accent */
border-bottom: 2px solid #9d4edd;
padding-bottom: 0.2rem;
```

### Responsive Grid

#### `.grid`
```css
/* (Example - define as needed) */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2rem;
```

---

## Animation Classes

### Keyframe Animations

#### `fadeIn` (auto-applied to `.page-content`)
```css
from {
    opacity: 0;
    transform: translateY(10px);
}
to {
    opacity: 1;
    transform: translateY(0);
}
```
**Duration**: 0.5s
**Easing**: ease-in-out

#### `slideIn`
```css
from {
    opacity: 0;
    transform: translateX(-20px);
}
to {
    opacity: 1;
    transform: translateX(0);
}
```
**Usage**: `.slide-in` class

#### `pulse`
```css
0%, 100% {
    opacity: 1;
}
50% {
    opacity: 0.7;
}
```
**Duration**: 2s infinite
**Usage**: `.pulse` class

### Animation Classes to Apply

#### `.pulse`
```css
animation: pulse 2s ease-in-out infinite;
```
**Usage**: For elements that should gently pulse
```html
<span class="pulse">New Feature</span>
```

#### `.slide-in`
```css
animation: slideIn 0.5s ease-out;
```
**Usage**: For elements that slide in from the left
```html
<div class="slide-in card">...</div>
```

---

## Responsive Design

### Mobile-First Approach

All base styles are mobile-first. Media queries add desktop enhancements.

### Breakpoints

```css
/* Mobile: 320px - 479px (default) */
/* Tablet: 480px - 767px */
/* Desktop: 768px - 1919px */
/* Large Desktop: 1920px+ */
```

### Responsive Grid Example

```html
<!-- Automatically 1 col on mobile, 2 on tablet, 3 on desktop -->
<div class="footer">
    <div class="footer-section">...</div>
    <div class="footer-section">...</div>
    <div class="footer-section">...</div>
</div>
```

CSS:
```css
.footer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```

---

## Color Variables Reference

### CSS Variables (defined in `:root`)

```css
--color-primary:        #9d4edd    /* Main purple */
--color-secondary:      #c77dff    /* Light purple */
--color-accent:         #e0aaff    /* Very light purple */
--color-text-light:     #e8e8f5    /* Almost white text */
--color-text:           #d4d4f5    /* Purple-gray text */
--color-text-muted:     #a0a0c5    /* Muted text */
--color-bg-dark:        #0a0e27    /* Dark blue background */
--color-onyx:           #1a1a1a    /* Black onyx */
--font-header:          'StarCraft', 'Orbitron', sans-serif
--font-body:            'Black Ops One', sans-serif
--transition-smooth:    0.3s ease-in-out
```

### Using Color Variables

```html
<!-- Apply purple color to text -->
<p style="color: var(--color-secondary);">Light purple text</p>

<!-- Use in CSS -->
<style>
.my-element {
    border: 2px solid var(--color-primary);
    color: var(--color-text);
}
</style>
```

---

## Common Patterns

### Featured Card with Badge
```html
<div class="card featured">
    <span class="gdl-tag">🎖️ Featured</span>
    <h3 class="card-title">Alliance Announcement</h3>
    <p class="card-text">Important news...</p>
    <a href="#" class="btn">Learn More</a>
</div>
```

### Team Member Grid
```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
    <div class="team-member">
        <h4 class="team-member-name">Commander</h4>
        <p class="team-member-role">Leader</p>
        <p class="card-text">Bio...</p>
    </div>
</div>
```

### Strategic Focus Section
```html
<div class="focus-card">
    <strong>Short-term Goals (0-6 months)</strong>
    <p>Build to 8+ universes with 300+ members...</p>
</div>
```

### Form with Validation
```html
<form onsubmit="submitContactForm(event)">
    <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" name="name" required>
    </div>
    <button type="submit" class="btn">Submit</button>
</form>
```

---

## Tips & Best Practices

1. **Always use CSS variables** for colors (not hardcoded hex)
   ✅ `color: var(--color-secondary)`
   ❌ `color: #c77dff`

2. **Combine classes** for flexibility
   ✅ `<div class="card featured"></div>`
   ❌ Create separate `.card` and `.featured-card`

3. **Use semantic HTML** with classes
   ✅ `<button class="btn">Click</button>`
   ❌ `<div class="btn">Click</div>`

4. **Mobile-first styling**
   ✅ Base styles for mobile, media queries for larger screens
   ❌ Desktop-first with media queries down

5. **Maintain contrast ratios**
   ✅ Verify WCAG AA compliance (4.5:1 minimum)
   ❌ Low contrast text on dark backgrounds

6. **Use backdrop-filter carefully**
   ✅ Modern browsers support blur effects
   ❌ May not work on older browsers

7. **Optimize animations**
   ✅ Use `transform` and `opacity` (GPU accelerated)
   ❌ Animate `width`, `height`, `left`, `top` (CPU intensive)

---

## Quick Reference

| Class | Purpose | Example |
|-------|---------|---------|
| `.card` | Content box | Feature cards, value cards |
| `.card.featured` | Important card | Hero section, CTAs |
| `.gdl-tag` | Alliance badge | Tag display |
| `.btn` | Primary action | "Join", "Submit" |
| `.btn-secondary` | Alternative action | "Learn More" |
| `.section-title` | Main heading | Page titles |
| `.section-subtitle` | Sub heading | Section headers |
| `.team-member` | Person profile | Team grid |
| `.focus-card` | Info highlight | Strategic plans |
| `.pulse` | Animation | Attention drawing |

---

**Reference Version**: 1.0
**Created**: 2024
**For**: Les Gardiens du Lys (GDL) Website

Last updated with enhanced CSS components and animations.
