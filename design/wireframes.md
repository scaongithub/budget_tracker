# Monthly Budget Tracker Wireframes

These low-fidelity wireframes outline the cultural fusion UI for Paola (Mexican origin) and Carlo (Italian origin). They focus on a responsive web interface with desktop-first layouts, referencing sections from the requirements document.

## Design Language Overview

| Aspect | Mexican Influence | Italian Influence | Application in UI |
| --- | --- | --- | --- |
| Color Palette | **Fiesta Red (#E94256)**, **Sunrise Yellow (#F7B538)**, **Cactus Green (#2FA36B)** | **Terracotta (#C56A1A)**, **Tuscan Olive (#6C7A4C)**, **Mediterranean Navy (#1F3C88)** | Gradient blends in headers, chart fills, and split backgrounds on dashboard panels. |
| Patterns & Motifs | Papel picado scallops, agave silhouette icons, Talavera tile accents | Renaissance-inspired flourishes, terrazzo textures, vine scroll separators | Applied as top border overlays, subtle card backgrounds, and button hover effects. |
| Typography | Headings: **"Montserrat Alternates"** bold for vibrant presence | Body: **"Lora"** serif for warmth and readability | Mixed pairing for cultural balance; fallback to sans-serif/serif web-safe fonts. |
| Imagery | Illustrations of sombrero & marigold | Illustrations of Vespa, espresso cups | Minimal, line-art style icons in hero sections and empty states. |

## 1. Login & Welcome Screen

```
+----------------------------------------------------------------------------------+
| HERO SPLIT BACKGROUND                                                             |
| [Left Column – Papel picado gradient]   [Right Column – Tuscan fresco texture]    |
|  ┌────────────────────────────┐        ┌─────────────────────────────────────┐    |
|  |  Welcome Header            |        |  Couple Illustration (Paola & Carlo)|    |
|  |  "Bienvenidos / Benvenuti" |        |  Subtle national flags interwoven    |    |
|  |  + tagline                 |        |  into ribbon banner                  |    |
|  └────────────────────────────┘        └─────────────────────────────────────┘    |
|                                                                                  |
|  ┌────────────────────────────────────────────────────────────────────────────┐   |
|  |  LOGIN CARD                                                                |   |
|  |  [Montserrat Heading] "Access Your Budget"                                 |   |
|  |  Email Input (icon: Mexican sun)                                           |   |
|  |  Password Input (icon: Italian key)                                        |   |
|  |  CTA Button "Entrar / Accedi" (Fiesta Red to Terracotta gradient)         |   |
|  |  Secondary link: "Forgot Password?" (underlined, olive)                    |   |
|  |  Toggle language pill (ES/IT/EN)                                           |   |
|  └────────────────────────────────────────────────────────────────────────────┘   |
+----------------------------------------------------------------------------------+
```

### Interaction Notes
- Hero background uses CSS grid split with overlay masks for responsive stacking.
- CTA button features animated papel picado confetti on hover.
- Illustrations lighten on focus to reinforce accessibility.

## 2. Dashboard (Monthly Overview)

```
+------------------------------------------------------------------------------------------------------------------+
| TOP NAV BAR                                                                                                       |
|  Logo: Hybrid agave & olive branch crest | Quick Switch Month Dropdown | Profile avatars (Paola & Carlo chips)   |
+------------------------------------------------------------------------------------------------------------------+
| KPI STRIP (Fiesta Red / Mediterranean Navy gradients)                                                             |
|  [Total Income] [Total Expenses] [Remaining Budget]                                                               |
+-----------------------------+------------------------------------------------------------------------------------+
| LEFT COLUMN                 | RIGHT COLUMN                                                                       |
| ┌─────────────────────────┐ | ┌────────────────────────────────────────────────────────────────────────────────┐ |
| | Cultural Widget         | | | Expense Breakdown Card                                                          | |
| | "Paola's Spotlight"     | | | Donut Chart (Chart.js) overlayed with Talavera pattern fill.                   | |
| | Rotating tip: recipe,   | | | Legend toggles with Italian vine divider.                                      | |
| | savings quote in ES.    | | └────────────────────────────────────────────────────────────────────────────────┘ |
| └─────────────────────────┘ | ┌────────────────────────────────────────────────────────────────────────────────┐ |
| ┌─────────────────────────┐ | | Income Streams Card                                                              | |
| | Quick Add Panel         | | | Bar chart with split colors (Mexican warm vs Italian cool).                     | |
| | - Add Income button     | | | Tooltips alternate "€" with cactus/espresso icons.                              | |
| | - Add Expense button    | | └────────────────────────────────────────────────────────────────────────────────┘ |
| | Buttons share gradient  | | ┌────────────────────────────────────────────────────────────────────────────────┐ |
| | border reminiscent of   | | | Timeline of Transactions                                                         | |
| | papel picado edges.     | | | Scrollable list; badges colored by category family.                             | |
| └─────────────────────────┘ | | Subtle terrazzo background to imply Italian marble floors.                      | |
|                             | └────────────────────────────────────────────────────────────────────────────────┘ |
+-----------------------------+------------------------------------------------------------------------------------+
```

### Interaction Notes
- Dashboard defaults to current month; top-right includes export buttons (CSV/PDF) with iconography: luchador mask vs. Roman coin.
- Quick Add modals open with culturally themed illustrations (e.g., grocery bag of Mexican produce, Italian market scene).
- Responsiveness: Left column collapses under main charts on tablet/mobile; nav transforms into hamburger with animated tricolor ribbon.

## 3. Add Income / Expense Modal

```
┌─────────────────────────────────────────────────────────────────┐
| Modal Header: Gradient bar (Fiesta Red → Mediterranean Navy)    |
| Title: "Registrar Ingreso / Registra Entrata"                   |
| Tabs: [Income] [Expense] (with respective icons: guitar & mandolin)|
|                                                                 |
| Form Section:                                                   |
|  - Amount Input (prefix €)                                      |
|  - Date Picker (calendar with papel picado tooltip)             |
|  - Source / Description fields                                  |
|  - Category + Subcategory dropdown with color-coded chips       |
|  - Split toggle (Paola / Carlo percentages slider)              |
|                                                                 |
| Cultural Accent Bar: Display dynamic proverb (ES/IT alternating)|
|                                                                 |
| Actions: [Save Entry] (primary), [Cancel] (ghost button)        |
| Footer: "Need inspiration?" link to budget tips infographic.   |
└─────────────────────────────────────────────────────────────────┘
```

### Interaction Notes
- Inputs adhere to WCAG with clear focus outlines (gold highlight).
- Split toggle slider uses icons: sombrero for Paola, gondola for Carlo.
- Error states show bilingual tooltips with matching iconography.

## 4. Category Management Page

```
+---------------------------------------------------------------------------------------------------------------+
| Header Ribbon: Papel picado meets Italian fresco, indicating personalization space                           |
+------------------------------+-------------------------------------------------------------------------------+
| Sidebar (Filters)            | Main Content                                                                  |
| ┌──────────────────────────┐ | ┌───────────────────────────────────────────────────────────────────────────┐ |
| | Search Bar               | | | Category Table                                                             | |
| | Filter by Culture tags   | | | Columns: Category, Subcategories count, Cultural Tag (Mexican/Italian/Both)| |
| | (chips w/ flags)         | | | Action buttons (Edit/Delete) with icon pairing (piñata / colosseum).      | |
| | Add Category button      | | |                                                                               |
| | (Cactus Green outline)   | | | Inline form appears with accordion animation reminiscent of accordion music.| |
| └──────────────────────────┘ | └───────────────────────────────────────────────────────────────────────────┘ |
+------------------------------+-------------------------------------------------------------------------------+
| Bottom Callout: Illustrated mariachi & street musician reminding users to celebrate savings.                 |
+---------------------------------------------------------------------------------------------------------------+
```

### Interaction Notes
- Uses responsive table turning into cards on mobile; each card features diagonal split color background for cultural tag.
- Add Category form allows assigning cultural accent (affects icons elsewhere).

## 5. Reports Page

```
+----------------------------------------------------------------------------------------------------------------+
| Header: "Reports / Reportes / Rapporti" with rotating tricolor underline                                      |
+----------------------------------------------------------------------------------------------------------------+
| Filter Bar: Date range picker, Category multiselect chips, Export dropdown (CSV, PDF).                          |
+-----------------------------------+-----------------------------------------------------------------------------+
| Left Column                       | Right Column                                                                |
| ┌───────────────────────────────┐ | ┌────────────────────────────────────────────────────────────────────────┐ |
| | Stacked Bar Chart             | | | Savings Projection Line Chart                                           | |
| | Colors follow cultural blend  | | | Data points represented as marigold blossoms & olive leaves.            | |
| | Hover tooltips bilingual.     | | | Tooltip backgrounds mimic parchment texture.                             | |
| └───────────────────────────────┘ | └────────────────────────────────────────────────────────────────────────┘ |
| ┌───────────────────────────────┐ |                                                                             |
| | Table of Monthly Summaries    |                                                                             |
| | Zebra stripes alternate fiesta|                                                                             |
| | yellow and terracotta.        |                                                                             |
| └───────────────────────────────┘ |                                                                             |
+-----------------------------------+-----------------------------------------------------------------------------+
```

### Interaction Notes
- Export buttons trigger modal confirming language preference for report.
- Charts support keyboard navigation with high-contrast focus outlines.

## Responsive Behavior Summary
- **Desktop (≥1200px):** Grid-based layout with split columns.
- **Tablet (768-1199px):** Dashboard reorganizes into single column, cards stack, navigation compresses.
- **Mobile (≤767px):** Hero backgrounds collapse into vertical gradient, forms become full-screen overlays, charts replaced with simplified sparkline summaries.

## Accessibility Considerations
- Contrast ratios ≥ 4.5:1; ensure bright colors have muted complements.
- All culturally themed icons include descriptive alt text (e.g., "Sombrero icon representing Paola" ).
- Language toggles have `aria-pressed` states; dual-language labels use `<span lang="es">` / `<span lang="it">` semantics.

## Next Steps
1. Develop high-fidelity mockups using the defined palette and motifs.
2. Prototype interactions for Quick Add modals and dashboard animations.
3. Validate cultural elements with Paola and Carlo to avoid stereotypes and ensure authenticity.
