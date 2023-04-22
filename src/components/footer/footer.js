import React from 'react'
import './footer.css'
import github from '../../assets/logos/github.svg'

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()
  return (
    <div className='footer'>
        <p className='footer-child'>Designed and Developed by Hayk</p>
        <p className='footer-child'>Copyright © {year}</p>
        <a className='footer-child' href="https://github.com/Hayk7JS7?tab=repositories" target="_blank"><img className='logogit' src={github}/></a>
    </div>
  )
}

export default Footer
