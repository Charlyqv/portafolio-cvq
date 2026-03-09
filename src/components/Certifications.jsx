import React from 'react';
import { data } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certificaciones" className="mb-5 pt-4">
      <h2 className="section-title">Certificaciones</h2>
      <div className="row">
        {data.certifications.map((exp, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className="card-custom p-4">
              <h4 className="fw-bold">{exp.title}</h4>
              <h6 className="text-muted mb-3">{exp.company} | {exp.date}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;