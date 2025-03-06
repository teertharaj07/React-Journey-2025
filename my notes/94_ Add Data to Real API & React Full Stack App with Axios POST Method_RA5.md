*****94: Add Data to Real API & React Full Stack App with Axios POST Method 93 video RA5****
Learn how to effectively use HTTP POST requests in React with Axios to add data to a real API. This tutorial walks you through building a form component, handling input values, and updating your React app's UI in real-time after submitting data. Ideal for full stack developers looking to enhance their API integration skills. 💸 

-----ADD DATA IN API- POST-----------

before 2 lacture we coverd 2 types of http mathod 
like 01.HTTP GET METHOD
02. HTTP DELETE METHOD

NOW TO DAY WE WILL SEE THE HTTP POST (CREATE) METHOD


-----postApi.jsx------
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


// Post method
export const postData=(post)=>{
   
    return api.post("/posts",post);
}
----------------------Posts.jsx--------
import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";
import { Form } from "./Form";

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
    <>
   <section className="section-form">
    <Form data={data} setData={setData}/>
   </section>

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
    </>
  );
};
---------------------Form.jsx---------------
import { useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({data,setData}) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      // console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  };


  const addPostData=async ()=>{
    const res=await postData(addData);
   console.log("response",res);
   

    if (res.status===201) {
  setData([...data,res.data])
  setAddData({title:"",body:""})
        
    }
  }
  

// form summision
const handleformSubmit=(e)=>{
e.preventDefault();
addPostData();
}

  return (
    <form onSubmit={handleformSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          placeholder="Add Post"
          id="body"
          name="body"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};
----------------------------------