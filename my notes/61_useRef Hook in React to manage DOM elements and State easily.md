*****61:useRef Hook in React to manage DOM elements and State easily******

Discover the power of the useRef hook in React to manage DOM elements and state efficiently. This video breaks down the useRef hook, explains its benefits over state management, and shows you how to use it with real-world examples. Learn how to structure your folders, handle uncontrolled inputs, and retrieve data with useRef to enhance your React apps. 💸

--------------------------------------------------

how to handle uncontrol components in react

  useRef()

* useRef is a React Hook that lets you reference a value that's not needed for rendering.

* Unlike states, it's directly mutable.

* You can access value of it's using yourRef.current;


** Uncontrolled Components:
*Uncontrolled components manage their own state internally and are typically use
refs.



document.getElementById("your-elemnet-id")

import   "./index.css";
export const UseRef=()=>{
    return <h1>Hello useRef!</h1>
}




import "./index.css";
export const UseRef = () => {
  const username = document.getElementById("username");
  const password = document.getElementById("password");


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.value, password.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="username" />
      <br />
      <input type="text" id="password" />
      <br />
      <button>Submit</button>
    </form>
  );
};


-----using useRef()  hook------------
import { useRef } from "react";
import "./index.css";
export const UseRef = () => {
//   const username = document.getElementById("username");
//   const password = document.getElementById("password");



const username = useRef(null);
const password = useRef(null);


// console.log(username,password);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current, password.current);
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" id="username" ref={username} />
      <br />
      <input type="text" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};
