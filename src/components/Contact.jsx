import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { data } from '../data/portfolioData';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    emailjs.sendForm('service_7o14tzw', 'template_o5cvymu', form.current, '3NLl0HLt1GpFHZ_Pi')
      .then((result) => {
          setStatus('¡Mensaje enviado con éxito!');
          e.target.reset();
      }, (error) => {
          setStatus('Hubo un error al enviar el mensaje. Intenta de nuevo.');
      });
  };

  return (
    <section id="contacto" className="mb-5 pt-4">
      <h2 className="section-title">Contáctame</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card-custom p-4 h-100">
            <h4 className="mb-4">Información de Contacto</h4>
            <p><strong>Teléfono:</strong> {data.personalInfo.phone}</p>
            <p><strong>Email Principal:</strong> {data.personalInfo.emails[0]}</p>
            <p><strong>Email Alternativo:</strong> {data.personalInfo.emails[1]}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-custom p-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" name="user_name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="user_email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea name="message" className="form-control" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-custom w-100">Enviar Mensaje</button>
              {status && <p className="mt-3 text-center fw-bold">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;