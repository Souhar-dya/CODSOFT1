import React from "react";
import InputLoc from "./InputLoc";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold mb-2">Salary</h4>
      <div className="flex flex-col">
        <label className="inline-flex items-center mb-2">
          <input
            type="radio"
            name="test1"
            value={""}
            onChange={handleChange}
            className="form-radio"
          />
          <span className="ml-2 text-gray-700">All</span>
        </label>
        <InputLoc
          handleChange={handleChange}
          value={30}
          title={"<30000"}
          name={"test1"}
        />
        <InputLoc
          handleChange={handleChange}
          value={50}
          title={"<50000"}
          name={"test1"}
        />
        <InputLoc
          handleChange={handleChange}
          value={80}
          title={"<80000"}
          name={"test1"}
        />
        <InputLoc
          handleChange={handleChange}
          value={100}
          title={"<100000"}
          name={"test1"}
        />
      </div>
    </div>
  );
};

export default Salary;
