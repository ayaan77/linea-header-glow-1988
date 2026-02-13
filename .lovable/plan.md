

## Create a "People" Page for LINEA

### What Changes
1. **New page:** Create `src/pages/about/People.tsx` -- a full editorial page inspired by the reference image, adapted to LINEA's Zen aesthetic.
2. **Add route:** Register `/about/people` in `src/App.tsx`.
3. **Add link:** Update the "People" tile in `src/pages/about/OurStory.tsx` (line 23) to include `link: "/about/people"`.

### Page Structure (based on reference image)

The page will follow the same immersive editorial pattern used on Heritage and Sustainability pages:

1. **Hero Section** -- Full-width image with overlay text: "Our People" title and subtitle.
2. **Intro Text Block** -- Centered text about the people behind LINEA, their passion and craft.
3. **Full-Width Feature Image** -- A wide editorial image (founders or team-style).
4. **"Family Values" Section** -- Image-left, text-right block about the team culture and values.
5. **Team Stories Section** -- A heading ("Stories from Our Artisans") with a full-width image below.
6. **Community Section** -- Text-left, image-right block about the communities LINEA works with, plus a second image alongside.
7. **Benefits/Ethos Section** -- Centered text listing what makes working at LINEA special (sustainability focus, artisan heritage, creative freedom, etc.).
8. **Bottom CTA** -- Centered call-to-action linking back to the collection or story.

All sections will use responsive padding (`px-4 md:px-8 lg:px-12`, `py-10 md:py-16 lg:py-20`) and the established serif/sans-serif typography pattern.

### Technical Details

**Files to create:**
- `src/pages/about/People.tsx`

**Files to edit:**
- `src/App.tsx` -- Add import and route for People page
- `src/pages/about/OurStory.tsx` -- Add `link: "/about/people"` to the People tile (line 23)

**Assets:** Will reuse existing editorial images from `src/assets/` (editorial-closeup, editorial-shoulder, founders, editorial-face, editorial-side, etc.) -- no new images needed.

**Responsive:** All sections use Tailwind responsive breakpoints for mobile, tablet, and desktop compatibility.

