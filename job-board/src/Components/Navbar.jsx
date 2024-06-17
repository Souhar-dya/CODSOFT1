import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/post-job", title: "Post Job" },
  ];

  return (
    <header className=" shadow-md">
      <nav className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-white font-bold">
            <span className="text-2xl text-yellow-300">JobSearch</span>
          </Link>
          <ul className="hidden md:flex gap-8 ">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-opacity-1">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-bold"
                      : "hover:text-yellow-300 transition-colors duration-300"
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="text-base space-x-4 font-medium">
            <Link
              to="/login"
              className="py-2 px-4 border rounded hover:bg-purple-600 hover:text-white transition-colors duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="py-2 px-4 rounded bg-yellow-400 text-gray-800 hover:bg-yellow-500 transition-colors duration-300"
            >
              Register
            </Link>
          </div>
          <div className="md:hidden block">
            <button onClick={handleMenu}>
              {openMenu ? (
                <AiOutlineClose className="w-6 h-6 " />
              ) : (
                <AiOutlineBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {openMenu && (
          <ul className="md:hidden block  text-black text-center">
            {navItems.map(({ path, title }) => (
              <li key={path} className="py-2">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-bold"
                      : "hover:text-yellow-300 transition-colors duration-300"
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
