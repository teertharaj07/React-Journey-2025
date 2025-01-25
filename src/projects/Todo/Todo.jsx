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
    const { id, content, checked } = inputValue;

    // to check if the input field is empty or not
    if (!content) return;

    // to check if the data is already existing or not
    // if (task.includes(content)) return;
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  //todo handleDeleteTodo function
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  //todo  handleClearAllTodo function
  const handleClearTodoData = () => {
    console.log(task);
    setTask([]); // set task ko empty array banana
  };

  // todo  handleCheckdTodo functionality
  const handleCheckdTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      }else{
        return curTask;
      }
    });

    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrderList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckdTodo={handleCheckdTodo}
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          {" "}
          Clear all
        </button>
      </section>
    </section>
  );
};
