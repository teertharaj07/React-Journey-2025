****In this video, we'll look into the concept of short circuit evaluation in React JS, explaining its importance and how it can simplify your code. We'll cover logical operators like OR, AND, and the Nullish Coalescing operator, using practical examples to show their applications. 💸🧑‍💻*****
---------------------------------------------------
----------short circulit ------------------

     Short Circuit Evaluation in React.js

* Short circuit evaluation is a technique used in JavaScript (and many other programming
languages) where expressions are evaluated from left to right. In logical operations,
evaluation stops as soon as the result is determined. This is often used in React to
conditionally render components or execute code based on the truthiness of certain
conditions.

* Rules of Short Circuit Evaluation

Short circuit evaluation involves logical operators (&&, ||, ??) and how they evaluate
expressions based on the truthiness of their operands.

====================================================

    Short Circuit Evaluation in React.js

Logical OR (||) 

Syntax: expression || expression2 
Rule: If expression1 is truthy, return expression. Otherwise, return expression2. 

const result = false || 'Hello'; // 'Hello'
const result2 = true || ‘World; // true 


==================================================
    Short Circuit Evaluation in React.js

    Logical AND (&&)

Syntax: expression1 && expression2

Rule: If expression is falsy, return expression1. Otherwise, return expression2.

const result = true && Hello’; // 'Hello'

const result2 = false && 'World'; // false 

==================================================

    Short Circuit Evaluation in React.js

    Nullish Coalescing (??) 


Syntax: expression1 ?? expression2

Rule: If expression is not null or undefined, return expression1. Otherwise, return expression2. 

const result = null ?? "Hello; // 'Hello'

const result2 = undefined ?? ‘World’; // ‘World

const result3 =" ?? ‘Fallback’; //"


==========================================================
file contanin---src--components---hooks --Hooks.css,ShortCircuit.jsx


// import "./Hooks.css";

const ShortCircuitExample = () => {
  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short circuit evaluation */}
      <p>You are logged in!</p>

      {/* Another example of short circuit evaluation */}

      <div className="grid-three-cols">
        <button>Toggle Login State</button>
        <button>Set User</button>
        <button>Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuitExample;
====================================================
import "./Hooks.css";
import { useState } from "react";

const ShortCircuitExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

  return (
    <section className="container short-container">
      <h1>Welcome to the ShortCircuit Evaluation!</h1>

      {/* Conditional rendering using short circuit evaluation */}
      {isLoggedIn && <p>You are logged in!</p>}

      {/* Another example of short circuit evaluation */}
      {user ? `Hello ${user}` : "plz login in!"}
      <div className="grid-three-cols">
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button onClick={() => setUser("vinod thapa")}>Set User</button>
        <button onClick={()=>setUser("")}>Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuitExample;
==========================================