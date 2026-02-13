

## Fix Mobile Product Images to Fit Properly in Container

### Problem
The current mobile container uses `aspect-[3/1]` (very wide and short). Since the product images are portrait-oriented, `object-contain` shrinks them to fit the short height, making them appear tiny. The reference image (image 2) shows a taller container where the product is fully visible, centered, with some white space around it.

### Change

**File: `src/components/content/ProductShowcase.tsx` (line 71)**

Change the mobile card aspect ratio from `aspect-[3/1]` to `aspect-[4/5]` (portrait, taller container). This gives the portrait images enough vertical space to display fully without cropping. Keep `object-contain` so the entire image fits inside with padding around it.

```
// From:
<div className="bg-limestone aspect-[3/1] overflow-hidden flex items-center justify-center">

// To:
<div className="bg-limestone aspect-[4/5] overflow-hidden flex items-center justify-center p-4">
```

Also add `p-4` padding so the image has breathing room inside the container, matching the reference where the product doesn't touch the edges.

### What stays the same
- Desktop/tablet 5-column layout -- completely unchanged
- Carousel behavior, progress bar, scroll logic -- unchanged
- `object-contain` on the image -- kept so nothing gets cropped

