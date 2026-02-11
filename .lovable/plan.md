
# Restructure the Bento Grid to Match Reference Image

The reference image shows a different grid arrangement than what currently exists. The key differences are:

## Current vs Reference Layout

**Current layout (6 tiles):**
- Row 1: Craftsmanship (4 cols, spans 2 rows) + Sustainability (8 cols)
- Row 2: Heritage (4 cols) + People (4 cols) -- fills right side under Sustainability
- Row 3: Innovation (4 cols) + Design (8 cols)

**Reference layout (7 tiles):**
- Row 1: Shoulder image (4 cols, no row span) + Sustainability large face (8 cols)
- Row 2: Craftsmanship (4 cols) + Heritage (4 cols) + People (4 cols)
- Row 3: Innovation (6 cols) + Design (6 cols)

## Changes to `src/pages/about/OurStory.tsx`

### 1. Add an import for an extra image
Import `scarfCrossed` (or another scarf image) to use for the standalone Craftsmanship tile in row 2, since `editorialShoulder` moves to an unlabeled row 1 tile.

### 2. Restructure the `gridTiles` array to 7 tiles

| Tile | Image | Title | Grid Classes |
|------|-------|-------|-------------|
| 0 | editorialShoulder | (no label) | col-span-4 |
| 1 | editorialFace | Sustainability | col-span-8 |
| 2 | scarfCrossed | Craftsmanship | col-span-4 |
| 3 | scarfPortrait | Heritage | col-span-4 |
| 4 | editorialCloseup | People | col-span-4 |
| 5 | editorialFront | Innovation | col-span-6 |
| 6 | scarfFull | Design | col-span-6 |

- Remove `rowSpan: "md:row-span-2"` from the first tile
- First tile has no label/title overlay (just the image)
- Row 3 tiles change from 4+8 to 6+6 split
- All tiles use `aspect-square` for consistent row heights

### 3. Update the rendering logic
Conditionally render the label overlay only when `tile.title` exists (the first tile will have an empty title).

## What Does NOT Change
- Hero section text and styling
- Founders full-width image
- Discovery section at the bottom
- Overall dark theme and spacing
