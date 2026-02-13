

## Match Mobile Product Showcase to Reference Image

### Problem
The current mobile cards use `aspect-[16/9]` (landscape), but the reference image shows a tall, portrait-oriented product card -- approximately a 4:5 ratio.

### Change

**File: `src/components/content/ProductShowcase.tsx` (line 71)**

Update the mobile card aspect ratio from `16/9` to `4/5` to match the reference:

```jsx
// From:
<div className="bg-limestone aspect-[16/9] overflow-hidden flex items-center justify-center">

// To:
<div className="bg-limestone aspect-[4/5] overflow-hidden flex items-center justify-center">
```

### Why 4:5
- Matches the tall, portrait layout shown in the reference screenshot
- Standard mobile product card ratio used across luxury e-commerce
- Desktop/tablet 5-column grid with `aspect-[3/4]` stays completely unchanged

