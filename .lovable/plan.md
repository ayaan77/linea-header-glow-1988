

## Add Padding to the Full-Bleed Nature Image

### What Changes
Add responsive padding around the nature image section (the `scarfFront` image between the B Corp section and the editorial blocks) so it has breathing space on all sides across all screen sizes.

### Details

**File:** `src/pages/about/Sustainability.tsx` (line 72)

- Add horizontal padding: `px-4 md:px-8 lg:px-12`
- Add top padding: `pt-10 md:pt-16 lg:pt-20`
- Keep the existing `relative w-full overflow-hidden` classes

This ensures the image is inset from the edges on mobile, tablet, and desktop, with proportional top spacing.

