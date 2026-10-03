import React from 'react';
import { Moon, Sun } from 'lucide-react';
import './ThemeToggle.css';

function ThemeToggle({ isDarkMode, toggleTheme }) {
  return (
    <div className="theme-toggle-container">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {isDarkMode ? (
          <Sun size={20} />
        ) : (
          <Moon size={20} />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
