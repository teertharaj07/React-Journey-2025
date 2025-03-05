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
