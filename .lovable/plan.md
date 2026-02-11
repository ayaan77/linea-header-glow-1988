

## Increase Height and Add Breathing Space to Timeline Entry Section

### Target
The Timeline Entry section (lines 83-134 in `src/pages/about/Timeline.tsx`) -- the two-column grid with year watermark, text, tab bar, and image.

### Changes

**1. Increase section height (line 84)** -- bump the desktop grid height from `80vh` to `90vh`:

```jsx
// From:
<div className="lg:grid lg:grid-cols-[45%_55%] lg:h-[80vh] overflow-hidden">

// To:
<div className="lg:grid lg:grid-cols-[45%_55%] lg:h-[90vh] overflow-hidden">
```

**2. Increase section vertical padding (line 83)** -- add more generous top/bottom padding:

```jsx
// From:
<section className="bg-limestone text-ink py-10 md:py-16 lg:py-20">

// To:
<section className="bg-limestone text-ink py-14 md:py-20 lg:py-28">
```

This increases from 40/64/80px to 56/80/112px across mobile/tablet/desktop.

**3. Add horizontal padding to the section wrapper (line 83)** -- so the entire grid is contained with breathing room on left and right:

Combined with the above, line 83 becomes:

```jsx
<section className="bg-limestone text-ink py-14 md:py-20 lg:py-28 px-6 md:px-12 lg:px-16">
```

- `px-6` on mobile (24px each side)
- `md:px-12` on tablet (48px each side)
- `lg:px-16` on desktop (64px each side)

### What stays the same
- Grid column ratios (`45% / 55%`) unchanged
- Left column inner padding, animations, year tab bar unchanged
- Image container, `object-contain`, fade animation unchanged
- All other sections (hero, video, alternating blocks) unchanged

