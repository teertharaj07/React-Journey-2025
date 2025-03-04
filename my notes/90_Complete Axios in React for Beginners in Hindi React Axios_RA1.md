****90:Complete Axios in React for Beginners in Hindi React Axios RA1****
In this tutorial, you'll learn why Axios is a preferred choice over Fetch for making HTTP requests in React. We’ll cover everything from setting up Axios in your React app to fetching data, handling errors, and displaying the results. Follow along as we build a movie card component and see how professionals use Axios in their projects. Perfect for developers looking to enhance their React skills! 💸

--------------------------
----- React Axios-----------

Axios is a promise-based HTTP library that helps you easily communicate with servers or
APIs over the internet. It allows your website or app to send and receive data from a
server, like fetching information, submitting forms, or updating content without reloading
the entire page.


Axios uses promises to handle HTTP requests and responses.

---------------------

Client <--> Request <---->Response ====API<---->API Server


----notes--
Axios is http libary to replace the fatch Api mathod to deal with api calling

in Axois we do not need to convert your response in json file

-------------------------
Why Choose Axios over Fetch?

* Easier syntox and cleaner code.

* Automatic JSON transformation without extra code.

* Better built-in error handling.

* Support for older browser.
----------------------

how to get data from API using Axios library
import  axios  from "axios";
import { useEffect, useState } from "react";

export const Movie=()=>{
    const [data,setData]=useState([]);

const API ="http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76&s=titanic&page=1"

// data fatch using axios library
// const res= await axios.get(API);

const getMovieData= async()=>{
try {
    const res= await axios.get(API);   
  
console.log( res.data.Search);
setData(res.data.Search)

 

    
} catch (error) {
    console.log(error);
    
}

}


useEffect(()=>{
    getMovieData();
},[])



return <ul>
    {
       
    data.map((curElem)=>{
            return <li>{curElem.imdbID} {curElem.Title}</li>
          })
    }
</ul>
}



--------------------------
all code used by normal devloper
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const [data, setData] = useState([]);

  const API =
    // "http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76&s=titanic&page=1";
    "http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76&s=titanic&page=1";

  // data fatch using axios library
  // const res= await axios.get(API);

  const getMovieData = async () => {
    try {
      const res = await axios.get(API);

      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
     console.error("Error Message:",error.message);
     console.error("Error Status:",error.response.status);
     console.error("Error data:",error.response.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul className="container grid grid-four--cols">
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} MovieData={curElem} />;
      })}
    </ul>
  );
};

------------------------------
all code used by proficial 


import { useEffect, useState } from "react";
import { Card } from "../components/UI/Card";
import { getMovie } from "../services/GetService";

export const Movie = () => {
  const [data, setData] = useState([]);



  // data fatch using axios library
  // const res= await axios.get(API);

  const getMovieData = async () => {
    try {
      const res = await getMovie();

      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
     console.error("Error Message:",error.message);
     console.error("Error Status:",error.response.status);
     console.error("Error data:",error.response.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <ul className="container grid grid-four--cols">
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} MovieData={curElem} />;
      })}
    </ul>
  );
};


-------GEtSRvice.jsx
import axios from "axios";

const api=axios.create({
    // baseURL:  "http://www.omdbapi.com/?i=tt3896198&apikey=46e38d76&s=titanic&page=1",
    baseURL:  "http://www.omdbapi.com/",
})


// creating a get req function
export const getMovie=()=>{
    return api.get("?i=tt3896198&apikey=46e38d76&s=titanic&page=1")
}

// Http methods
// Create--->POST-----api.post()
// Read --> GET-------api.get()
// Update--PUT-----api.put()
// Delete-->DELETE-----api.delete()-----api.delete("/:id")-