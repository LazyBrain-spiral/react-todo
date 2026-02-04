import React from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    
        <div className="sidebar">
            
            <img src={logo} className='logo' height={'70px'} />
            <ul className='sidelinks'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/addtasks">Add Tasks</Link></li>
                <li><Link to="/card">Done</Link></li>
                <li><Link to="/current">Due Tasks</Link></li>
                <li><Link to="/current">Due Tasks</Link></li>
            </ul>
        </div>
  )
}

export default Sidebar
