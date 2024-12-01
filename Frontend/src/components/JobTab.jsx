import React, { useState } from "react";
import JobCard from "./JobCard";

const JobTab = () => {
  const jobsData = Array(25)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      companyName: `Company ${i + 1}`,
      skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
      daysLeft: Math.floor(Math.random() * 10) + 1,
      createdBy: `Admin ${i + 1}`,
      dateCreated: `2024-11-${Math.floor(Math.random() * 30) + 1}`,
    }));

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 9;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const filteredJobs = jobsData.filter((job) =>
    job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Bar */}
      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by Company Name or Skills"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mr-4"
        />
      </div>

      {/* Job Cards */}
      {currentJobs.length > 0 ? (
        currentJobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p className="text-gray-500 text-center">No jobs found.</p>
      )}

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center space-x-2">
        {Array(Math.ceil(filteredJobs.length / jobsPerPage))
          .fill(0)
          .map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default JobTab;
