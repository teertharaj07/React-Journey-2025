*****54: useEffect Cleanup Function in React JS. Very Important*******

React.js v19 Tutorials in Hindi - 2025
55 / 139

#54: useEffect Cleanup Function in React JS. Very Important

Thapa Technical
7.8K views  Jul 19, 2024
In this video, you'll learn how to effectively use the useEffect cleanup function in React JS to manage side effects and ensure optimal performance in your applications. We'll walk you through creating an app to demonstrate the cleanup function, understanding the event loop with animations, and solving common issues with setInterval. By the end of this video, you'll have a clear understanding of how to implement cleanup functions to avoid memory leaks and other issues. Watch at least once, and believe me, you're going to love my JS course! 💸


--------------------------------------
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

notes:-
3. Cleanup: useEffect can return a cleanup function to clean up after the effect, such a
 unsubscribing from an event or clearing a timer.



------
import "./index.css";
import { useState } from "react";
export const CleanUp = () => {
  const [count, setCount] = useState(1);

  setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers on Youtube</p>
        <div className="odometer" id="odameter">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
--------
import "./index.css";
import { useState } from "react";
export const CleanUp = () => {
  const [count, setCount] = useState(1);

//   setInterval(() => {
//     setCount(count + 1);
//   }, 1000);

  setInterval(() => {
    setCount((prev)=>prev+1);
  }, 1000);




  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers on Youtube</p>
        <div className="odometer" id="odameter">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
-----------
import "./index.css";
import { useEffect, useState } from "react";
export const CleanUp = () => {
  const [count, setCount] = useState(1);


useEffect(()=>{
      setInterval(() => {
    setCount((prev)=>prev+1);
  }, 1000);
},[])


  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers on Youtube</p>
        <div className="odometer" id="odameter">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
--------------------

final code with clean up function

import "./index.css";
import { useEffect, useState } from "react";
export const CleanUp = () => {
  const [count, setCount] = useState(0);


useEffect(()=>{
      const timer=setInterval(() => {
    setCount((prev)=>prev+1);
  }, 1000);



// clean up function
return ()=>clearInterval(timer);

},[])


  return (
    <div className="container">
      <div className="counter">
        <p>My Subscribers on Youtube</p>
        <div className="odometer" id="odameter">
          {count}
        </div>
        <h3 className="title">
          Subscribers <br /> Realtime Counter
        </h3>
      </div>
    </div>
  );
};
--------------------