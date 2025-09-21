import { useState, useEffect } from 'react';
import matter from 'front-matter';
import portfolioFiles from '../data/portfolio';
import PortfolioItem from '../component/portfolioItem';
import { LeftArrow, RightArrow } from '../component/icon/arrow';
import { PUBLIC_URL } from '../config';
import './portfolio.css';

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      const portfolioData = await Promise.all(
        portfolioFiles.map(async file => {
          const response = await fetch(`${PUBLIC_URL}/portfolioMd/${file}`);
          const text = await response.text();
          const parsed = matter(text);

          return { content: parsed.body, ...parsed.attributes };
        }),
      );
      setPortfolio(portfolioData);
      setLoading(false);
    };

    fetchPortfolioData();
  }, []);

  const handlePrev = () => {
    if (portfolio.length === 0) return;
    setCurrentIndex(prevIndex => (prevIndex === 0 ? portfolio.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    if (portfolio.length === 0) return;
    setCurrentIndex(prevIndex => (prevIndex === portfolio.length - 1 ? 0 : prevIndex + 1));
  };

  if (loading) {
    return (
      <div className="portfolio-container">
        <div className="portfolio-viewport loading"></div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <button className="nav-button prev-button" onClick={handlePrev}>
        <LeftArrow width="2.4rem" height="2.4rem" />
      </button>
      <div className="portfolio-viewport">
        <div className="portfolio-filmstrip" style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 4}rem))` }}>
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
