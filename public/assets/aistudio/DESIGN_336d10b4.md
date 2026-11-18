---
name: Synthetix Bio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3f4850'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#00677d'
  on-secondary: '#ffffff'
  secondary-container: '#63dbfe'
  on-secondary-container: '#005e73'
  tertiary: '#545c72'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c748b'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#b3ebff'
  secondary-fixed-dim: '#5cd5f8'
  on-secondary-fixed: '#001f27'
  on-secondary-fixed-variant: '#004e5f'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a forward-leaning, precision-engineered biotechnology identity rooted in clinical efficacy, molecular clarity, and human warmth. Designed exclusively for light mode environments, it strips away the cold austerity of legacy pharma while avoiding the frivolous decor of consumer health apps. 

The aesthetic merges **precision-minimalism** with **tactile clinical interfaces**. High-transparency clinical layers, surgical hairline micro-borders, and disciplined spatial geometry create an atmosphere of rigorous scientific validation. The visual tone must evoke absolute trust, diagnostic authority, and transformative technological optimism. 

Targeted at clinical researchers, regulatory bodies, clinicians, and patients alike, the interface prioritizes high-contrast legibility, immediate scanability of complex molecular data, and an uncompromised feeling of sterility, optimism, and precision.

## Colors

The palette is engineered exclusively for light environments. Surfaces begin at crisp optical white (`#ffffff`) and cascade down to pale cold-slate washes (`#f8fafc` and `#f1f5f9`) to articulate spatial depth without dark backgrounds.

- **Primary (`#0284c7` - Electric Blue):** Represents targeted therapeutic intervention, energy, and digital precision. Used for core call-to-actions, active clinical statuses, and primary brand indicators.
- **Secondary (`#00a3c4` - Vibrant Teal/Cyan):** Represents biological resonance, cellular diagnostics, and biochemical vitality. Applied to secondary data visualizations, active progress indicators, and accent badges.
- **Tertiary / Base Ink (`#0f172a` - Deep Clinical Navy):** Acts as the foundational anchor for typography, structural framing, and maximum-contrast vector icons. Never use pure black (`#000000`).
- **Neutrals (`#64748b` - Slate Grey):** Provides measured mid-tone hierarchy for secondary metadata, structural hairline borders (`#e2e8f0`), and disabled elements (`#cbd5e1`).
- **Surface Elevation Series:** Pure clinical white canvas (`#ffffff`), subtle structural panels (`#f8fafc`), and recessed diagnostic wells (`#f1f5f9`).

## Typography

Typography is governed by **Plus Jakarta Sans** across all hierarchies. Its geometric yet humanist aperture structure provides exceptional mathematical balance alongside an approachable, non-intimidating clinical demeanor.

- **Headlines:** Displayed in Bold (700) or Semi-Bold (600) with tight tracking (`-0.01em` to `-0.03em`) to deliver impact, scientific rigor, and editorial clarity. Mobile scales protect vertical rhythm on compact diagnostic screens.
- **Body Copy:** Set at `15px` (`body-md`) for primary documentation and narrative data, guaranteeing high contrast on pale backgrounds against `#0f172a` ink.
- **Labels & Micro-data:** Micro-copy, dosage badges, gene tags, and clinical trial statuses employ uppercase tracking (`0.02em` to `0.04em`) in Semi-Bold/Bold to maintain absolute optical separation from surrounding copy.

## Layout & Spacing

The system leverages a strict 8-point base spatial cadence that scales down to 4px for fine-grained component padding.

- **Grid Architecture:** Desktop views utilize a fluid 12-column grid capped at a maximum width of `1440px` with `2rem` outer margins and `1.5rem` gutters. Tablet architectures compress to an 8-column layout with `1.5rem` margins and `1rem` gutters. Mobile viewports collapse into a singular 4-column layout with `1rem` horizontal safe margins.
- **Density Rules:** Clinical dashboards and laboratory data arrays adopt high-density spacing (utilizing `space-xs` and `space-sm`), while patient therapeutics and executive overviews utilize relaxed structural padding (`space-lg` to `space-xl`) to enforce clarity and emotional ease.
- **Reflow Integrity:** Data cards and analytic visualization modules reflow from a 3-column configuration on desktop to stacked single-card arrays on mobile viewports without truncating essential diagnostic indicators.

## Elevation & Depth

Visual hierarchy does not rely on heavy drop shadows. Instead, it utilizes **tonal surface stacking, surgical borders, and ambient light diffusion**:

1. **Surface Tiers:**
   - **Base Canvas:** `#ffffff` for standard views or `#f8fafc` for complex analytic environments.
   - **Raised Panels:** `#ffffff` with a crisp `1px` structural outline in `#e2e8f0`.
   - **Overlays / Popovers:** `#ffffff` surface with a dual layered hairline: a `1px` border of `rgba(226, 232, 240, 0.8)` complemented by an ambient shadow.
2. **Ambient Shadow Formulation:**
   - **Level 1 (Subtle / Card):** `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`
   - **Level 2 (Hover / Floating Controls):** `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.03)`
   - **Level 3 (Modal / Diagnostic Overlay):** `0 16px 32px -4px rgba(15, 23, 42, 0.08), 0 6px 16px -6px rgba(15, 23, 42, 0.04)`
3. **Bio-Active Focus Rings:** Interactive elements in an active or focused state use a soft, therapeutic glow: `0 0 0 3px rgba(0, 163, 196, 0.20)`.

## Shapes

The design system implements a **Level 2 (Rounded)** shape philosophy. This strikes an exact balance between clinical architecture and modern human empathy.

- **Base Radius (0.5rem / 8px):** Applied to standard interactive elements including buttons, input fields, dropdown trigger targets, tooltips, and data cells.
- **Card & Container Radius (1rem / 16px - `rounded-lg`):** Governs structural content containers, analytics panels, and therapeutic protocol summary cards.
- **Dialog & Modal Radius (1.5rem / 24px - `rounded-xl`):** Assigned to high-level clinical alerts, modal sheets, and onboarding flows.
- **Pill Exception:** Clinical tags, bio-metric chips, status indicators, and avatar badges use a 9999px full-pill radius to denote encapsulated biological units or discrete categories.

## Components

### Buttons
- **Primary:** Filled `#0284c7` background, `#ffffff` text, font-weight 600. On hover, shifts to `#0369a1` with Level 2 ambient shadow. Focused state introduces a `3px` ring of `rgba(2, 132, 199, 0.25)`.
- **Secondary / Therapeutic:** Soft tint `#f0fdfa` background with `#00a3c4` text and `1px` border of `rgba(0, 163, 196, 0.3)`. Hover shifts to `#ccfbf1`.
- **Tertiary / Outline:** `#ffffff` surface, `1px` border of `#e2e8f0`, `#0f172a` text. Hover shifts to `#f8fafc` with border `#cbd5e1`.

### Chips & Badges
- **Status Badges:** Fully rounded (`rounded-full`), `space-xs` vertical and `space-sm` horizontal padding. 
- **Therapeutic Active:** Pale cyan background (`rgba(0, 163, 196, 0.1)`), `#00829d` bold label text, punctuated by a 6px pulse dot in `#00a3c4`.
- **Clinical Phase Indicators:** Structured slate background (`#f1f5f9`), `#475569` text, `1px` crisp border in `#e2e8f0`.

### Form Fields & Inputs
- **Base Input:** Height 44px, `#ffffff` background, `1px` border in `#cbd5e1`, `space-md` horizontal padding. Text is `#0f172a`, placeholder is `#94a3b8`.
- **Focus State:** Border transitions to `#0284c7`, reinforced by a `3px` focus ring `rgba(2, 132, 199, 0.15)`. Background remains pure optical `#ffffff`.
- **Validation:** Error triggers `#ef4444` border and micro-label; positive confirmation emits an active teal check indicator `#00a3c4`.

### Checkboxes & Radio Buttons
- **Checkboxes:** 18px square with `4px` corner radius. Inactive: `#ffffff` background with `1.5px` border in `#94a3b8`. Checked: solid `#0284c7` fill with crisp white vector checkmark.
- **Radio Buttons:** 18px concentric circle. Checked: `#0284c7` ring with a centered 8px solid cyan dot `#00a3c4`.

### Lists & Data Tables
- Row height of 52px for clinical readability. Alternate row fills are avoided in favor of crisp `1px` horizontal separator borders in `#f1f5f9`.
- Hover state on rows initiates an ambient `#f8fafc` tint with a subtle `2px` left-edge accent in `#0284c7`.

### Cards & Analytical Panels
- Structural `#ffffff` surface enclosed by a `1px` border in `#e2e8f0`. 
- Padding is standard `space-lg` (24px). Headers feature an embedded bottom divider `#f1f5f9` isolating primary diagnostic metrics from trend graphs.

### Therapeutic Pipeline Progress Tracker
- Multi-step segmented rail featuring interconnected 24px circular nodes. Active/Completed phases display `#0284c7` or `#00a3c4` with filled indicators, pending phases use an inactive `#e2e8f0` track with `#64748b` text labels.