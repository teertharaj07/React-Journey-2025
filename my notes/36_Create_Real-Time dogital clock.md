****36: Create a Real-Time Digital Clock in React – Display Current Date and Time in Todo App******
--------------------------------------------------
Learn how to create a real-time clock in React that displays the current date and time, updating every second. This tutorial covers the basics of setting up a dynamic digital clock using React hooks like useState and useEffect, ensuring your clock remains accurate and responsive. Perfect for enhancing your React projects with real-time functionality.
-----------------------------------------------

import { useState } from "react";
import "./Todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  //state variable
  const [inputValue, setInputValue] = useState("");

  // input value store
  const [task, setTask] = useState([]);

  //time and date handling
  const [dateTime, setDateTime] = useState();

  // handle input chaging value
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // form submit handling
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue.toLocaleLowerCase()]);

    setInputValue("");
  };

// console.log("hey");  componets rereder



  // todo Date and Time

  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();

    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`);
  }, 1000);

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">
         {dateTime}
        </h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              {" "}
              Add Task
            </button>
          </div>
        </form>
      </section>

      <section className="myUnOrderList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn">
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};



---------is code ke ander every second componets re-render ho rha h jisse ki hamari memory conflict ho rhi h to
==========================================