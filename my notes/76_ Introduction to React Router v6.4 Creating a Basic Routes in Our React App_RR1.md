****76: Introduction to React Router v6.4: Creating a Basic Routes in Our React App  75 video_RR1 *****

In this video, you'll learn how to set up basic routes using React Router v6.4, a crucial skill for any React developer. We'll walk you through the process of installing React Router, creating routes, and managing page navigation within a React app. By the end, you'll understand how to implement routing in your projects, making your applications more dynamic and user-friendly. We'll also use a real-world example, like an eCommerce site, to illustrate the practical benefits of routing. 💸


----React Router V6.4+  -----------

React Router :-
React Router is a popular JavaScript framwork used
for handling routing in React applications

React and React Router is total different things 

React --React is the JavaScript labary
React Router -- React Router is javascript framework



installation
npm i react-router-dom


App.jsx
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";

const App=()=>{


const router= createBrowserRouter([
{
 path:"/",
 element:<Home />
},
{
  path:"/about",
  element:<About />
 },
 {
  path:"/movie",
  element:<Movie />
 },
 {
  path:"/contact",
  element:<Contact />
 },



])




  return <RouterProvider router={router} />
}
export default App
