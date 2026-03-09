import React from 'react';
import { data } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="perfil" className="mb-5">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Ingeniero de Software & <br/>
            <span style={{ color: 'var(--accent-color)' }}>Full Stack Developer</span>
          </h1>
          <p className="lead" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            {data.profile}
          </p>
          <a href="#contacto" className="btn btn-custom mt-3">Contactar</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;