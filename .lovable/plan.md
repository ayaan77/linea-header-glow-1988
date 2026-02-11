

## Change Heritage Page Background to Match Homepage

Update the Heritage page wrapper and text sections from the dark theme (`bg-ink text-limestone`) to the light limestone theme (`bg-background text-foreground`), matching the homepage. Everything else -- structure, layout, images, hero overlays -- stays exactly the same.

### Changes in `src/pages/about/Heritage.tsx`

**1. Page wrapper (line 16)**
- `bg-ink text-limestone` → `bg-background text-foreground`

**2. Text color updates for readability on light background**
- Lines 86, 92, 95, 103, 107, 129, 135, 138, 151: `text-concrete` → `text-muted-foreground`
- Line 106: `bg-concrete` → `bg-muted-foreground` (the divider line)
- Line 146: `border-limestone/10` → `border-foreground/10` (bottom CTA border)

**Not changed (kept as-is):**
- Hero section overlay text (lines 28-33) stays `text-concrete` / white since it sits on a dark image overlay
- Video/feature section overlay text (lines 46-54) stays as-is for the same reason -- dark image overlay behind it
- Link accent colors (`text-saffron`) remain unchanged
- All image sources, layout classes, and structure untouched

