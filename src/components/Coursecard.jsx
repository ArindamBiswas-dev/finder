import React, { useContext, useState } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { useAddToBookmark } from '../hooks/useAddToBookmark';
import { useCheckIfBookmarkedCourse } from '../hooks/useCheckIfBookmarkedCourse';
import { useRemoveBookmark } from '../hooks/useRemoveBookmark';
import { getFormatedDate } from '../util/getFormatedDate';

function Coursecard({
  author,
  date,
  title,
  description,
  slug,
  userId,
  courseId,
}) {
  const [bookmarked, setbookmarked] = useState(false);
  const user = useContext(UserContext);
  const { mutate: addBookmark } = useAddToBookmark();
  const { mutate: removeBookmark } = useRemoveBookmark();

  const addToBookmark = () => {
    if (!user) return;
    const h = { itemId: courseId, userId: user, topic: 'course' };
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

  const formatedDate = getFormatedDate(date);
  useCheckIfBookmarkedCourse(user, setbookmarked, courseId);

  // if (data?.data) console.log(data.data);

  // useEffect(() => {
  //   if (data?.data?.id) {
  //     console.log('use');
  //     setbookmarked(true);
  //   }
  // }, [bookmarked]);

  return (
    <div
      className="p-6 rounded-2xl border border-gray-400 bg-gray-100 min-w-32
        hover:shadow-xl transition duration-200 ease-in-out cursor-pointer"
    >
      <div className="flex items-center">
        <Link to={`/freecourse/${slug}`}>
          <div className="avatar">
            <div className="rounded-full w-10 h-10">
              <img alt="course" src="https://bit.ly/dan-abramov" />
            </div>
          </div>
        </Link>
        <Link to={`/freecourse/${slug}`}>
          <div className="pl-5">
            <h1 className="font-semibold text-sm">{author}</h1>
            <p className="text-xs">{formatedDate}</p>
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
      <Link to={`/freecourse/${slug}`}>
        <div className="pt-4">
          <h1 className="font-bold text-base">{title}</h1>
          <p className="pt-2 text-justify text-sm text-gray-600">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Coursecard;
