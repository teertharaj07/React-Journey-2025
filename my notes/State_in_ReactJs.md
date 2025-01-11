*****26: React States: What is useState Hook & Why we need it in React*****
---------------------------------------------------
In React, state refers to an object that holds data or information about the component. State is managed within the component (just like variables declared in a function). However, unlike regular variables, when state changes, React re-renders the component to reflect these changes, keeping the user interface in sync with the data. A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. 
=========ppt-1===================================
       States In React  JS
* In React, state refers to an object that holds data or information about the component. State is managed within the component (just like variables declared in a function). However, unlike regular variables, when state changes, React re-renders the component to reflect these changes,keeping the user interface in sync with the data.

* State is dynamic and mutable, meaning it can change over time useually in response to user actions, server responses, or other event.

===========projrct incremet button of number===
export const State = () => {
  let value = 0;
  const handleButtonClick = () => {
    value++;
    console.log(value);
    
  };

  return (
    <>
     <section className="main-div">
     <h1>{value}</h1>
     <button onClick={handleButtonClick}>Increment</button>
     </section>
    </>
  );
};

//** this code after clickling the button value will be changed but in dom but not in react user interfact beacause react do not know about changing varible of value it means that variable after time that value changed so this is problem to remove this proble the user interface updation. than state in the form .....
# Why React?

- It's because those are normal variables and React.js doesn't know that it's going to be changed.
- And that react should respond or update DOM based on that.
- Those values are already rendered on DOM, there is no way they will be re-rendered.
- For that React.js provides a function called "useState"
- This type of function which starts with "use" is called hook.
- This is a special function which has some features provided by react.js
- we will learn about other hooks in future.

---

=============useState hooks=====================
  syntax const[conunt,setCount]=useState(0)

  here:-  const varible(key),
  count=: State varible (the current State value.),
  setCount:- a function that updates the state variable.,
  useState(0);- the innitial vaile of the state

  =======================code======================
  import { useState } from "react";

export const State = () => {
  // let value = 0;
  // const handleButtonClick = () => {
    // value++;
    // console.log(value);
    
  // };
  // console.log(useState());
  // let array=useState();
  // let [count,setCount]=useState();
  // console.log(array);
  let [count,setCount]=useState(0);
 const handleButtonClick=()=>{
  setCount(()=> count+1);
 }
  console.log(count);
   
  

  return (
    <>
     <section className="main-div">
     <h1>{count}</h1>
     <button onClick={handleButtonClick}>Increment</button>
     </section>
    </>
  );
};


=====================ppt2===============================

Why Do We Need State in React?

1.Dynamic Ul Updates: State allows your components to update dynamically in response to user input or other events. For example, in a form, the state might hold the current value of the input
fields, updating in real-time as the user types.

2. Interactivity: State makes your application interactive. By maintaining state, you can create components that respond to user actions, such as clicks, form submissions, or keyboard inputs.

3.Data Management: State helps manage data within a component. For instance, you can fetch data from an API and store it in the state, which will then be used to render the Ui.

4.Component Communication: State can be lifted up to parent components to managment state across multiple child components, ensuring consistent data flow and synchronzation.