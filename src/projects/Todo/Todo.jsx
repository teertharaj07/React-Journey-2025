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
