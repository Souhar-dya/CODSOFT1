// Home.js
import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Components/Sidebar";
import RightSide from "../Components/RightSide";

const Home = () => {
  const [selectedcat, setSelected] = useState(null);
  const [jobs, setjobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsperpage = 6;

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/all-jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setjobs(data);
        setLoading(false);
      });
  }, []);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const filteredItem = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = (e) => {
    setSelected(e.target.value);
  };

  const calculatePage = () => {
    const startIndex = (currentPage - 1) * itemsperpage;
    const endIndex = startIndex + itemsperpage;
    return { startIndex, endIndex };
  };

  const previouspage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItem.length / itemsperpage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredData = (jobs, selectedcat, query) => {
    let filteredJobs = jobs;
    if (query) {
      filteredJobs = filteredItem;
    }
    if (selectedcat) {
      filteredJobs = filteredJobs.filter((job) => {
        if (job.jobLocation.toLowerCase() === selectedcat.toLowerCase()) {
          return true;
        }
        if (parseInt(job.maxPrice) <= parseInt(selectedcat)) {
          return true;
        }
        if (job.salaryType.toLowerCase() === selectedcat.toLowerCase()) {
          return true;
        }
        if (job.employmentType.toLowerCase() === selectedcat.toLowerCase()) {
          return true;
        }
        return false;
      });
    }
    const { startIndex, endIndex } = calculatePage();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedcat, query);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Banner query={query} handleInput={handleInput} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
            <Sidebar handleChange={handleChange} handleClick={handleClick} />
          </div>
          <div className="col-span-2">
            {isLoading ? (
              <div className="bg-white p-4 rounded-md shadow-md">
                Loading...
              </div>
            ) : result.length > 0 ? (
              <Jobs result={result} />
            ) : (
              <div className="bg-white p-4 rounded-md shadow-md">
                No results found
              </div>
            )}
          </div>

          <div className="col-span-1 bg-white p-4 rounded-md shadow-md">
            <RightSide />
          </div>
        </div>
        {result.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={previouspage}
              disabled={currentPage === 1}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="mx-4">
              Page {currentPage} of{" "}
              {Math.ceil(filteredItem.length / itemsperpage)}
            </span>
            <button
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(filteredItem.length / itemsperpage)
              }
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
