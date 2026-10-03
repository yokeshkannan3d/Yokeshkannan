import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './PortfolioSection.css';

const PORTFOLIO_ITEMS = [
  { id: 1, title: '3D Models', thumbnail: '/images/work-1.jpg' },
  { id: 2, title: 'VFX', thumbnail: '/images/work-2.jpg' },
  { id: 3, title: 'Animation', thumbnail: '/images/work-3.jpg' },
  { id: 4, title: 'Design', thumbnail: '/images/work-4.jpg' },
];

function PortfolioSection() {
  const scrollContainerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2>Made by Yokesh</h2>

        <div className="portfolio-carousel-wrapper">
          {canScrollLeft && (
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div
            className="portfolio-carousel"
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
          >
            {PORTFOLIO_ITEMS.concat(PORTFOLIO_ITEMS).map((item, index) => (
              <div
                key={index}
                className="portfolio-item"
                onClick={() => setSelectedCategory(item)}
              >
                <img src={item.thumbnail} alt={item.title} />
                <div className="portfolio-item-overlay">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Library Modal */}
      {selectedCategory && (
        <div className="modal-overlay" onClick={() => setSelectedCategory(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedCategory(null)}
              aria-label="Close modal"
            >
              <X size={28} />
            </button>
            <h3>{selectedCategory.title}</h3>
            <div className="modal-grid">
              <div className="modal-placeholder">No projects added yet</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
