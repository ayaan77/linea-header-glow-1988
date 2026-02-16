

## Create a Dedicated About Page

Build a new standalone About page inspired by the reference image, adapted to match the Sifar brand identity. The footer "About" heading will link to this page.

### Page Layout (3 Sections)

**1. Hero Section**
- Large bold centered heading: "ABOUT SIFAR" using Playfair Display, uppercase
- Clean limestone background, generous vertical padding

**2. Manifesto Section (Two-Column)**
- **Left column**: A collage/grid of editorial images using existing assets (editorial-closeup, editorial-shoulder, editorial-face, editorial-front) arranged in a 2x2 grid with thin borders
- **Right column**: "THE MANIFESTO" heading in Space Mono (uppercase, tracked), a short decorative line, followed by 3 paragraphs of brand manifesto text in Space Mono uppercase -- adapted to Sifar's brand voice (architecture, line, form)
- On mobile: stacks vertically (image grid on top, text below)

**3. Disciplines Row (Three Columns)**
- Three equal columns separated by thin borders
- Each shows a discipline title (e.g., "JEWELRY", "ARCHITECTURE", "SCULPTURE") in bold mono with a location subtitle ("London, UK")
- On mobile: stacks to single column

### Routing and Linking

- New route: `/about` mapped to new `src/pages/About.tsx`
- Footer "About" heading (line 12) becomes a clickable link to `/about`

### Technical Details

**New file: `src/pages/About.tsx`**
- Full-width immersive layout (no sidebar, consistent with Heritage/People pages)
- Uses Header and Footer components
- Imports existing editorial assets for the image grid
- Responsive: single-column stack on mobile, two-column on tablet/desktop

**Modified file: `src/App.tsx`**
- Add import for About page
- Add route: `<Route path="/about" element={<About />} />`

**Modified file: `src/components/footer/Footer.tsx`**
- Wrap the "About" h4 heading (line 12) in a `<Link to="/about">` so tapping it navigates to the About page

