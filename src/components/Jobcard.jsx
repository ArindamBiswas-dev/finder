import React from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';

function Jobcard() {
  return (
    <div
      className="p-6 rounded-2xl border border-gray-400 bg-gray-100 min-w-32
    hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
    >
      <div className="flex items-center">
        <div className="avatar">
          <div className="rounded-full w-10 h-10">
            <img
              alt="job"
              src="http://daisyui.com/tailwind-css-component-profile-1@40w.png"
            />
          </div>
        </div>
        <div className="pl-5">
          <h1 className="font-semibold text-sm">Anupam Das</h1>
          <p className="text-xs">May 29, 2021</p>
        </div>
        <button
          class="btn btn-outline btn-circle btn-sm ml-auto hover:bg-gray-50 
            border-gray-700 hover:border-gray-700"
        >
          <BsFillBookmarksFill className="text-gray-700" />
        </button>
      </div>

      <div className="pt-4">
        <h1 className="font-bold text-base">What is Lorem Ipsum?</h1>
        <p className="pt-2 text-justify text-sm text-gray-600">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.
        </p>
      </div>
      <div className="flex pt-8">
        <div>
          <div className="flex items-center">
            <div className="h-4 w-4 bg-green-400 rounded-md" />
            <p className="pl-2 text-sm">Start Date</p>
          </div>
          <div className="p-1 bg-gray-300 text-center rounded-md mt-2 text-sm">
            28/09/2021
          </div>
        </div>
        <div className="ml-auto">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-red-400 rounded-md" />
            <p className="pl-2 text-sm">End Date</p>
          </div>
          <div className="p-1 bg-gray-300 text-center rounded-md mt-2 text-sm">
            28/09/2021
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobcard;
