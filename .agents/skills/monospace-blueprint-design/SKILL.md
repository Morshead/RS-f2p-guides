---
name: monospace-blueprint-design
description: >-
  Enforces the Monospace Geometric Blueprint Dashboard design system across all
  UI components, CSS styles, layout shells, and SVG decorations in this project.
  Use this skill whenever creating, modifying, or reviewing UI components,
  views, styles, or layout structures for this website.
---

# Monospace Geometric Blueprint Design System

All UI work on this website MUST adhere strictly to the **Monospace Geometric Blueprint** aesthetic: crisp `JetBrains Mono` typography, a high-contrast grayscale palette (`#F3F4F6`, `#FFFFFF`, `#FAFAFA`, `#E5E7EB`, `#111827`), `1px` structural borders instead of heavy shadows, and low-opacity geometric SVG blueprint patterns instead of realistic photography.

---

## 1. Typography

- **Primary Font (MANDATORY):** `'JetBrains Mono', monospace` on **every** text element (`html`, `body`, headings, buttons, inputs, table cells, badges, tooltips).
- **Hierarchy:**
  - **Hero Titles:** Bold (`700`), `#111827`, `24px` (`2xl`), tight tracking (`-0.02em`).
  - **Section Headers:** Bold (`700`), `#111827`, `20px` (`xl`).
  - **Card / Panel Titles:** Bold (`700`), `#111827`, `13px–14px`.
  - **Metadata & Micro-Labels:** Bold (`700`), uppercase, `9px–10px`, wide letter spacing (`tracking-widest` / `0.1em`), color `#9CA3AF`.
  - **Body & UI Text:** Medium (`500`), `11px–12px`, color `#111827` (primary) or `#6B7280` (secondary/muted).

---

## 2. Color Palette

| Role | Hex / Value | Usage |
| :--- | :--- | :--- |
| **App Background** | `#F3F4F6` | Main canvas, sticky top header (`64px`), technical badge fill |
| **Surface / Card** | `#FFFFFF` | Cards, active sidebar link, hero panel, tables, inputs |
| **Geometric Wells** | `#FAFAFA` | Aspect-square SVG pattern containers, sub-surfaces |
| **Borders & Dividers** | `#E5E7EB` | Strict `1px solid #E5E7EB` on all containers, sidebar, header, cards |
| **Primary / Interactive** | `#111827` | Headings, active nav text, CTA buttons, profile circle, hover borders, SVG strokes |
| **Secondary Text** | `#6B7280` | Body copy, inactive nav items, technical badge text |
| **Metadata / Muted** | `#9CA3AF` | Breadcrumb base state, `9px–10px` uppercase labels |
| **Semantic Finance Only** | `#059669` / `#DC2626` | Reserved strictly for positive (`+GP/hr` green) and negative (`-GP/hr` red) Money/hr badges |

**DO NOT:** Introduce colorful gradients, glassmorphism blurs, or decorative pastel backgrounds. Keep all structural surfaces strictly grayscale.

---

## 3. Effects, Borders & Interactivity

- **Borders:** `1px solid #E5E7EB` for all cards, panels, inputs, and layout dividers.
- **Shadows:** Subtle `shadow-sm` only (`0 1px 2px 0 rgb(0 0 0 / 0.05)`). Never use heavy or colored drop shadows.
- **Hover Transitions:** Transition container borders from `#E5E7EB` to `#111827` over `150ms ease-in-out`.
- **Interactive Scaling & Shifts:** Smooth `150ms ease-in-out` color and scale transitions on icons and `#111827` primary buttons.

---

## 4. Layout & Structural Specifications

### Left Sidebar (`256px` / `w-64`)
- Fixed `256px` width, full viewport height, `border-right: 1px solid #E5E7EB`, background `#F3F4F6`.
- **Logo Area:** `24px` padding; contains a white icon box (`#FFFFFF`, `8px` radius, `1px solid #E5E7EB`, `shadow-sm`) alongside a two-line text lockup (`9px–10px` bold uppercase `#9CA3AF` `tracking-widest` label over bold `#111827` title).
- **Navigation Groups:** Grouped under `10px` bold uppercase `#9CA3AF` `tracking-widest` labels (`MAIN MENU`, `SKILLS CATALOG`, etc.).
- **Nav Items:** `12px` font size, `8px` vertical padding (`padding: 8px 10px`), transitioning text `#6B7280` → `#111827` on hover.
- **Active State:** Background `#FFFFFF`, `border-radius: 8px`, `1px solid #E5E7EB`, `shadow-sm`, text `#111827`.

### Sticky Header (`64px` / `h-16`)
- `height: 64px`, sticky at `top: 0`, background `#F3F4F6`, `border-bottom: 1px solid #E5E7EB`.
- **Left (Breadcrumbs):** `10px` bold uppercase `tracking-widest` links separated by `ChevronRight` icons, transitioning `#9CA3AF` → `#111827`.
- **Right (Search & Profile):**
  - Search input: `192px` default width expanding smoothly to `256px` on focus, translucent white (`rgba(255, 255, 255, 0.6)`), `1px solid #E5E7EB` (darkens to `#111827` on focus), leading Lucide `Search` icon.
  - Profile indicator: `32px` solid `#111827` circle with bold white initials (`#FFFFFF`).

### Hero Section (`50/50` Split)
- White card (`#FFFFFF`), `1px solid #E5E7EB`, `12px` border-radius, `shadow-sm`.
- **Left Column:** Technical badge, `24px` (`2xl`) bold `#111827` title, `11px–12px` `#6B7280` body text, and primary `#111827` CTA button (`#FFFFFF` text, `12px` bold, `8px` radius, trailing arrow icon).
- **Right Column:** `200px+` minimum height container (`#FAFAFA` / `#F3F4F6`) layered with intricate low-opacity blueprint SVGs (`stroke="#111827"`, `stroke-width: 0.25` to `0.5`).

### Category Grids
- **Section Header:** Left title (`12px` bold uppercase `#111827`) + sub-label (`10px` uppercase `#9CA3AF` `tracking-widest`); right `'Check All'` action link with arrow-circle icon.
- **3-Column Grid:** White cards (`1px solid #E5E7EB`) using the Abstract Geometric Card pattern below.

---

## 5. Special Components

### Abstract Geometric Card (`src/components/ui/GeometricPattern.jsx`)
- **NEVER use photography.** Replace all visual slots with inline blueprint SVGs (`stroke="#111827"`, `stroke-width: 0.2` to `0.5`).
- Top container uses `aspect-square` (or consistent blueprint proportion in dense catalogs) with `background: #FAFAFA` and `border: 1px solid #E5E7EB`.
- Center a Lucide icon styled in `#E5E7EB`.
- Layer an absolute-positioned `<svg>` at `opacity: 0.1` to `0.2` rendering one of:
  - **A (`grid`):** `10px` repeating grid with diagonal registration axis.
  - **B (`circles`):** Concentric circles with horizontal/vertical crosshair lines.
  - **C (`triangles`):** Isometric triangle mesh with geometric vertices.
- **Hover Behavior:** When the parent card is hovered, the card border transitions to `#111827` (`150ms ease-in-out`) and the centered Lucide icon transitions from `#E5E7EB` to `#111827` with a subtle scale-up.
- **Bottom Metadata Layout:** Two-column footer with bold item title & asset count/tag on the left, and right-aligned metric/status on the right.

### Technical Badge (`src/components/ui/Badge.jsx`)
- Default technical styling:
  - `background: #F3F4F6`
  - `border: 1px solid #E5E7EB`
  - `color: #6B7280`
  - `font-size: 9px`
  - `font-weight: 700`
  - `text-transform: uppercase`
  - `letter-spacing: 0.1em` (`tracking-widest`)
  - `padding: 2px 8px`
  - `border-radius: 4px`
- Semantic exception: Keep `.badge-emerald` (`#059669`) and `.badge-red` (`#DC2626`) for positive/negative Money/hr indicators in skill guides.

---

## 6. Validation Checklist Before Completing Any UI Change

1. Verify `JetBrains Mono` is applied across all new CSS classes and components.
2. Confirm no realistic images, heavy box shadows, or non-grayscale decorative backgrounds were introduced.
3. Confirm all borders are `1px solid #E5E7EB` (hover `#111827` over `150ms ease-in-out`) and uppercase labels use `tracking-widest`.
4. Run `npm run build` and verify zero build or bundling errors.
