import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getFormatedDate } from '../util/getFormatedDate';

export const JobCardSmall = ({
  withInBookmarked = false,
  title,
  avatar,
  date,
  author,
  slug,
  startDate,
  endDate,
}) => {
  const formatedStartDate = getFormatedDate(startDate);
  const formatedEndDate = getFormatedDate(endDate);
  const formatedPostDate = getFormatedDate(date);

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
            <h1 className="font-semibold text-sm">{author}</h1>
            <p className="text-xs">{formatedPostDate}</p>
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
        <Link to={`/job-internship/${slug}`}>
          <h1 className="mt-2 font-medium text-xl ml-14 pl-1 hover:text-blue-500">
            {title}
          </h1>
          <div className="flex pt-5 md:pl-14">
            <div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-green-400 rounded-md" />
                <p className="pl-2 text-sm">Start Date</p>
              </div>
              <div className="p-1 bg-gray-300 text-center rounded-md mt-2 text-sm">
                {formatedStartDate}
              </div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center">
                <div className="h-4 w-4 bg-red-400 rounded-md" />
                <p className="pl-2 text-sm">End Date</p>
              </div>
              <div className="p-1 bg-gray-300 text-center rounded-md mt-2 text-sm">
                {formatedEndDate}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
