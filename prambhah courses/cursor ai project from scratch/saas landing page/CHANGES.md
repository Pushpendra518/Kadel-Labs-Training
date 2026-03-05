# Changelog

All notable changes and features for the FlowStack SaaS landing page.

---

## [Unreleased]

### Added
- **Calculator: annual billing option** — The pricing calculator now shows the effective monthly price when paid annually (2 months free: pay for 10 months, get 12). Displayed as “Paid annually: $X USD/mo” below the monthly cost.

---

## 2025-03-01

### Added
- **Initial landing page** — Single-page site with:
  - **Hero section** — Headline, subtitle, primary/secondary CTAs, and animated floating card visuals.
  - **Features section** — Three feature cards: Unified workspace, Smart automation, Real-time analytics.
  - **Pricing calculator** — Interactive sliders for team members, storage (GB), and API calls/month; live-updating monthly cost with bump animation.
  - **Pricing section** — Three tiers (Starter, Pro, Enterprise) with “Popular” badge on Pro.
  - **Testimonials section** — Three customer quotes with name and role.
  - **Header** — Logo, navigation links, and Get Started button.
- **Responsive layout** — Grids stack on smaller screens; hero becomes single column.
- **Hamburger menu** — At viewports ≤650px, nav collapses into a slide-down menu with animated hamburger-to-X icon.
- **CSS animations** — Fade-up on load for hero and cards, float on hero cards, scale-in on highlight underline, bump on calculator price change.
- **Dark theme** — Dark background, green accent (Outfit font), styled range inputs.

### Changed
- **Hero image** — Added a hero image (dashboard/analytics style) in the hero visual area so the section has a clear product visual.
- **Hero floating cards** — Reduced size and moved to corners (top-right, bottom-left, bottom-right) so they no longer cover the hero image; added slight transparency. The image is now the main focus with small floating accents.

---

## How to use this file

- Add a new `### Added` / `### Changed` / `### Fixed` entry under `[Unreleased]` for each change.
- When you release or tag a version, move `[Unreleased]` items into a new dated section and clear `[Unreleased]`.
