***Fetching API Data in React: A Step-by-Step Guide to Fetch Pokémon API**56:****
--------------------------------
Learn the best practices for fetching API data in React.js. This tutorial covers using the useEffect hook, error handling, and rendering data in the UI. Perfect for developers looking to improve their React skills with practical, real-world examples. 💸 


------ write way to define api--
import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => 
      setApiData(data))
    .catch((error) => console.log(error));


  },[])
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

//api
// https://jsonplaceholder.typicode.com/posts


//pokeon api
//https://pokeapi.co/api/v2/pokemon/pikachu