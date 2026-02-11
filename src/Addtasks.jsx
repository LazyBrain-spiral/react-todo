import React, { useState } from "react";
import useStore from "./Store";
import useLocalStore from "./DraftStore";


function Addtasks() {
  const addTasks = useStore((state) => state.addTasks);
  const Localtasks = useLocalStore((state) => state.Localtasks);
  const localaddTasks = useLocalStore((state) => state.localaddTasks);
  const clearLocalTasks = useLocalStore((state) => state.clearLocalTasks);
  const setShowmodal = useStore((state) => state.setShowmodal);


  const [title, setTitle] = useState("");

  const submitFunction = (e) => {
    e.preventDefault();
    if (Localtasks.length === 0) return;
    addTasks(Localtasks);
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