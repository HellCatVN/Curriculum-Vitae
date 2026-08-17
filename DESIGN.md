# Design Language — Long CV / 2026

## Concept

**Engineering in motion.** The portfolio should feel like an active software system rather than a document: orbital geometry, scan lines, data labels, grid rhythm, deep space, bright status colors and smooth movement.

## Visual system

- Base: near-black `#07080D`
- Primary accent: mint `#77F3D0`
- Secondary accent: sky `#6DC6FF`
- Tertiary accent: violet `#9A8CFF`
- Display: Space Grotesk
- Body: Manrope
- Technical labels: DM Mono
- Borders: white at 8–12% opacity
- Cards: translucent, never opaque white

## Motion

- Hero camera follows pointer subtly.
- Three.js core rotates continuously at very low speed.
- Content reveals use opacity + Y translation + short blur.
- Profile card uses pointer tilt with springs.
- Smooth scrolling is disabled when the user requests reduced motion.
- Motion should communicate depth; avoid decorative bouncing.

## Layout

- Desktop max-width: ~1320px
- Hero: asymmetric 60/40 split
- Text sizes are intentionally large and editorial.
- Experience is a vertical log, not a conventional centered timeline.
- Mobile converts every major section to one column and removes nonessential side labels.
