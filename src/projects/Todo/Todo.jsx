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
