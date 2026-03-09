import React from 'react';
import { data } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="habilidades" className="mb-5 pt-4">
      <h2 className="section-title">Habilidades y Competencias</h2>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card-custom p-4 h-100">
            <h4 className="mb-4" style={{ color: 'var(--accent-color)' }}>Stack Tecnológico</h4>
            <div className="d-flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="badge-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card-custom p-4 h-100">
            <h4 className="mb-4" style={{ color: 'var(--accent-color)' }}>Soft Skills & Metodologías</h4>
            <div className="d-flex flex-wrap gap-2">
              {data.competencies.map((comp, index) => (
                <span key={index} className="badge-skill" style={{ backgroundColor: '#f1f3f5' }}>
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;