

## Add Top Padding and Breathing Space to the Timeline Entry Section

### Target
The Timeline Entry section (line 83-132 in `src/pages/about/Timeline.tsx`) -- the grid containing the year watermark, text content, year tab bar, and the right-side image.

### Change

Add top padding to the `<section>` wrapper at line 83. Currently it has no vertical padding of its own -- the inner columns handle their own padding.

**Line 83** -- change:
```jsx
<section className="bg-limestone text-ink">
```

To:
```jsx
<section className="bg-limestone text-ink pt-10 md:pt-16 lg:pt-20">
```

This adds responsive top padding (40px mobile, 64px tablet, 80px desktop) matching the breathing space pattern used elsewhere on the page.

### What stays the same
- All inner content, layout, animations, and tab bar unchanged
- Image column unchanged
- Video section and alternating blocks unchanged

