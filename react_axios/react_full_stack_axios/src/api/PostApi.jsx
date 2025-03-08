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
