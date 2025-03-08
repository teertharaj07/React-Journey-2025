***96:CRUD in React: Update API Data & Reflect Changes with Axios PUT RA7****
In this tutorial, we finalize the update functionality in a React full stack CRUD app using Axios. Learn how to update API data, reflect changes on the UI, and handle button state dynamically. This step-by-step guide shows how to manage form input values, update posts via the PUT method, and reset form fields for seamless user interaction. Timeline: 0:00 - Introduction to Axios POST Method 0:40 - Understanding the Update Task 1:50 - Switching Button Value: Add or Edit 6:30 - Detecting Button Value in React 8:40 - Creating Axios Update Function 12:30 - Defining PUT Method to Update Post 21:00 - Clearing Input Fields After Update 21:30 - Switching Back to Add Button After Update 24:00 - Access Full Source Code

---------------------------------------------

update operation in react


----------postApI.jsx-----------
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



// Put method or pach mathod
export const updateData=(id,post)=>{
   
    return api.put(`/posts/${id}`,post);
}
--------------

---------------Form.jsx------------
import { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  // get the updated Data and into input field
  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
  }, [updateDataApi]);

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

  const addPostData = async () => {
    const res = await postData(addData);
    console.log("response", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
      
    }
  };

  // update Post Data
  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      console.log(res);

     if(res.status===200){
      setData((prev) => {
        return prev.map((curElem) => {
          return curElem.id === updateDataApi.id ? res.data : curElem;
        });
      });

      setAddData({title:"",body:""});
      setUpdateDataApi({})
     }
    } catch (error) {
      console.log(error);
    }
  };

  // form summision
  const handleformSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    addPostData();
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

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
      <button type="submit" value={isEmpty ? "Add" : "Edit"}>
        {isEmpty ? "Add" : "Edit"}
      </button>
    </form>
  );
};


