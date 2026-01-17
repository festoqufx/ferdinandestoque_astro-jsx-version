// Migration notes for converting to Astro

// The following assets have been migrated:

// CSS Files - Now served from public/assets/css/
// - animate.min.css
// - bootstrap.min.css
// - style.css
// - component.css
// - demo.css
// - slicebox.css
// - And vendor CSS files

// JavaScript Files - Now served from public/assets/js/
// - main.js (main functionality)
// - function.js (3D transformations)
// - carousel.js (image carousel)
// - cloud_tag_script.js (skill cloud)
// - jquery-1.12.0.min.js (jQuery)
// - And other vendor scripts

// Images - Located in:
// - public/img/ (main images)
// - public/assets/img/ (vendor images)
// - public/figma/ (design mockups)

// Original index.html has been converted to src/pages/index.astro
// and uses component-based architecture for better maintainability

// All existing functionality is preserved:
// ✅ 3D cube animations
// ✅ Carousel effects
// ✅ Rotating text
// ✅ Skill cloud visualization
// ✅ Form handling
// ✅ Analytics integration
// ✅ Mobile responsiveness
