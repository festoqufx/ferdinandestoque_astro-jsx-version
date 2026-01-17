# 🔧 TROUBLESHOOTING GUIDE

## If Animations Don't Start

### 1. Check Browser Console
- Open DevTools: F12
- Click "Console" tab
- Look for initialization logs
- If you see "init() called" → Everything loaded correctly
- If you see errors → Check steps below

### 2. Verify jQuery is Loaded
```javascript
// Type in console:
jQuery
// Should return: function
// If you see "jQuery is not defined" → jQuery didn't load
```

### 3. Check Script Loading Order
Console should show:
1. "Layout.astro initialization script loaded"
2. "init() called"
3. Individual feature initialization messages

If not seeing these:
- Try hard refresh (Ctrl+F5)
- Clear browser cache
- Close and reopen browser

### 4. Gallery Not Showing 3D Effects
- Make sure `jquery.slicebox.js` is loaded
- Check console for: "Slicebox plugin found, initializing..."
- Verify CSS file exists: `/assets/css/slicebox.css`
- Try: Reload page and check console for errors

### 5. Carousel Not Auto-Playing
- Check for: "Carousel found, initializing..."
- Verify: `Carousel.init()` executed in console
- Try: Reload page, watch auto-play start
- Manual controls should work even if auto-play doesn't

### 6. Word Rotation Not Working
- Should see: "Found 4 word_rt elements"
- Word should change every 4 seconds
- If not: Try hard refresh (Ctrl+F5)
- Check hero section structure in code

### 7. Lightbox Not Opening
- Click portfolio item
- If image doesn't open: Check console for GLightbox errors
- Verify image file exists
- Try: Different portfolio item to confirm

---

## Common Issues & Solutions

### Issue: "Carousel is not defined"
**Solution:**
- Verify `carousel.js` is loaded
- Check: `/assets/js/carousel.js` exists
- Try: Hard refresh (Ctrl+F5)

### Issue: "Slicebox is not defined"
**Solution:**
- Verify `jquery.slicebox.js` is loaded
- Check: `/assets/js/jquery.slicebox.js` exists
- Make sure jQuery is loaded first

### Issue: "GLightbox is not defined"
**Solution:**
- Verify `/assets/vendor/glightbox/js/glightbox.min.js` is loaded
- Check CSS: `/assets/vendor/glightbox/css/glightbox.min.css`

### Issue: "jQuery not defined"
**Solution:**
- Check network tab in DevTools
- Make sure jQuery CDN (code.jquery.com) loads
- Or verify local copy: `/assets/js/jquery-1.12.0.min.js`

---

## Debugging Steps

### 1. Enable Console Logging
Already enabled! You should see logs in console.

### 2. Test Individual Features

**Test Carousel:**
```javascript
// In console:
if (window.Carousel) {
  console.log('Carousel loaded');
  Carousel.init(jQuery('.pictureSlider'));
}
```

**Test SliceBox:**
```javascript
// In console:
if (jQuery.slicebox) {
  console.log('SliceBox loaded');
}
```

**Test GLightbox:**
```javascript
// In console:
if (window.GLightbox) {
  console.log('GLightbox loaded');
}
```

### 3. Network Inspection
- DevTools → Network tab
- Reload page
- Look for:
  - ❌ Red = Failed to load (file missing)
  - ✅ Green = Loaded successfully
- Check especially:
  - `/assets/js/carousel.js`
  - `/assets/js/jquery.slicebox.js`
  - `/assets/vendor/glightbox/js/glightbox.min.js`

### 4. Check CSS Files
Verify these CSS files are loaded (Network tab, XHR/JS filter, Stylesheet filter):
- `/assets/css/style.css`
- `/assets/css/slicebox.css`
- `/assets/vendor/glightbox/css/glightbox.min.css`
- `/assets/vendor/bootstrap/css/bootstrap.min.css`

---

## If Animations Lag or Stutter

### Solution 1: Disable Unnecessary Animations
Not needed - they're optimized

### Solution 2: Check Browser Performance
- Close other tabs/programs
- Use Chrome, Firefox, or Edge (modern browsers)
- Update browser to latest version

### Solution 3: Check Hardware
- Older computers may have slower animations
- This is normal - functionality remains

---

## Reset & Reload Instructions

### Full Reset
1. Stop dev server (Ctrl+C in terminal)
2. Delete `.astro` folder (if it exists)
3. Run: `npm run dev` again
4. Full page reload (Ctrl+F5)

### Hard Refresh
- Windows/Linux: Ctrl+F5
- Mac: Cmd+Shift+R
- This clears cache and reloads everything

---

## Production Build Troubleshooting

### If Build Fails
```bash
# Clear everything
rm -r dist node_modules

# Reinstall
npm install

# Try build again
npm run build
```

### If Production Site Doesn't Work
```bash
# Preview the built version locally
npm run build
npm run preview
```

Then check for errors in console at http://localhost:3000 (or shown port)

---

## File Integrity Check

### Verify Key Files Exist

**Components (should all exist):**
```
src/components/
├── About.astro ✅
├── Carousel.astro ✅
├── Contact.astro ✅
├── Experience.astro ✅
├── Footer.astro ✅
├── Gallery.astro ✅
├── Header.astro ✅
├── Hobbies.astro ✅
├── Marquee.astro ✅
├── Ravenom.astro ✅
├── Services.astro ✅
├── SkillsCloud.astro ✅
└── VideoSection.astro ✅
```

**React Components (should all exist):**
```
src/react-components/
├── HeroSection.jsx ✅
├── PortfolioSection.jsx ✅
├── SkillsSection.jsx ✅
└── TestimonialsSection.jsx ✅
```

**Assets (critical files):**
```
assets/
├── js/carousel.js ✅
├── js/jquery.slicebox.js ✅
├── js/TweenMax.min.js ✅
├── css/style.css ✅
├── css/slicebox.css ✅
└── vendor/glightbox/ ✅
```

If any are missing, they need to be restored.

---

## Performance Optimization Tips

### Already Implemented ✅
- Async script loading
- Deferred dependencies
- CSS bundling
- Minified assets

### Optional Enhancements
1. Image optimization (WebP format)
2. Lazy loading for images
3. Code splitting for React components
4. CDN for static assets

---

## Getting Help

### If You're Still Having Issues

1. **Check Console Logs** (F12 → Console)
   - Look for specific error messages
   - Note which feature isn't working

2. **Check Network Tab** (F12 → Network)
   - Look for red X's on resources
   - Note which files failed to load

3. **Clear Cache & Reload**
   - Ctrl+Shift+Delete (Windows)
   - Cmd+Shift+Delete (Mac)
   - Reload with Ctrl+F5

4. **Check File Paths**
   - All paths are relative: `/assets/...`
   - Make sure files exist in those locations
   - Check for typos in file names

5. **Server Health**
   - Check terminal shows: "watching for file changes..."
   - If stopped, run: `npm run dev`
   - If errors: Check for syntax errors in recent edits

---

## Feature-Specific Tests

### Hero Section Word Rotation
- Wait 4 seconds after page load
- First word in hero should change
- Letters should animate smoothly
- Repeats every 4 seconds

### Carousel
- Scroll past hero section
- See carousel with images
- Images should rotate automatically
- Click arrows to manually control

### Gallery (SliceBox)
- Scroll to gallery section
- See 3D cube with images
- Click left/right arrows
- Watch 3D transformation between images

### Portfolio Lightbox
- Scroll to portfolio section
- Click any project thumbnail
- Image should enlarge in modal
- Click X or outside to close

### Hobbies Hover
- Scroll to hobbies section
- Hover mouse over hobby icons
- See hover effect/animation
- Move mouse away, effect goes away

---

## Performance Metrics

### Healthy Indicators
- Load time: 2-5 seconds
- No red errors in console
- No red X's in Network tab
- Animations smooth (60 FPS)
- Page responsive to clicks/scrolls

### Warning Signs
- Load time > 10 seconds
- Red errors in console
- Red X's in Network tab (failed resources)
- Animations laggy/stuttering
- Page freezes on interaction

If you see warning signs, follow troubleshooting steps above.

---

## Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Nothing loads | Ctrl+F5 hard refresh |
| Console errors | Check file paths |
| Animations don't start | Wait 4 seconds after load |
| Carousel stuck | Reload page |
| Gallery 3D broken | Check slicebox.css loaded |
| Lightbox doesn't open | Check glightbox loaded |
| Hover effects missing | Check jQuery loaded |
| Anything else | Hard refresh + clear cache |

---

## Version Information

- **Astro**: v5.16.6
- **React**: 18+
- **jQuery**: 3.6.0 (primary) + 1.12.0 (fallback)
- **Node**: 16+ required
- **NPM**: 7+ required

---

## Support Files

- **IMPLEMENTATION_STATUS.md** - What was implemented
- **FINAL_STATUS.md** - Overall completion status
- **FEATURE_CHECKLIST.md** - Feature verification checklist
- **This file** - Troubleshooting guide

---

**Last Updated**: Today  
**Version**: 1.0  
**Status**: Troubleshooting Ready
