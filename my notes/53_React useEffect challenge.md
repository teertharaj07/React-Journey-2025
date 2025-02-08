****53:React useEffect challenge ! Lets Solve it******
------------------------------------------------------
//!React Hook Challenge: Dynamic State Management and Document Title Update with useEffect



//* Description: In this challenge, you'll create a React component that dynamically manages state using ‘useState” and “useEffect]’ hooks. Your component will include:

//? 1. A counter that increments when a button is clicked.

//? 2. An input field where users can type their name.

//? 3. The document title will update to show the current count.



import "./index.css";

export const Challenge = () => {
 

  // Order matters! Keep Hooks in the same order across renders


  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span>0 </span>
      </p>
      <button>Increment</button>
      <p>
        Name: <span> </span>
      </p>
      <input
        type="text"/>
    </div>
  );
};




--------------------final code ===================
