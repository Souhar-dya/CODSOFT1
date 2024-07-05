import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Online Quiz Maker</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a href="/create-quiz" className="hover:text-blue-300">
                Create Quiz
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-blue-300">
                Login/Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
