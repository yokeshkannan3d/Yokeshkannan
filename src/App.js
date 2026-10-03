import React, { useState, useEffect } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import MilestonesSection from './components/MilestonesSection';
import ContactSection from './components/ContactSection';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app">
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <MilestonesSection />
      <ContactSection />
    </div>
  );
}

export default App;
