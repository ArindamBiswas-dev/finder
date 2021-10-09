import React, { useState } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Coursecard() {
  const [bookmarked, setbookmarked] = useState(false);

  const addToBookmark = () => {
    console.log('bookmark added');
    setbookmarked(!bookmarked);
  };

  return (
    <div
      className="p-6 rounded-2xl border border-gray-400 bg-gray-100 min-w-32
        hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
    >
      <div className="flex items-center">
        <Link to="/freecourse/new-react-course-142wj">
          <div className="avatar">
            <div className="rounded-full w-10 h-10">
              <img
                alt="course"
                src="http://daisyui.com/tailwind-css-component-profile-1@40w.png"
              />
            </div>
          </div>
        </Link>
        <Link to="/freecourse/new-react-course-142wj">
          <div className="pl-5">
            <h1 className="font-semibold text-sm">Anupam Das</h1>
            <p className="text-xs">May 29, 2021</p>
          </div>
        </Link>
        <button
          className={`btn btn-outline btn-circle btn-sm ml-auto hover:bg-gray-50 
             ${
               bookmarked
                 ? `border-blue-500 hover:border-blue-500`
                 : `border-gray-700 hover:border-gray-700`
             }`}
          onClick={addToBookmark}
        >
          <BsFillBookmarksFill
            className={`${bookmarked ? `text-blue-500` : `text-gray-700`}`}
          />
        </button>
      </div>
      <Link to="/freecourse/new-react-course-142wj">
        <div className="pt-4">
          <h1 className="font-bold text-base">What is Lorem Ipsum?</h1>
          <p className="pt-2 text-justify text-sm text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum isIt is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Coursecard;
