****83:Fetch API Data with React Router Loaders🔥 No useEffect Needed 82 video RR8****
In this video, we explore a modern approach to fetching API data in React using the loader property and the useLoaderData hook in React Router. You'll learn how to replace the traditional useEffect method with a cleaner, more efficient solution. We'll walk through the entire process, from creating the fetch function to rendering the data in a stylish card layout. Perfect for those looking to streamline their React development with practical, real-world examples. 💸

------FATCH API WITH LOADER------

USING IN REACT ROUTER HOOKS
 ----loader & useLoaderData()----

 Step 01. Function to Fetch Api:-
 export const getMovieData=async()=>{
    try {
        const response=await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=50b5efb6=titanic&page=1");

        const data =await response.json();
        return data;


    } catch (error) {
        console.log(error);
        
    }
}


step 2 :- pass that function name as the value of the loader property in that page route 


hightlight part:-  {
      path:"/movie",
      element:<Movie />,
      loader:getMovieData,
     },

all code:-
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
import { getMovieData } from "./api/GetAPIData";
// import { NotFound } from "./pages/NotFound";

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
      element:<Movie />,
      loader:getMovieData,
     },
     {
      path:"/contact",
      element:<Contact />
     },
   ]
  },


  // {
  //   path: "*",
  //   element:<NotFound />
  // }
 

  ])



  return <RouterProvider router={router} />;
};
export default App;

---------------------
step 3 :Get the data of the API by using the useLoaderData()

movie.jsx
import { useLoaderData } from "react-router-dom";

export const Movie =()=>{

    const movieData = useLoaderData();
    console.log(movieData);
    
    // return <h1> this is Movie Page Coming Soon....</h1>
    return(
    <>
    {movieData.search.map((curMovie)=> {
        return <Card key={curMovie.imdbID}  curMovie={curMovie}/>
    })}
    
    </>);
}


-----------
step 4: Create the Card UI Layout



import { NavLink } from "react-router-dom";
// import "./Card.css";
/* eslint-disable react/prop-types */

export const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={imdbID} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
};
================

------------------loader vs useEffect()-------------
loader take less time to render comapre to useEffect()