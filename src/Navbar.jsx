import React from 'react'
import useStore from './Store'

function Navbar() {
  const setShowmodal = useStore((state) => state.setShowmodal);
  return (
    <div className='navbar'>
      <header className='nav-header'><h2>All Tasks</h2></header>
      <button className='nav-addtask' onClick={()=>{setShowmodal(true)}}>Add Task</button>
    </div>
  )
}

export default Navbar
