import React from 'react'
import './About.css';

import AboutMe from '../../components/aboutMe/AboutMe';
import Skills from '../../components/skills/Skills';

const About = () => {
  return (
    <section className='about' >
      <AboutMe />
      <Skills />
    </section>
  )
}

export default About