******62:No More forwardRef in React 19: Get Ref Values with New React 19 Methods*****

Discover why forwardRef is no longer needed in React 19 and learn new methods to achieve the same results. This video covers how to get ref values without using forwardRef, offering practical examples and demonstrating the updated approach in modern React development. Stay ahead with the latest React techniques and simplify your component communication. 💸
=======================
   ----forwardRef()----

React forwardRef allows parent components to move down (or “forward”) refs to their children. It gives a child component a reference to DOM entity created by its parent component in React. This helps the child to read and 
modify the element from any location where it is used. 


summary :- to cummunicate the parent to child components we are using the props in react 

--------
React.forwardRef(
    (props,ref)=>
{})
-----

it takesa function with props and ref argumnets

note:---- no need to this hook in react 19


before react 19
import { forwardRef,useRef,useId } from "react";
import "./index.css"

export const ForwordRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

const handleFormSubmit=(e)=>{
e.preventDefault();
console.log(username.current.value, password.current.value);
}


  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19Input lable="username" ref={username}/>
      <BeforeReact19Input lable="password" ref={password} />
      <button>submit</button>
    </form>
  );
};

// i need to create this componets BeforeReact19Input
// here how to get the value of ref

 
// eslint-disable-next-line react/display-name
const BeforeReact19Input = forwardRef((props,ref)=>{
     
    const id=useId();
  return (
    <div>
        <label htmlFor={id}>{props.label}</label>
        <input type="text" ref={ref} />
    </div>
  )
} )


-----after react 19--
// import { forwardRef, useRef, useId } from "react";
import {  useRef, useId } from "react";
import "./index.css";

export const ForwordRefs = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <BeforeReact19Input label ="username" ref={username} />
      <BeforeReact19Input label ="password" ref={password} />
      <button>submit</button>
    </form>
  );
};

// i need to create this componets BeforeReact19Input
// here how to get the value of ref

// // eslint-disable-next-line react/display-name
// const BeforeReact19Input = forwardRef((props,ref)=>{

//     const id=useId();
//   return (
//     <div>
//         <label htmlFor={id}>{props.label}</label>
//         <input type="text" ref={ref} />
//     </div>
//   )
// } )

/// after react 19

const BeforeReact19Input = ({ label, ref }) => {
  const id = useId();


  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" ref={ref} />
    </div>
  );
};
