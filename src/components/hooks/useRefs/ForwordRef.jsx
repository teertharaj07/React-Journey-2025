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
