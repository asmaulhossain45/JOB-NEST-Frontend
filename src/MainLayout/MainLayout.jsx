import Lottie from "lottie-react";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../../public/Loading.json";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import { AuthContext } from "../Providers/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[90vh] bg-Transparent flex justify-center">
        <Lottie animationData={Loading} loop={true} />
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto border-2">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;
