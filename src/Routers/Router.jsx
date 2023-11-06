import { createBrowserRouter } from "react-router-dom";
import PostDetails from "../Components/PostDetails";
import MainLayout from "../MainLayout/MainLayout";
import AddJob from "../Pages/AddJob/AddJob";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import Blog1 from "../Pages/Blogs/Blog1";
import Blog2 from "../Pages/Blogs/Blog2";
import Blog3 from "../Pages/Blogs/Blog3";
import Blog4 from "../Pages/Blogs/Blog4";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: `details/:id`,
        element: <PostDetails />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        children: [
          {
            index: true,
            element: <Blog1 />,
          },
          {
            path: "blog/express-js",
            element: <Blog2 />,
          },
          {
            path: "blog/next-js",
            element: <Blog3 />,
          },
          {
            path: "blog/site-view",
            element: <Blog4 />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
