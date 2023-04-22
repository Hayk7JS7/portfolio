import React, { useEffect, useState } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import home from '../../assets/home.svg';
import about from '../../assets/about.svg';
import projects from '../../assets/projects.svg';
import NavHamburger from './nav-hamburger/NavHamburger';

const Nav = () => {
    const [updateNav, setUpdateNav] = useState(() => {
        if(window.innerWidth <= 768){
            return true
        }
        return false
    })
    useEffect(() => {
        const burger = () => {
            if(window.innerWidth <= 768){
                setUpdateNav(true)
                } else {
                    setUpdateNav(false)
                }
        }
        window.addEventListener("resize", burger)
        return (() => {
            window.removeEventListener("resize", burger)
        })
    }, [])
  return (
    <nav className="nav">
        {updateNav ? <NavHamburger/> : 
        <div className='navContent'>
            <h1>NA</h1>
            <div className='menus'>
                <NavLink to={"/"}>
                    <div className='menu'>
                        <div className="menuContent">
                            <img src={home} alt="home" />
                            <p>Home</p>
                        </div>
                        <div className='line' />
                    </div>
                </NavLink>
                <NavLink to={"/about"}>
                    <div className='menu'>
                        <div className="menuContent">
                            <img src={about} alt="about" />
                            <p>About</p>
                        </div>
                        <div className='line' />
                    </div>
                </NavLink>
                <NavLink to={"/projects"}>
                    <div className='menu'>
                        <div className="menuContent">
                            <img src={projects} alt="projects" />
                            <p>Projects</p>
                        </div>
                        <div className='line' />
                    </div>
                </NavLink>
            </div>
        </div>
}
    </nav>
  )
}

export default Nav