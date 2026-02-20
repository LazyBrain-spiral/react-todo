import React, { useEffect, useState } from "react";
import useStore from "./Store";
import EditIcon from "./Components/EditIcon";
import DeleteIcon from "./Components/DeleteIcon";
import './index.css'
import Threecomponents from "./Threecomponents";
import correctSvg from "./assets/correct.svg"
import overdueSvg from "./assets/Overdue.svg"
import pendingSvg from "./assets/pending.svg"
import Todolist from "./Components/Todolist"

function Homepage() {
  const tasks = useStore((state) => state.tasks);
  const newtasks = useStore((state) => state.tasks);
  const updatedtasks = useStore((state) => state.updateTasks);
  const deletetasks = useStore((state) => state.deletetasks);
  const editTasks = useStore((state) => state.editTasks);
  const [title, setTitle] = useState("Today");
  const count = useStore((state) => state.count);
  const pendingCount = useStore((state) => state.pendingCount); 
  const incrementCount = useStore((state) => state.incrementCount);
  const decrementCount = useStore((state) => state.decrementCount);
  const incrementPendingCount = useStore((state) => state.incrementPendingCount);
  const decrementPendingCount = useStore((state) => state.decrementPendingCount);
  const today = "Fri Feb 19 2026";
  const overdueCount = useStore((state) => state.overdueCount);
  const incrementOverdueCount = useStore((state) => state.incrementOverdueCount);
  const decrementOverdueCount = useStore((state) => state.decrementOverdueCount);
  

  const incrementStreak = useStore((state) => state.incrementStreak);
  const decrementStreak = useStore((state) => state.decrementStreak);

  
 

  const [currentDate, setCurrentDate] = useState("Sat Feb 15 2026")


  const toggleTask = (id) => {
    const task = newtasks.find(t => t.id === id);
    const currentDateString = new Date().toDateString();
    
    const updated = newtasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    updatedtasks(updated);
    
    
    if (task && !task.done) {
      
      incrementStreak(currentDateString);
    } else if (task && task.done) {
      
      decrementStreak(currentDateString);
    }
  };

  useEffect(() => {
    
    setCurrentDate(new Date().toDateString())
    
  }, []);

  console.log(tasks);

    




  return (
    <div className="content">
      <h2 id="title">{title}</h2>

      <div className="maincard">
        <Threecomponents name="Completed" img={correctSvg} color = "#e9fcdd" count={count} />
        <Threecomponents name="Pending" img={pendingSvg} color = "#fde1c6" count={pendingCount} />
        <Threecomponents name="Overdue" img={overdueSvg} color = "#f9d5d5" count={overdueCount}/>
      </div>



      <div className="maintemplate" >
        {tasks.length === 0 ? <Todolist/>: null}
        {newtasks.map((task) => (
          <div key={task.id} style={{ display: "flex",alignItems: "center" }}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => {
                toggleTask(task.id);
                if (task.done) {
                  decrementCount();
                  incrementPendingCount();
                } else {
                  incrementCount();
                  decrementPendingCount();
                }
              }}
            />
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                marginLeft: "8px", marginRight: "10px"
              }}
            >
              {task.name}
            </span>
            <button id="button1" onClick={() => { deletetasks(task.id); decrementCount(); decrementPendingCount(); if (today !== task.date){decrementOverdueCount()}}}><DeleteIcon/></button>
            <button id="button2" onClick={() => { editTasks(task.id, prompt("Enter new name", task.name)); }}><EditIcon/></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;