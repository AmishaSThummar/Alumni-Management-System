import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import '>' arrow icon from react-icons

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center mb-6">
      {/* Left Side: Job Details */}
      <div>
        <h3 className="text-xl font-semibold text-blue-600">
          {job.companyName}
        </h3>
        <p className="text-gray-700">
          <strong>Skills Required:</strong>{" "}
          {job.skills.join(", ").length > 50
            ? `${job.skills.join(", ").slice(0, 50)}...`
            : job.skills.join(", ")}
        </p>
        <p className="text-gray-700">
          <strong>Days Left:</strong> {job.daysLeft} days
        </p>
        <p className="text-gray-500 text-sm">
          <strong>Created By:</strong> {job.createdBy}
        </p>
        <p className="text-gray-500 text-sm">
          <strong>Date Created:</strong> {job.dateCreated}
        </p>
      </div>

      {/* Right Side: Buttons */}
      <div className="flex flex-col items-center space-y-4">
        {/* Apply Now Button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => alert(`Applied for ${job.companyName}`)}
        >
          Apply Now
        </button>

        {/* '>' Button for More Details */}
        <button
          className="text-red-500 hover:text-red-700 flex items-center space-x-2"
          onClick={() => alert(`More details about ${job.companyName}`)}
        >
          <FaArrowRight size={24} />
          <span className="text-sm font-medium">More Details</span>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
