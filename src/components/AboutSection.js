import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      {/* Diagonal background film strip */}
      <div className="film-strip-diagonal">
        <div className="film-strip-diagonal-top"></div>
        <div className="film-strip-diagonal-bottom"></div>
      </div>

      {/* Main content container */}
      <div className="about-content-wrapper">
        {/* Left: Text content */}
        <div className="about-text-block">
          <h2 className="about-title">About me</h2>
          <p className="about-description">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since 1966,
            when designers at Letraset and James Mosley, the librarian at St Bride Printing
            Library in London, took a 1914 Cicero translation and scrambled it to make dummy
            text for Letraset's Body Type sheets. It has survived not only many decades, but
            also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised thanks to these sheets and more recently with desktop publishing software
            like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Right: Main horizontal film strip */}
        <div className="film-strip-primary-wrapper">
          <div className="film-strip-container">
            {/* Top perforations */}
            <div className="film-perforation-track film-perforation-top">
              {[...Array(14)].map((_, i) => (
                <span key={`top-${i}`} className="film-sprocket"></span>
              ))}
            </div>

            {/* Image frame */}
            <div className="film-image-wrapper">
              <img src="/images/about-film.jpg" alt="About Me" className="film-image" />
            </div>

            {/* Bottom perforations */}
            <div className="film-perforation-track film-perforation-bottom">
              {[...Array(14)].map((_, i) => (
                <span key={`bottom-${i}`} className="film-sprocket"></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
