

## Add Full-Look Image to "You Might Also Like" Section

### Overview
Show a full-body product image on mobile in the "You Might Also Like" section (Section 3). Currently, the editorial image on the left is hidden on mobile (`hidden lg:block`). The change will make it visible on mobile and swap the image to match the product's full-look styling.

### Changes

**File: `src/pages/ProductDetail.tsx`**

1. **Import the full-look image**: Add `import scarfFull from "@/assets/scarf-full.png"` (the full-body product shot from the hero gallery)

2. **Make the left image visible on mobile**: Change `hidden lg:block` to just `block` on the image container (line 152), so it shows on all screen sizes

3. **Swap the image source**: Replace `lintelImage` with `scarfFull` to show the actual product being viewed, giving a "complete the look" feel matching the reference

4. **Set proper mobile height**: Add a fixed height on mobile (`h-[500px] lg:h-auto`) so the image doesn't take up excessive space, with `object-cover` to crop nicely

5. **No text or labels** will be added -- just the clean image, as requested

### What Stays the Same
- Desktop layout unchanged (still shows full-height image on left, 2x2 grid on right)
- Product grid on the right unchanged
- All other sections unchanged

