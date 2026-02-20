import React, { useState } from "react";
import useStore from "./Store";
import useLocalStore from "./DraftStore";

function Addtasks() {
  const tasks = useStore((state) => state.tasks);
  const addTasks = useStore((state) => state.addTasks);
  const Localtasks = useLocalStore((state) => state.Localtasks);
  const localaddTasks = useLocalStore((state) => state.localaddTasks);
  const clearLocalTasks = useLocalStore((state) => state.clearLocalTasks);
  const setShowmodal = useStore((state) => state.setShowmodal);
  const count = useStore((state) => state.count);
  const pendingCount = useStore((state) => state.pendingCount); 
  const incrementCount = useStore((state) => state.incrementCount);
  const decrementCount = useStore((state) => state.decrementCount);
  const incrementPendingCount = useStore((state) => state.incrementPendingCount);
  const decrementPendingCount = useStore((state) => state.decrementPendingCount);
  
  
  const today = new Date().toDateString(); 
  
  const overdueCount = useStore((state) => state.overdueCount);
  const incrementOverdueCount = useStore((state) => state.incrementOverdueCount);

  const [title, setTitle] = useState("");

  
  const incrementingOverdue = () => {
    Localtasks.forEach(task => {
      
      if (!task.done && new Date(task.date) < new Date(today)) {
        incrementOverdueCount();
      }
    });
  };

  const submitFunction = (e) => {
    e.preventDefault();
    if (Localtasks.length === 0) return;
    
    addTasks(Localtasks);
    
    
    incrementingOverdue(); 
    
    clearLocalTasks();
    setTitle("");
    setShowmodal(false);
  };

  return (
    <div className="addtask">
      <button className="X" onClick={()=>{setShowmodal(false)}}>x</button>
      <div className="taskcard">
        <form className="formyes" onSubmit={submitFunction}>
          <div id="new-add">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add your new task"
            />
            <button
              id="new-button"
              type="button"
              onClick={() => {  
                localaddTasks(title);
                setTitle("");
                incrementPendingCount();
                // FIX 3: Removed incrementingOverdue() from here because the state is too slow to read it instantly
              }}
            >
              +
            </button>
          </div>

          <button type="submit">Submit</button>

          {Localtasks.map((task) => (
            <div key={task.id} className="checkbox">
              <p>{task.name}</p>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default Addtasks;