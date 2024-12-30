*** Writing our First React.js Component ****
---------------------------------------
# JSX stands for JavaScript XML. It allows you to write HTML elements in
JavaScript and place them in the DOM without any createElement() and appendChild() methods.

***example***
const App=()=>{
    return React.creatElement("h1",{
        name:"teerth dev"
    }, "Hello world");
};


----------------------------

===how react works---
componets-->instances---->react Elemnets-----.DOM Element--->Final ui



--------------------------------------
// const App=()=>{
//   return <h1> teerth dev</h1>
// }
// export default App;

// ----------------------------------------------

{/* <h1>teerth dev</h1> */}

// React.createElement("h1",null,"teerth dev");
import React from "react";
const App=()=>{
  return React.createElement("h1",null,"teerth dev"); 
}
// virtul dom
// console.log( React.createElement("h1",null,"teerth dev"));


export default App;




----------------jsx----bebel--------react element (virtual dom)


-------------------------------App.jsx-----------------
const App = () => {
  return (
    <div>
      <img width="50%" height="50%" src="qot.jpg" alt="qot.jpg" />
      <h2>Name:Queen of Tears</h2>;<h3>Rating:8.2</h3>
      <p>
        summary:Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
        both at home and at work. But upon deciding his future, Hyun-woo pays a
        visit to his family.
      </p>
    </div>
  );
};

export default App;

// // todo

// //? Each JSX expression must have one parent element, |
// which means if you try to return multiple elements, |
// React will throw an error. |



//? Every JSX tag needs to be closed. You can use self-closing tags for
// elements that don't have children, e.g., <img src=‘url® />,
-----------------------------------------------------------------------
=====================================main.jsx==================
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import './index.css'
import App from './App.jsx'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
--------------------------------------------------------