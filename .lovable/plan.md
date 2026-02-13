

## Add Padding to the Heritage Video Section

### What Changes
Add responsive padding to the parent `<section>` container (line 38) that wraps the "Our Rich Heritage" video/image block, so the entire section — including the image — is inset from the screen edges on all sides and all screen sizes.

### Details

**File:** `src/pages/about/Heritage.tsx` (line 38)

Update the section's className from:
`relative w-full overflow-hidden`

To:
`relative w-full overflow-hidden px-4 md:px-8 lg:px-12 pt-10 md:pt-16 lg:pt-20 pb-10 md:pb-16 lg:pb-20`

This adds:
- Horizontal padding: `px-4` (mobile) / `md:px-8` (tablet) / `lg:px-12` (desktop)
- Top padding: `pt-10` / `md:pt-16` / `lg:pt-20`
- Bottom padding: `pb-10` / `md:pb-16` / `lg:pb-20`

The overlay text already has its own internal padding from the previous edit, so the combined effect gives comfortable breathing space on every device.
