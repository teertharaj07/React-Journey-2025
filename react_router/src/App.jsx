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
