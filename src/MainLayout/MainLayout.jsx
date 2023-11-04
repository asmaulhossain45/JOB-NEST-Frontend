import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto border-2">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
