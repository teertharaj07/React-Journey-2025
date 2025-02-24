****81:Handling Error Pages in React Router 80 video RR6***
In this video, we dive into how to create and manage error pages in React Router. You'll learn how to use useRouteError to enhance error handling and provide users with a smooth navigation experience, including creating a custom 404 page and adding a 'Back to Home' button. This tutorial is crucial for any developer aiming to improve the user experience in their React applications. 💸



errorpage
export const ErrorPage=()=>{
    return <h1> 404 error page</h1>
}

import {

  RouterProvider,
  createBrowserRouter,

} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import Applayout from "./components/layout/Applayout";
import "./App.css"
import { ErrorPage } from "./pages/ErrorPage";

const App = () => {
  const router= createBrowserRouter([
  {
   path:"/",
   element:<Applayout />,
   errorElement:<ErrorPage />,
   children:[
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
   ]
  },

 

  ])



  return <RouterProvider router={router} />;
};
export default App;




-------------

 const error = useRouteError();
  //   console.log(error);



  -----------
  import {

  RouterProvider,
  createBrowserRouter,

} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import Applayout from "./components/layout/Applayout";
import "./App.css"
import { ErrorPage } from "./pages/ErrorPage";

const App = () => {
  const router= createBrowserRouter([
  {
   path:"/",
   element:<Applayout />,
  //  errorElement:<ErrorPage />,
   children:[
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
   ]
  },


  {
    path: "*",
    element:<ErrorPage />
  }
 

  ])



  return <RouterProvider router={router} />;
};
export default App;

-=------------------


import {

  RouterProvider,
  createBrowserRouter,

} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import Applayout from "./components/layout/Applayout";
import "./App.css"
// import { ErrorPage } from "./pages/ErrorPage";
import { NotFound } from "./pages/NotFound";

const App = () => {
  const router= createBrowserRouter([
  {
   path:"/",
   element:<Applayout />,
  //  errorElement:<ErrorPage />,
   children:[
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
   ]
  },


  {
    path: "*",
    element:<NotFound />
  }
 

  ])



  return <RouterProvider router={router} />;
};
export default App;


------NotFound Page---
import { NavLink, useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        <NavLink to="/" className="btn">
          Go Back To HomePage
        </NavLink>
      </section>
    );
  }
  console.log(error);

  return <h1> The page you are looking does not exist </h1>;
};



Guys if you are using simple basic route Architecture then
this way using "+" else leave it ok. 
<Routes> 
<Route path='x' element={<ErrorPage/>} />
<Route path="/" element={<Home />} /> 
<Route path="/blog" element={<Blog/>} />
<Route path="/contact” element={<Contact/>} />
</Routes> 
