*****37: Delete Elements and Auto-Update Tasks in React: Add a Clear All Button to Your To-Do App******
----------------------------------------------------
Learn how to enhance your React.js to-do app with real-time updates by adding delete functionality for individual tasks and a clear all button. This tutorial will show you how to handle user interactions, update the state, and create a smooth user experience. For instance, we'll demonstrate how to efficiently manage task deletions and clear all tasks in a to-do list. Perfect for React developers looking to build responsive and interactive web apps. -------------------------------------------------- 📢

----------code-----------my code
import { useEffect, useState } from "react";
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

  // console.log("hey"); // componets rereder

  // todo Date and Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();

      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);





  //todo handleDeleteTodo function
  const handleDeleteTodo=(curTask,index)=>{
    console.log(task);
    console.log(curTask);
    console.log(index);
    task.splice(index,1);
    
    
    
  }


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
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
                <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask,index)}>
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


-------------------spicific part-----------
<ul>
          {task.map((curTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask,index)}>
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>


         //todo handleDeleteTodo function
  const handleDeleteTodo=(curTask,index)=>{
    console.log(task);
    console.log(curTask);
    console.log(index);
    task.splice(index,1);
    
    
    
  }

is me maine kiya ki jab user delete btn ko ckick kiya to ek event fire hua handleDeleteTodo is me maine to augument pass kiye jo mujhe task array ko map karte samay mil rahe to jaise onClick={()=>handleDeleteTodo(curTask,index)}

notes:- jab bhi hame event function ke aander jab bhi koi argumnets pass karte h to hame  flat arrow function ka upyoug karte h

aab hamne handleDeleteTodo ko define kiya aur done augumnet as paramenter pass kiya  const handleDeleteTodo=(curTask,index)=>{ }

ab maine console.log(task);
    console.log(curTask);
    console.log(index);
    task.splice(index,1);

    isme splice mathod ka upyoug kar element ko delete kar diya



    ===========best react practices===========
    import { useEffect, useState } from "react";
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

  // console.log("hey"); // componets rereder

  // todo Date and Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();

      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);





  //todo handleDeleteTodo function
  const handleDeleteTodo=(value,index)=>{
    console.log(task);
    console.log(value);
    // console.log(index);
    // task.splice(index,1);

    const updatedTask=task.filter((curTask)=> curTask!==value);
    setTask(updatedTask);

    
    
    
  }


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <h2 className="date-time">{dateTime}</h2>
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
                <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask,index)}>
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


-----------specific part -----------



  //todo handleDeleteTodo function
  const handleDeleteTodo=(value,index)=>{
    console.log(task);
    console.log(value);
    // console.log(index);
    // task.splice(index,1);

    const updatedTask=task.filter((curTask)=> curTask!==value);
    setTask(updatedTask);

    
    
    
  }
  ===========================clear All button=========
   <section>
          <button className="clear-btn"  onClick={handleClearAllTodo} > Clear all</button>
        </section>


          //todo  handleClearAllTodo function
  const handleClearAllTodo=()=>{
    console.log(task);
    // task.splice(0,task.length);
    const clearAllTask=task.filter(()=> false);
    setTask(clearAllTask);
    
  }



  <section>
          <button className="clear-btn"  onClick={handleClearTodoData} > Clear all</button>
        </section>


         //todo  handleClearAllTodo function
  const handleClearTodoData=()=>{
    console.log(task);
    // task.splice(0,task.length); //way 1

    // const clearAllTask=task.filter(()=> false);
    // setTask(clearAllTask); //way 2
    setTask([]); // set task ko empty array banana
    
    
  }
  