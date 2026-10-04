import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-copy">
          <h2>About me</h2>
          <p>
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

        <div className="about-film-strip-wrapper">
          <div className="film-strip-stage">
            <span className="film-strip-edge film-strip-edge-left" aria-hidden="true" />
            <div className="film-strip-frame">
              <img src="/images/about-film.jpg" alt="Film strip" className="film-strip-image" />
            </div>
            <span className="film-strip-edge film-strip-edge-right" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
