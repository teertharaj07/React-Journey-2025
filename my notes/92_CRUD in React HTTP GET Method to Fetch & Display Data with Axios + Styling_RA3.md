****92:CRUD in React: HTTP GET Method to Fetch & Display Data with Axios + Styling 91 video RA3****
In this video, we take your React app to the next level by refactoring code and displaying API data using Axios. Learn how to fetch data from an API and render it in your app’s UI with proper styling. This tutorial is perfect for beginners who want to turn their console data into a fully functional and styled UI. For example, if you’re building a user list, you’ll see how to pull names from an API and show them in an elegant design. 💸

how to exact data from api
step 1: first try to show  your data on console if you get the data so check root of array and how to get last last value from json file

step 2: always try get root as array and than apply map mathod to extact all the data drom the array 
 data=[{id:2},{id:2},{id:2},{id:2},{id:2},]
 data.map((curElem)=>curElem.id)

step 3 : if you have array of object so what we do that
 data=[
    {id:2},
    {id:2},
    {id:2},
    {id:2},
    {id:2},
  ]

  so we have to do destrucure og object
<ul>
 data.map((curElem)=>{
return (
    //destucure of object
const {id}=curElem;
    <li> 
    <p>{id}</p>
    
    </li>
)
 })

 </ul>

all code here

posts.jsx
import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import "../App.css";

export const Posts =()=>{
    const [data,setData]=useState([]);
    // console.log(getPost());
  
  const getPostData= async()=>{
    const res =await getPost();
    console.log(res);
    console.log(typeof res);
    console.log(res.data);
    console.log( typeof res.data);
    console.log(res.data);
    setData(res.data)
    // console.log(res.data[1]);
    // console.log(res.data[1].id);
    
    
      }
    
      useEffect(()=>{
        getPostData();
      },[])

    
    // return <h1>hello post page</h1>  
    return <section className="section-post">
        <ol>
            {
                data.map((curElem)=>{
                    const {id,body,title}=curElem;
                    return (
                        <li key={id}>
                            <p>Title:{title}</p>
                            <p> Body:{body}</p>
                            <button className="btn-edit">Edit</button>
                            <button className="btn-delete">Delete</button>
                        </li>
                    )
                })
            }
        </ol>
    </section>
}