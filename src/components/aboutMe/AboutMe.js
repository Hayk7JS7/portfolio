import React from 'react'
import './AboutMe.css';

import AboutMeImage from '../../assets/aboutMe.png';

const AboutMe = () => {
  return (
    <section className='aboutMeSection' >
        <div className='aboutMe'>
            <div>
                <div className='aboutMeImagePart'>
                    <img src={AboutMeImage} alt="AboutMeImage" />
                </div>
            </div>
            <div className='aboutMeInformation'>
                <h2>About Me</h2>
                <p>Results-driven and motivated Software Engineer with a demonstrated experience in improving software performance, testing and updating existing software, and developing new software functionalities, strong attention to detail, and ability to finish projects on time.</p>
                <button>Download CV</button>
            </div>
        </div>
    </section>
  )
}

export default AboutMe