---
name: PrismRelay Canary
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#fff6ed'
  on-tertiary: '#412d00'
  tertiary-container: '#ffd58c'
  on-tertiary-container: '#7e5900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#ffdea8'
  tertiary-fixed-dim: '#ffba20'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4200'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-value:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1'
  caption:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  panel-padding: 24px
---

## Brand & Style

The design system is engineered for high-velocity engagement and immersion. The aesthetic is **Futuristic Cyberpunk**, leaning heavily into a high-performance console feel. It prioritizes rapid information processing and visceral feedback, making the user feel like they are operating a piece of advanced hardware.

The style utilizes **Glassmorphism** for data overlays and **Vibrant High-Contrast** elements to draw immediate attention to critical game states. Subtle grid textures and scanning line motifs are used in the background to reinforce the "Canary" testing/monitoring narrative. Every interaction should feel instantaneous, sharp, and electrically charged.

## Colors

The palette is anchored in deep, "void-space" neutrals to allow the neon accents to pop with maximum intensity.

- **Prism Cyan (#00F2FF):** The primary action color and state indicator. Used for progress, health, and primary navigation.
- **Relay Magenta (#FF00E5):** The secondary color, used for power-ups, alerts, and high-energy UI elements.
- **Charge Amber (#FFB800):** The tertiary color, reserved for warnings, currency, and critical HUD notifications.
- **Obsidian (#0A0A0B):** The base canvas color.
- **Charcoal (#161618):** Used for elevated surfaces, containers, and secondary panel backgrounds.

Interactive elements should leverage "Glow States" where the hex color is paired with a matching drop-shadow to simulate light emission.

## Typography

Typography is a dual-force system. **Geist** provides a clean, ultra-modern sans-serif foundation for high-readability UI and general navigation. **JetBrains Mono** is the technical engine, used for all numerical data, scores, timers, and HUD labels to evoke a "system terminal" feel.

Large display headings should use tight tracking and heavy weights. Labels and captions often utilize uppercase styling with increased letter-spacing to maintain a military-grade, technical aesthetic. For mobile, display sizes are scaled down aggressively to ensure game metrics remain visible without obstructing the field of play.

## Layout & Spacing

This design system uses a **Fluid Grid** model with a hard 4px baseline rhythm. The layout is designed to feel like a "Cockpit," where essential data is anchored to the corners and edges, leaving the center clear for gameplay.

- **Desktop:** 12-column grid with 16px gutters. Outer margins are generous (32px) to frame the experience.
- **Mobile:** 4-column grid with 16px margins. Components reflow into vertical stacks or collapsible drawers.
- **Safe Areas:** Critical HUD elements (Health, Score, Energy) must maintain a 24px safe-zone from the edge of the viewport to prevent overlap with hardware notches or bezels.

## Elevation & Depth

Depth is established through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

1.  **Base (0):** The deep obsidian background.
2.  **Panels (1):** Charcoal surfaces with a 1px inner border (10% white) to define edges.
3.  **Overlays (2):** Frosted glass surfaces (20% opacity white) with a `backdrop-filter: blur(12px)`.
4.  **Floating Elements (3):** Interactive items feature a "Neon Stroke"—a 1px solid border using a primary brand color, accompanied by a 4px to 8px outer glow (box-shadow) of the same color.

Avoid opaque black backgrounds for modals; always use semi-transparent blurs to maintain a sense of environmental awareness in-game.

## Shapes

The shape language is strictly **Sharp (0)**. To maintain a high-performance, technical feel, all corners are 90 degrees. Avoid all rounding unless it is a circular status indicator (like a "Live" light).

To add visual interest without using rounds, use **45-degree chamfered corners** (clipped corners) on large panels and primary buttons. This "Stealth Fighter" geometry reinforces the futuristic, aggressive nature of the game.

## Components

- **Buttons:** Rectangular with a 1px solid 'Prism Cyan' border. On hover, the button fills with a cyan-to-transparent gradient and triggers a 10px outer glow. Text is always uppercase Geist SemiBold.
- **HUD Chips:** Small, monospaced JetBrains Mono labels wrapped in a translucent gray container with a left-accent border (2px wide) in the status color (Amber for warnings, Cyan for info).
- **Input Fields:** Deep charcoal background with a bottom-only 1px 'Prism Cyan' border. The cursor is a solid cyan block.
- **Cards/Panels:** Utilize a subtle scan-line pattern (linear-gradient overlay). Borders are thin and low-opacity, glowing only when the card is "Active" or "Selected."
- **Checkboxes:** Square boxes. When checked, they emit a small "crosshair" icon in Relay Magenta.
- **Progress Bars:** Segmented bars (e.g., 10-20 small blocks) rather than a continuous smooth line, creating a digitized, retro-tech look.