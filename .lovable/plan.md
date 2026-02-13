

## Replace Hero Video with Kashmir Bloom Video

### Changes
1. Copy the uploaded video to `public/kashmir-bloom-video.mp4` (public folder is better for large video files to avoid bundling overhead)
2. Update `src/components/content/LargeHero.tsx` to use the new video source
3. The existing responsive layout (`h-[75vh] md:h-screen`, `object-cover`) already handles mobile, tablet, and desktop well -- no layout changes needed

### Files
- **New asset**: `public/kashmir-bloom-video.mp4`
- **Edit**: `src/components/content/LargeHero.tsx` -- uncomment and update the `<source>` tag to point to the new video, keep the poster image as fallback

