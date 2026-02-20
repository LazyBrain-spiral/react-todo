import React, { useMemo } from 'react'
import useStore from './Store'

function Duetask() {
  const tasks = useStore((state) => state.tasks);
  const today = new Date().toDateString();
  
  const grouped = useMemo(() => {
    
      return tasks.reduce((acc, task) => {
        if (task.done) return acc;
        if (task.date === today) return acc;

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
      {Object.keys(grouped).length === 0 ? (
        <h2 style={{ textAlign: "center" , marginTop: "30px" }}>No tasks due</h2>
      ) : (
        Object.keys(grouped).map(date => (
          <div key={date} style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", padding: "10px", marginBottom: "10px", marginTop: "10px", marginLeft: "10px" }}>
            <h3>{date}</h3>
            {grouped[date].map(task => (
              <div key={task.id} style={{ alignItems: "center", display: "flex" }}>
                <span>{task.name}</span>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  )
}

export default Duetask