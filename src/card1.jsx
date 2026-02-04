import React, { useState } from 'react';

function Card() {
  const [task1, setTask1] = useState(false);
  const [task2, setTask2] = useState(false);
  const [task3, setTask3] = useState(false);


  return (
    <div className='newthing1'>
      <div className="taskcard1">
        <div className="formyes1">
          <form>
            <label id="maintask">Due Date</label>
            <label>Status:</label>
            <label>Due Date:</label>

            <label className='checkbox'>
              <input
                type="checkbox"
                onChange={(e) => setTask1(e.target.checked)}
              />
              <span style={{ textDecoration: task1 ? "line-through" : "none" }}>
                Task 1
              </span>
            </label>

            <label className='checkbox'>
              <input
                type="checkbox"
                onChange={(e) => setTask2(e.target.checked)}
              />
              <span style={{ textDecoration: task2 ? "line-through" : "none" }}>
                Task 2
              </span>
            </label>

            <label className='checkbox'>
              <input
                type="checkbox"
                onChange={(e) => setTask3(e.target.checked)}
              />
              <span style={{ textDecoration: task3 ? "line-through" : "none" }}>
                Task 3
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;