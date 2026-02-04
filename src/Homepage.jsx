import React from "react";
import useStore from "./Store";

function Homepage() {
  const tasks = useStore((state) => state.tasks);
  const clearTasks = useStore((state) => state.clearTasks);

  const logging = ()=>{
    console.log(tasks)
  }

  return (
    <div className="content">
      <h2>All Tasks</h2>
      <h2>All Tasks</h2>

      <button onClick={clearTasks}>Clear</button>
      <button onClick={logging}>console</button>

      {tasks.length === 0 && <p>No tasks yet</p>}

      {tasks.map((task) => (
        <p key={task.id}>{task.name}</p>
      ))}
    </div>
  );
}

export default Homepage;
