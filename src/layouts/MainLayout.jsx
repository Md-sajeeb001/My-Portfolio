import { Outlet } from "react-router-dom";
import Navber from "../shared/Navber";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="sm:container  mx-auto bg-[#F6F6F6] rounded-2xl">
      <Navber></Navber>
      <div className="min-h-[calc(100vh-300px)] max-w-5xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
