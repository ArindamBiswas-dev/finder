import React from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Singlecoursepost() {
  console.log('single course');

  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <div className="md:ml-28 flex justify-center">
        <div className="max-w-screen-lg w-full py-6 md:py-12 px-4 flex flex-col">
          <div className="flex justify-between space-x-4 items-start">
            <h1 className="text-xl md:text-2xl font-medium mb-10">
              10 less known macOS apps you will legitimately want to use every
              day
            </h1>
            <button
              class="btn btn-outline btn-circle btn-sm ml-auto hover:bg-gray-50 
            border-gray-700 hover:border-gray-700"
            >
              <BsFillBookmarksFill className="text-gray-700" />
            </button>
          </div>
          <div className="flex items-start md:items-center mb-3 md:mb-14">
            <Link to="/profile/@anupamdas35">
              <div className="avatar">
                <div className="rounded-full w-12 h-12 md:w-16 md:h-16">
                  <img alt="avater" src="https://bit.ly/dan-abramov" />
                </div>
              </div>
            </Link>
            <Link to="/profile/@anupamdas35">
              <div className="pl-5 text-sm">
                <h1 className="font-medium md:text-lg">Anupam Das</h1>
                <p className="text-sm">May 29, 2021</p>
              </div>
            </Link>
          </div>
          <p className="text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum isIt is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum.
          </p>
          <p className="text-sm md:text-base mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum isIt is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum.
          </p>
          <strong className="my-4 text-sm md:text-base">
            Course link :{' '}
            <a href="#course_link" className="text-blue-400">
              https://google.com
            </a>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default Singlecoursepost;
