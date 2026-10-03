import React from 'react';
import './MilestonesSection.css';

const MILESTONES = [
  {
    id: 1,
    description: 'Created optimized low-poly assets for the real-time game engine. Built Boba run, including vehicles, environment props, and modular assets.',
  },
  {
    id: 2,
    description: 'Created optimized low-poly assets for the real-time game engine. Built environments, props, and modular assets.',
  },
];

function MilestonesSection() {
  return (
    <section className="milestones-section">
      <div className="milestones-container">
        <h2>Milestones</h2>
        <div className="milestones-grid">
          {MILESTONES.map((milestone) => (
            <div key={milestone.id} className="milestone-card">
              <div className="milestone-icon"></div>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MilestonesSection;
