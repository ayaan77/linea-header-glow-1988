

## Add Expandable Sub-Menus to Mobile Navigation

Currently, tapping "Woman", "Man", "Looks", or "Journal" in the mobile drawer navigates away immediately. The desktop version shows rich dropdowns with sub-categories, but mobile has no equivalent. This plan adds accordion-style expandable menus for items that have sub-content.

### What Will Change

- **Woman** and **Man** will expand on tap to reveal "By Collection" and "Featured" sub-links
- **Looks** will expand to show "Woman" and "Man" season links
- **Journal** (no sub-items) will remain a direct link

### Technical Details

**File: `src/components/header/Navigation.tsx`**

1. Add a `mobileExpanded` state to track which nav item is currently expanded (e.g., `"WOMAN" | "MAN" | "LOOKS" | null`)

2. Replace the mobile nav links section (lines 388-402) with conditional logic:
   - For items with sub-content (`byCollection` or name === "LOOKS"): render a button that toggles `mobileExpanded`, with a Plus/Minus icon. When expanded, show the sub-links in a collapsible section with smooth animation.
   - For items without sub-content ("JOURNAL"): keep as a direct `Link`.

3. Sub-link structure when expanded:
   - **Woman/Man**: Two groups -- "By Collection" (Rings, Necklaces, etc.) and "Featured" (New Arrivals, Spring '26, etc.)
   - **Looks**: Two groups -- "Woman" seasons and "Man" seasons (from existing `looksMenu` data)

4. Each sub-link closes the mobile menu on tap and navigates to the appropriate route.

5. Styling will follow the existing mobile drawer aesthetic: light font weights, wide letter-spacing, subtle borders, and the Plus/Minus toggle icons already imported from lucide-react.

