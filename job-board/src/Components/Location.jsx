import React from "react";
import InputLoc from "./InputLoc";

const Location = ({ handleChange }) => {
  return (
    <div className="mb-4 flex flex-col">
      <h4 className="text-sm font-semibold mb-2">Location</h4>
      <label className="inline-flex items-center mb-2">
        <input
          type="radio"
          name="test"
          id="test"
          value={""}
          onChange={handleChange}
          className="form-radio"
        />
        <span className="ml-2 text-gray-700">All</span>
      </label>
      <InputLoc
        handleChange={handleChange}
        value={"London"}
        title={"London"}
        name={"test"}
      />
      <InputLoc
        handleChange={handleChange}
        value={"Denmark"}
        title={"Denmark"}
        name={"test"}
      />
    </div>
  );
};

export default Location;
