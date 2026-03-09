import React from 'react';
import { data } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="proyectos" className="mb-5 pt-4">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="row">
        {data.projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card-custom p-4 h-100 d-flex flex-column text-center">
              <div className="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="var(--accent-color)" viewBox="0 0 16 16">
                  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                </svg>
              </div>
              <h5 className="fw-bold mb-3">{project.name}</h5>
              <p className="text-muted flex-grow-1 small">
                {project.desc}
              </p>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-primary mt-auto"
                style={{ borderColor: 'var(--accent-color)', color: 'var(--accent-color)', fontWeight: '600' }}
              >
                Visitar Sitio Web
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;