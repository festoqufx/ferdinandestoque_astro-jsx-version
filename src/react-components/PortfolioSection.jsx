import React, { useState } from 'react';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('*');

  const portfolioItems = [
    { id: 1, img: '/assets/img/portfolio/portfolio-1.jpg', category: 'filter-app', title: 'App 1', type: 'App' },
    { id: 2, img: '/assets/img/portfolio/portfolio-2.jpg', category: 'filter-web', title: 'Web 3', type: 'Web' },
    { id: 3, img: '/assets/img/portfolio/portfolio-3.jpg', category: 'filter-app', title: 'App 2', type: 'App' },
    { id: 4, img: '/assets/img/portfolio/portfolio-4.jpg', category: 'filter-card', title: 'Card 2', type: 'Card' },
    { id: 5, img: '/assets/img/portfolio/portfolio-5.jpg', category: 'filter-web', title: 'Web 2', type: 'Web' },
    { id: 6, img: '/assets/img/portfolio/portfolio-6.jpg', category: 'filter-app', title: 'App 3', type: 'App' },
    { id: 7, img: '/assets/img/portfolio/portfolio-7.jpg', category: 'filter-card', title: 'Card 1', type: 'Card' },
    { id: 8, img: '/assets/img/portfolio/portfolio-8.jpg', category: 'filter-card', title: 'Card 3', type: 'Card' },
    { id: 9, img: '/assets/img/portfolio/portfolio-9.jpg', category: 'filter-web', title: 'Web 3', type: 'Web' },
  ];

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <div className="height_divider_1"></div>
          <div className="container_title">
            <div className="Title">
              <h1 className="Title_h1">
                Portfolio
                <div className="Title__highlight"></div>
              </h1>
              <div className="Title__underline"></div>
              <div aria-hidden className="Title__filled">Portfolio</div>
            </div>
          </div>
          <div className="height_divider_1"></div>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li 
                className={activeFilter === '*' ? 'filter-active' : ''}
                onClick={() => setActiveFilter('*')}
                style={{cursor: 'pointer'}}
              >
                All
              </li>
              <li 
                className={activeFilter === 'filter-app' ? 'filter-active' : ''}
                onClick={() => setActiveFilter('filter-app')}
                style={{cursor: 'pointer'}}
              >
                App
              </li>
              <li 
                className={activeFilter === 'filter-card' ? 'filter-active' : ''}
                onClick={() => setActiveFilter('filter-card')}
                style={{cursor: 'pointer'}}
              >
                Card
              </li>
              <li 
                className={activeFilter === 'filter-web' ? 'filter-active' : ''}
                onClick={() => setActiveFilter('filter-web')}
                style={{cursor: 'pointer'}}
              >
                Web
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {filteredItems.map(item => (
            <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}>
              <img src={item.img} className="img-fluid" alt={item.title} />
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p>{item.type}</p>
                <a href={item.img} data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title={item.title}>
                  <i className="bx bx-plus"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
