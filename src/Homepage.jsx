import React from "react";
import useStore from "./Store";

function Homepage() {
  const tasks = useStore((state) => state.tasks);
  const clearTasks = useStore((state) => state.clearTasks);
  const newtasks = useStore((state) => state.tasks);
  const updatedtasks = useStore((state) => state.updateTasks);
  const deletetasks = useStore((state) => state.deletetasks);
  const editTasks = useStore((state) => state.editTasks);


  const toggleTask = (id) => {
    const updated =newtasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    updatedtasks(updated);
  };

  const logging = ()=>{
    console.log(tasks)
  }

  return (
    <div className="content">
      <h2>All Tasks</h2>
      <button onClick={clearTasks}>Clear</button>
      <button onClick={logging}>console</button>

      

      {tasks.map((task) => (
        <p key={task.id}>{task.name}</p>
      ))}
      <div className="maintemplate">
        <h1>Today:</h1>

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
                marginLeft: "8px"
              }}
            >
              
              {task.name}
            </span>
            <button onClick={() => deletetasks(task.id)}>Delete</button>
            <button onClick={() => editTasks(task.id, prompt("Enter new name"))}>Edit</button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Homepage;
