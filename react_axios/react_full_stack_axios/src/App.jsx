import { useEffect } from "react";
import { getPost } from "./api/PostApi";

const App=()=>{
  // console.log(getPost());
  
  const getPostData= async()=>{
const res =await getPost();
console.log(res);

  }

  useEffect(()=>{
    getPostData();
  },[])
  return "full stack Axios";
}

export default App
