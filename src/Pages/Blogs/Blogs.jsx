import { Helmet } from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="md:grid grid-cols-4 gap-4 my-10 px-4">
      <Helmet>
        <title>JN | Blogs</title>
      </Helmet>
      <div className="">
        <h1 className="text-xl md:text-2xl font-semibold mx-4 mb-4 text-Black">
          Shortcut
        </h1>
        <div className="grid md:flex flex-col grid-cols-2 gap-4 w-full px-4 mb-6">
          <div className="bg-BgPrimary shadow-md p-4">
            <Link to="/blogs/blog/access-refresh">
              <img
                src="https://stytch.com/blog/wp-content/uploads/2022/01/How-a-refresh-token-is-generated-and-used-1-1024x539.png"
                alt=""
              />
              <h1 className="text-xs lg:text-lg font-semibold text-justify mt-1">
                What is an access token and refresh token?
              </h1>
            </Link>
          </div>

          <div className="bg-BgPrimary shadow-md p-4">
            <Link to="/blogs/blog/express-js">
              <img
                src="https://img-c.udemycdn.com/course/750x422/4422780_304c_2.jpg"
                alt=""
              />
              <h1 className="text-xs lg:text-lg  font-semibold text-justify mt-1">
                What is express js?
              </h1>
            </Link>
          </div>

          <div className="bg-BgPrimary shadow-md p-4">
            <Link to="/blogs/blog/next-js">
              <img
                src="https://teacode.io/wp-content/uploads/2022/06/Copy-of-AWS-Amplify-blog-compress.png"
                alt=""
              />
              <h1 className="text-xs lg:text-lg  font-semibold text-justify mt-1">
                What is Next JS?
              </h1>
            </Link>
          </div>

          <div className="bg-BgPrimary shadow-md p-4">
            <Link to="/blogs">
              <img src="https://i.ibb.co/tL6MFx3/SiteView.png" alt="" />
              <h1 className="text-xs lg:text-lg  font-semibold text-justify mt-1">
                Site Overview...
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Blogs;
