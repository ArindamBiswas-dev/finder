import React from 'react';
import { BiBookReader } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Sidebar({ currentPage }) {
  return (
    <>
      <div
        className="fixed h-screen top-0 left-0 
          hidden md:block md:w-28 pt-16 font-medium shadow-2xl bg-white"
      >
        <Link to="/freecourse">
          <div
            className={`flex flex-col justify-center 
            items-center py-6 cursor-pointer ${
              currentPage === 'freecourse' && `bg-blue-50 text-blue-500`
            }`}
          >
            <BiBookReader className="text-2xl mb-1" />
            <p className="text-sm font-medium">Free Courses</p>
          </div>
        </Link>
        <Link to="/job-internship">
          <div
            className={`flex flex-col justify-center 
          items-center py-6 cursor-pointer ${
            currentPage === 'jobinternship' && `bg-blue-50 text-blue-500`
          }`}
          >
            <MdWork className="text-2xl mb-1" />
            <p className="text-sm font-medium">Job/Intership</p>
          </div>
        </Link>
      </div>
      {/* <div className="dropdown hidden">
        <div className="m-1 mt-2 ml-2 btn btn-sm">Select</div>
        <ul
          className="p-2 shadow menu dropdown-content bg-base-100 
          rounded-box w-32"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default Sidebar;
