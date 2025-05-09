import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import { createBrowserRouter } from "react-router-dom";

//*navigation code
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "About",
    element: <About />,
  },

  {
    path: "Contact",
    element: <Contact />,
  },

  {
    path: "Country",
    element: <Country/>,
  },
]);

const App = () => {
  return <h1>Hello React project</h1>;
};

export default App;
