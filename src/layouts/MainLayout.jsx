import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <div className="w-full">
        <Navber></Navber>
      </div>
      <div className="min-h-[calc(100vh-300px)] sm:max-w-5xl mx-auto w-full">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
