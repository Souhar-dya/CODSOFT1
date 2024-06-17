import React from "react";

const ResumeCard = () => {
  return (
    <>
      <h4 className="text-lg font-bold mb-2">Resume Submisson</h4>
      <div className="bg-yellow-100 p-4 rounded-md">
        <h3 className="text-md font-semibold mb-2">Submit Your Resume</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="block w-full py-2 px-3 border border-gray-300 rounded-md mb-4"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </>
  );
};

export default ResumeCard;
