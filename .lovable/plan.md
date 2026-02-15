

## Fix: Navigation Bar Transparency When Scrolled

### Problem
The navigation bar background on line 116-118 uses `bg-[#F2F0E9]/90 backdrop-blur-md` (90% opacity) in its non-transparent state. While the mobile drawer itself is solid, the nav bar container remains semi-transparent even after scrolling, causing visible bleed-through of page content.

### Solution
Make the nav background fully opaque when not in transparent mode (scrolled state or non-homepage). Also ensure it accounts for the mobile menu being open.

### Technical Details

**File: `src/components/header/Navigation.tsx` (lines 116-118)**

Change the `navBg` logic from:
```
bg-[#F2F0E9]/90 backdrop-blur-md
```
to:
```
bg-[#F2F0E9]
```

This removes the 90% opacity and backdrop-blur that were causing page content to show through the navigation bar when scrolled down. The transparent mode (homepage, not scrolled) remains unchanged.

