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
