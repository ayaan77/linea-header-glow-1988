

## Reduce Mobile Image Size in Product Showcase

### Problem
The mobile carousel images are still too large, taking up too much screen height. The screenshot confirms the image fills nearly the entire viewport.

### Change

**File: `src/components/content/ProductShowcase.tsx` (line 71)**

Change the mobile card aspect ratio from `aspect-[5/4]` to `aspect-[2/1]` (landscape, 2:1 ratio). This cuts the image height roughly in half compared to the current near-square ratio, making the section much more compact on mobile.

```
// From:
<div className="bg-limestone aspect-[5/4] overflow-hidden ...">

// To:
<div className="bg-limestone aspect-[2/1] overflow-hidden ...">
```

### What stays the same
- Desktop/tablet 5-column grid with `aspect-[3/4]` cards -- unchanged
- All padding, carousel behavior, and progress bar positioning unchanged

