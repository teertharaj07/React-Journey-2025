// // import "./Hooks.css";
// import { useState } from "react";

// import { useState } from "react";

// const ShortCircuitExample = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const [user, setUser] = useState("");
//   // const [count, setCount] = useState(0);

//   // if (user) {
//   //   const [count, setCount] = useState(0);
//   //   // setCount(count + 1);
//   // }
//   ``;
//   // const getData = () => {
//   //   const [data, setData] = useReducer(0);
//   // };

//   // getData();

//   return (
//     <section className="container short-container">
//       <h1>Welcome to the ShortCircuit Evaluation!</h1>

//       {/* Conditional rendering using short circuit evaluation */}
//       {isLoggedIn && <p>You are logged in!</p>}

//       {/* Another example of short circuit evaluation */}
//       {user ? `Hello ${user}` : "Plz log in!"}

//       <div className="grid-three-cols">
//         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//           Toggle Login State
//         </button>
//         <button onClick={() => setUser("vinod thapa")}>Set User</button>
//         <button onClick={() => setUser("")}>Clear User</button>
//       </div>
//     </section>
//   );
// };

// export default ShortCircuitExample;

//--------------------------------

import "./Hooks.css";
import { useState } from "react";

const ShortCircuitExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("");

<<<<<<< HEAD
=======



// this is write way
  const [count,setCount]=useState()
  // * Hooks can only be used at the top level of your component.
  // * Do not call Hooks inside loops, conditions, or nested functions.
  // we can not define hooks there way
// if(user){
//   const [count,setCount]=useState()
// }


// this is write way
if(user){
  setCount(count+1)
}

// wrong way to create hooks

// //normal js functions
// const getData=()=>{
//   const [data,setData]=useState(0);
// }
// getData();
>>>>>>> 544fde700c694119d17510379f25f9dab5e6f902
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
