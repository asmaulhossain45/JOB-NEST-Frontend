import Lottie from "lottie-react";
import { useContext } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import signPage from "../../public/SignPage.json";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { createUser, updateUser, user, handleLogOut } =
    useContext(AuthContext);

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
      await updateUser(name);
      await handleLogOut();
      alert("Account Created, Now Logged In");
    } catch (error) {
      console.log(error);
    }
  };

  // ===== Google Login =====
  const handleGoogleLogin = () => {};
  // ===== Facebook Login =====
  const handleFacebookLogin = () => {};
  // ===== Twitter Login =====
  const handleTwitterLogin = () => {};

  console.log(user);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center content-center place-items-center h-[92vh] px-4">
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
        <div className="py-2">
          <h1 className="text-center text-base font-bold">LOGIN WITH</h1>
          <div className="flex justify-center items-center gap-2 mt-1">
            <button
              onClick={handleFacebookLogin}
              className="bg-Secondary text-White p-2 rounded-full hover:scale-110 duration-300"
            >
              <FaFacebookF />
            </button>

            <button
              onClick={handleGoogleLogin}
              className="bg-Secondary text-White p-2 rounded-full hover:scale-110 duration-300"
            >
              <FaGoogle />
            </button>

            <button
              onClick={handleTwitterLogin}
              className="bg-Secondary text-White p-2 rounded-full hover:scale-110 duration-300"
            >
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:inline object-cover">
        <Lottie animationData={signPage} loop={true} />
      </div>
    </div>
  );
};

export default Register;
