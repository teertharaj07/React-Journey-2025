*****31: Why You Need to Lifting State Up in React: A Complete Guide with Animation****
-----------------------------------------------
Learn how to efficiently manage state in React by mastering the concept of lifting state up. This video covers the importance of lifting state, with detailed explanations, animations, and practical examples to help you enhance your React applications.
===============Lift State Up-REact==================

       Lifting the State Up in React
**Lifting State Up;- is a pattern in React where you move the state from child components to a common parent component so that multiple child components can share and synchronize this state. This ensures that the state is managed at a higher level in the component hierarchy, allowing data to flow down as props and actions (such as events) to flow up.

Use Case:
When you have two or more components that need to share the same state, you should lift the state up to their nearest common ancestor. This allows these components to stay in sync and ensures that the state is managed in a single place.

=======================pp2=========

this is simple flow when pareent want to commpunicate via (props ) to child components for sharing the data between them.

                                  App(inputValue State is created here)
----(pass the data via props)----      ----(pass the data via props)----
|                                  |                                   |
|                                  |                                   |
|                                  |                                   |
|                                  |                                   |
(inputComponents)           (otherChildComponents)     (displayComponets)
(inputValue State is needed here)                 (inputValue State is needed here)

but promblem is that  system work as parent to child (top to bottom) but when i want to communicate child to parent (bottom to top) then lifting state up .

child to child communication system via lifting state up it means 

                                  App(inputValue State is created here)
----(Lifting the State up)----      ----(pass the data via props)----
|                                  |                                   |
|                                  |                                   |
|                                  |                                   |
|                                  |                                   |
(inputComponents)           (otherChildComponents)     (displayComponets)
(inputValue State is needed here)                 (inputValue State is needed here)


inputComponents ----(lifting State up)---App(parent component)---(via props)------displayComponets



this is code to create a flow to chart into example 
import { useState } from "react";

export const LiftingState = () => {
  return (
    <>
      <InputComponents />
      <DisplayComponents />
    </>
  );
};

const InputComponents = () => {
  const [InputValue, SetInputValue] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={InputValue}
        onChange={(e) => SetInputValue(e.target.value)}
      />
    </>
  );
};

const DisplayComponents = () => {
  return (
    <>
      <p>The Current input Value is:</p>
    </>
  );
};


here problem statement is that the input value of inputComponets that we want to display in the displayComponets child to child data transfer


concept of lifting State up here :-
is concept me hum inputComponets ke state ko parent me define karenge(Lifting State up ) is me hamne inputComponets me bani State ko parent components ne define karke lift up kaliye.



  =======================================================
--Updating parent  State from child and vice-versa-----------------
* For updating state of children from parent, you can use concept called
Lifting the state up.
* Here, you will lift the state from child to parent then pass that state down using props. .
** For updating state of parent from children, you can pass a fun
updates the state from parent to children as props, then childeren
update it.

======================================================
        Lifting the State Up in React

Parent Component: Holds the state inputValue and the state handler setinputValue.

InputComponent: Receives inputValue and setlnputValue as props. It updates the state via setinputValue when the input changes.

DisplayComponent: Receives inputValue as a prop and displays the current input value. 

==================final code=============
// after applying lifting up concept

export const LiftingState = () => {

    const [InputValue, SetInputValue] = useState("");
    return (
      <>
        <InputComponents InputValue={InputValue} SetInputValue={SetInputValue}/>
        <DisplayComponents  InputValue={InputValue} />
      </>
    );
  };
  
  const InputComponents = ({InputValue,SetInputValue}) => {
    
  
    return (
      <>
        <input
          type="text"
          placeholder="enter your name"
          value={InputValue}
          onChange={(e) => SetInputValue(e.target.value)}
        />
      </>
    );
  };
  
  const DisplayComponents = ({InputValue}) => {
    return (
      <>
        <p>The Current input Value is:{InputValue}</p>
      </>
    );
  };



