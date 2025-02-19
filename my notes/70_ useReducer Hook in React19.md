*****70: useReducer Hook in React 19 69 video******
In this video, we explore the powerful useReducer hook in React 19, essential for managing complex state logic. You'll learn the syntax, understand key concepts, and see why useReducer is a better alternative to useState in certain scenarios. By the end, you'll build a functional counter app using useReducer, giving you hands-on experience with this advanced state management technique. Perfect for developers looking to deepen their React skills with real-world examples.

------useReducer Hook in React----------
--syntax---
const [state, dispatch] = useReducer(reducer, initialState);

It returns an array containing the current state and a dispatch function.

Dispatch function is used to send actions to the reducer, which in turn updates the state based on the actions type and any associated data (payload).

Reducer Function: A function that takes the current state and an action as arguments, and returns a new state.

Initial State: The initial state value. (The initial state can be a simple value, an object, or even derived from a function if the initialization is complex.) 

-------------------------------------------

lets  create Couter App with useReducer

01.using useState() Hooks 
import { useState } from "react";

export const ReducerComp = () => {
 
const [count,setCount]=useState(1);



  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center bg-cyan-600 text-white">
        <h1>Hello useRedcer Hook</h1>
        <h2>{count}</h2>
        <button className="h-20 w-40 bg-red-800 m-3 font-semibold" onClick={()=> setCount(count+1)}>Increment</button>
        <button  className="h-20 w-40 bg-red-800 font-semibold" onClick={()=> setCount(count-1)}>Decrement</button>
      </div>
    </>
  );
};
----------------------

02.using useReducer() Hook
import { useReducer } from "react";

export const ReducerComp = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
      return state + 1;
    }
    if (action.type === "DECREMENT") {
      return state - 1;
    }
    return state; // Always return state for unknown actions
  };

  const [count, dispatch] = useReducer(reducer, 4);

  return (
    <>
      <div className="p-4 h-lvh flex flex-col justify-center items-center bg-cyan-600 text-white">
        <h1>Hello useReducer Hook</h1>
        <h2>{count}</h2>
        <button
          className="h-20 w-40 bg-red-800 m-3 font-semibold"
          onClick={() => dispatch({ type: "INCREMENT" })} // Fixed typo here
        >
          Increment
        </button>
        <button
          className="h-20 w-40 bg-red-800 font-semibold"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
