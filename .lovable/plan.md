

## Add Padding and Containment to Timeline Entry Section

### Problem
The Timeline Entry section (the "Chapter 1 / The Beginning" grid with text and image) lacks top and bottom padding, sitting flush against adjacent sections. It needs breathing space and proper containment across all breakpoints without altering the grid structure.

### Changes (in `src/pages/about/Timeline.tsx`)

**1. Section wrapper (line 83)** -- add responsive vertical padding:

```jsx
// From:
<section className="bg-limestone text-ink">

// To:
<section className="bg-limestone text-ink py-10 md:py-16 lg:py-20">
```

This adds 40px / 64px / 80px top and bottom padding across mobile / tablet / desktop.

**2. Image column (line 126)** -- add horizontal containment on mobile and tablet so the image does not bleed to screen edges:

```jsx
// From:
<div key={`img-${currentIndex}`} className="animate-fade-in h-[400px] lg:h-full overflow-hidden">

// To:
<div key={`img-${currentIndex}`} className="animate-fade-in h-[400px] lg:h-full overflow-hidden px-6 md:px-12 lg:px-0">
```

- `px-6 md:px-12` contains the image on mobile and tablet
- `lg:px-0` removes horizontal padding on desktop where the grid column already constrains width

### What stays the same
- Grid structure (`lg:grid lg:grid-cols-[45%_55%] lg:h-[80vh]`) untouched
- Left column text padding, animations, year tab bar unchanged
- Image tag, `object-contain`, and fade animation unchanged
- All other sections (hero, video, alternating blocks) unchanged

