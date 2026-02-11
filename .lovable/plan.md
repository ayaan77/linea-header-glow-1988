

## Fix Video Section Edge-to-Edge Layout

### Problem
The video section has a nested `<div>` with `rounded-sm` and the outer section has vertical padding. The page wrapper uses `bg-ink` (dark background). The `rounded-sm` creates tiny rounded corner gaps, and any sub-pixel rendering differences can expose the dark background on the left and right edges.

### Fix (lines 136-151 in `src/pages/about/Timeline.tsx`)

**Remove `rounded-sm` from both the inner wrapper div and the overlay.** This eliminates any corner gaps that expose the dark background. The video/poster will render truly edge-to-edge within the section.

Change:
```jsx
<section className="relative w-full overflow-hidden bg-limestone py-10 md:py-16 lg:py-20">
  <div className="relative w-full overflow-hidden rounded-sm">
    <video ... />
    <div className="absolute inset-0 bg-black/20 rounded-sm" />
  </div>
</section>
```

To:
```jsx
<section className="relative w-full overflow-hidden bg-limestone py-10 md:py-16 lg:py-20">
  <div className="relative w-full overflow-hidden">
    <video ... />
    <div className="absolute inset-0 bg-black/20" />
  </div>
</section>
```

### What changes
- Remove `rounded-sm` from the inner wrapper div (line 138)
- Remove `rounded-sm` from the overlay div (line 149)

### What stays the same
- All padding, aspect ratios, and responsive behavior unchanged
- Video element and poster image unchanged
- All other sections unchanged

