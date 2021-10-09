import React from 'react';
import { Link } from 'react-router-dom';

function CourseCardSmall() {
  return (
    <div>
      <Link to="#">
        <div
          className="border p-4 border-blue-400 rounded-md
              hover:shadow-md hover:text-blue-500"
        >
          <div className="flex items-center">
            <div className="avatar">
              <div className="rounded-full w-10 h-10">
                <img
                  alt="course or job"
                  src="http://daisyui.com/tailwind-css-component-profile-1@40w.png"
                />
              </div>
            </div>
            <div className="pl-5 text-gray-900">
              <h1 className="font-semibold text-sm">Anupam Das</h1>
              <p className="text-xs">May 29, 2021</p>
            </div>
          </div>
          <h1 className="mt-2 font-medium text-xl ml-14 pl-1">
            React course 101 for Beginners
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default CourseCardSmall;
