import { useState, useEffect, useRef } from 'react';
import matter from 'front-matter';
import portfolioFiles from '../data/portfolio';
import PortfolioItem from '../component/portfolioItem';
import { LeftArrow, RightArrow } from '../component/icon/arrow';
import { PUBLIC_URL } from '../config';
import './portfolio.css';

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const filmRef = useRef(null);

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

  useEffect(() => {
    const filmStrip = filmRef.current;
    if (!filmStrip) return;

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(portfolio.length);
      } else if (currentIndex === portfolio.length + 1) {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }
    };
    filmStrip.addEventListener('transitionend', handleTransitionEnd);
    return () => filmStrip.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex, portfolio.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex >= portfolio.length + 1) return;
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  if (loading) {
    return (
      <div className="portfolio-container">
        <div className="portfolio-viewport loading"></div>
      </div>
    );
  }

  const paddedPortfolio = [
    portfolio[portfolio.length - 1],
    ...portfolio,
    portfolio[0],
  ];

  return (
    <div className="portfolio-container">
      <button className="nav-button prev-button" onClick={handlePrev}>
        <LeftArrow width="2.4rem" height="2.4rem" />
      </button>
      <div className="portfolio-viewport">
        <div
          className="portfolio-filmstrip"
          ref={filmRef}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 4}rem))`,
            transition: isTransitioning ? 'transform 0.5s ease' : 'none',
          }}
        >
          {paddedPortfolio.map((project, index) => (
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
