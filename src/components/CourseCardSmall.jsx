import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

function CourseCardSmall({ withInBookmarked = false }) {
  return (
    <div>
      <div
        className="border p-4 border-blue-400 rounded-md
          hover:shadow-md"
      >
        <div className="flex items-center">
          <div className="avatar">
            <div className="rounded-full w-10 h-10">
              <img alt="course or job" src="https://bit.ly/dan-abramov" />
            </div>
          </div>
          <div className="pl-5 text-gray-900">
            <h1 className="font-semibold text-sm">Anupam Das</h1>
            <p className="text-xs">May 29, 2021</p>
          </div>
          {withInBookmarked && (
            <button
              className="btn btn-outline btn-circle btn-sm ml-auto
          hover:bg-gray-50 hover:text-red-500 hover:border-red-500"
            >
              <MdDelete className="text-2xl" />
            </button>
          )}
        </div>
        <Link to="#">
          <h1 className="mt-2 font-medium text-xl ml-14 pl-1 hover:text-blue-500">
            React course 101 for Beginners
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default CourseCardSmall;
