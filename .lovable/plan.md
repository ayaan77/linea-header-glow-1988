

## Redesign Mobile Product Showcase to Match Reference

### Problem
The current mobile layout uses a full-width single-card carousel with `aspect-[3/1]`, which is still too large. The reference image shows a **2-column grid** of small, compact product cards.

### Changes

**File: `src/components/content/ProductShowcase.tsx`**

Replace the mobile single-card carousel with a 2-column grid layout:

- Change mobile container from horizontal scroll carousel to a `grid grid-cols-2 gap-3` layout
- Use a much smaller aspect ratio: `aspect-square` for each card
- Remove the carousel scroll behavior and progress bar for mobile (no longer needed with a grid)
- Show all 5 products at once in the grid (3 on first row spanning as needed, 2 on second row -- or a simple 2-col grid where the 5th item sits alone)

### Technical Details

**Mobile layout (line 59-95):** Replace the carousel `div` with:
```
<div className="md:hidden grid grid-cols-2 gap-2">
  {products.map((product) => (
    <Link key={product.id} to={`/product/${product.id}`}>
      <div className="bg-limestone aspect-square overflow-hidden">
        <img src={product.image} alt={product.name}
             className="w-full h-full object-cover" />
      </div>
    </Link>
  ))}
</div>
```

- Removes the `scrollRef`, scroll handler, and progress bar (only used for mobile carousel)
- The `useRef`, `useState`, `useEffect`, `useCallback` hooks and scroll logic can be fully removed since they were only for the mobile carousel
- Desktop 5-column flex layout stays exactly the same

### What stays the same
- Desktop/tablet 5-column grid -- unchanged
- Product data, names, IDs, links -- unchanged
- Section padding and background -- unchanged

