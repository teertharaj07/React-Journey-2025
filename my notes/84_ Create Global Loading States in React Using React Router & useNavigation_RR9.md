****84: Create Global Loading States in React Using React Router & useNavigation 84 video RR9****

In this tutorial, we'll dive into the useNavigation hook in React Router to create a global loading state for your React app. Learn how to seamlessly integrate a loading indicator that works across all pages, improving the user experience while navigating through your app. We'll walk through the process of setting up the loading state, understanding the navigation state, and creating a reusable Loading UI component. This is a must-watch for React developers aiming to enhance their apps' performance and user experience. 💸
-------------------------------
 --------Loading State In React Router----

 using useNavigate()

--AppLauout.jsx--

 import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Applayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  if(navigation.state==="loading") return <h1>loading....</h1>

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Applayout;


----

import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loding } from "./Loading";

const Applayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  if(navigation.state==="loading") return <Loding />

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Applayout;
-------------------------
loading.jsx

export const Loding=()=>{
    return (
        <div className="container loader-section">
            <div className="loader"></div>
        </div>
    )
}