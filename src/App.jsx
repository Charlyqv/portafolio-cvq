import React from 'react';
import Navigation from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navigation />
      <Container className="mt-5 pt-5">
        <Hero />
        <Experience />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}

export default App;