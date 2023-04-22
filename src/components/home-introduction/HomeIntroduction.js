import React, { useEffect, useState } from 'react'
import './HomeIntroduction.css'
import Typewrite from '../animation/Typewrite'

const HomeIntroduction = () => {
    const [show, setShow] = useState(false)
    let a = "I started learning programming in university and have been motivated to improve my skills every day since then I specialize in JavaScript, React JS, HTML, and CSS. I have had the opportunity to create dynamic and engaging websites through my dedication to programming. I invite you to explore my portfolio and see the passion and commitment that drives my work."
  useEffect(() => {
    const sizing = () => {
        if(window.innerHeight >= window.innerHeight / 2){
            setShow(true)
            } else {
              setShow(false)
            }
    }
    window.addEventListener("scroll", sizing)
    return (() => {
        window.removeEventListener("scroll", sizing)
    })
}, [])
  return (
    <div className="introduction">
        <h2 className='heading-intro'>Welcome to my portfolio!</h2>    
          <div className='introduce'>
            <div className='intro-child'>
              <div className='content'>
                {show ? <Typewrite string={a}/> :<> I started learning programming in university and have been motivated to improve my skills every day 
                since then. 
                I specialize in <strong className='core-words'>JavaScript, React JS, HTML, and CSS</strong>. I have had the opportunity to create dynamic   
                and engaging websites through my dedication to programming.
                <p><i>I invite you to explore my portfolio and see the passion and commitment that drives my work.</i></p></>}
              </div>
            </div>
          </div>
      </div>
  )
}

export default HomeIntroduction
