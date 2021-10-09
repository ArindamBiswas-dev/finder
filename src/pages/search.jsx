import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
// import CourseCardSmall from '../components/CourseCardSmall';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SmallCardContainer from '../components/SmallCardContainer';
import useQuery from '../hooks/useQuery';

function Search() {
  const query = useQuery();
  const searchItem = query.get('search_query');
  const [active, setactive] = useState(true);

  if (!searchItem) {
    return <Redirect to="/freecourse" />;
  }

  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <div className="md:ml-28 flex justify-center">
        <div className="max-w-screen-lg w-full py-6 md:py-10 px-4 flex flex-col">
          <h1 className="text-xl md:text-2xl font-medium mb-10">
            You have search for{' '}
            <span className="text-blue-400 pl-2 underline italic">
              {searchItem}
            </span>
          </h1>
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

          {/* search results */}

          {active && <SmallCardContainer isFreecourseActive={active} />}

          {!active && <SmallCardContainer isFreecourseActive={active} />}
        </div>
      </div>
    </div>
  );
}

export default Search;
