import React from 'react'
import todolists from "../assets/todolists.svg"
import { Link } from 'react-router-dom'

function todolist() {
  return (
    <div>
        <img src={todolists} alt="Todo Lists" width={100} height={100} />
        <h3>No tasks for today!</h3>
        <button className='addnewtask'>
            <Link to="/addtasks" className='justalink'>
                <span>Add Tasks</span>
            </Link>
        </button>
    </div>
  )
}

export default todolist
