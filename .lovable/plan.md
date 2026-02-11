

## Add Breathing Space and Convert Landscape Divider to Video Section

### Target
The "Full-width Landscape Divider" section (lines 136-144 in `src/pages/about/Timeline.tsx`) -- currently an `<img>` of `scarfOrangePortrait`.

### Changes

**1. Add top padding / breathing space**
- Add vertical padding to the section: `py-10 md:py-16 lg:py-20` and horizontal padding `px-6 md:px-12 lg:px-20`
- Add `bg-limestone` to maintain visual continuity with surrounding sections

**2. Convert from image to video**
- Replace the `<img>` tag with a `<video>` element using `autoPlay`, `muted`, `loop`, `playsInline`
- Use `scarfOrangePortrait` as the `poster` (fallback image) so the visual stays the same until a real video file is provided
- Include a commented-out `<source>` tag as a placeholder for the actual video URL
- Keep `aspect-[21/9]` for desktop, but make it responsive: `aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9]` so it looks good on mobile, tablet, and desktop
- Add `rounded-sm` for a polished look within the padded container

**3. Keep the overlay**
- Retain the `bg-black/20` overlay div, adjusted with matching rounded corners

### Technical Details

The section (lines 136-144) changes from:
```jsx
<section className="relative w-full overflow-hidden">
  <img src={scarfOrangePortrait} alt="Heritage landscape"
    className="w-full aspect-[21/9] object-cover" />
  <div className="absolute inset-0 bg-black/20" />
</section>
```

To:
```jsx
<section className="relative w-full overflow-hidden bg-limestone px-6 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20">
  <div className="relative w-full overflow-hidden rounded-sm">
    <video
      autoPlay muted loop playsInline
      poster={scarfOrangePortrait}
      className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] object-cover"
    >
      {/* <source src="/your-video.mp4" type="video/mp4" /> */}
    </video>
    <div className="absolute inset-0 bg-black/20 rounded-sm" />
  </div>
</section>
```

### What stays the same
- All other sections unchanged
- The poster image ensures the visual is identical until a video file is added
- Mobile stacked layout unaffected

