import React, { useMemo } from 'react'
import useStore from './Store'

function Duetask() {
  const updatedtasks = useStore((state) => state.updateTasks);
  const tasks = useStore((state) => state.tasks);
  const toggleTask = (id) => {
    const updated = newtasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    updatedtasks(updated);
  }

  const grouped = useMemo(() => {
    return tasks.reduce((acc, task) => {
      if (task.done) return acc;

      const key = task.date;

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(task);

      return acc;
    }, {});
  }, [tasks]);
  

  return (
    <div>
      {Object.keys(grouped).map(date => (
        <div key={date} style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", padding: "10px", marginBottom: "10px", marginTop: "10px", marginLeft: "10px" }}>
          <h3>{date}</h3>
          {grouped[date].map(task => (
            <div key={task.id} style={{ alignItems: "center", display: "flex" }}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask && toggleTask(task.id)}
              />
              <span style={{ marginLeft: "3px", textDecoration: task.done ? "line-through" : "none" }}>{task.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Duetask