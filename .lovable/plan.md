

## Add Desktop Padding to Images

Both `ArtisticSignatureSection.tsx` and `StoreSection.tsx` use the same image container styling. The change adds padding around the images only on desktop (md breakpoint and above), leaving mobile/tablet untouched.

### Changes

**src/components/content/ArtisticSignatureSection.tsx** (line 29)
- Change the image container div class from `px-5 md:px-0` to `px-5 md:p-8` to add padding on all sides at desktop.

**src/components/content/StoreSection.tsx** (line 10)
- Change the image container div class from `px-5 md:px-0` to `px-5 md:p-8` to add padding on all sides at desktop.

This ensures mobile stays with horizontal padding only (`px-5`), while desktop gets uniform breathing room (`p-8`) around the images.

