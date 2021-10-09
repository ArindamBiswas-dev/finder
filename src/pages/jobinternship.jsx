import React from 'react';
import Jobcard from '../components/Jobcard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function JobInternship() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar currentPage="jobinternship" />
      <div className="md:ml-28 py-6 flex flex-col space-y-8">
        <div
          className="px-6 md:px-12 grid grid-cols-1 
        md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10"
        >
          <Jobcard />
          <Jobcard />
          <Jobcard />
          <Jobcard />
          <Jobcard />
          <Jobcard />
        </div>
        <button class="btn btn-info mx-auto">View More</button>
      </div>
    </div>
  );
}

export default JobInternship;
