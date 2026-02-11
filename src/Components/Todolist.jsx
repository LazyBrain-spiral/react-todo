import React from 'react'
import todolists from "../assets/todolists.svg"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useStore from '../Store'


function todolist() {
  const setshowModal = useStore((state) => state.setShowmodal);
  return (
    <div>
        <img src={todolists} alt="Todo Lists" width={100} height={100} />
        <h3>No tasks for today!</h3>
        <button onClick={()=>{setshowModal(true)}} className='addnewtask'>Add task</button>
    </div>
  )
}

export default todolist
