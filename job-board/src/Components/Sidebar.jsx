// Sidebar.js
import React from "react";
import Location from "./Location";
import Salary from "./Salary";
import Employment from "./Employment";

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <Employment handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
