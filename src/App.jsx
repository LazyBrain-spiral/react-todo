import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Homepage.jsx'
import Sidebar from './Sidebar.jsx'
import { Routes, Route } from "react-router-dom";
import Addtasks from './Addtasks.jsx'
import Card from './card.jsx'



function App() {
  

  return (
    <>
    <div className="layout">
      <Sidebar/>
      <div className="newcontent">
        <Routes>
          <Route path = '/' element = {<Homepage/>}/>
          <Route path = '/addtasks' element = {<Addtasks/>}/>
          <Route path = '/card' element = {<Card/>}/>
      </Routes>
      </div>
    </div>

    </>
  )
}

export default App
