import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const HandleSubscribe = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.success("Subscribed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="bg-Primary py-16 text-center text-White space-y-2">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
        Subscribe to our Newsletter
      </h1>
      <p className="text-xs md:text-sm text-White/80 max-w-xs md:max-w-sm px-8 md:px-0 mx-auto">
        Connecting The Right People To The Right Businesses. Leading The Change
        In The Corporate World.
      </p>
      <form onSubmit={HandleSubscribe} className="join">
        <input
          className="text-Black bg-White font-medium border-2 border-r-0 border-White outline-none rounded-s-sm px-2 w-40 md:w-72"
          type="email"
          placeholder="Your Email Address"
          required
          name=""
          id=""
        />

        <input
          className="text-[10px] md:text-xs text-White font-semibold bg-Secondary px-2 py-1 border-2 border-l-0 border-Secondary/30 rounded-e-sm"
          type="submit"
          value="Subscribe"
        />
      </form>
    </div>
  );
};

export default NewsLetter;
