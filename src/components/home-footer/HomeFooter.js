import React from 'react'
import './HomeFooter.css'
import github from '../../assets/logos/github.svg'

const HomeFooter = () => {
  return (
    <div>
      <footer>
        <div className='discovery'>
          <div className='discover-child'>
            <p className='last-part'>Discover my work</p>
          </div>
          <div className='discover-child'>
            <p>
              I'm always open to <strong className='core-words'> new </strong> <strong className='core-words'>connections</strong> and <strong className='core-words'> collabrations</strong>
            </p>
          </div>
        </div>
        <div className='git-logo'>
          <a href="https://github.com/Hayk7JS7?tab=repositories" target="_blank"><img className='logogit' src={github}/></a>
        </div>
      </footer>
    </div>
  )
}

export default HomeFooter
