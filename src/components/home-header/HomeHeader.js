import React from 'react'
import wave from '../../assets/logos/wave.svg'
import './HomeHeader.css'
import Typeanimation from '../animation/Typeanimation'
import codingimg from '../../assets/codingcatoon.webp'

const HomeHeader = () => {
  return (
    <div className='main-heading'>

        <div className='main-child'>
            <div className='wave'>
              <span className='hi'>Hi everyone!</span>
              <span className='img-wv'><img src={wave} className='waving' alt="wave" /></span>
            </div>
                <p><i>I'M Hayk Zhamharyan</i></p>
          <div className="typing-animation">
              <Typeanimation/>
          </div>        
        </div>

        <div className='main-child'>
          <img src={codingimg} alt="coding" width="500px"/>
        </div>

      </div>
  )
}

export default HomeHeader