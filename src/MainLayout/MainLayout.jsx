import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Providers/AuthProvider";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="max-w-7xl mx-auto bg-White">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
