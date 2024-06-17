// Employment.js
import React from "react";
import InputLoc from "./InputLoc";

const Employment = ({ handleChange }) => {
  return (
    <div className="mb-4 flex flex-col">
      <h4 className="text-sm font-semibold mb-2">Employment Type</h4>
      <label className="inline-flex items-center mb-2">
        <input
          type="radio"
          name="test2"
          value={""}
          onChange={handleChange}
          className="form-radio"
        />
        <span className="ml-2 text-gray-700">All</span>
      </label>
      <InputLoc
        handleChange={handleChange}
        value={"Full-Time"}
        title={"Full time"}
        name={"test2"}
      />
      <InputLoc
        handleChange={handleChange}
        value={"Temporary"}
        title={"Temporary"}
        name={"test2"}
      />
      <InputLoc
        handleChange={handleChange}
        value={"Part-time"}
        title={"Part time"}
        name={"test2"}
      />
    </div>
  );
};

export default Employment;
