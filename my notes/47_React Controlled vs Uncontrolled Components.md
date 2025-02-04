******#47: React Controlled vs Uncontrolled Components: Master React Forms with Notes and Code Examples****
---------------------------------------------------
In this video, we'll dive deep into the differences between controlled and uncontrolled components in React. You'll learn what they are, why they matter, and how to use them effectively in your projects. With clear explanations and practical code examples, you'll gain a solid understanding of these fundamental concepts. Imagine managing a large form where you need precise control over each input – that's where understanding these components becomes crucial. 💸
====================================================
   controlled components in react

   ------controlled components

   Controlled components in React are those where form data is handled by React component state.

This means:

* State Management: The value of the input field is controlled by React state (useState or
this.state in class components).

* Event Handlers: Changes to the input field (like typing into a text field) are handled by React
event handlers (onChange, onBlur, etc.).

* State Updates: When the user interacts with the form input, React state is updated the
event handlers, and the input value reflects the current state value.

notes :- yadi hum form ke sath kam kar rhe h to yadi hum us form me state and event ka upyog kar rhe h to us form ko hum controlled components kahenge


note:- par yadi hum in mese kisa ka upyog karna band kar de to vah components controlled se uncontrolled me change ho jayega
=====================================================

          Uncontrolled components in react

          ------uncontrolled components




Uncontrolled components in React are those where form data is handled by the DOM itself.

This means: 

* Direct DOM Manipulation: The value of the input field is controlled by the DOM 
(document.getElementByld, etc.). It's not declarative way right.

* Event Handling: Changes are directly handled by DOM events (onchange, onblur, efc.).

* Accessing Form Data: Form data is accessed through refs or DOM traversal methods, not
through React state.
=================================================

controlled form code:-
import { useState } from "react";
import "../Hooks.css";

const ControlledForm = () => {


  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <section className="container state-container">
       <h1>Controlled Component</h1> 
     

      <form onSubmit={handleSubmit}>
      
        <label> Name:
            <input type="text"  name="name" id="inputName"/>
        </label>
        <br />
        <button type="submit" className="state-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ControlledForm;


========================================
uncrolled code
import { useState } from "react";
import "../Hooks.css";

const ControlledForm = () => {
//   const [name, setName] = useState("");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with the controlled state (name)
    const dataValue = document.querySelector("#inputName").value;
    console.log(dataValue);
    // console.log(name);
  };

  return (
    <section className="container state-container">
      {/* <h1>Controlled Component</h1> */}
      <h1>unControlled Component</h1>

      <form onSubmit={handleSubmit}>
        {/* <label>
          Name:
          <input
            id="inputName"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label> */}
        <label> Name:
            <input type="text"  name="name" id="inputName"/>
        </label>
        <br />
        <button type="submit" className="state-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ControlledForm;
===============how to make uncrolled to controlled---------------
import { useState } from "react";
import "../Hooks.css";

const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // // Handle form submission with the controlled state (name)
    // const dataValue = document.querySelector("#inputName").value;
    // console.log(dataValue);
    // // console.log(name);
  };

  return (
    <section className="container state-container">
      {/* <h1>Controlled Component</h1> */}
      <h1>unControlled Component</h1>

      <form onSubmit={handleSubmit}>
        {/* <label>
          Name:
          <input
            id="inputName"
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </label> */}
        <label> Name:
            <input type="text"  name="name" id="inputName" value={name} onChange={handleChange}/>
        </label>
        <br />
        <button type="submit" className="state-button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ControlledForm;
=============================

but value attribute ko hata de to vah controlled se un ctrolled ho jayega


===============================================
react components

Pros:

* React has complete control over the input values, making it straightforward to implement features like validation and conditional formatting based on state.

* Easier to handle form submission and integration with React's lifecycle methods.

* Enables clear data flow and centralized state management within React components.

Cons:

* Requires more code compared to uncontrolled components due to state management

*Can lead to more re-renders if not optimized, although React handles this efficiently in cases.

