import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";
import { AuthContext } from "../Providers/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  } else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Please! Login First",
      showConfirmButton: false,
      timer: 1500,
    });
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
