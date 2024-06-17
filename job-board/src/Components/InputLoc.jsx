// InputLoc.js
import React from "react";

const InputLoc = ({ handleChange, value, title, name }) => {
  return (
    <label className="inline-flex items-center mb-2">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        className="form-radio"
      />
      <span className="ml-2 text-gray-700">{title}</span>
    </label>
  );
};

export default InputLoc;
