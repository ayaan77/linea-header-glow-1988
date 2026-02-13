

## Align Store Section Text for Desktop

Based on the reference image, the desktop text block should align to the **top** of the right column rather than being vertically centered. The text content should start near the top of the column, matching the top edge of the image.

### Changes (desktop only)

**File: `src/components/content/StoreSection.tsx`**

- Change the text block's vertical alignment from `justify-center` to `md:justify-start` and add top padding (`md:pt-10`) on desktop so the text aligns near the top of the image, matching the reference layout.
- Keep mobile layout unchanged.

