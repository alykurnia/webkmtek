---
version: alpha
name: Kmtech
description: |
  KMTek's design system embodies a bold, technology-forward aesthetic grounded
  in industrial minimalism. The visual language combines vibrant red accents
  with deep neutrals and clean whites, creating high-contrast interfaces that
  evoke precision engineering and innovation. The atmosphere is professional yet
  approachable—emphasizing clarity and directness suitable for an IoT solutions
  provider serving both enterprises and developers. Typography and color work
  together to establish confidence: heavy, sans-serif headings anchor attention,
  while the signature red () acts as a visual marker for critical interactions
  and calls to action.
source:
  url: "https://www.kmtech.id/"
  pagesAnalyzed: 6
  extractedAt: 2026-11-12
  tokensMeasured: true
colors:
  primary: "#F52929"
  accent: "#EE2B48"
  link: "#0000EE"
  canvas: "#FFFFFF"
  surface-alt: "#000000"
  on-primary: "#FFFFFF"
  ink: "#000000"
  hairline: "#F7F7F7"
  accent-1: "#CE4722"
  accent-2: "#2C2E3E"
  neutral-1: "#080808"
typography:
  display-lg:
    fontFamily: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45
    fontSize: 62px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0px
  display-md:
    fontFamily: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0px
  display-md-strong:
    fontFamily: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45
    fontSize: 40px
    fontWeight: 700
    letterSpacing: 0px
  display-md-helvetica-w01-bold:
    fontFamily: helvetica-w01-bold
    fontSize: 40px
    fontWeight: 700
    letterSpacing: 0px
  heading-lg:
    fontFamily: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45
    fontSize: 36px
    fontWeight: 400
    letterSpacing: 0px
  heading-md:
    fontFamily: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45
    fontSize: 35px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  heading-md-strong:
    fontFamily: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45
    fontSize: 35px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  heading-xs:
    fontFamily: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45
    fontSize: 15px
    fontWeight: 400
    letterSpacing: 0px
  heading-xs-strong:
    fontFamily: helvetica-w01-bold
    fontSize: 15px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0px
  body-xl:
    fontFamily: helvetica-w01-roman
    fontSize: 23px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 0px
  body-lg:
    fontFamily: helvetica-w01-roman
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  body-md:
    fontFamily: helvetica-w01-roman
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm:
    fontFamily: helvetica-w01-light
    fontSize: 15px
    fontWeight: 400
    letterSpacing: 0px
  body-sm-helvetica-w01-roman:
    fontFamily: helvetica-w01-roman
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-xs:
    fontFamily: helvetica-w01-light
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  button-xl:
    fontFamily: helvetica-w01-bold
    fontSize: 25px
    fontWeight: 400
    lineHeight: 1.24
    letterSpacing: 0px
  button-lg:
    fontFamily: helvetica-w01-roman
    fontSize: 16px
    fontWeight: 400
    letterSpacing: 0.8px
  button-lg-tight:
    fontFamily: helvetica-w01-bold
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  button-md:
    fontFamily: Arial
    fontSize: 13.3333px
    fontWeight: 400
    letterSpacing: 0px
  button-sm:
    fontFamily: Arial
    fontSize: 10px
    fontWeight: 400
    letterSpacing: 0px
  label:
    fontFamily: helvetica-w01-roman
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  caption-xs:
    fontFamily: helvetica-w01-light
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0px
  caption-xs-helvetica-w01-roman:
    fontFamily: helvetica-w01-roman
    fontSize: 12px
    fontWeight: 400
    letterSpacing: 0px
  caption-xs-helveticaneuew01-55roma:
    fontFamily: HelveticaNeueW01-55Roma
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.17
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 5px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 36px
  section: 40px
  band: 44px
elevationStrategy: color-blocking
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#FFFFFF"
    surface: "#000000"
    surfaceRaised: "#000000"
    text: "#000000"
    textMuted: "#595959"
    border: "#F7F7F7"
    accent: "#F52929"
    accentFg: "#000000"
    focusRing: "#F52929"
    elevation: shadow
  dark:
    bg: "#140A0B"
    surface: "#22191A"
    surfaceRaised: "#2E2526"
    text: "#FFF6F6"
    textMuted: "#A69C9D"
    border: "#3A3132"
    accent: "#F52929"
    accentFg: "#0B0B0C"
    focusRing: "#F52929"
    elevation: "border+surface"
  contrastFailures:
    - "light: text on surface = 1:1 (needs 4.5:1)"
components:
  button-filled:
    typography: "{typography.button-sm}"
    textColor: "{colors.link}"
    height: 34px
    rounded: "{rounded.xs}"
    backgroundColor: "{colors.accent}"
  button-primary:
    typography: "{typography.button-md}"
    textColor: "{colors.ink}"
    height: 34px
    backgroundColor: "{colors.primary}"
  button-filled-2:
    typography: "{typography.button-sm}"
    textColor: "{colors.link}"
    height: 34px
    rounded: "{rounded.xs}"
    backgroundColor: "{colors.accent-2}"
  button-text:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
    height: 39px
    padding: "10px 10px 10px 10px"
    backgroundColor: "rgba(255, 255, 255, 0)"
  button-text-lg:
    typography: "{typography.button-md}"
    textColor: "{colors.on-primary}"
    height: 40px
  navigation:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
    height: 39px
    backgroundColor: "rgba(255, 255, 255, 0)"
  footer:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
  link:
    typography: "{typography.button-sm}"
    textColor: "{colors.link}"
    padding: "10px 10px 10px 10px"
    backgroundColor: "rgba(255, 255, 255, 0)"
  link-lg:
    typography: "{typography.button-sm}"
    textColor: "{colors.link}"
  card:
    typography: "{typography.button-lg}"
    textColor: "{colors.ink}"
    backgroundColor: "{colors.canvas}"
  badge-icon:
    textColor: "{colors.ink}"
    height: 19px
    fontSize: 0px
    fontFamily: Arial
    fontWeight: 400
states:
  other-focus:
    target: other
    state: focus
    outline: none
  other-hover:
    target: other
    state: hover
    outline: "highlight solid 3px"
    outlineColor: highlight
    outlineWidth: 3px
  other-focus-visible:
    target: other
    state: focus-visible
    outline: "highlight solid 3px"
    outlineColor: highlight
    outlineWidth: 3px
  link-focus-visible:
    target: link
    state: focus-visible
    outline: "highlight solid 3px"
    boxShadow: none
    outlineColor: highlight
    outlineWidth: 3px
  other-disabled:
    target: other
    state: disabled
    textColor: graytext
  nav-hover:
    target: nav
    state: hover
    transform: "scaleX(1)"
  other-active:
    target: other
    state: active
    transform: "translateY(-50%)"
  button-hover:
    target: button
    state: hover
    opacity: 0.7
  button-focus-visible:
    target: button
    state: focus-visible
    boxShadow: "{colors.canvas} 0px 0px 0px 1px, rgb(17, 109, 255) 0px 0px 0px 3px"
  link-hover:
    target: link
    state: hover
    textDecoration: underline
breakpoints:
  - width: 375
    containerWidth: 375
    gridColumns: 6
    navLinksVisible: 3
    menuToggleVisible: false
    headingPx: 40
    bodyPx: 10
    sectionPaddingX: 0
  - width: 768
    containerWidth: 768
    gridColumns: 6
    navLinksVisible: 3
    menuToggleVisible: false
    headingPx: 40
    bodyPx: 10
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 980
    gridColumns: 6
    navLinksVisible: 3
    menuToggleVisible: false
    headingPx: 40
    bodyPx: 10
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1120
    gridColumns: 6
    navLinksVisible: 3
    menuToggleVisible: false
    headingPx: 40
    bodyPx: 10
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1280
    gridColumns: 6
    navLinksVisible: 3
    menuToggleVisible: false
    headingPx: 40
    bodyPx: 10
    sectionPaddingX: 0
coverage:
  statesFound: 85
  gradientsFound: 0
  rolesUnassigned: 3
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: false
  semanticRampDeclared: false
---

# Design System Inspired by KMTek

## 1. Visual Theme & Atmosphere

KMTek's design system embodies a bold, technology-forward aesthetic grounded in industrial minimalism. The visual language combines vibrant red accents with deep neutrals and clean whites, creating high-contrast interfaces that evoke precision engineering and innovation. The atmosphere is professional yet approachable—emphasizing clarity and directness suitable for an IoT solutions provider serving both enterprises and developers. Typography and color work together to establish confidence: heavy, sans-serif headings anchor attention, while the signature red (`{colors.primary}`) acts as a visual marker for critical interactions and calls to action.

**Key Characteristics**
- Primary accent red serves as the dominant brand marker across CTAs, hero sections, and active states
- Sharp corners and minimal ornamentation reflect technical sophistication
- High contrast between black/white surfaces and red callouts ensures accessibility and visual hierarchy
- Sans-serif typography (primarily Helvetica variants) reinforces engineering credibility
- Color-blocking strategy replaces subtle gradients—depth emerges from solid color boundaries

## 2. Color Palette & Roles

### Primary
- **Brand Accent** (`{colors.primary}` — `#F52929`): Primary call-to-action buttons, brand mark highlights, hero section accents, and active navigation states. The signature red driving user engagement across the platform.
- **Accent Red** (`{colors.accent}` — `#EE2B48`): Secondary brand accent used in hero bands and decorative elements to reinforce the red family's visual language.

### Interactive
- **Link Blue** (`{colors.link}` — `#0000EE`): Inline text links and secondary interactive elements. Standard web blue for link affordance and discoverability.

### Decorative Accents
- **Warm Rust** (`{colors.accent-1}` — `#CE4722`): Unassigned decorative accent. No measurable role in interactions; used for visual variety in illustrations or supplementary design elements.
- **Deep Charcoal** (`{colors.accent-2}` — `#2C2E3E`): Unassigned decorative accent. No measurable role in interactions; reserved for illustrative or secondary branded content.

### Neutral Scale
- **Canvas** (`{colors.canvas}` — `#FFFFFF`): Default page background and primary container surface. Also serves as on-brand text color (label text on red surfaces).
- **Surface Alt / Ink** (`{colors.surface-alt}` — `#000000`): Primary text color, headings, and alternating section backgrounds. Darkest neutral for maximum readability.
- **Hairline** (`{colors.hairline}` — `#F7F7F7`): Subtle 1px borders, dividers, and separation lines. Nearly white to maintain minimalist aesthetic while providing definition.
- **Deep Neutral** (`{colors.neutral-1}` — `#080808`): Near-black neutral for enhanced contrast in edge cases.

## 3. Typography Rules

### Font Family

**Primary Display & Headings**: wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 (custom serif-like display font)
- Fallback: Georgia, serif

**Secondary Headings & Labels**: helvetica-w01-roman, helvetica-w01-light, helvetica-w01-bold
- Fallback: Helvetica, Arial, sans-serif

**Tertiary / Body**: Arial
- Fallback: Helvetica, sans-serif

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display Large | wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 | 62px | 400 | 1.2 | 0px | Hero headlines; maximum visual impact |
| Display Medium | wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 | 40px | 400 | 1.0 | 0px | Section titles; strong presence |
| Display Medium Bold | wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 / helvetica-w01-bold | 40px | 700 | 1.0 / Not measured | 0px | Emphasized display text |
| Heading Large | wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 | 36px | 400 | Not measured | 0px | Section subheadings |
| Heading Medium | wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 | 35px | 400 | 1.4 | 0px | Subsection titles |
| Heading Medium Strong | wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 | 35px | 700 | 1.4 | 0px | Emphasized subsection titles |
| Heading Small | wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 | 30px | 400 | 1.6 | 0px | Card titles; secondary hierarchy |
| Heading XS Strong | helvetica-w01-bold | 15px | 700 | 1.6 | 0px | Small emphasized headings |
| Heading XS | wfont_7242cf_618bd92ae1a94102b6d04430d69b8a45 | 15px | 400 | Not measured | 0px | Tertiary headings |
| Body XL | helvetica-w01-roman | 23px | 700 | 1.4 | 0px | Large body text emphasis |
| Body Large | helvetica-w01-roman | 17px | 400 | 1.4 | 0px | Extended body copy |
| Body Medium | helvetica-w01-roman | 16px | 400 | 1.6 | 0px | Standard body text |
| Body Small | helvetica-w01-roman | 15px | 400 | 1.6 | 0px | Secondary body; form labels |
| Body XS | helvetica-w01-light | 14px | 400 | 1.6 | 0px | Compact body text |
| Button Large | helvetica-w01-roman | 16px | 400 | Not measured | 0.8px | Primary button text |
| Button Large Tight | helvetica-w01-roman | 16px | 400 | 1.4 | 0px | Tight-set button text |
| Button XL | helvetica-w01-bold | 25px | 400 | 1.24 | 0px | Large call-to-action buttons |
| Button Medium | Arial | 13.3333px | 400 | Not measured | 0px | Medium button text |
| Button Small | Arial | 10px | 400 | Not measured | 0px | Compact button text |
| Label | helvetica-w01-roman | 16px | 400 | 1.4 | 0px | Form labels and input text |
| Caption XS | helvetica-w01-light | 12px | 400 | 1.4 | 0px | Smallest text; metadata |
| Caption XS (Roman) | helvetica-w01-roman | 12px | 400 | Not measured | 0px | Alternate caption style |
| Caption XS (HelveticaNeueW01) | HelveticaNeueW01-55Roma | 12px | 400 | 1.17 | 0px | Helvetica Neue caption variant |

### Principles
- Display and heading sizes prioritize visual dominance over readability; use sparingly for primary content anchors
- Body text relies on Helvetica romans (light and medium weights) for clarity and approachability
- Button text uses tight letter-spacing (0.8px on button-lg) to reinforce the clickable affordance
- Caption text is deliberately compact at 12px, suitable for metadata and supplementary information
- Weight contrast (400 vs. 700) creates hierarchy within size families rather than relying on size alone

## 4. Component Stylings

### Buttons

**Primary Button**
- Background: `{colors.primary}` (`#F52929`)
- Text Color: `{colors.surface-alt}` (`#000000`)
- Padding: 0px (content-driven)
- Border Radius: `{rounded.none}` (0px — sharp corners)
- Border: None (0px)
- Font: Arial, 13.3333px, weight 400
- Width: 195px
- Height: 34px
- Box Shadow: None
- Hover State: Opacity reduced to 0.7; cursor pointer

**Filled Button (Variant)**
- Background: `{colors.accent}` (`#EE2B48`)
- Text Color: `{colors.link}` (`#0000EE`)
- Padding: 0px
- Border Radius: `{rounded.xs}` (5px)
- Border: None (0px)
- Font: Arial, 10px, weight 400
- Width: 121px
- Height: 34px
- Box Shadow: None
- Hover State: Opacity reduced to 0.7

**Filled Button Dark (Variant)**
- Background: `{colors.accent-2}` (`#2C2E3E`)
- Text Color: `{colors.link}` (`#0000EE`)
- Padding: 0px
- Border Radius: `{rounded.xs}` (5px)
- Border: None (0px)
- Font: Arial, 10px, weight 400
- Width: 121px
- Height: 34px
- Box Shadow: None
- Hover State: Opacity reduced to 0.7

**Text Button**
- Background: Transparent (rgba(255, 255, 255, 0))
- Text Color: `{colors.surface-alt}` (`#000000`)
- Padding: 10px 10px 10px 10px
- Border Radius: `{rounded.none}` (0px)
- Border: None (0px)
- Font: Arial, 10px, weight 400
- Width: 143.203px
- Height: 39px
- Box Shadow: None
- Hover State: Text color changes based on context variables

**Text Button Large**
- Background: Transparent (rgba(0, 0, 0, 0))
- Text Color: `{colors.canvas}` (`#FFFFFF`)
- Padding: 0px
- Border Radius: `{rounded.none}` (0px)
- Border: None (0px)
- Font: Arial, 13.3333px, weight 400
- Width: 113px
- Height: 40px
- Box Shadow: None
- Hover State: Text color responds to context

**Button XL (Hero/Large CTA)**
- Background: `{colors.primary}` (`#F52929`)
- Text Color: `{colors.canvas}` (`#FFFFFF`)
- Padding: 0px
- Border Radius: `{rounded.full}` (9999px — pill-shaped)
- Border: None (0px)
- Font: helvetica-w01-bold, 25px, weight 400
- Line Height: 1.24
- Box Shadow: None
- Hover State: Opacity transitions; potential shadow lift

### Cards & Containers

**Default Card**
- Background: `{colors.canvas}` (`#FFFFFF`)
- Text Color: `{colors.surface-alt}` (`#000000`)
- Padding: 0px (layout-dependent)
- Border Radius: `{rounded.none}` (0px — sharp corners)
- Border: None (0px solid `{colors.hairline}`)
- Font: helvetica-w01-roman, 16px, weight 400
- Width: 302px
- Height: 350px
- Box Shadow: None
- Hover State: No documented change

### Navigation

**Default Navigation**
- Background: Transparent (rgba(255, 255, 255, 0))
- Text Color: `{colors.surface-alt}` (`#000000`)
- Padding: 0px
- Border Radius: `{rounded.none}` (0px)
- Border: None (0px)
- Font: Arial, 10px, weight 400
- Width: 708px
- Height: 39px
- Box Shadow: None
- Hover State: Background color responds to `--nav-link-background-color-hover`; active states use `--nav-link-background-color-active`

### Links

**Default Link**
- Text Color: `{colors.link}` (`#0000EE`)
- Background: Transparent (rgba(255, 255, 255, 0))
- Padding: 10px 10px 10px 10px
- Border Radius: `{rounded.none}` (0px)
- Border: None (0px)
- Font: Arial, 10px, weight 400
- Width: 123px
- Height: 39px
- Box Shadow: None
- Hover State: Text decoration underline; color updates per context
- Focus Visible: Outline `highlight` solid 3px; box-shadow `rgb(255, 255, 255) 0px 0px 0px 1px, rgb(17, 109, 255) 0px 0px 0px 3px`

**Large Link**
- Text Color: `{colors.link}` (`#0000EE`)
- Background: Transparent (rgba(0, 0, 0, 0))
- Padding: 0px
- Border Radius: `{rounded.none}` (0px)
- Border: None (0px)
- Font: Arial, 10px, weight 400
- Width: 108px
- Height: 60px
- Box Shadow: None
- Hover State: Color updates per context

## 5. Layout Principles

### Spacing System

KMTek employs a consistent base-4px spacing scale, enabling precise and predictable layout rhythm:

- `{spacing.xxs}` = 4px — Micro-spacing between adjacent elements (inline icon gaps)
- `{spacing.xs}` = 8px — Tight component spacing (button padding internal)
- `{spacing.sm}` = 12px — Small spacing (between form groups, compact list items)
- `{spacing.md}` = 16px — Standard spacing (card padding, standard gaps)
- `{spacing.lg}` = 20px — Comfortable spacing (between sections, form controls)
- `{spacing.xl}` = 24px — Large spacing (between major content blocks)
- `{spacing.xxl}` = 28px — Extra-large spacing (section transitions)
- `{spacing.xxxl}` = 36px — Generous spacing (before major section breaks)
- `{spacing.section}` = 40px — Section padding and major content separation
- `{spacing.band}` = 44px — Hero band and full-width section vertical padding

### Grid & Container

The layout uses a maximum container width of 1280px at the largest breakpoint (1440px viewport), with all smaller viewports maintaining full-width layouts.

- **Max Content Width**: 1280px (at 1440px+ viewport)
- **Typical Column Count**: 6 columns at all measured breakpoints
- **Section Padding Horizontal**: 0px (edge-to-edge sections with internal container management)
- **Container Scaling**: Fluid up to max-width; no margin collapsing observed

### Whitespace Philosophy

KMTek's whitespace strategy emphasizes visual separation through color-blocking and sharp edges rather than excessive padding. Sections are defined by background color changes (`{colors.canvas}` to `{colors.surface-alt}`) rather than whitespace alone, creating a bold, structured appearance. Internal spacing uses the base-4 scale consistently, with `{spacing.section}` (40px) and `{spacing.band}` (44px) anchoring major divisions. This approach maintains visual breathing room while preserving the industrial precision of the design.

### Border Radius Scale

- `{rounded.none}` = 0px — Default radius for all interactive and card elements; maintains sharp, technical aesthetic
- `{rounded.xs}` = 5px — Subtle softening for specific button variants and secondary interactive elements
- `{rounded.full}` = 9999px — Pill-shaped buttons used only in large CTAs (button-xl) and hero-scale interactions

### Border Widths

The extracted data did not include explicit border-width tokens in active use across the site. Most interactive elements (buttons, cards, links) render with 0px borders. Where borders appear in interaction states, they are typically 1px, 2px, or "medium" (browser-dependent), but no consistent published border-width scale was identified. See "Known Gaps" for details.

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Base / Flat | No shadow | Default cards, buttons, links; primary content surface |
| Hover Lift | Subtle opacity or transform; context-dependent shadow variables | Buttons, nav items, interactive elements on hover; `var(--hover-box-shadow)` |
| Disabled State | No lift; potential shadow reduction via `var(--disabled-box-shadow)` | Disabled buttons, inactive inputs |
| Modal / Overlay | Z-index 9999; full-viewport depth | Dialog boxes, modals, top-most overlays |
| Toast / Alert | Z-index 10000; highest stacking | Notification toasts; always on top |

**Shadow Philosophy**

KMTek's design system does not employ a traditional multi-level shadow hierarchy. Instead, it uses **color-blocking** to establish depth: transitions between `{colors.canvas}` (`#FFFFFF`), `{colors.surface-alt}` (`#000000`), and `{colors.primary}` (`#F52929`) create visual separation and hierarchy without reliant on shadows. Where shadows appear in interaction states (hover, focus), they are managed via CSS custom properties (`--hover-box-shadow`, `--disabled-box-shadow`) and remain minimal. This reflects the system's commitment to minimalism and technical precision.

### Opacity Levels

The system defines one primary opacity scale:
- **0.2** (20%) — Used for overlay and transparency effects; creates subtle layering without obscuring content beneath

### Z-index / Layering

| Layer | Z-index | Purpose |
|---|---|---|
| Base | 1 | Default page content flow |
| Elevated Base | 2 | Slightly lifted content (cards, containers) |
| High Base | 3 | Near-top base content |
| Dropdown | 47 | Dropdown menu overlays; above standard content |
| Dropdown Secondary | 50 | Secondary dropdown layers |
| Dropdown Tertiary | 55 | Tertiary dropdown or menu nesting |
| Modal | 9999 | Dialog boxes, modals; comprehensive overlay |
| Toast | 10000 | Notification toasts; absolute top layer |

## 7. Do's and Don'ts

### Do
- Use `{colors.primary}` (`#F52929`) for all primary calls-to-action and interactive highlights; it is the brand's most recognizable asset
- Apply `{rounded.none}` (0px) to buttons and cards by default; the sharp aesthetic is fundamental to the system's technical identity
- Combine color blocking (surface transitions) with spacing to create depth rather than relying on shadows
- Use `{spacing.section}` (40px) for section vertical padding and major content breaks
- Implement full-width color-blocked sections (`{colors.surface-alt}` on `{colors.canvas}`) to establish rhythm and visual structure
- Use Helvetica and Arial fonts for body and UI text; reserve the custom display font (wfont_7242cf_) for headlines only
- Leverage the cap-height of `{typography.display-lg}` (62px, line-height 1.2) for hero statements; this size defines visual dominance
- Default to `{colors.link}` (`#0000EE`) for all hyperlinked text to ensure web-standard affordance
- Apply `{opacity.20}` (20%) for overlays, disabled states, or transparency layers

### Don't
- Do not use rounded corners (`{rounded.full}` or `{rounded.xs}`) on cards, inputs, or standard buttons; only the largest CTAs employ pill shapes
- Do not introduce drop shadows for general depth; rely on color transitions and the red/black/white palette instead
- Do not mix serif and sans-serif fonts in the same hierarchy; maintain either display (custom serif-like) or Helvetica/Arial (sans-serif) for consistency
- Do not apply multiple opacity levels; the system uses only 20% for all transparency needs
- Do not ignore the color-blocking strategy in favor of subtle gradients or mesh backgrounds; KMTek's visual power comes from bold, flat surfaces
- Do not deviate from the primary red (`{colors.primary}` — `#F52929`) for brand emphasis; the accent red (`{colors.accent}` — `#EE2B48`) is secondary
- Do not place interactive elements without sufficient size or padding; maintain minimum touch targets at 40px × 34px (observed in button heights)
- Do not render text smaller than `{typography.caption-xs}` (12px) except in truly exceptional cases (metadata)
- Do not use link colors (blue `#0000EE`) for non-linked text; reserve it exclusively for hyperlinks to avoid affordance confusion
- Do not add decorative effects to buttons beyond the primary red fill; the system's power lies in clarity and directness

## 8. Responsive Behavior

### Breakpoints

| Viewport Width | Container Width | Grid Columns | Visible Nav Links | Menu Toggle | Largest Heading | Body Text Size | Section Padding X |
|---|---|---|---|---|---|---|---|
| 375px | 375px | 6 | 3 | Hidden | 40px (`{typography.display-md}`) | 10px | 0px |
| 768px | 768px | 6 | 3 | Hidden | 40px (`{typography.display-md}`) | 10px | 0px |
| 1024px | 980px | 6 | 3 | Hidden | 40px (`{typography.display-md}`) | 10px | 0px |
| 1280px | 1120px | 6 | 3 | Hidden | 40px (`{typography.display-md}`) | 10px | 0px |
| 1440px+ | 1280px | 6 | 3 | Hidden | 40px (`{typography.display-md}`) | 10px | 0px |

**Key observations:**
- No breakpoint triggers a hamburger menu toggle; navigation remains visible across all viewports
- Container width scales linearly up to 1280px max at 1440px+ viewports
- Grid maintains 6 columns at all measured sizes (no responsive column count shift)
- Primary heading size does not change across breakpoints; 40px is used consistently
- Body text size remains at 10px across all viewport sizes (exceptionally tight; likely a measured artifact or mobile-first constraint)
- Section padding-x stays at 0px (full-width edge-to-edge sections) across all breakpoints

### Touch Targets

Based on extracted button and interactive component measurements:
- **Minimum interactive height**: 34px (observed on buttons, inputs)
- **Recommended padding around click targets**: 10px minimum (observed on buttons, links)
- **Minimum safe button width**: 113px (observed on text-lg button variant)
- **Card minimum height**: 350px (adequate for tap targets within card content)

Ensure all clickable elements maintain at least 34px vertical height and 40px minimum width when possible to meet accessibility standards for touch devices.

### Collapsing Strategy

KMTek's layout does not employ traditional responsive collapse patterns (e.g., stacked columns, hidden sidebar). Instead:
- All breakpoints maintain the same 6-column grid and navigation structure
- Containers scale fluidly from 375px (full-width) to 1280px (max-width at 1440px+)
- No media queries hide or reorganize major sections
- Typography size and line height remain constant across all viewports
- Section padding and internal spacing scale proportionally with container width (0px horizontal padding observed at all breakpoints)

This approach suggests a **mobile-first, fluid layout** that prioritizes consistency over radical redesign; the system expands or contracts content gracefully rather than reorganizing it.

## 9. Agent Prompt Guide

### Quick Color Reference

| Purpose | Color Name | Hex Value |
|---|---|---|
| Primary CTA & Brand Accent | Brand Accent | `{colors.primary}` (`#F52929`) |
| Page Background | Canvas | `{colors.canvas}` (`#FFFFFF`) |
| Dark Section / Ink | Surface Alt / Ink | `{colors.surface-alt}` (`#000000`) |
| Primary Text / Headings | Surface Alt / Ink | `{colors.surface-alt}` (`#000000`) |
| Hyperlinks | Link Blue | `{colors.link}` (`#0000EE`) |
| Borders & Dividers | Hairline | `{colors.hairline}` (`#F7F7F7`) |
| Secondary Accent | Accent Red | `{colors.accent}` (`#EE2B48`) |
| Decorative (Warm) | Warm Rust | `{colors.accent-1}` (`#CE4722`) |
| Decorative (Dark) | Deep Charcoal | `{colors.accent-2}` (`#2C2E3E`) |

### Iteration Guide

1. **Always default to sharp corners** (`{rounded.none}` — 0px) for buttons, cards, and inputs unless explicitly designing a large hero CTA (which uses `{rounded.full}`).

2. **Red is primary, blue is secondary:** Use `{colors.primary}` (`#F52929`) for main CTAs, hero highlights, and brand identity. Use `{colors.link}` (`#0000EE`) only for inline hyperlinks.

3. **Establish depth through color blocking:** Transition between `{colors.canvas}`, `{colors.surface-alt}`, and `{colors.primary}` to create hierarchy. Avoid relying on shadows; keep elevation flat or use minimal context-dependent shadow variables.

4. **Spacing anchors are `{spacing.section}` (40px) and `{spacing.band}` (44px).** Use these for major section breaks and vertical rhythm; smaller scales (8px–24px) govern component internals.

5. **Typography is Helvetica or Arial for UI; custom font only for display headlines.** Maintain weight contrast (400 vs. 700) rather than size alone to build hierarchy within families.

6. **Button styling is bold and minimal:** No borders, no background gradients, no excess padding. Primary buttons are red with black text; text buttons are transparent.

7. **All interactive elements respond with opacity (0.7 on hover) or text color shifts.** Avoid complex shadow lifts or transform animations unless explicitly provided by CSS custom properties.

8. **Z-index layering is strict:** Base (1), Dropdown (47–55), Modal (9999), Toast (10000). Do not invent intermediate layers.

9. **Maintain 0px horizontal section padding.** Containers scale to max-width (1280px) but edge content touches the viewport on mobile; internal components manage their own spacing.

10. **Navigation is always visible** (no mobile menu toggle observed). Ensure nav items remain readable and accessible across all 375px–1440px+ viewports using consistent typography size.

## 10. Known Gaps

- **No semantic color ramp.** The site does not expose error, success, warning, or info state colors in its measured markup. Do not invent these; use the primary red or disable states only.

- **Interaction states are not exhaustively provided.** While some hover, focus, and active states were extracted from stylesheets (e.g., opacity reduction, color shifts via custom properties), not all components show full interaction coverage. Surfaces behind authentication, forms with validation states, and complex component states were not measured.

- **Three colors have no assigned role** (`{colors.accent-1}` — `#CE4722`, `{colors.accent-2}` — `#2C2E3E`). These are used decoratively in illustrations or supplementary design elements; they do not map to UI patterns and should not be reused for functional roles.

- **No gradient or mesh backgrounds.** The extraction detected only flat, solid color blocks; no CSS gradients, patterns, or decorative meshes were found.

- **Border-width scale is not published.** Most interactive elements use 0px borders. Where borders appear in interaction states (focus, hover), they use browser-dependent or CSS custom property values (e.g., `--brw`, `--brwh`, `--brwf`). A published border-width design token was not discovered.

- **Opacity level: only 20% found.** The system may employ additional opacity values (e.g., for disabled states, overlays), but only 0.2 (20%) was explicitly extracted. Other opacity values may exist on specific states.

- **Button and component interactions via CSS custom properties.** Many hover, focus, and disabled states are applied via `--corvid-*` variables or Wix-specific custom properties. The extraction captured the declared properties, but actual computed values depend on runtime variable resolution.

- **Surfaces behind authentication not visited.** Logged-in or protected pages may have different color, typography, or component rules. The design system here represents public-facing, unauthenticated content only.

- **No dark mode detected.** No alternate color scheme or media query-driven theme switching was observed in the extraction. The system as measured is light-mode only.

- **Measured body text sizes are exceptionally small (10px).** This may reflect a measurement artifact or intentional mobile-first constraint. Confirm with stakeholders whether 10px is the intended global body size or if larger sizes (14px–16px) should be used for accessibility.

- **Font fallbacks and web font loading.** The system references custom fonts (wfont_7242cf_*, helvetica-w01-*) and HelveticaNeueW01-55Roma. These may not load on all systems. Fallback stacks provided should be tested across browsers and devices.