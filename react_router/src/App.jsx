import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";

const App = () => {
  // const router= createBrowserRouter([
  // {
  //  path:"/",
  //  element:<Home />
  // },
  // {
  //   path:"/about",
  //   element:<About />
  //  },
  //  {
  //   path:"/movie",
  //   element:<Movie />
  //  },
  //  {
  //   path:"/contact",
  //   element:<Contact />
  //  },

  // ])

  // old way to create routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route  path="/"  element={<Home />} />
        <Route  path="/about"  element={<About />} />
        <Route  path="/movie"  element={<Movie />} />
        <Route  path="/contact"  element={<Contact />} />
        
        
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
