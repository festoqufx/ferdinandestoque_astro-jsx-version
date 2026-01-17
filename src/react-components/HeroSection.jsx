import React, { useState } from 'react';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="hero">
      <div className="hero-container">
        <div 
          id="heroCarousel" 
          data-bs-interval="5000" 
          className="carousel slide carousel-fade" 
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
          <div className="carousel-inner" role="listbox">
            {/* Slide 1 */}
            <div 
              className={`carousel-item ${activeSlide === 0 ? 'active' : ''}`}
              style={{backgroundImage: 'url(/assets/img/slide/slide-1.jpg)'}}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <img className="main_logo" src="/img/logo.png" loading="lazy" alt="Logo" />
                  <p>&nbsp;</p>
                  <h2 className="animate__animated animate__fadeInDown">
                    FERDINAND <span style={{color: 'black'}}>ESTOQUE</span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp">a.k.a.</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  
                  <div className="clearfix">&nbsp;</div>
                  
                  <h2 className="h2_half">
                    BLACK RAVEN
                    <span className="span_half">BLACK RAVEN</span>
                    <span className="span_half">BLACK RAVEN</span>
                    <span className="span_half">--- RAVENOM ---</span>
                  </h2>
                  <p>&nbsp;</p>
          
                  <div className="middle">
                    <div className="rotating-text">
                      <p>
                        <span className="word_rt alizarin">WEB&nbsp;DESIGN</span>
                        <span className="word_rt alizarin">WEB&nbsp;DEVELOPMENT</span>
                        <span className="word_rt alizarin">BRANDING</span>
                        <span className="word_rt alizarin">REBRANDING</span>
                        <span className="word_rt alizarin">MOTION&nbsp;and&nbsp;GRAPHIC DESIGN</span>
                        <span className="word_rt alizarin">WEB&nbsp;MAINTENANCE</span>
                        <span className="word_rt alizarin">WEB&nbsp;CONSULTING</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slide 2 */}
            <div 
              className={`carousel-item ${activeSlide === 1 ? 'active' : ''}`}
              style={{backgroundColor: 'black'}}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <div id="cube-container">
                    <div className="face top">
                      <img src="/img/logo.png" className="logomain" alt="Logo" />
                    </div>
                    <div className="face right">
                      <img src="/img/logo.png" className="logomain" alt="Logo" />
                    </div>
                    <div className="face bottom">
                      <img src="/img/logo.png" className="logomain" alt="Logo" />
                    </div>
                    <div className="face left">
                      <img src="/img/logo.png" className="logomain" alt="Logo" />
                    </div>
                    <div className="face back">
                      <img src="/img/logo.png" className="logomain" alt="Logo" />
                    </div>
                    <div className="face front">
                      <img src="/img/logo.png" className="logomain" alt="Logo" />
                    </div>
                  </div>
                  <p style={{marginTop: '-100px'}}>Click the logo</p>
                  <div className="wrap_text">
                    {Array.from({length: 10}, (_, i) => (
                      <div 
                        key={i} 
                        className="text" 
                        style={{transform: `translate3d(${(2.36962 + i * 2.36963)}px, ${(5.24145 + i * 5.24145)}px, ${8 + i}px)`}}
                      >
                        BLACK RAVEN
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Slide 3 */}
            <div 
              className={`carousel-item ${activeSlide === 2 ? 'active' : ''}`}
              style={{backgroundImage: 'url(/assets/img/slide/slide-3.jpg)'}}
            >
              <div className="carousel-container">
                <div className="carousel-content">
                  <div className="center" style={{margin: '0 auto'}}>
                    <p>click me</p>
                    <a id="blackred" href="https://ferdinandestoqueph-festoqufx.vercel.app/" target="_blank" rel="noreferrer">
                      <span data-attr="BLACK">BLACK</span>
                      <span data-attr="RAVEN">RAVEN</span>
                    </a>
                    <p>&nbsp;</p>
                    <div className="container_text">
                      <div className="text_text">
                        {['w','w','w','.','f','e','r','d','i','n','a','n','d','e','s','t','o','q','u','e','.','c','o','m'].map((char, i) => (
                          <span key={i} style={{['--i']: i + 1}}>
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a 
            className="carousel-control-prev" 
            href="#heroCarousel" 
            role="button" 
            data-bs-slide="prev"
            onClick={() => setActiveSlide((prev) => (prev - 1 + 3) % 3)}
          >
            <span className="carousel-control-prev-icon bi bi-chevron-double-left" aria-hidden="true"></span>
          </a>
          <a 
            className="carousel-control-next" 
            href="#heroCarousel" 
            role="button" 
            data-bs-slide="next"
            onClick={() => setActiveSlide((prev) => (prev + 1) % 3)}
          >
            <span className="carousel-control-next-icon bi bi-chevron-double-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
