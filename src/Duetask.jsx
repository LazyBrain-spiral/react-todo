import React, { useEffect, useMemo,useState } from 'react'
import useStore from './Store'
import Duetaskprop from './Duetaskprop';

function Duetask() {
    const tasks = useStore((state) => state.tasks);
    const today = new Date().toDateString();
    const [duetasks, setDuetasks] = useState([]);

    

    const grouped = useMemo(() => {
      return tasks.reduce((acc, task) => {
        const key = task.date;

        if (!acc[key]) {
          acc[key] = [];
        }

        if(!task.done){
            acc[key].push(task);
        }

        

        return acc;
      }, {});
    }, [tasks]);
    console.log("grouped: ", grouped);

  return (
    <div>
      {Object.keys(grouped).map(date => (
        <div key={date}>
          <h3>{date}</h3>
            {grouped[date].map(task => (
                <div key={task.id}>{task.name}</div>
            ))}
        </div>
      ))}

    </div>
  )
}

export default Duetask
