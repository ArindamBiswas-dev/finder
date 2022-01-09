import React, { useContext, useState } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
// import { UserContext } from '../App';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAddToBookmark } from '../hooks/useAddToBookmark';
import { useCheckIfBookmarkedCourse } from '../hooks/useCheckIfBookmarkedCourse';
import { useRemoveBookmark } from '../hooks/useRemoveBookmark';
import { axiosInstance } from '../util/axiosInstance';
import { getFormatedDate } from '../util/getFormatedDate';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Rating } from '../components/Rating';
import { AuthContext } from '../Auth/AuthContext';

const fetchCourse = async ({ queryKey }) => {
  const slug = queryKey[1];
  console.log(slug);
  return await axiosInstance.get(`/api/getsinglecourse/${slug}`);
};

function Singlecoursepost() {
  const { id } = useParams();
  const [bookmarked, setbookmarked] = useState(false);
  const [bookmarkEnable, setbookmarkedEnable] = useState(false);
  // const user = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const userId = authContext.authState.userInfo.id;
  const isAuthenticated = authContext.isAuthenticated();

  const { mutate: addBookmark } = useAddToBookmark();
  const { mutate: removeBookmark } = useRemoveBookmark();

  const { isLoading, data, error } = useQuery(
    ['single-course', id],
    fetchCourse,
    {
      onSuccess: (data) => {
        setbookmarkedEnable(true);
      },
    }
  );
  useCheckIfBookmarkedCourse(
    userId,
    setbookmarked,
    data?.data?.id,
    bookmarkEnable
  );

  let formatedDate = null;
  if (data?.data) {
    console.log(data.data.id);
    formatedDate = getFormatedDate(data.data.last_edit);
  }

  const addToBookmark = () => {
    if (!userId) return;
    const h = { itemId: data.data.id, userId: userId, topic: 'course' };
    if (!bookmarked) {
      console.log('add from bookmark');
      // console.log(h);
      addBookmark(h);
      setbookmarked(true);
    } else {
      console.log('bookmark removed');
      removeBookmark(h);
      setbookmarked(false);
    }
  };

  return (
    <div className="relative h-screen">
      <Navbar />
      <Sidebar />
      {isLoading && (
        <div className="md:ml-28 py-6 flex justify-center items-center h-full -mt-20">
          <ClipLoader loading={isLoading} size={100} />
        </div>
      )}
      {!isLoading && data && (
        <div className="md:ml-28 flex justify-center">
          <div className="max-w-screen-lg w-full py-6 md:py-12 px-4 flex flex-col">
            <div className="flex justify-between space-x-4 items-start">
              <h1 className="text-xl md:text-2xl font-medium mb-10">
                {data.data.title}
              </h1>
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
                  className={`${
                    bookmarked ? `text-blue-500` : `text-gray-700`
                  }`}
                />
              </button>
            </div>
            <div className="flex items-start md:items-center mb-3 md:mb-14">
              <Link to={`/profile/${data.data.username}`}>
                <div className="avatar">
                  <div className="rounded-full w-12 h-12 md:w-16 md:h-16">
                    <img alt="avater" src={data.data.avatar} />
                  </div>
                </div>
              </Link>
              <Link to="/profile/@anupamdas35">
                <div className="pl-5 text-sm">
                  <h1 className="font-medium md:text-lg">
                    {data.data.full_name}
                  </h1>
                  <p className="text-sm">{formatedDate}</p>
                </div>
              </Link>
            </div>
            <div className="mb-8">
              <h3 className="md:text-xl font-semibold mb-2 text-gray-600">
                Rating
              </h3>
              <Rating rating={data.data.rating} edit={false} />
            </div>
            {/* <p className="text-sm md:text-base">{data.data.description}</p> */}
            <Editor
              readOnly
              toolbarClassName="toolbar-class"
              editorState={EditorState.createWithContent(
                convertFromRaw(JSON.parse(data.data.description))
              )}
            />
            <a
              href={data.data.course_link}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-700 w-40 text-center py-3 text-white font-medium rounded-md tracking-wide mt-10"
            >
              Visit Course
            </a>
          </div>
        </div>
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default Singlecoursepost;
