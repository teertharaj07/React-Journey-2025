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