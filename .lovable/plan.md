

## Update Landscape Divider Section

### Target
The overlay and padding area of the Full-width Landscape Divider section (lines 137-150 in `src/pages/about/Timeline.tsx`).

### Changes

**1. Remove the LINEA logo and black overlay (lines 143-149)**

Delete the entire overlay div containing the logo and dark tint:

```jsx
// Remove this entirely:
<div className="absolute inset-0 bg-black/20 flex items-center justify-center">
  <img src="/LINEA.svg" alt="LINEA" className="w-32 md:w-40 lg:w-48 opacity-90" />
</div>
```

**2. Add limestone background to the section wrapper (line 137)**

Add `bg-limestone` so the horizontal padding areas show the site's signature background color instead of being transparent:

```jsx
// From:
<section className="relative w-full overflow-hidden px-6 md:px-12 lg:px-16">

// To:
<section className="relative w-full overflow-hidden px-6 md:px-12 lg:px-16 bg-limestone">
```

### Result
- The image displays without any dark tint or logo on top
- The left and right padding strips match the limestone background used across the site
- Image itself and its responsive aspect ratios remain unchanged

