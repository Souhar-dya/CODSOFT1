import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineDollar,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    jobLocation,
    salaryType,
    employmentType,
    postingDate,
    description,
  } = data;
  return (
    <section className="card ">
      <Link to="/" className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-primary/70 flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <AiOutlineEnvironment />
              {jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineClockCircle />
              {employmentType}
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineDollar />
              {minPrice}-{maxPrice}$
            </span>
            <span className="flex items-center gap-2">
              <AiOutlineCalendar />
              {postingDate}
            </span>
          </div>
          <p className="text-primary/70">{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;
