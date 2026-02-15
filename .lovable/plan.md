

## Fix: Mobile Drawer Transparency Issue

### Problem
When scrolling down and opening the hamburger menu, the page content is visible behind the mobile navigation drawer. This happens because the drawer background uses `bg-limestone/85` (85% opacity) with `backdrop-blur-xl`, which creates a see-through effect showing the underlying page content behind the menu items.

### Solution
Change the drawer background from semi-transparent to fully opaque while keeping the Zen aesthetic intact.

### Technical Details

**File: `src/components/header/Navigation.tsx` (line 344)**

Change `bg-limestone/85 backdrop-blur-xl` to `bg-limestone` (fully opaque). This removes the transparency that causes page content to bleed through, while preserving the frosted-glass overlay backdrop and all other Zen styling (spacing, typography, transitions).

The overlay (line 340) will keep its `bg-black/20 backdrop-blur-sm` since that correctly dims the background before the drawer slides in.

