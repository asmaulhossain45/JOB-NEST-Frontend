import { Squash as Hamburger } from "hamburger-react";
import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAxios from "../CustomHooks/useAxios";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const axios = useAxios();
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, handleLogOut } = useContext(AuthContext);
  const [profileToggle, setProfileToggle] = useState(false);

  const handleLogOutButton = () => {
    handleLogOut();
    axios.post("clear").then((res) => {
      console.log(res.data);
    });
    navigate("/");
  };

  const NavLinks = (
    <>
      <li>
        <NavLink className={`[&.active]:border-b-2`} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={`[&.active]:border-b-2`} to="/all-jobs">
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink className={`[&.active]:border-b-2`} to="/add-job">
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink className={`[&.active]:border-b-2`} to="/applied-jobs">
          Applied Job
        </NavLink>
      </li>
      <li>
        <NavLink className={`[&.active]:border-b-2`} to="/my-jobs">
          My Jobs
        </NavLink>
      </li>
      <li>
        <NavLink className={`[&.active]:border-b-2`} to="/blogs">
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 flex justify-between items-center border-b-2 bg-White border-Primary md:py-1 md:pl-4 pr-4">
      {/* ----- Nav Start ----- */}
      <div className="flex justify-center items-center gap-2">
        <div className="md:hidden text-Primary">
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
          {isOpen ? (
            <ul
              onClick={() => setOpen(!isOpen)}
              className="absolute bg-White left-0 px-6 py-4 space-y-1 text-lg border-t-2 font-semibold w-full"
            >
              {NavLinks}
            </ul>
          ) : (
            ""
          )}
        </div>
        <Link to="/">
          <img
            className="h-8"
            src="https://i.ibb.co/znt07n6/Logo.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* ----- Nav End ----- */}
      <div className="flex justify-center items-center gap-4">
        <ul className="hidden md:flex justify-center items-center gap-3 text-sm font-semibold text-Primary">
          {NavLinks}
        </ul>

        {/* ----- User Login or Log Out ------ */}
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="avatar">
              <div className="h-6 rounded-full  border border-Primary">
                <img
                  onClick={() => setProfileToggle(!profileToggle)}
                  className=""
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/XSZJkg3/Default-pfp-svg.png"
                  }
                  referrerPolicy="no-referrer"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className={`${
                profileToggle ? "" : "hidden"
              } menu absolute right-0 menu-sm dropdown-content mt-3 z-[1] px-3 bg-White py-4 rounded-s-xl w-52 flex flex-col justify-center`}
            >
              <div className="flex justify-center mb-2">
                <img
                  className="h-16 rounded-full ring ring-Secondary"
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/XSZJkg3/Default-pfp-svg.png"
                  }
                  alt=""
                />
              </div>

              <p className="text-center font-semibold uppercase mt-1">
                {user.displayName}
              </p>
              <button
                className="mt-1 text-White bg-Secondary rounded-full text-base font-semibold py-1"
                onClick={handleLogOutButton}
              >
                Log Out
              </button>
            </ul>
          </div>
        ) : (
          <Link className="text-xs font-semibold text-Primary" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
