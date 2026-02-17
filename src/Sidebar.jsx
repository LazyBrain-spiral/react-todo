import React from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
import HomeIcon from './Components/HomeIcon'
import AddIcon from './Components/Addbutton'
import DueDateIcon from './Components/DuedateIcon'
import DarkIcon from './Components/DarkIcon'
import Block from './Components/Block'
import CalendarIcon from './Components/CalendarIcon'


function Sidebar() {
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
                <li>
                    <Link to="/current" className="nav-link">
                        <Block />
                        <span>Block site</span>
                    </Link>
                </li>
            </ul>
            <hr className='linebreak' />
            <div id="darkmode">
                <button>
                    <DarkIcon />
                    <span>Dark mode</span>
                </button>
            </div>
            
        </div>
  )
}

export default Sidebar