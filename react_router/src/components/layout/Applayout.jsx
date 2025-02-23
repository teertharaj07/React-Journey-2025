import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Applayout=()=>{
return (<>
<Header />
<Outlet/>

<Footer />
</>);
}

export  default Applayout;