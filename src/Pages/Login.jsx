import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import signPage from "../../public/SignPage.json";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const { user, userGoogleLogin, loginUser, setLoading } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);

    // Create Account with Email & Password
    try {
      await loginUser(email, password).then((result) => {
        console.log(result.user);
        navigate(location?.state ? location?.state : "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged In Successful...",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
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
        setError(error.message);
      });
  };

  console.log(user);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center content-center place-items-center min-h-[92vh] px-4">
      <Helmet><title>JN | Login</title></Helmet>
      <div className="bg-White space-y-2 shadow-xl rounded-xl px-5 py-3 max-w-sm w-full mx-4">
        <h1 className="text-3xl text-Secondary font-bold mb-5">SIGN IN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-base font-semibold">E-mail Address</label>
            <br />
            <input
              className="w-full bg-transparent border-2 border-Black/30 rounded-md outline-none px-2 py-1 text-primary font-medium mb-3"
              type="email"
              name="email"
              placeholder="email@example.com"
              defaultValue="asmaulhossain@gmail.com"
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
              defaultValue="123456"
              required
            />
          </div>

          <div className="text-sm text-Primary font-semibold hover:underline mb-3">
            Forget Password
          </div>

          <input
            className="w-full text-lg font-semibold text-White py-1 bg-Secondary rounded-md hover:scale-95 duration-300"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center text-sm">
          Don{"'"}t have an account?{" "}
          <Link
            to="/register"
            className="text-Primary font-semibold hover:underline"
          >
            Register
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

export default Login;
