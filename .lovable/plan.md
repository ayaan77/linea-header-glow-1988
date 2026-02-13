

## Reduce Mobile Product Showcase Section Size

### Problem
The mobile product showcase section still appears too large. The previous change updated the aspect ratio from `4/5` to `8/7`, but the file confirms this is already applied. The section also has padding and the overall section wrapper contributes to perceived size.

### Changes

**File: `src/components/content/ProductShowcase.tsx`**

1. **Reduce section padding on mobile (line 38):** Change `py-6 px-4` to `py-3 px-3 md:py-6 md:px-8` so mobile gets tighter padding while desktop/tablet stays the same.

2. **Reduce mobile card aspect ratio further (line 71):** Change `aspect-[8/7]` to `aspect-[5/4]` -- this creates a landscape-leaning card that is noticeably shorter than the current near-square ratio. If 70% reduction from the original `4/5` is the target:
   - Original `4/5` = height is 1.25x width
   - New `5/4` = height is 0.8x width (landscape, ~64% of original height -- close to 70% reduction target)

3. **Adjust progress bar position (line 83):** Move `bottom-6` to `bottom-3` to keep the indicator visually anchored within the shorter card.

### Technical Details

```
Line 38: "w-full py-6 px-4 md:px-8 bg-secondary/50"
      -> "w-full py-3 px-3 md:py-6 md:px-8 bg-secondary/50"

Line 71: "bg-limestone aspect-[8/7] overflow-hidden flex items-center justify-center"
      -> "bg-limestone aspect-[5/4] overflow-hidden flex items-center justify-center"

Line 83: "absolute bottom-6 left-0 right-0 px-16"
      -> "absolute bottom-3 left-0 right-0 px-16"
```

### What stays the same
- Desktop/tablet 5-column grid with `aspect-[3/4]` cards -- completely unchanged
- Carousel scroll behavior, snap points, and progress bar logic unchanged

