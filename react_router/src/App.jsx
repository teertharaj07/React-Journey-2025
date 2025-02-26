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
