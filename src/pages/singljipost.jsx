import React, { useContext, useState } from 'react';
import { BsFillBookmarksFill } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { UserContext } from '../App';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useAddToBookmark } from '../hooks/useAddToBookmark';
import { useCheckIfBookmarkedJI } from '../hooks/useCheckIfBookmarkedJI';
import { useRemoveBookmark } from '../hooks/useRemoveBookmark';
import { axiosInstance } from '../util/axiosInstance';
import { getFormatedDate } from '../util/getFormatedDate';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const fetchJI = async ({ queryKey }) => {
  const slug = queryKey[1];
  console.log(slug);
  return await axiosInstance.get(`/api/getsingleji/${slug}`);
};

export const Singljipost = () => {
  const { id } = useParams();
  const [bookmarked, setbookmarked] = useState(false);
  const [bookmarkEnable, setbookmarkedEnable] = useState(false);
  const user = useContext(UserContext);

  const { mutate: addBookmark } = useAddToBookmark();
  const { mutate: removeBookmark } = useRemoveBookmark();

  const { isLoading, data, error } = useQuery(['single-ji', id], fetchJI, {
    onSuccess: (data) => {
      console.log(data.data);
      setbookmarkedEnable(true);
    },
  });

  let postDate = null;
  let startDate = null;
  let endDate = null;

  if (data?.data) {
    postDate = getFormatedDate(data.data.last_edit);
    startDate = getFormatedDate(data.data.start_date);
    endDate = getFormatedDate(data.data.end_date);
  }

  useCheckIfBookmarkedJI(user, setbookmarked, data?.data?.id, bookmarkEnable);

  const addToBookmark = () => {
    if (!user) return;
    const h = { itemId: data?.data?.id, user: user, topic: 'ji' };
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
                disabled={!user ? true : false}
              >
                <BsFillBookmarksFill
                  className={`${
                    bookmarked ? `text-blue-500` : `text-gray-700`
                  }`}
                />
              </button>
            </div>
            <div className="flex items-start md:items-center mb-3 md:mb-5">
              <Link to="/profile/@anupamdas35">
                <div className="avatar">
                  <div className="rounded-full w-12 h-12 md:w-16 md:h-16">
                    <img alt="avater" src="https://bit.ly/dan-abramov" />
                  </div>
                </div>
              </Link>
              <Link to="/profile/@anupamdas35">
                <div className="pl-5 text-sm">
                  <h1 className="font-medium md:text-lg">
                    {data.data.full_name}
                  </h1>
                  <p className="text-sm">{postDate}</p>
                </div>
              </Link>
            </div>
            <div className="my-3 flex gap-3 justify-between mb-10">
              <div className="p-4 bg-green-200 w-full rounded-md">
                <h3 className="mb-1 font-semibold">Start Date</h3>
                <h3 className="md:text-xl font-bold">{startDate}</h3>
              </div>
              <div className="p-4 bg-red-200 w-full rounded-md">
                <h3 className="mb-1 font-semibold">End Date</h3>
                <h3 className="md:text-xl font-bold">{endDate}</h3>
              </div>
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
              href={data.data.ji_link}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-700 w-52 text-center py-3 text-white font-medium rounded-md tracking-wide mt-10"
            >
              Visit Job / Internship
            </a>
          </div>
        </div>
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
};
