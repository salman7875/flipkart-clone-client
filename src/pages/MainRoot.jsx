import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainRoot = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainRoot;
