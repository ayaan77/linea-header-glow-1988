

## Match Mobile Drawer to Reference Design

### Animation Adjustment
- Change duration from `800ms` to `650ms` -- a comfortable medium speed
- Keep the same easing curve `cubic-bezier(0.22, 1, 0.36, 1)` for the paper-fall feel

### Typography and Layout Changes (mobile only)

**File: `src/components/header/MobileDrawer.tsx`**

1. **Search bar** (lines 92-101)
   - Change from `rounded-full` to `rounded-none` (rectangular border like reference)
   - Change border from `border-foreground/20` to `border-foreground/30` (slightly darker)
   - Increase search icon size and placeholder text size to `text-base`

2. **Nav links** (lines 104-116)
   - Increase font size from `text-[15px]` to `text-xl` (larger, bolder like reference)
   - Change to `font-serif` for elegant serif typography matching reference
   - Increase vertical padding from `py-4` to `py-5` for more breathing room
   - Make chevron icon slightly larger and less transparent

3. **About Sifar link** (lines 119-128)
   - Add a visible separator/divider above this section (reference shows a clear line break)
   - Match the same larger serif typography as the nav links
   - Add more top padding (`pt-6`) to create visual separation

4. **Promotional image** (lines 131-145)
   - Change aspect ratio from `16/9` to `4/5` (taller, like reference product images)
   - Remove the "New Collection" overlay badge for a cleaner look matching reference
   - Add a text link below the image like reference ("Valentine's Day by Diptyque" style)

5. **Footer utility links** (lines 148-169)
   - Keep as-is, they are secondary and the reference doesn't show equivalents prominently

### What Does NOT Change
- Desktop and tablet layouts (all changes scoped within `lg:hidden` drawer)
- Drawer header (close button, logo, icons)
- Navigation link destinations and content
- Body scroll lock behavior

