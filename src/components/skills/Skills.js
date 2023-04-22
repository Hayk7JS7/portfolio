import React from 'react'
import './Skills.css';

import css3 from '../../assets/logos/css3.svg';
import html5 from '../../assets/logos/html5.svg';
import javascript from '../../assets/logos/javascript.svg';
import nodejs from '../../assets/logos/nodejs.svg';
import postgresql from '../../assets/logos/postgresql.svg';
import react from '../../assets/logos/react.svg';

import postman from '../../assets/logos/postman.svg';
import vscode from '../../assets/logos/vscode.svg';

const Skills = () => {

    const professionalSkills = [html5, javascript, react, css3, postgresql, nodejs];
    const toolsIUse = [postman, vscode];

    const getSkills = (list) => {
        const skilss = [];
        list.forEach((skill, index) => {
            skilss.push(
                <div className="skillIcon" key={index}>
                    <img src={skill} alt="skill" />
                </div>
            )
        })    

        return skilss;
        
      }

    return (
        <section className='skillsSection'>
            <div className="skills">
                <h2>Professional Skillset</h2>
                <div className='skillIcons'>
                    {getSkills(professionalSkills)}
                </div>
            </div>
            <div className="skills">
                <h2>Tools I use</h2>
                <div className='skillIcons'>
                    {getSkills(toolsIUse)}
                </div>
            </div>
        </section>
    )
}

export default Skills