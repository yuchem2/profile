import { useState } from 'react';
import { portfolio } from '../data/portfolio';
import PortfolioItem from '../component/portfolioItem';
import { LeftArrow, RightArrow } from '../component/icon/arrow';
import './portfolio.css';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? portfolio.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === portfolio.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="portfolio-container">
      <button className="nav-button prev-button" onClick={handlePrev}>
        <LeftArrow width="2.4rem" height="2.4rem" />
      </button>
      <div className="portfolio-viewport">
        <div className="portfolio-filmstrip" style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${4 * currentIndex}rem))` }}>
          {portfolio.map((project, index) => (
            <div className="portfolio-item-wrapper" key={project.title}>
              <PortfolioItem project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
      <button className="nav-button next-button" onClick={handleNext}>
        <RightArrow width="2.4rem" height="2.4rem" />
      </button>
    </div>
  );
}
