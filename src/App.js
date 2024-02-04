import React, { Fragment, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Skill from './components/Skill/Skill.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Testimonial from './components/Testimonial/Testimonial.js';
import Project from './components/project/Project.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const appRef = useRef();

  useEffect(() => {
    const element = appRef.current;
    const sections = ['header', 'nav', 'about', 'skill', 'project', 'testimonial', 'contact'];

    sections.forEach((el) => {
      gsap.from(element.querySelector(`.${el}`), {
        autoAlpha: 0,
        duration: 1,
        y: -50,
        scale: 0.5,
        scrollTrigger: {
          trigger: element.querySelector(`.${el}`),
          start: 'top 80%',
          end: 'bottom 10%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div ref={appRef}>
      <Header className="header" />
      <Nav className="nav" />
      <About className="about" />
      <Skill className="skill" />
      <Project className="project" />
      <Testimonial className="testimonial" />
      <Contact className="contact" />
    </div>
  );
}

export default App;
