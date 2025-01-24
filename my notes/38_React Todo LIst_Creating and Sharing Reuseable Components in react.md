*****38: React Todo List: Creating and Sharing Reusable Components with Best Practices****
---------------------------------------------------
In this video, we enhance your React Todo List by creating and sharing reusable components while following best practices. Learn how to develop a reusable todo form and list, incorporate a date-time component, and maintain a clean and scalable codebase. This practical tutorial is perfect for both beginners and experienced developers, offering real-world examples to elevate your React skills
=====================================================


------one Componets Per Page --react

is lecture me hum apne todo app ko simplify karenge taki simple and reuseable ho sake !

using componets

01.Todo Form Componets
02.Todo List Componets
03.DataTime Componets
04.Child to parent Componets

-----------berfore simple-----------
import { useEffect, useState } from "react";
import "./Todo.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { TodoForm } from "./TodoForm";

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

  //todo  handleClearAllTodo function
  const handleClearTodoData=()=>{
    console.log(task);
    // task.splice(0,task.length); //way 1

    // const clearAllTask=task.filter(()=> false);
    // setTask(clearAllTask); //way 2
    setTask([]); // set task ko empty array banana
    
    
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

      <section>
          <button className="clear-btn"  onClick={handleClearTodoData} > Clear all</button>
        </section>
    </section>
  );
};
-------------next section--------------
How to Use keys in react
=========final code============

-----------Todo.jsx---------
import { useState } from "react";
import "./Todo.css";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
// input value store
  const [task, setTask] = useState([]);

  // form submit handling
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue.toLocaleLowerCase()]);
 };

//todo handleDeleteTodo function
  const handleDeleteTodo=(value,index)=>{
    console.log(task);
    console.log(value);
    // console.log(index);
    // task.splice(index,1);

    const updatedTask=task.filter((curTask)=> curTask!==value);
    setTask(updatedTask);
}

  //todo  handleClearAllTodo function
  const handleClearTodoData=()=>{
   console.log(task);
   setTask([]); // set task ko empty array banana
    }
  


  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
       <TodoDate />
      </header>
    <TodoForm   onAddTodo={handleFormSubmit}/>

      <section className="myUnOrderList">
        <ul>
          {task.map((curTask, index) => {
            return (
             <TodoList key={index} data={curTask}   onHandleDeleteTodo={handleDeleteTodo}/>
            );
          })}
        </ul>
        
      </section>

      <section>
          <button className="clear-btn"  onClick={handleClearTodoData} > Clear all</button>
        </section>
    </section>
  );
};
-----------------------TodoList.jsx------------------

import { MdCheck,MdDeleteForever } from "react-icons/md";

export const TodoList=({key,data,onHandleDeleteTodo})=>{
    return(
        <li key={key} className="todo-item">
        <span>{data}</span>
        <button className="check-btn">
          <MdCheck />
        </button>
        <button className="delete-btn" onClick={()=>onHandleDeleteTodo(data)}>
          <MdDeleteForever />
        </button>
      </li>
    )
}

----------------TodoDate.jsx-----------------
import { useEffect,useState} from "react";

export const TodoDate=()=>{

  //time and date handling
  const [dateTime, setDateTime] = useState();

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
    
    
return(
    <h2 className="date-time">{dateTime}</h2>
)
}

-----------TodoForm.jsx----------------------

import { useState } from "react";
export const TodoForm =({onAddTodo})=>{

      //state variable
      const [inputValue, setInputValue] = useState("");

       // handle input chaging value
  const handleInputChange = (value) => {
    setInputValue(value);
  };

const handleFormSubmit=(event)=>{
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue("");
}


    return(
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
    )
}