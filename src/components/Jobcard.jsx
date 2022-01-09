import React, { useContext, useState } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { getFormatedDate } from '../util/getFormatedDate';
import { Link } from 'react-router-dom';
import { useAddToBookmark } from '../hooks/useAddToBookmark';
import { useRemoveBookmark } from '../hooks/useRemoveBookmark';
// import { UserContext } from '../App';
import { useCheckIfBookmarkedJI } from '../hooks/useCheckIfBookmarkedJI';
import { AuthContext } from '../Auth/AuthContext';

function Jobcard({
  author,
  date,
  title,
  description,
  slug,
  startDate,
  endDate,
  jiId,
  avatar,
}) {
  const formatedStartDate = getFormatedDate(startDate);
  const formatedEndDate = getFormatedDate(endDate);
  const formatedPostDate = getFormatedDate(date);

  const [bookmarked, setbookmarked] = useState(false);
  // const user = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const userId = authContext.authState.userInfo.id;
  const isAuthenticated = authContext.isAuthenticated();

  useCheckIfBookmarkedJI(userId, setbookmarked, jiId);
  const { mutate: addBookmark } = useAddToBookmark();
  const { mutate: removeBookmark } = useRemoveBookmark();

  const addToBookmark = () => {
    if (!userId) return;
    const h = { itemId: jiId, user: userId, topic: 'ji' };
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
      className="p-6 rounded-2xl shadow-md border bg-gray-100 min-w-32
      hover:shadow-xl transition duration-300 ease-in-out flex flex-col hover:border-blue-500"
    >
      <div className="flex items-center">
        <div className="avatar">
          <div className="rounded-full w-10 h-10">
            <img alt="job" src={avatar} />
          </div>
        </div>
        <div className="pl-5">
          <h1 className="font-semibold text-sm">{author}</h1>
          <p className="text-xs">{formatedPostDate}</p>
        </div>
        <button
          className={`btn btn-outline btn-circle btn-sm ml-auto hover:bg-gray-50 
             ${
               bookmarked
                 ? `border-blue-500 hover:border-blue-500`
                 : `border-gray-700 hover:border-gray-700`
             }`}
          onClick={addToBookmark}
          disabled={!isAuthenticated}
        >
          <BsFillBookmarksFill
            className={`${bookmarked ? `text-blue-500` : `text-gray-700`}`}
          />
        </button>
      </div>

      <h1 className="font-semibold text-lg mt-4 tracking-wide">{title}</h1>
      <div className="flex pt-7">
        <div>
          <div className="flex items-center">
            <div className="h-4 w-4 bg-green-400 rounded-md" />
            <p className="pl-2 text-sm">Start Date</p>
          </div>
          <div className="p-1 bg-gray-200 text-center rounded-md mt-2 text-sm">
            {formatedStartDate}
          </div>
        </div>
        <div className="ml-auto">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-red-400 rounded-md" />
            <p className="pl-2 text-sm">End Date</p>
          </div>
          <div className="p-1 bg-gray-200 text-center rounded-md mt-2 text-sm">
            {formatedEndDate}
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Link to={`/job-internship/${slug}`}>
          <button className="w-full py-2 bg-gray-300 rounded-lg text-sm font-semibold tracking-wide">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Jobcard;
