

## Reduce Mobile Product Showcase Height

### Problem
The mobile carousel cards use an `aspect-[4/3]` ratio (line 71), making them very tall on small screens. Desktop/tablet grid is fine with `aspect-[3/4]`.

### Change

**File: `src/components/content/ProductShowcase.tsx` (line 71)**

Update the mobile card aspect ratio from `4/3` to `16/9` -- this reduces the card height by roughly 44%, bringing it closer to the 50-60% reduction requested:

```jsx
// From:
<div className="bg-limestone aspect-[4/3] overflow-hidden flex items-center justify-center">

// To:
<div className="bg-limestone aspect-[16/9] overflow-hidden flex items-center justify-center">
```

### What stays the same
- Desktop/tablet 5-column grid and its `aspect-[3/4]` cards unchanged
- Scroll carousel behavior, snap, and progress bar unchanged
- Section padding and spacing unchanged

