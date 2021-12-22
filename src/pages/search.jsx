import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SmallCardContainer from '../components/SmallCardContainer';
import useURLQuery from '../hooks/useQuery';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../util/axiosInstance';
import { useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';

const fetchSearchCourse = async ({ queryKey }) => {
  const searchItem = queryKey[1];
  return await axiosInstance.get(`/api/searchcourse?q=${searchItem}`);
};
const fetchSearchJI = async ({ queryKey }) => {
  const searchItem = queryKey[1];
  return await axiosInstance.get(`/api/searchji?q=${searchItem}`);
};

function Search() {
  const query = useURLQuery();
  const history = useHistory();
  const searchItem = query.get('search_query');
  const viewOnMobile = query.get('mob');
  const [active, setactive] = useState(true);
  const [searchItemMobile, setsearchItemMobile] = useState('');

  function search(e) {
    e.preventDefault();
    if (!searchItemMobile) return;
    return history.push(`/search?search_query=${searchItemMobile}`);
  }

  const {
    data: courses,
    isLoading,
    error,
  } = useQuery(['search-courses', searchItem], fetchSearchCourse, {
    enabled: active,
  });

  const {
    data: jis,
    isLoading: isJILoading,
    error: jiError,
  } = useQuery(['search-jis', searchItem], fetchSearchJI, {
    enabled: !active,
  });

  if (!searchItem && !viewOnMobile) {
    return <Redirect to="/freecourse" />;
  }

  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <div className="md:ml-28 flex justify-center">
        <div className="max-w-screen-lg w-full py-6 md:py-10 px-4 flex flex-col">
          <form onSubmit={search} className="md:hidden my-4">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered text-base w-80"
                onChange={(e) => setsearchItemMobile(e.target.value)}
              />
            </div>
          </form>

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
          {(isLoading || isJILoading) && (
            <div className="flex justify-center items-center h-full md:pt-20">
              <ClipLoader loading={isLoading || isJILoading} size={50} />
            </div>
          )}

          {active && courses && (
            <SmallCardContainer
              isFreecourseActive={active}
              searchItem={searchItem}
              courses={courses}
            />
          )}

          {!active && jis && (
            <SmallCardContainer
              isFreecourseActive={active}
              searchItem={searchItem}
              jis={jis}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
