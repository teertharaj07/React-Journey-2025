
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