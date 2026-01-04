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
  const touchStartX = useRef(0);
  const isSwiping = useRef(false);

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex(prevIndex => Math.round(prevIndex) - 1);
  };

  const handleNext = () => {
    if (currentIndex >= portfolio.length + 1) return;
    setCurrentIndex(prevIndex => Math.round(prevIndex) + 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
  };

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

    const handleMediaChange = (e) => {
      if (e.matches) { // 화면 너비가 980px 이하일 때
        filmStrip.addEventListener('touchstart', handleTouchStart);
        filmStrip.addEventListener('touchend', handleTouchEnd);
      } else { // 980px 초과일 때 리스너 제거
        filmStrip.removeEventListener('touchstart', handleTouchStart);
        filmStrip.removeEventListener('touchend', handleTouchEnd);
      }
    };

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(portfolio.length);
      } else if (currentIndex === portfolio.length + 1) {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }
    };

    const mediaQuery = window.matchMedia('(max-width: 980px)');
    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);

    filmStrip.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      filmStrip.removeEventListener('touchstart', handleTouchStart);
      filmStrip.removeEventListener('touchend', handleTouchEnd);
      filmStrip.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [currentIndex, portfolio.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

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
      <div className="portfolio-indicators">
        {portfolio.map((_, idx) => {
          const isActive = currentIndex === idx + 1;
          const isFirstGhost = currentIndex === 0 && idx === portfolio.length - 1;
          const isLastGhost = currentIndex === portfolio.length + 1 && idx === 0;

          return (
            <span
              key={idx}
              className={`indicator-bar ${isActive || isFirstGhost || isLastGhost ? 'active' : ''}`}
            />
          );
        })}
      </div>
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
