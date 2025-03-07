import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import Applayout from "./components/layout/Applayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMovieData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";
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
        {
          path: "/contact",
          element: <Contact />,
          action:contactData,
  
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
