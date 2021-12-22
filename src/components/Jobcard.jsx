import React, { useContext, useState } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { getFormatedDate } from '../util/getFormatedDate';
import { Link } from 'react-router-dom';
import { useAddToBookmark } from '../hooks/useAddToBookmark';
import { useRemoveBookmark } from '../hooks/useRemoveBookmark';
import { UserContext } from '../App';
import { useCheckIfBookmarkedJI } from '../hooks/useCheckIfBookmarkedJI';

function Jobcard({
  author,
  date,
  title,
  description,
  slug,
  userId,
  startDate,
  endDate,
  jiId,
}) {
  const formatedStartDate = getFormatedDate(startDate);
  const formatedEndDate = getFormatedDate(endDate);
  const formatedPostDate = getFormatedDate(date);

  const [bookmarked, setbookmarked] = useState(false);
  const user = useContext(UserContext);
  useCheckIfBookmarkedJI(user, setbookmarked, jiId);
  const { mutate: addBookmark } = useAddToBookmark();
  const { mutate: removeBookmark } = useRemoveBookmark();

  const addToBookmark = () => {
    if (!user) return;
    const h = { itemId: jiId, user: user, topic: 'ji' };
    if (!bookmarked) {
      console.log('add from bookmark');
      addBookmark(h);
      setbookmarked(true);
    } else {
      console.log('bookmark removed');
      removeBookmark(h);
      setbookmarked(false);
    }
  };

  return (
    <div
      className="p-6 rounded-2xl border border-gray-400 bg-gray-100 min-w-32
    hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
    >
      <div className="flex items-center">
        <Link to={`/job-internship/${slug}`}>
          <div className="avatar">
            <div className="rounded-full w-10 h-10">
              <img alt="job" src="https://bit.ly/dan-abramov" />
            </div>
          </div>
        </Link>
        <Link to={`/job-internship/${slug}`}>
          <div className="pl-5">
            <h1 className="font-semibold text-sm">{author}</h1>
            <p className="text-xs">{formatedPostDate}</p>
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
          disabled={!user ? true : false}
        >
          <BsFillBookmarksFill
            className={`${bookmarked ? `text-blue-500` : `text-gray-700`}`}
          />
        </button>
      </div>

      <Link to={`/job-internship/${slug}`}>
        <div className="pt-4">
          <h1 className="font-bold text-base">{title}</h1>
          <p className="pt-2 text-justify text-sm text-gray-600">
            {description}
          </p>
        </div>
        <div className="flex pt-8">
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
  );
}

export default Jobcard;
