import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/elzay.png";
import userLogo from "../assets/user.png";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">


      {/* Main content */}
      <main className="flex-1 pt-24 p-6 overflow-y-auto bg-gradient-to-br from-[#f0f8ff]/50 to-[#1a65a8]/50 dark:from-slate-900 dark:to-slate-800">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
