*****52: useEffect Hook with Dependency Array in React JS: Learn with 3 Practical Examples********
--------------------------------------

In this video, you'll master the useEffect hook with a dependency array in React JS through three practical examples. Understand what the useEffect hook is, how it works, and why it's crucial for managing side effects in your React applications. Learn the importance of the dependency array and how it controls the execution of useEffect. By the end of this video, you'll be able to efficiently use useEffect to handle data fetching, subscriptions, and more, making your React apps more robust and efficient. For instance, see how fetching data can be a side effect and how to structure your folder for better code management. 💸

==================================

 ----------useEffect Hook---------------
 The useEffect hook in React is used for handling side effects in functional components.

 ------
 useEffect(()=>{
    //Your side effect code here

    return ()=>{
        //Cleanup code here (optional)
    };
 },[dependencies]);

-------


1. Initial Render: When the component mounts, useEffect can run its effect function to perform
operations like data fetching.

2. Dependencies: The second argument, an array of dependencies, which determines when the
effect should re-run. If any value in this array changes, the effect will re-run.

3. Cleanup: useEffect can return a cleanup function to clean up after the effect, such a
 unsubscribing from an event or clearing a timer.


-----------------------------------------------

note:- we are using to state management for
01.useState() hooks
02.useReducer() hooks
03. useContext API hooks


============================================================

----------------useEffect Hook-------
A side effect is any operation that affects something outside the scope of a function (Pure function). In
React, side effects are managed using hooks like useEffect to ensure they are handled in a controlled
and predictable manner. This includes tasks like (In next Slide).


-----------
let count = 0;

function increment(){
    count+=1;//modifies an external variable
}

increment();

console.log(count);//1
------------

this is side effect
this not a pure function

note:-In React, functions are pure, meaning they return the same output for the same input without causing side effects.

===========================================================
----------------useEffect Hook-------


Fetching Data as a Side Effect 

When you fetch data in a React component, you're performing a side effect because: 
External Interaction: You're interacting with an external data source, such as an API or a server. 
State Updates: The fetched data will usually update the component's state, causing a re-render. 
Others ... 
* Subscribing to or unsubscribing from a service.
* Updating the browser's DOM.
* Logging data to the console.

==============================================

We will explore three examples of the useEffect
Hook to ensure a thorough understanding.


01.

import { useEffect } from "react";
import "./index.css";
 export const ReactUseEffect = () => {
  useEffect(()=>{
    console.log("hello useEffect");
    
  },[])
  return (
    <div>
      <h1>hello, useEffect</h1>
    </div>
  );
};


02.
import { useEffect,useState } from "react";
import "./index.css";
export const ReactUseEffect = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // console.log("hello useEffect");// only one time render 
    console.log("count value",count);

  }, [count]);
  return (
    <div>
      <h1>hello, useEffect example 1</h1>
      <div className="container effect-container">
        <h1>useEffect Hook example 2</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};


03.
import { useEffect,useState } from "react";
import "./index.css";
export const ReactUseEffect = () => {

  const [count, setCount] = useState(0);
  const [date,setDate]=useState(0)

  useEffect(() => {
    setInterval(()=>{
      const updatedDate=new Date();
      setDate(updatedDate.toLocaleTimeString());
    },1000)
    // console.log("hello useEffect");// only one time render 
    // console.log("count value",count);
  
  }, []);
  return (
    <div>
      {/* <h1>hello, useEffect example 1</h1>
      <div className="container effect-container">
        <h1>useEffect Hook example 2</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div> */}
      <h1>example 3</h1>
      <h1> Time:{date}</h1>
    </div>
  );
};
