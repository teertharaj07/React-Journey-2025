****86:Dynamic Routing in React: Get Params Value and Fetch API Data for a Single Movie 85 video RR11****

In this video, you'll learn how to implement dynamic routing in React to fetch API data using URL parameters. We'll cover how to create dynamic routes, retrieve parameter values, and use those values to fetch data for a single movie. This step-by-step guide will help you build a more interactive and dynamic React application. 💸

Dynamic Route

step how to create dynamic route in App.jsx

highlight code :    {
          path: "/movie/:movieID",
          element: <MovieDetails />,
         
        },
all code here

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import Applayout from "./components/layout/Applayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMovieData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
// import { NotFound } from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMovieData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
           loader: getMovieDetails,
        },
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },

    // {
    //   path: "*",
    //   element:<NotFound />
    // }
  ]);

  return <RouterProvider router={router} />;
};
export default App;
=========

 MovieDetails.jsx
import { useParams } from "react-router-dom";

export const MovieDetails=()=>{
    const params=useParams();
    console.log(params);
    
    return <h1>Hello movie,{params.movieID}</h1>;
}

--------------------------------------------

What are Query String Parameters & Methods in NodeJs

example
http://www.pronteff.com/page.html?paramer1=[@field:fieldname1]&paramer2=[@field:fieldname2]

here breakdown the URL
http://www.pronteff.com/page.html === URL
 
 ? ===QUERY STRING BEGIN SIGH
 =    EQUAL SIGN
 & ==== QUERY STRING SEPERATOR

paramer2=[@field:fieldname2]===PARAMETER NAME AND PARAMETER VALUE



