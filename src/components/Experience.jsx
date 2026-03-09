import React from 'react';
import { data } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experiencia" className="mb-5 pt-4">
      <h2 className="section-title">Experiencia Laboral</h2>
      <div className="row">
        {data.experience.map((exp, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className="card-custom p-4">
              <h4 className="fw-bold">{exp.title}</h4>
              <h6 className="text-muted mb-3">{exp.company} | {exp.date}</h6>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;