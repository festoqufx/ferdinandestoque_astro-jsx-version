---
// Example component structure

// Each component is a standalone Astro file (*.astro)
// They can be imported and used in pages

// Example import in src/pages/index.astro:
// import Header from '../components/Header.astro';
// import Footer from '../components/Footer.astro';
// import About from '../components/About.astro';

// Then use in your page:
// <Header />
// <About />
// <Footer />

// Component breakdown:

// 1. Header.astro
//    - Navigation menu
//    - Fixed top positioning
//    - Mobile toggle button
//    - Logo/branding

// 2. Footer.astro
//    - Contact information
//    - Social media links
//    - Footer links sections
//    - Newsletter signup
//    - Copyright

// 3. About.astro
//    - Personal introduction
//    - About content
//    - Portfolio card section
//    - 3D animations

// 4. Experience.astro
//    - Professional timeline
//    - Company logos
//    - Position details
//    - Years of experience

// 5. Services.astro
//    - Service cards with icons
//    - Service descriptions
//    - Animation classes
//    - CTA elements

// 6. Contact.astro
//    - Contact form
//    - Contact information
//    - Google Maps embed
//    - Form validation

// 7. Layout.astro (Main Template)
//    - HTML structure
//    - Head metadata
//    - CSS/JS imports
//    - Header/Footer
//    - Slot for page content

// Creating a New Section Component:

/*

1. Create new file: src/components/NewSection.astro

2. Add structure:

---
// NewSection Component
---

<section id="new-section" class="new-section">
  <div class="container">
    <h2>New Section</h2>
    <p>Your content here</p>
  </div>
</section>

3. Import in index.astro:
import NewSection from '../components/NewSection.astro';

4. Use in page:
<NewSection />

*/

// Tips:
// - Keep components small and focused
// - Use CSS classes from Bootstrap for consistency
// - All images should use /path syntax (e.g., /img/logo.png)
// - All scripts are in the Layout.astro
// - Preserve existing CSS animations and effects
