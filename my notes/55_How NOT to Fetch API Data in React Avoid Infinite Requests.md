*****55:How NOT to Fetch API Data in React: Avoid Infinite Requests*****
Discover the common mistakes to avoid when fetching API data in React.js. In this tutorial, we'll build a Pokémon app, demonstrate improper API fetching methods, and show the consequences, such as infinite API requests, to help you learn what not to do in your React projects. 💸 

fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((data)=>console.log(data)).catch((error)=>console.log(error));


you can not do that 



import { useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {

const[apiData,setApiData]=useState([])


fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((data)=>setApiData(data)).catch((error)=>console.log(error));
  return (
    <div className="container effect-container">
      <ul>Data:
        {apiData.map((curData)=>{
            return <li key={curData.id}>{curData.title}</li>
        })}
      </ul>
    </div>
  );
};
--------
hightlight code here of line

import { useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => 
      // setApiData(data))
    .catch((error) => console.log(error));
  return (
    <div className="container effect-container">
      <ul>
        Data:
        {apiData.map((curData) => {
          return <li key={curData.id}>{curData.title}</li>;
        })}
      </ul>
    </div>
  );
};
