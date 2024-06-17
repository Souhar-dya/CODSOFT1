import React from "react";
import { AiOutlineEnvironment, AiOutlineSearch } from "react-icons/ai";

const Banner = ({ query, handleInput }) => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Find your dream job
          </h2>
          <p className="mt-4 max-w-md mx-auto text-gray-500">
            Search and apply for jobs in your desired field and location with
            ease.
          </p>
          <div className="mt-10">
            <form className="flex flex-col sm:flex-row justify-center">
              <div className="relative w-full sm:w-64 mb-4 sm:mb-0 sm:mr-4">
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="border border-gray-300 rounded-md py-3 px-4 w-full pl-10"
                  onChange={handleInput}
                  value={query}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineSearch className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="relative w-full sm:w-64 mb-4 sm:mb-0 sm:mr-4">
                <input
                  type="text"
                  placeholder="Location"
                  className="border border-gray-300 rounded-md py-3 px-4 w-full pl-10"
                  value={""}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <AiOutlineEnvironment className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
