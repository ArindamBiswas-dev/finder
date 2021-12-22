import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SmallCardContainer from '../components/SmallCardContainer';
import { axiosInstance } from '../util/axiosInstance';

const fetchBookmarkedCourse = async () => {
  return await axiosInstance.get(`/api/bookmarked/course`);
};
const fetchBookmarkedJI = async () => {
  return await axiosInstance.get(`/api/bookmarked/ji`);
};

function Bookmarks() {
  const [active, setactive] = useState(true);
  const {
    data: courses,
    isLoading,
    error,
  } = useQuery(['bookmark-courses'], fetchBookmarkedCourse, {
    enabled: active,
  });

  const {
    data: jis,
    isLoading: isJILoading,
    error: jiError,
  } = useQuery(['bookmark-jis'], fetchBookmarkedJI, {
    enabled: !active,
  });

  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <div className="md:ml-28 flex justify-center">
        <div className="max-w-screen-lg w-full py-6 md:py-10 px-4 flex flex-col">
          <div className="tabs w-full">
            <button
              className={`tab tab-lifted h-16 ${
                active ? `tab-active` : ``
              } text-base cursor-pointer`}
              onClick={() => setactive(true)}
            >
              Freecourses
            </button>
            <button
              className={`tab tab-lifted h-16 ${
                !active ? `tab-active` : ``
              } text-base`}
              onClick={() => setactive(false)}
            >
              Job / Internship
            </button>
          </div>

          {(isLoading || isJILoading) && (
            <div className="flex justify-center items-center h-full md:pt-20">
              <ClipLoader loading={isLoading || isJILoading} size={50} />
            </div>
          )}

          {/* search results */}

          {active && courses && (
            <SmallCardContainer isFreecourseActive={active} courses={courses} />
          )}

          {!active && jis && (
            <SmallCardContainer isFreecourseActive={active} jis={jis} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
