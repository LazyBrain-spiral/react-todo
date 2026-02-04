import React, { useState } from "react";
import useStore from "./Store";
import useLocalStore from "./DraftStore";

function Addtasks() {
  const addTasks = useStore((state) => state.addTasks);
  const { Localtasks, localaddTasks, clearLocalTasks } = useLocalStore();
  const [title, setTitle] = useState("");

  const submitFunction = (e) => {
    e.preventDefault();
    if (Localtasks.length === 0) return;
    addTasks(Localtasks);
    clearLocalTasks();
    setTitle("");
  };

  return (
    <div className="addtask">
      <h2>ADD A NEW TASK!</h2>

     
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
                if (!title.trim()) return;
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