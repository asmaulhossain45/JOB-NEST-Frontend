import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import { AuthContext } from "../Providers/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-7xl mx-auto border-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
