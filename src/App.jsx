import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './Homepage.jsx'
import Sidebar from './Sidebar.jsx'
import { Routes, Route } from "react-router-dom";
import Addtasks from './Addtasks.jsx'
import Navbar from './Navbar.jsx'
import useStore from './Store.jsx'



function App() {
  const showmodal = useStore((state) => state.showmodal);
  const setShowmodal = useStore((state) => state.setShowmodal);    

  return (
    <>
    {showmodal && <Addtasks/>}
    <div className="layout"> 
      <Sidebar/>
      <div className="grid">
        <div className='navbar'><Navbar /></div>
        <div className="newcontent">
          <Routes>
            <Route path = '/' element = {<Homepage/>}/>
        </Routes>
        </div>


      </div>
      
    </div>

    </>
  )
}

export default App
