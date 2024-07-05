import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 shadow-md mt-auto">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Online Quiz Maker
      </div>
    </footer>
  );
};

export default Footer;
