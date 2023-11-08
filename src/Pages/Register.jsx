import Lottie from "lottie-react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import signPage from "../../public/SignPage.json";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const {
    createUser,
    userGoogleLogin,
    updateUser,
    handleLogOut,
    setLoading,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, photoURL, email, password };
    console.log(userInfo);

    // Create Account with Email & Password
    try {
      await createUser(email, password);
      await updateUser(name, photoURL);
      await handleLogOut();
      navigate("/login");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successful!",
        text: "Please! Login Now....",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      const message = error.message;
      setLoading(false);
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // ===== Google Login =====
  const handleGoogleLogin = () => {
    userGoogleLogin()
      .then(() => {
        navigate(location?.state ? location?.state : "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const message = error.message;
        setLoading(false);
        toast.error(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center content-center place-items-center min-h-[92vh] px-4">
      <Helmet>
        <title>JN | Register</title>
      </Helmet>
      <div className="bg-White space-y-2 shadow-xl rounded-xl px-5 py-3 max-w-sm w-full mx-4">
        <h1 className="text-3xl text-Secondary font-bold mb-5">SIGN UP</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-base font-semibold">Your Name</label>
            <br />
            <input
              className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-primary font-medium mb-3"
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="text-base font-semibold">Photo URL</label>
            <br />
            <input
              className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-primary font-medium mb-3"
              type="text"
              name="photoURL"
              placeholder="https://photoURL.png"
            />
          </div>

          <div>
            <label className="text-base font-semibold">E-mail Address</label>
            <br />
            <input
              className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-primary font-medium mb-3"
              type="email"
              name="email"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label className="text-base font-semibold">Password</label>
            <br />
            <input
              className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-primary font-medium mb-1"
              type="password"
              name="password"
              placeholder="*********"
              required
            />
          </div>

          <div className="flex gap-1 text-sm items-center justify-start mb-3">
            <input type="checkbox" name="terms" />
            Accept terms & conditions
          </div>

          <input
            className="w-full text-lg font-semibold text-White py-1 bg-Secondary rounded-md hover:scale-95 duration-300"
            type="submit"
            value="Create Account"
          />
        </form>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-Primary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
        <div className="flex justify-center py-2 w-full">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-1 text-lg font-semibold text-White py-1 bg-Slate rounded-md hover:scale-95 duration-300"
          >
            <FcGoogle size={22} /> Login With Google
          </button>
        </div>
      </div>

      <div className="hidden md:inline object-cover">
        <Lottie animationData={signPage} loop={true} />
      </div>
    </div>
  );
};

export default Register;
