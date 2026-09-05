---
name: Vibrant Crimson CRM
colors:
  surface: '#f8f9ff'
  surface-dim: '#d1dbec'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dfe9fa'
  surface-container-highest: '#d9e3f4'
  on-surface: '#121c28'
  on-surface-variant: '#5d403b'
  inverse-surface: '#27313e'
  inverse-on-surface: '#eaf1ff'
  outline: '#916f6a'
  outline-variant: '#e6bdb7'
  surface-tint: '#be0b05'
  primary: '#bb0603'
  on-primary: '#ffffff'
  primary-container: '#e02b1d'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a8'
  secondary: '#5a5e69'
  on-secondary: '#ffffff'
  secondary-container: '#dee2ef'
  on-secondary-container: '#60646f'
  tertiary: '#006949'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855e'
  on-tertiary-container: '#f5fff7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930000'
  secondary-fixed: '#dee2ef'
  secondary-fixed-dim: '#c2c6d2'
  on-secondary-fixed: '#171c24'
  on-secondary-fixed-variant: '#424751'
  tertiary-fixed: '#63fcc0'
  tertiary-fixed-dim: '#3fdfa5'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005138'
  background: '#f8f9ff'
  on-background: '#121c28'
  surface-variant: '#d9e3f4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.03em
  display-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.25rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 2.5rem
  gutter: 1rem
  margin-mobile: 1.25rem
  margin-desktop: 2.5rem
---

## Brand & Style

This design system expresses a high-energy, confident, and approachable financial and CRM management experience. It balances modern corporate utility with vivid consumer-grade excitement. The design language is characterized by bold crimson-red feature blocks, ultra-crisp white floating surfaces, pill-shaped control elements, and generous rounded contours.

### Key Tenets
- **High-Contrast Energy:** Pure saturated red creates strong focal anchors for critical numbers, wallet cards, hero headers, and primary actions, while airy white surfaces ensure data remains legible and uncluttered.
- **Friendly Precision:** Rounded geometries, soft transitions, pill badges, and friendly sans-serif typography remove the friction and intimidation typical of financial software.
- **Surface Layering:** Content is organized into distinct, highly tactile cards with soft ambient shadows that delineate hierarchical depth without aggressive outlines.

## Colors

The palette is engineered around high visual contrast and purposeful hierarchy:

- **Primary (`#EA3323`):** The signature vibrant crimson red. Used for top hero card containers, primary CTA pills, active tab states, FABs, and prominent data highlights.
- **Secondary (`#1F242D`):** Deep charcoal navy for dominant headline typography, primary numerical values, and high-emphasis interface text.
- **Tertiary (`#00C48C`):** Fresh mint green for positive incoming transactions, upward trends, and completed/active status pills. Complementary warning amber (`#FF9500`) and soft cyan (`#30B0C7`) act as auxiliary accents.
- **Neutral & Backgrounds:**
  - Screen Canvas: `#F5F6F9` (cool ultra-light grey).
  - Surface Default: `#FFFFFF` (pure white for elevated cards and list panels).
  - Surface Subdued: `#EBEEF2` (segmented controls and unselected badge backgrounds).
  - Subdued Text: `#717B8A` (supporting labels, timestamps, and column titles).
  - Inverse Text: `#FFFFFF` (used exclusively against primary red surfaces).

## Typography

Plus Jakarta Sans provides geometric clarity combined with humanized curves, maintaining legibility across compact numeric tables and bold hero displays.

- **Numerics:** Financial metrics and wallet totals use `700` (Bold) with tight letter-spacing (`-0.02em` to `-0.03em`) for punchy impact.
- **Labels & Microcopy:** Status tags, column keys, and metadata use semi-bold (`600` or `700`) to guarantee high legibility when scaled down to `10px`–`12px`.
- **Contrast Discipline:** Dark text (`#1F242D`) is reserved for white/neutral backgrounds. When sitting on primary red surfaces (`#EA3323`), text must be pure white (`#FFFFFF`) with secondary copy shifting to `rgba(255, 255, 255, 0.8)`.

## Layout & Spacing

The layout is built on a 4px/8px modular spacing system structured for handheld, touch-first mobile ergonomics:

- **Horizontal Margins:** Screen canvas padding defaults to `1.25rem` (20px) on mobile viewports to provide ample breathing room around stacked cards.
- **Card Padding:** Internal card padding scales between `1rem` (compact stat pods) and `1.5rem` (hero balances and summary panels).
- **Vertical Rhythm:** 
  - Micro-spacing between labels and values: `0.25rem`–`0.5rem`.
  - Content groups within a card: `0.75rem`–`1rem`.
  - Inter-card vertical gap: `1rem` (16px) to maintain a cohesive card stream.
- **Responsive Stacking:** On mobile, cards stack linearly in single-column layout. On tablet and desktop viewports, content expands into a 12-column grid where hero metrics occupy 4 columns and tables/charts occupy 8 columns.

## Elevation & Depth

Visual hierarchy uses soft, multi-layered diffuse shadows alongside solid tonal blocking:

- **Canvas (Level 0):** Background sits flat at `#F5F6F9`.
- **Standard Cards (Level 1):** Floating white cards utilize a warm, diffuse shadow: `0 8px 24px -4px rgba(31, 36, 45, 0.05)`. Borders are entirely absent or defined by an ultra-subtle `1px` stroke with `rgba(0, 0, 0, 0.03)`.
- **Active & Primary Hero Blocks (Level 2):** Vibrant red cards utilize a tinted glow: `0 12px 32px -6px rgba(234, 51, 35, 0.35)`.
- **Floating Controls & FABs (Level 3):** Circular action buttons and active floating dialogs leverage high-spread elevation: `0 10px 20px -2px rgba(234, 51, 35, 0.4)`.

## Shapes

The interface embraces a hyper-rounded, modern aesthetic:

- **Pill Geometry (`9999px`):** Used universally for filter chips, segmented switch containers, primary action buttons, search bars, and status indicator tags.
- **Large Containers (`rounded-3xl` / `24px`–`28px`):** Main hero budget cards, chart containers, and surface modules use deep curvature to deliver a friendly, pocket-sized aesthetic.
- **Small Containers (`rounded-2xl` / `16px`):** List item rows, nested metric tiles, and input fields.
- **Action Elements (`rounded-full`):** Floating circular buttons, avatar containers, and icon backgrounds.

## Components

### Buttons & Action Controls
- **Primary Action Button:** Full-width or auto-width pill (`rounded-full`), height `52px`, background `#EA3323`, text `#FFFFFF` (`label-lg`), with subtle red drop shadow.
- **Secondary / Social Button:** White background pill, `1px` border `#EBEEF2`, icon placed left, dark `#1F242D` text.
- **Floating Action Button (FAB):** Circular (`48px`–`54px`), `#EA3323` background with white glyph, pinned to lists or navigation bars.

### Segmented Controls & Chips
- **Toggle Pills:** Encapsulated within a `#F0F2F5` pill track (`padding: 4px`). The active option is an extruded `#EA3323` pill with `#FFFFFF` text; inactive options use transparent backgrounds with `#717B8A` text.
- **Status Badges:** Small pill tags (`height: 24px`, padding `0 10px`). Green badges use `#E6F9F3` fill with `#00C48C` text; orange/pending badges use `#FFF4E6` fill with `#FF9500` text.

### Cards & Data Panels
- **Hero Crimson Card:** Vibrant `#EA3323` surface, `rounded-3xl`, white text. Features nested white mini-pills for metadata and icon shortcuts.
- **Metric Pods:** White surface, `rounded-2xl`, internal icon badge on the left, primary metric in `display-md`, contextual micro-labels underneath.

### Charts
- **Minimalist Sparkline & Trend:** Red stroke (`2.5px` width, `#EA3323`) overlaying a vertical gradient fill tapering from `rgba(234, 51, 35, 0.25)` to `rgba(234, 51, 35, 0.0)`. Axis lines and grids are omitted or kept to dotted hairline rules.

### Lists & Tables
- **Client/Transaction Rows:** Clean flat cards or transparent rows partitioned by subtle whitespace (`8px`–`12px` gaps). Left: Circular avatar or icon; Center: Name/category (`headline-sm`) and date/metadata (`body-sm`); Right: Value and status pill.

### Input Fields
- **Text Inputs:** Height `52px`, `rounded-full` or `rounded-2xl`, background `#FFFFFF` or `#F7F8FA`, border `1px solid transparent`, focusing to `1px solid #EA3323`. Placeholder text in `#A0A7B5`.