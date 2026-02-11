

## Add Padding, Height, and Video Logo to the Landscape Divider Section

### Target
The Full-width Landscape Divider section (lines 137-144 in `src/pages/about/Timeline.tsx`) -- the wide image with the dark overlay.

### Changes

**1. Add horizontal padding and increase mobile height (line 137)**

Update the section wrapper to add responsive horizontal padding and a taller aspect ratio on mobile:

```jsx
// From:
<section className="relative w-full overflow-hidden">

// To:
<section className="relative w-full overflow-hidden px-6 md:px-12 lg:px-16">
```

**2. Increase mobile height by changing the image aspect ratio to be taller on small screens (line 141)**

```jsx
// From:
className="w-full aspect-[21/9] object-cover"

// To:
className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] object-cover"
```

This makes the section significantly taller on mobile (4:3 ratio) and tablet (16:9), while keeping the cinematic 21:9 on desktop.

**3. Add the LINEA logo centered on the overlay (line 143)**

Replace the plain overlay div with one that displays the LINEA logo centered:

```jsx
// From:
<div className="absolute inset-0 bg-black/20" />

// To:
<div className="absolute inset-0 bg-black/20 flex items-center justify-center">
  <img
    src="/LINEA.svg"
    alt="LINEA"
    className="w-32 md:w-40 lg:w-48 opacity-90"
  />
</div>
```

### What stays the same
- The background image (`scarfOrangePortrait`) unchanged
- All other sections (timeline entry, alternating blocks) unchanged
- Overall page structure unchanged

