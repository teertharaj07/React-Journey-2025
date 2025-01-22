**UnCntrolled Element to Controlled Elements**


import { useState } from "react";
import "./Todo.css";
export const Todo=()=>{

const [inputValue,setInputValue]=useState("");
return(
        <section className="todo-container">
             <header>
                <h1>Todo List</h1>
             </header>
             <section className="form">
                <form >
                    <div>
                        <input type="text" className="todo-input" autoComplete="off"  value={inputValue}/>
                    </div>
                    <div>
                        <button type="submit" className="todo-btn"> Add Task</button>
                    </div>
                </form>
             </section>
        </section>
    )
}



that code produce error:-

hook.js:608 You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. Error Component Stack
    at input (<anonymous>)
    at div (<anonymous>)
    at form (<anonymous>)
    at section (<anonymous>)
    at section (<anonymous>)
    at Todo (Todo.jsx:7:34)
    at section (<anonymous>)
    at App (<anonymous>)
overrideMethod



***After some time produce this error:-

@react-refresh:267 A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components Error Component Stack
    at input (<anonymous>)
    at div (<anonymous>)
    at form (<anonymous>)
    at section (<anonymous>)
    at section (<anonymous>)
    at Todo (Todo.jsx:7:34)
    at section (<anonymous>)
    at App (<anonymous>)




    ===========================controlled Elements===========
    import { useState } from "react";
import "./Todo.css";


export const Todo = () => {
    //state variable
  const [inputValue, setInputValue] = useState("");

  // handle input chaging value
  const handleInputChange = (value) => {
    setInputValue(value);
  };

 

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <section className="form">
        <form>
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
    </section>
  );
};

****eroor salved
------------======================================---------------------