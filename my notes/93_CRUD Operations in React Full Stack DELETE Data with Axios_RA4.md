*****93:CRUD Operations in React Full Stack: DELETE Data with Axios RA4*******
In this video, you'll learn how to use the HTTP DELETE method in Axios to remove posts from your full stack React app. We'll cover how the delete functionality works, handle API requests efficiently, and demonstrate how to delete data with a smooth user experience. Real-life example: deleting an unwanted comment from a social media post in one click. Watch this tutorial to master data deletion in React. 💸


we coverd before http of get mathod

and in thi lecture we will cover delete mathod

----
real life appliction of you can use this functionality 
 we can edit ,delete,read ,get with api (json file)

-------------HTTP DELETE METHOD------------
PostApi.jsx
import axios from  "axios";

//create the instance of api
const api =axios.create({
    // baseURL:"https://jsonplaceholder.typicode.com/posts",
    baseURL:"https://jsonplaceholder.typicode.com",
});

// get method
export const getPost=()=>{
    // Routes 
    return api.get("/posts")
}

// delete method
export const deletePost=(id)=>{
   
    return api.delete(`/posts/${id}`);
}

----------------------------------
Posts.jsx

import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";

export const Posts = () => {
  const [data, setData] = useState([]);
  // console.log(getPost());

  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
    console.log(typeof res);
    console.log(res.data);
    console.log(typeof res.data);
    console.log(res.data);
    setData(res.data);
    // console.log(res.data[1]);
    // console.log(res.data[1].id);
  };

  useEffect(() => {
    getPostData();
  }, []);

  //  function to delete Post
  const handleDeletePost = async (id) => {
    // const res = await deletePost(id);
    // console.log(res);


  try {
    const res = await deletePost(id);
if (res.status===200) {
    const newUpdatedPosts =data.filter((curPost)=>{
        // return curPost.id===id;
        return curPost.id!==id;
    });
    setData(newUpdatedPosts)
}else{
  console.log("Failed to delete the post :",res.status);
  
}

  } catch (error) {
    console.log(error);
    
  }



  };
  return (
    <section className="section-post">
      <ol>
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
            <p>{id}</p>
              <p>Title:{title}</p>
              <p> Body:{body}</p>
              <button>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handleDeletePost(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
