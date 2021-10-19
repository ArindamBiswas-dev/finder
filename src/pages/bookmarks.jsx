import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SmallCardContainer from '../components/SmallCardContainer';

function Bookmarks() {
  const [active, setactive] = useState(true);

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

          {/* search results */}

          {active && (
            <SmallCardContainer isFreecourseActive={active} withInBookmarked />
          )}

          {!active && (
            <SmallCardContainer isFreecourseActive={active} withInBookmarked />
          )}
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
