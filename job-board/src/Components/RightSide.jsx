import React from "react";
import ResumeCard from "./ResumeCard";

const Review = ({ name, jobTitle, company, review }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="bg-gray-200 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-gray-500">
            {jobTitle} at {company}
          </p>
        </div>
      </div>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

const RightSide = () => {
  const reviews = [
    {
      name: "John Doe",
      jobTitle: "Software Engineer",
      company: "Acme Inc.",
      review:
        "I was able to find my dream job thanks to this amazing job search platform. The process was smooth, and I received multiple offers within a few weeks.",
    },
    {
      name: "Jane Smith",
      jobTitle: "Marketing Manager",
      company: "XYZ Corp.",
      review:
        "The platform's filtering options and personalized recommendations made my job search incredibly efficient. I'm thrilled with the position I landed.",
    },
    // Add more reviews here
  ];

  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-4">Reviews</h3>
        {reviews.map((review, index) => (
          <Review
            key={index}
            name={review.name}
            jobTitle={review.jobTitle}
            company={review.company}
            review={review.review}
          />
        ))}
      </div>
      <ResumeCard />
    </div>
  );
};

export default RightSide;
