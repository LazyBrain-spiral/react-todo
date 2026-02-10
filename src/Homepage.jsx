import React, { useEffect, useState } from "react";
import useStore from "./Store";
import EditIcon from "./Components/EditIcon";
import DeleteIcon from "./Components/DeleteIcon";
import './index.css'
import Threecomponents from "./Threecomponents";
import correctSvg from "./assets/correct.svg"
import overdueSvg from "./assets/Overdue.svg"
import pendingSvg from "./assets/pending.svg"
function Homepage() {
  const tasks = useStore((state) => state.tasks);
  const newtasks = useStore((state) => state.tasks);
  const updatedtasks = useStore((state) => state.updateTasks);
  const deletetasks = useStore((state) => state.deletetasks);
  const editTasks = useStore((state) => state.editTasks);
  const [title, setTitle] = useState("Today");

  const toggleTask = (id) => {
    const updated = newtasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    updatedtasks(updated);
  };

  useEffect(() => {
    const input = prompt("Enter your title", "Today");
    if (input) setTitle(input);
  }, []);

  const logging = () => {
    console.log(tasks)
  }

  return (
    <div className="content">
      <h2 id="title">{title}</h2>

      <div className="maincard">
        <Threecomponents name="Completed" img={correctSvg} />
        <Threecomponents name="Pending" img={pendingSvg} />
        <Threecomponents name="Overdue" img={overdueSvg}/>
      </div>



      <div className="maintemplate">
        {tasks.length === 0 ? <p>No tasks added yet!</p> : null}
        {newtasks.map((task) => (
          <div key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.done ? "line-through" : "none",
                marginLeft: "8px", marginRight: "10px"
              }}
            >
              {task.name}
            </span>
            <button id="button1" onClick={() => deletetasks(task.id)}><DeleteIcon/></button>
            <button id="button2" onClick={() => editTasks(task.id, prompt("Enter new name", task.name))}><EditIcon/></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;