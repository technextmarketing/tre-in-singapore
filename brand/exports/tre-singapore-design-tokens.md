---
name: TRE™ in Singapore
description: The Singapore home of TRE™. Real session rooms under a navy wash, bronze and gold tremor lines that tremble and settle, and one orange action per view.
colors:
  navy: "#1c3d7a"
  navy-deep: "#132b56"
  navy-ink: "#0f1f3d"
  blue: "#2a63a8"
  blue-soft: "#e7eef8"
  blue-tint: "#f4f7fc"
  bronze: "#8b6b45"
  bronze-soft: "#b89a72"
  gold: "#c9a45c"
  gold-soft: "#f3e8d2"
  brown: "#5f4630"
  orange: "#e08a2e"
  orange-deep: "#c4741d"
  cream: "#faf6ef"
  cream-2: "#f2e9db"
  paper: "#ffffff"
  ink: "#1b2536"
  ink-2: "#3a4657"
  muted: "#5f6b7d"
  muted-2: "#8391a3"
  line: "#e4dfd6"
  line-2: "#ece8e0"
  on-navy: "#dbe3f1"
  on-navy-soft: "#cdd8ea"
  green: "#2f8f5b"
  red: "#b9412f"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif"
    fontSize: "clamp(1.65rem, 3vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  headline-feature:
    fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-lead:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.14rem"
    fontWeight: 400
    lineHeight: 1.6
  body-article:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.04rem, 0.98rem + 0.25vw, 1.13rem)"
    fontWeight: 400
    lineHeight: 1.75
  quote:
    fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif"
    fontSize: "clamp(1.28rem, 1.1rem + 0.8vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.36
    letterSpacing: "-0.012em"
  button:
    fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif"
    fontSize: "0.93rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.005em"
  label:
    fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  badge:
    fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  xs: "6px"
  sm: "10px"
  frame: "12px"
  md: "16px"
  pill: "999px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.45rem"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.orange-deep}"
    textColor: "{colors.navy-ink}"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.45rem"
    height: "46px"
  button-navy-hover:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.45rem"
    height: "46px"
  button-outline-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.45rem"
    height: "46px"
  button-light-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.navy}"
  button-ghost-light:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.9rem 1.45rem"
    height: "46px"
  button-ghost-light-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
  button-small:
    padding: "0.65rem 1.05rem"
    height: "38px"
  hero:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
    padding: "72px 0 88px"
  hero-window:
    backgroundColor: "{colors.navy-ink}"
    rounded: "{rounded.md}"
  close-band:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "48px"
  card-record:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  panel-navy:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.md}"
    padding: "clamp(24px, 4.4vw, 44px)"
  photo-window:
    backgroundColor: "{colors.navy-ink}"
    rounded: "{rounded.md}"
  badge-gold:
    backgroundColor: "{colors.gold-soft}"
    textColor: "{colors.brown}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: "0.32rem 0.65rem"
  badge-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: "0.32rem 0.65rem"
  badge-category:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: "0.32rem 0.65rem"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.85rem 1rem"
    height: "48px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    height: "36px"
  chip-active:
    backgroundColor: "{colors.gold-soft}"
    textColor: "{colors.brown}"
  segmented-active:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "40px"
---

# Design System: TRE™ in Singapore

## Overview

**Creative North Star: "Release, Made Visible"**

The site acts out TRE™ instead of describing it. Every page opens on a real session room (wood floors, mats, garden light) seen sharp through a navy colour grade and a navy-ink wash. Across the lower band of the copy side runs a field of fine bronze and gold tremor lines that shake under the words, tremble again wherever the pointer passes, and fade out just past the copy, so no line ever crosses a face in the photograph: charge, release, settle, readable even in a still frame. Below the hero the page turns calm, on paper and cream grounds, where the same lines return as drawn rails, flows and node rings that draw once as they enter. Every page ends on a navy close that offers both paths: a provider or an event for newcomers, the certification intake call for professionals.

This is a precisely specified extension of the incumbent TRE Singapore world, not a replacement. The palette comes from the logo (navy wordmark, globe blue, bronze eagle and continents, brown "Singapore") plus the existing orange call-to-action colour. The type is technext.asia's Plus Jakarta Sans over Inter, made binding by the user on 2026-09-29. Density is moderate and editorial: a 1180px column, a 96px section rhythm, photographs in 16px windows, and hairline-ruled lists where other sites would reach for boxed tiles.

Motion is rich but regulated, because the audience is looking for relief from stress. It is breath-paced in the hero, drawn once in sections and eased out everywhere else, with no springs and no bounce. Everything is visible by default and completely still under reduced motion, and one pause control (in every hero and on every ribbon, remembered per visitor) stops whatever moves on its own (WCAG 2.2.2). The world refuses the flat navy banner with decorative blobs, the stock or blurred wellness photograph, one fade-up repeated on every section, eyebrow labels, stat-tile rows and icon-card grids.

**Key Characteristics:**
- Real, sharp session photography graded toward navy under a wash that is densest on the copy side, with a provenance credit on every hero.
- Bronze and gold are the only drawn colour: hairlines, tremor strokes, flow lines, rails and node rings.
- Orange fills the one primary action in view and carries a navy-ink label.
- Navy-tinted neutrals on paper and cream; navy ink carries heroes, illustrative panels and closes.
- Plus Jakarta Sans 700 headings, with at most one italic accent phrase, over Inter 16px/1.65 text.
- Drawn SVG line icons at a 1.75px round stroke; never text glyphs.
- One signature interaction, the tremor field; sections draw once and then hold still.

## Colors

A logo-derived palette: deep navy ink for the world's fields, bronze and gold for everything drawn, one orange for action, all on warm cream and white paper with navy-tinted ink.

### Primary
- **Navy Ink** (#0f1f3d): the field colour of the world. It backs every hero, tints the hero wash (as `rgb(15,31,61)`), and fills the illustrative panels, the closes, the phone menu sheet and the footer.
- **Deep Navy** (#132b56): the second stop of every navy gradient (closes, the home practitioner section) and the hover fill of navy buttons.
- **Wordmark Navy** (#1c3d7a): headings, links, navy buttons, the active nav item, table heads and the sliding thumb of segmented controls. It is also the hero colour grade: a colour-blend layer at 42% over each photograph.
- **Globe Blue** (#2a63a8): link hover, the "in progress" status, and the corner light inside navy panels (radial glows at 30–45% alpha from one corner). Text-safe on white at 6.1:1.
- **Blue Soft / Blue Tint** (#e7eef8 / #f4f7fc): hovered table rows and filters, inactive price tiers, segmented tracks and info notes. They are not section grounds in this build.

### Secondary
- **Eagle Bronze** (#8b6b45): drawn icons, link arrows, roles and credentials, and italic accent words on light grounds (4.9:1 on paper, 4.55:1 on cream).
- **Soft Bronze** (#b89a72): quiet tracks, unlit node rings and the scrollbar thumb. It is for marks only; as text it fails at 2.7:1.
- **Continent Gold** (#c9a45c): the tremor strokes, hairlines, the ink that fills a rail, lit nodes, the focus ring, category badges, and text accents on navy (7.0:1 on navy ink, 5.9:1 on deep navy).
- **Gold Soft** (#f3e8d2): tick rings, gold badges, active filter chips and text selection.
- **Singapore Brown** (#5f4630): text on gold-soft and cream badges and tags; the "Singapore" of the wordmark.

### Tertiary
- **Action Orange** (#e08a2e): the fill of the single primary action in view, and the text caret in form fields.
- **Deep Orange** (#c4741d): the hover fill of that action. It is never text.

### Neutral
- **Cream** (#faf6ef) and **Cream 2** (#f2e9db): the alternate section ground and the warm reading grounds (callouts, the article contents box, the highlighted price tier), plus the scrollbar track.
- **Paper** (#ffffff): the default ground, record cards, sidebar boxes and forms.
- **Ink** (#1b2536): body text (15.4:1 on paper).
- **Ink 2** (#3a4657): secondary copy, list text and leads.
- **Muted** (#5f6b7d): meta, captions, notes and placeholders. It is the lightest text allowed on light grounds (5.4:1 on paper, 5.0:1 on cream).
- **Muted 2** (#8391a3): non-text marks only (legend dots, past-event nodes). At 3.2:1 it fails as text.
- **Line / Line 2** (#e4dfd6 / #ece8e0): warm hairlines. Line 2 borders cards and draws the lighter dividers; Line rules the main lists and borders inputs.
- **On-Navy** (#dbe3f1) and **On-Navy Soft** (#cdd8ea): body and secondary text on navy grounds (12.7:1 and 11.4:1 on navy ink). These are literal values in the build, not custom properties yet.

### Semantic
- **Green** (#2f8f5b): the success mark on a sent form. Open-status text uses a deeper green ink (#1f6b42, 6.5:1).
- **Red** (#b9412f): sold-out states and tiers, and field errors (5.4:1 on paper).

### Named Rules
**The One Orange Rule.** Orange fills exactly one action per view: the page's primary. Record cards, rails and agenda rows repaint their primaries navy; while any other orange primary is on screen, the header's "Book a call" steps back to navy; on touch screens every directory card shows a navy "Book now". Orange is never a surface, a badge, a glow or a text colour.

**The Navy-Ink Label Rule.** Every orange primary carries a navy-ink label (6.1:1 on the fill, 4.57:1 on the hover fill). White on orange measures 2.7:1 and never ships. The label is set in CSS on the primary itself, so it holds without JavaScript, and any rule that repaints a primary navy sets its own white label at rest and on hover.

**The Drawn Gold Rule.** Bronze and gold are the only colours that draw: hairlines, tremor and wave strokes, rails, node rings and icons. Gold never sets text on paper or cream (2.35:1); on light grounds the text accent is bronze. Gold text sits on navy ink or deep navy, not on mid navy (4.48:1, just under the floor).

**The Tinted Ink Rule.** No text is ever pure grey. On light grounds text is ink, ink 2 or muted; on navy it is white, on-navy or on-navy soft.

## Typography

**Display Font:** Plus Jakarta Sans (with Inter, system-ui, sans-serif)
**Body Font:** Inter (with system-ui, -apple-system, Segoe UI, sans-serif)
**Label/Mono Font:** no separate face. Labels use Plus Jakarta Sans; numerals are tabular in tables, prices, dates, countdowns and counts.

**Character:** technext.asia's pairing with the same stacks, self-hosted in `assets/fonts` with metric-matched local fallbacks (no layout shift when the faces arrive). The display face is geometric-humanist, set bold and slightly tight for headings, buttons and navigation; Inter carries the reading text quietly. Italic is the accent voice: the wordmark, one accent phrase in a heading, and the pull quotes on closes.

### Hierarchy
- **Display** (700, clamp(2.2rem, 4.6vw, 3.5rem), 1.12, -0.025em): the page H1 in every hero, white over the wash with a soft navy text shadow and a 17ch measure. The home hero steps up to clamp(2.4rem, 5.6vw, 4.4rem) at 1.04 (14ch); article heroes use clamp(2.05rem, 3.7vw, 3.1rem) at 1.08; phones (640px and below) use clamp(1.9rem, 8vw, 2.3rem).
- **Headline** (700, clamp(1.65rem, 3vw, 2.35rem), 1.12, -0.015em): section H2. Phones use clamp(1.5rem, 6.4vw, 1.85rem).
- **Feature headline** (700, clamp(1.9rem, 3.4vw, 2.7rem), 1.12): the statement heading that opens a major section (the two paths, what TRE™ is, certification, get listed). The home page tightens it to -0.022em.
- **Title** (700, 1.22rem, 1.12): H3. Card and list titles run 1.1–1.3rem at a 1.25–1.3 line height.
- **Body** (400, 16px, 1.65): Inter in ink, secondary copy in ink 2, held to a 56–68ch measure.
- **Lead** (400, 1.14rem, 1.6): the first paragraph under a heading, and the hero lede at 1.16rem.
- **Article body** (400, clamp(1.04rem, 0.98rem + 0.25vw, 1.13rem), 1.75): reading mode, a 66ch measure in a 720px column.
- **Pull quote** (600, clamp(1.28rem, 1.1rem + 0.8vw, 1.6rem), 1.36, -0.012em): the display face in navy, set upright under a drawn gold wave. Closing quotes on navy switch to italic 700.
- **Button** (700, 0.93rem, 1, 0.005em): sentence case. Nav links are 600 at 0.92rem with no tracking.
- **Label** (700, 0.72rem, 0.08em, uppercase): data labels only, such as the terms in a facts band and requirement tags. Table heads and footer column titles use 0.74–0.78rem at 0.06em.
- **Badge** (700, 0.72rem, 1.2, 0.04em, uppercase): location and category pills.

### Named Rules
**The Heading Speaks Rule.** No eyebrow or kicker line ever sits above a heading. The uppercase label style belongs to data (facts, table heads, badges), never to an introduction; in record heroes the badges follow the H1.

**The One Italic Accent Rule.** A heading carries at most one italic accent phrase: gold on navy, bronze on light.

## Layout

The page is a single centred column, 1180px wide with 24px side padding at every width, on the 4/8/12/16/24/32/48/64/96px scale. Sections breathe at 96px top and bottom, and at 64px from 760px down; section heads sit 32–48px above their content, so there is always more space above a heading than below it. Grounds alternate paper and cream. Navy ink carries the heroes, the illustrative panels, the home practitioner section, the closes and the footer.

Compositions are asymmetric two-column splits (5/7, 1.1fr/0.9fr) with fluid gaps of clamp(40px, 6vw, 88px); they collapse to one column at 900px. Record grids run three up at a 24px gap, two up at 980px and one up at 640px. On phones the home and detail collections become horizontal snap rows (cards at 84–86% of the width) instead of long stacks. Detail pages (events, facilitators) pair the content column with a 348px sticky sidebar, which becomes static at 900px. Articles set a 720px reading column; at 1100px and wider a 232px sticky contents rail sits beside it.

The hero is full-bleed with a minimum height of clamp(500px, 68vh, 720px); articles use clamp(460px, 62vh, 640px). The copy sits on the left, where the wash is densest; record pages put their own image in a window on the right. From 760px down the hero shrinks to its content with 52px above and 88px below. The direction contract asked for about 70vh, and the build settles at 68vh.

Breakpoints that carry the system are 980px (navigation becomes the phone sheet), 900px (splits collapse), 760px (phone rhythm and the compact hero), 640px (type steps down, grids go to one column, button rows stretch) and 480px (compact header). Pointer effects are gated on hover-capable fine pointers. Touch targets are at least 44px. Sticky offsets key off the 66px scrolled header.

### Named Rules
**The Ruled List Rule.** Lists of offers, values, inclusions, kinds and checks are hairline-ruled rows (1px line) with a drawn icon or node, never a grid of same-size boxed tiles.

## Elevation & Depth

Depth is a hybrid. Tonal grounds (paper, cream, navy ink) do most of the work, and navy-tinted shadows that are offset downward with a soft blur mark only what can be picked up: record cards, photo windows, forms, sidebar boxes and the facts band. Full-bleed navy fields (heroes, bands, the footer) stay flat; their depth comes from a corner light (a radial blue glow) and from the photograph, not from shadows. A navy panel set into a light ground takes the Deep panel shadow.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 2px rgba(19,43,86,.05), 0 4px 14px rgba(19,43,86,.06)`): cards, sidebar boxes, strip photos and toolbars at rest.
- **Lift** (`box-shadow: 0 2px 6px rgba(19,43,86,.07), 0 18px 44px rgba(19,43,86,.13)`): the hover state of cards; photo windows, featured panels and the map.
- **Primary rest** (`box-shadow: 0 8px 18px -12px rgba(15,31,61,.6)`): the orange action at rest.
- **Primary hover** (`box-shadow: 0 14px 26px -14px rgba(15,31,61,.6)`): the orange action lifted.
- **Navy hover** (`box-shadow: 0 10px 24px rgba(19,43,86,.22)`): navy buttons on hover; outline buttons use the same at .18.
- **Facts band** (`box-shadow: 0 1px 2px rgba(19,43,86,.05), 0 28px 54px -32px rgba(19,43,86,.36)`): the fact strip that overlaps the foot of a record hero.
- **Deep panel** (`box-shadow: 0 30px 70px -32px rgba(15,31,61,.6)`): navy illustrative panels on light grounds.
- **Hero window** (`box-shadow: 0 30px 70px -28px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.14)`): a poster or portrait window over the hero photograph.
- **Indicator** (`box-shadow: 0 6px 16px rgba(19,43,86,.18)`): the sliding thumb of a segmented control.

Node rings (`0 0 0 5–7px` of gold at 16–30%) mark a lit or active node. They are state, not elevation.

### Named Rules
**The Neutral Depth Rule.** Every shadow is navy-tinted, offset and softly blurred. The orange action gets the same neutral depth as everything else, never an orange glow, and a zero-offset glow is never used as depth.

## Shapes

Corners come in five steps: 16px for cards, photo windows, panels, closes, forms and the map; 10px for inputs, price tiers, thumbnails, the contents box and media inset inside a padded card; 12px for portraits and popovers; 6px for checkboxes and tooltips; and a full pill for buttons, badges, chips, segmented tracks and the search field. Inner radii step down from their container (a 16px card with a 10px inset holds a 10px photo).

Borders are 1px warm hairlines: line 2 around cards, line for rules and inputs. On navy, the divider between two paths is a 1px line of white at 14–16% or gold at 30–35%. Circles mark nodes and numbered steps (12–56px), round icon buttons (44px) and avatars. Drawn strokes are 1–2px with round caps; tremor and wave paths run 1.1–1.75px.

### Named Rules
**The Window Rule.** A photograph is either full-bleed under the hero wash or clipped inside a rounded window with a navy-ink backing. It is never a geometric cut-out.

## Components

### Buttons
Tactile and calm: pills that lift a little, press a little and never bounce.
- **Shape:** a full pill (999px), at least 46px tall, with a 2px border, sentence-case Plus Jakarta Sans 700 at 0.93rem, and no wrapping. The small size is 38px tall with 0.65rem 1.05rem padding at 0.84rem.
- **Primary:** an orange fill and border, a navy-ink label and a drawn arrow (a 1.05em mask) that slides 4px on hover. On hover the fill turns deep orange, a soft sheen sweeps across once (0.6s) and the neutral shadow lifts.
- **Navy:** a navy fill with a white label. Hover turns it deep navy with the navy shadow. This is the primary for record cards and rails; a primary repainted navy restates the white label for both states.
- **Outline:** transparent, with navy text and a navy border at 35%. Hover fills it navy with a white label. It is the quiet partner of a navy or orange primary on light grounds.
- **Light:** a white fill with navy text; hover turns cream. It serves a secondary action on a navy panel.
- **Ghost light:** transparent, with white text and a white border at 55%. Hover fills it white with a navy label. It is the secondary action in heroes and closes.
- **Hover / Focus / Press:** a 2px lift over 320ms on the exponential ease-out; press scales to 0.98 over 180ms; a ripple spreads from the pointer. On fine pointers a 150px pointer glow (the label colour at 18%) follows the cursor and the button leans up to 5px toward it. Focus is the 3px gold ring at a 3px offset. Disabled buttons drop to 50% opacity.

### Link arrows
Plus Jakarta Sans 700 at 0.92rem in navy, at least 44px tall, followed by a drawn bronze arrow that slides 5px on hover while the text turns blue. On navy the text is white, the arrow gold, and the hover gold.

### Badges and status
- **Style:** a pill in the badge type (0.72rem, uppercase, 0.04em) with 0.32rem 0.65rem padding. Gold badges are brown on gold soft; navy badges are white on navy; category badges are navy ink on gold. On a photograph a badge is white at 94% with navy text; on a navy hero it is white at 14% with a 1px white border at 22%.
- **State:** at most two badges per card (location and category). Status is a coloured dot plus a text line, never a third chip: open in green ink, sold out in red, in progress in blue, completed in muted. Status text is held to 4.5:1.

### Chips and segmented controls
- **Filter chips:** pills 36–44px tall, white with a 1px line border and ink 2 text. Hover warms the border to bronze; active turns gold soft with a gold border and brown text. A zero-result chip turns dashed and muted.
- **Segmented controls:** a pill track with a 4px inset (paper or blue tint with a 1px line 2 border). Items are 40–46px tall; the active item rides a navy thumb that slides over 320–500ms with a white label. Counts are tabular.

### Cards (records)
- **Corner Style:** 16px, with the photo clipped inside.
- **Background:** paper, with a 1px line 2 border.
- **Shadow Strategy:** Rest, rising to Lift on hover with a 4–5px lift (3px in the directory); the photo zooms to 1.04–1.045 over 1–1.2s.
- **Internal Padding:** 24px bodies; media on top at 16:9, 16:10 or 1:1.
- **Behaviour:** a card's primary is navy, never orange. The title is the link; on hover it turns blue or draws a gold underline. Meta lines pair a drawn bronze icon with muted text. Past events go quiet (a desaturated poster until hover). Cards never nest.

### Photo windows and strips
- **Window:** a 16px rounded frame on navy ink with the Lift shadow. The photo sits at 1.06 scale and eases to 1.09 on hover over 1.2s, and may drift a few pixels against the scroll. A caption sits on a navy gradient in 0.8rem white.
- **Strip:** a horizontal scroll-snap row of windows, draggable with a mouse, with a thin progress track (a bronze or gold thumb) and 44px round previous and next buttons. Any photo opens the lightbox: a 92% navy scrim, drawn chevrons and close, a tabular counter, swipe and arrow keys.

### Navy panels
Navy ink with a corner light, a 16px radius and clamp(24px, 4.4vw, 44px) padding. Text is on-navy, headings white, and internal hairlines white at 9–12%. These panels hold the illustrative figures (the tremor field to disturb, the mechanism chart, the online-preparation checklist); a small outlined "Illustrative" tag marks anything that is a diagram rather than a record.

### Inputs / Fields
- **Style:** 48px minimum height, Inter at 1rem, 0.85rem 1rem padding, a 1px line border, a 10px radius, a paper fill and an orange caret. The label is Plus Jakarta Sans 700 at 0.8rem in navy and turns bronze while its field has focus. Selects use a drawn bronze chevron; textareas start at 150px.
- **Focus:** the border turns navy with a 4px gold ring at 30%.
- **Error / Disabled:** errors appear only after the visitor has touched a field or tried to send: a red border, a 4px red ring at 10%, and a red label with a drawn alert mark. Checkboxes are 20px with a 6px radius and a 1.5px navy border at 38%; checked, they turn navy with a white tick. Success is a green-tinted note with a drawn check.

### Navigation
- **Header:** a sticky white bar (94% opaque, 98% once scrolled) that gains a line 2 hairline and the Rest shadow when the page scrolls. The logo lockup is 58px tall (46px scrolled, 42px at 480px and below). Nav links are Plus Jakarta Sans 600 at 0.92rem in ink 2, turning navy on hover, with a 2px gold underline that slides in; the active link keeps it. "Book a call" is the small primary at the end of the row. On desktop it steps back to navy with a white label (a 0.35s cross-fade) while any other orange primary is on screen; the layer script counts the orange actions in view for this and for nothing else.
- **Phone sheet (980px and below):** a full-screen navy-ink sheet with a blue corner light. It opens as a circle from the toggle (0.55–0.6s ease-out). Links are Plus Jakarta Sans 700 at clamp(1.5rem, 6.2vw, 2rem) in white on 10% hairlines, gold when active or hovered. The primary sits beneath them and the contact lines sit at the foot; the logo turns white. Under reduced motion the sheet simply appears.
- **Footer:** navy ink, a compact three-column block and a one-line legal bar. Text is #b9c5da and links are #c9d3e6; both turn gold on hover as a 1px gold underline draws in. Social icons sit in 38px circles that fill gold on hover. It carries "Powered by TechNext".

### Accordion
Hairline-ruled rows with no boxes. The summary is Plus Jakarta Sans 700 at 1.06rem in navy, 44–64px tall. A drawn 22px bronze plus rotates 45° to close, and the answer opens by animating its height (0.45s ease-out).

### Hero (signature)
The first viewport of every page (built as `.hx`), in six layers:
1. **Photo:** the page's real session room, sharp, with a per-page focal point. It breathes in a 32s push-in (scale 1.04 to 1.12) and drifts with the pointer by up to 8px sideways and 5px vertically.
2. **Grade:** wordmark navy in colour-blend mode at 42%. Hue comes from navy; luminance and detail stay the photo's own.
3. **Wash:** navy ink at 92% on the left and 80% at 34%, easing to deep navy at 36% by 62% and 10% at the right edge, plus a 55% floor gradient and a 28% cap. Over the photo side a 280px pointer lens thins the wash to reveal the room.
4. **Tremor field:** the signature canvas, described below.
5. **Copy:** H1, lede, the orange primary and a ghost-light secondary. It settles out of a 6px blur with a 14px rise over 0.95s, staggered 90ms.
6. **Credit:** the photo's provenance in 0.74rem white at 78%, after a 22px gold hairline, top right (bottom left on phones).

Record pages (events, facilitators) add a split variant: their own poster (16:9) or portrait (1:1) in a 16px window on the right, with the Hero window shadow and a counter-drift. The home page keeps its full-screen video under the same grade and tremor field, with its own left-dense wash (94% to 82% to 42%). On phones the wash turns vertical (55% to 78% to 90%). In print the hero becomes a clean black-on-white header.

### Tremor field (signature)
Seven fine lines across the lower band of the hero (56–95% of its height; 62–95% on home), stroked in gold and bronze at 1.5px with alpha from 0.18 to 0.45 (the middle lines strongest). They breathe on an 8s cycle with a 17px amplitude and 360–640px wavelengths, with a resting shiver under the text. The lines live under the copy column only: each stroke holds full strength to 25% of the hero width and fades to nothing at 46%. A hero whose photograph brings people closer to the copy sets its own end (`--lines-end`: 0.44 on contact, 0.38 on the blog and the workday article). The pointer (150px reach) adds a 7px tremble that settles in about 1.2s, and every 9s of stillness a slow pulse of release travels along one line. The field pauses off screen and in background tabs, and draws one still frame under reduced motion. The same field also illustrates the reflex inside a few navy panels (home, education) and turns the ruled rows on the about page into lines that tremble only under the pointer. The direction contract had the lines settle flat toward the photo and kept continuous motion to heroes; the build ends the lines before the photo and extends the field to these illustrative panels.

**The Charge-Release-Settle Rule.** Every tremor surface reads charge, release and settle in a still frame: energy under the words, gone before the image. Pointer energy always decays back to rest.

**The Clear Faces Rule.** No tremor line may cross a face in the photograph. Hero lines shake under the copy column only and fade out by 46% of the width; a hero with people nearer the copy pulls that end in further.

### Drawn rails and nodes
Timelines, flows and module paths share one vocabulary: a 1–1.5px track in line or soft bronze, a gold ink line that draws once on entry (1.6s, cubic ease-out) or follows the reading line as you scroll, and nodes of 12–18px with a 1.5–2px gold ring on paper that fill gold when the line reaches them.

### The close (signature)
Every page ends here: a navy-ink panel (16px radius, 48px padding, white heading, on-navy-soft text) or a full-bleed navy band. Most closes carry settled gold wave lines, drawn once, along the foot or behind the words. On the panel variant a gold pointer glow (a 420px radial) appears only under a pointer; at rest there is none.

**The Both-Paths Close Rule.** The close always offers both routes: a provider or an event for newcomers, and the intake call for professionals. The two paths are visibly separate (a 1px hairline, a drawn fork, or two equal buttons), and at most one of them is orange.

## Do's and Don'ts

### Do:
- **Do** open every page on a real session photograph, sharp, graded to navy (colour blend at 42%) under a wash densest on the copy side, with the tremor band under the copy (never across a face) and a provenance credit.
- **Do** keep exactly one orange primary in view, give it a navy-ink label (#0f1f3d), and repaint card, rail and agenda primaries navy.
- **Do** draw with bronze and gold only: hairlines, rails that fill with gold, node rings, and the settled wave lines on a close.
- **Do** end every page on a navy close that offers both paths.
- **Do** use drawn SVG line icons at a 1.75px round stroke, bronze on light and gold on navy.
- **Do** keep text navy-tinted: ink, ink 2 or muted on light; white, #dbe3f1 or #cdd8ea on navy.
- **Do** move on the exponential ease-out (cubic-bezier(.16,1,.3,1)): 180ms for colour, 320ms for lifts and fills, press to 0.98. Draw sections once; keep everything visible by default and still under reduced motion.
- **Do** keep touch targets at 44px or more and the 3px gold focus ring at a 3px offset.
- **Do** use the official TRE Singapore logo lockup exactly as supplied.

### Don't:
- **Don't** put an eyebrow or kicker label above a heading.
- **Don't** build stat-tile rows or big-number hero metrics; a figure reads as a word inside its sentence.
- **Don't** build grids of same-size cards made of an icon, a heading and a line of text.
- **Don't** use Unicode glyphs or emoji (→, +, ×) as icons; arrows, plus signs, chevrons and closes are drawn masks.
- **Don't** use gradient text; emphasis comes from weight, size or the single italic accent.
- **Don't** give cards, callouts or list items a coloured side stripe thicker than 1px.
- **Don't** blur the hero photograph or float drifting decorative blobs over it.
- **Don't** set white labels on orange (2.7:1) or gold text on paper or cream (2.35:1).
- **Don't** use orange as a surface, badge, glow or text colour.
- **Don't** use stock or invented people; every photograph shows a real TRE™ room or trainer.
- **Don't** use springs, bounce, or one identical fade-up on every section.
- **Don't** use glass blur (backdrop-filter) or add hues beyond this palette; the one outside colour is WhatsApp's own green on its chat button.
