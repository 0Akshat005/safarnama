# Mobile Responsiveness (STRICT REQUIREMENT)

This project MUST NOT use desktop scaling on mobile. Mobile is NOT a resized desktop layout. Every section must be redesigned specifically for mobile while preserving the premium cinematic experience.

## Primary Goal

The website should feel like it was designed mobile-first by an award-winning UI/UX team.

Every section must have:

- Excellent readability
- Comfortable touch interactions
- Proper spacing
- Clear visual hierarchy
- Smooth scrolling
- Zero horizontal scrolling
- Zero overlapping elements
- Zero clipped content
- Zero broken layouts

The experience should feel native on modern smartphones.

---

# Breakpoints

Design independently for:

Desktop
≥1280px

Laptop
1024–1279px

Tablet
768–1023px

Mobile
320–767px

Do NOT simply scale elements.

Every breakpoint should have its own optimized layout.

---

# Mobile Design Philosophy

Mobile users scroll vertically.

Prioritize:

Content
↓

Imagery
↓

Interactions

Avoid trying to fit desktop compositions into a narrow screen.

---

# Section Adaptation Rules

Each section must be redesigned individually.

Never simply stack desktop components.

Re-evaluate:

- hierarchy
- spacing
- typography
- image placement
- interaction
- animations

Every section should feel intentionally designed for mobile.

---

# Typography

Typography must scale fluidly.

Desktop headings should NEVER appear oversized on mobile.

Maintain comfortable reading.

Recommended hierarchy:

Hero Heading
34–42px

Section Heading
26–32px

Subheading
18–22px

Body
16–18px

Small text
14–15px

Line height should increase slightly on mobile.

Never allow long lines.

---

# Spacing

Use generous whitespace.

Recommended spacing:

Section padding

72–96px vertical

24px horizontal

Card spacing

16–24px

Content spacing

12–24px

Buttons

Minimum height

52px

---

# Images

Images should become immersive.

Avoid fixed image cards where unnecessary.

Use:

- edge-to-edge images
- fading gradients
- masked images
- overlapping compositions
- soft transitions

Images should never overflow.

Never stretch images.

Maintain aspect ratio.

Lazy-load large images.

---

# Layout Adaptation

Desktop:

2-column layouts

↓

Tablet:

60/40 or stacked

↓

Mobile:

Single-column layout

Content first.

Image second.

Never squeeze columns together.

---

# Cards

Cards should become full width.

Maintain equal padding.

Equal border radius.

Equal height where appropriate.

Never create tiny cards.

Use horizontal scrolling ONLY where it improves UX.

---

# Horizontal Scroll

Allowed ONLY for:

- destination cards
- testimonials
- gallery
- packages

Must include:

- touch dragging
- snap scrolling
- hidden scrollbar
- proper spacing

Never use horizontal scrolling for text content.

---

# Buttons

Buttons must remain easily tappable.

Minimum:

52px height

20px horizontal padding

16px font

Clear tap feedback

Maintain consistent sizing.

---

# Navigation

Desktop navigation should transform into a proper mobile menu.

Requirements:

- animated drawer
- smooth open/close
- body scroll lock
- accessible touch targets
- active page indication

Do not simply shrink desktop navigation.

---

# Animations

Reduce animation intensity on mobile.

Avoid heavy GPU effects.

Animations should remain smooth at 60fps.

Avoid excessive blur.

Avoid large parallax effects.

Keep interactions lightweight.

---

# Performance

Optimize aggressively.

Images:

Responsive sizes

Modern formats

Lazy loading

Preload only hero assets.

Avoid unnecessary JavaScript.

Avoid layout shifts.

Target excellent Core Web Vitals.

---

# Accessibility

Maintain WCAG-compliant contrast.

Touch targets

Minimum 44×44px

Keyboard navigation

Visible focus states

Semantic HTML

Proper heading hierarchy

Accessible labels

---

# Content

Do not truncate meaningful content.

Avoid widows/orphans.

Maintain readable paragraph widths.

Keep CTA buttons visible without excessive scrolling.

---

# Visual Quality Checklist

Every mobile screen must feel:

✓ Premium

✓ Spacious

✓ Elegant

✓ Modern

✓ Cinematic

✓ Easy to scan

✓ Easy to tap

✓ Comfortable to read

✓ Fast

✓ Consistent

---

# QA Checklist (MANDATORY)

Before considering the implementation complete, verify every page manually at:

- 320px
- 360px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Confirm:

✓ No overflow

✓ No horizontal scroll

✓ No clipped images

✓ No broken grids

✓ No overlapping elements

✓ No inconsistent spacing

✓ No typography issues

✓ No stretched images

✓ No inaccessible buttons

✓ No animation glitches

✓ No layout shifts

✓ All sections preserve the same premium visual identity across every breakpoint.

Only consider the task complete after every page passes this checklist.