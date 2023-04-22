import React, { useEffect, useState } from 'react'
import './NavHamburger.css'
import { NavLink } from 'react-router-dom';
import home from '../../../assets/home.svg';
import about from '../../../assets/about.svg';
import projects from '../../../assets/projects.svg'


const NavHamburger = () => {
    const [changes, setChanges] = useState(1)
    const [name, setName] = useState("passive")
    const [width, setWidth] = useState(() => {
        if(window.innerWidth >= 500){
            return true
        } else {
            return false
        }
    })
    const onClick = () => {
        setChanges(pre => pre + 1)
        if(changes % 2 === 0){
            setName("passive")
        } else {
            setName("active")
        }
    }
    useEffect(() => {
        const check = () => {
            if(window.innerWidth >= 500){
                setWidth(true)
            } else {
                setWidth(false)
            }
        }
        window.addEventListener("resize", check)
        return (() => {
            window.removeEventListener("resize", check)
        })
    }, [])

  return (
    <div>
        <div className='burger-menu'>

         {width ? <h1>HJ</h1> : 
         <>
            <div className={"menu-icon"} onClick={onClick}>
                    <span className={name}></span>
                    <span className={name}></span>
                    <span className={name}></span>
            </div>
         </>
         }
         {name === "active" && 
        <div className='burger-content'>
                <NavLink to={"/"}>
                    <div className='menu-burg'>
                        <div className="menu-burgContent">
                            <img src={home} alt="home" />
                            <p>Home</p>
                        </div>
                        <div className='line' />
                    </div>
                </NavLink>
                <NavLink to={"/about"}>
                    <div className='menu-burg'>
                        <div className="menu-burgContent">
                            <img src={about} alt="about" />
                            <p>About</p>
                        </div>
                        <div className='line' />
                    </div>
                </NavLink>
                <NavLink to={"/projects"}>
                    <div className='menu-burg'>
                        <div className="menu-burgContent">
                            <img src={projects} alt="projects" />
                            <p>Projects</p>
                        </div>
                        <div className='line' />
                    </div>
                </NavLink>
            </div>
        }
        { width &&       
                <div className={"menu-icon"} onClick={onClick}>
                    <span className={name}></span>
                    <span className={name}></span>
                    <span className={name}></span>
                </div>
        }
      </div>
    </div>
  )
}

export default NavHamburger
