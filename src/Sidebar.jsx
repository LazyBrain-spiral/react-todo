import React from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import HomeIcon from './Components/HomeIcon'
import AddIcon from './Components/Addbutton'
import DueDateIcon from './Components/DuedateIcon'
import DarkIcon from './Components/DarkIcon'
import Block from './Components/Block'
import CalendarIcon from './Components/CalendarIcon'
import useStore from './Store'


function Sidebar() {
    const isDarkMode = useStore((state) => state.isDarkMode);
    const setIsDarkMode = useStore((state) => state.setIsDarkMode);
  return (
    
        <div className="sidebar">
            
            <img src={logo} className='logo' height={'90px'} />
            <hr className='linebreak' />
            <ul className='sidelinks'>
                <li>
                    <Link to="/" className="nav-link">
                        <HomeIcon />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/calendar" className="nav-link">
                        <CalendarIcon />
                        <span>Calendar</span>
                    </Link>
                </li>
                <li>
                    <Link to="/duetask" className="nav-link">
                        <DueDateIcon />
                        <span>Due Tasks</span>
                    </Link>
                </li>
            </ul>
            <hr className='linebreak' />
            <div id="darkmode">
                <button onClick={() => setIsDarkMode(!isDarkMode)}>
                    <DarkIcon />
                    <span>Dark mode</span>
                </button>
            </div>
            
        </div>
  )
}

export default Sidebar