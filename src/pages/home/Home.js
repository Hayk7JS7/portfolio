import React from 'react'
import './Home.css'
import HomeHeader from '../../components/home-header/HomeHeader'
import HomeIntroduction from '../../components/home-introduction/HomeIntroduction'
import HomeFooter from '../../components/home-footer/HomeFooter'

const Home = () => {
  return (
    <div className='home'>
      <HomeHeader/>
      <HomeIntroduction/>
      <HomeFooter/>
    </div>
  )
}

export default Home