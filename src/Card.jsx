import React, { useState } from 'react';
import useStore from "./Store";

function Card() {
  const newtasks = useStore((state) => state.tasks);
  const updatedtasks = useStore((state) => state.updateTasks);

  const toggleTask = (id) => {
      const updated =newtasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
    );
    updatedtasks(updated);
  };

  return (
    <div>
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
          </div>
        ))}

      </div>
    </div>
  );
}

export default Card;
