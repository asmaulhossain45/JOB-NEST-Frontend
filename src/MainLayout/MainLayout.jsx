import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto border-2">
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
