import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import JobTab from '../components/JobTab';

const JobsList = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
            <JobTab/>
      </div>
      <Footer />
    </div>
  );
}

export default JobsList
