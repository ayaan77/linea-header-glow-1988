

## Reduce Mobile Product Showcase Height to 70%

### Problem
The mobile carousel cards at `aspect-[4/5]` are still too tall. Need to reduce the card height to roughly 70% of its current size on mobile only.

### Change

**File: `src/components/content/ProductShowcase.tsx` (line 71)**

Update the mobile card aspect ratio from `4/5` to `8/7`. This makes the card 70% as tall as the current ratio while keeping it slightly portrait-oriented:

```jsx
// From:
<div className="bg-limestone aspect-[4/5] overflow-hidden flex items-center justify-center">

// To:
<div className="bg-limestone aspect-[8/7] overflow-hidden flex items-center justify-center">
```

### Rationale
- Current `aspect-[4/5]`: height = 1.25x width (tall portrait)
- New `aspect-[8/7]`: height = 0.875x width (nearly square, compact)
- This is exactly ~70% of the current height
- Desktop/tablet `aspect-[3/4]` grid stays completely unchanged

