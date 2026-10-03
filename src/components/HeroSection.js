import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import './HeroSection.css';

function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(false);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          onEnded={handleVideoEnd}
        >
          <source src="/videos/reel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-title">
              <span className="hero-line">JUMP INTO MY</span>
              <span className="hero-line hero-highlight">WORLD</span>
            </div>
            <p className="hero-subtitle">PLAY SHOW REEL</p>
          </div>

          {!isPlaying && (
            <button className="hero-play-button" onClick={handlePlayClick} aria-label="Play reel">
              <Play size={36} fill="currentColor" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
