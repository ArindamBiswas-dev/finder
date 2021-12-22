import React, { Fragment, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import Coursecard from '../components/Coursecard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { axiosInstance } from '../util/axiosInstance';
import ClipLoader from 'react-spinners/ClipLoader';

const fetchCourses = async ({ pageParam = 1 }) => {
  return await axiosInstance.get(`/api/getallcourse?page=${pageParam}`);
};

const fetchCourseCount = async () => {
  return await axiosInstance.get('/api/countallcourse');
};

function FreeCourse() {
  const { data: pages } = useQuery('coursecount', fetchCourseCount);
  const totalPage = pages?.data.count;

  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(['freecourses'], fetchCourses, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < totalPage) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
    enabled: !!totalPage,
  });

  return (
    <div className="relative h-screen">
      <Navbar />
      <Sidebar currentPage="freecourse" />
      {isLoading && (
        <div className="md:ml-28 py-6 flex justify-center items-center h-full -mt-20">
          <ClipLoader loading={isLoading} size={100} />
        </div>
      )}
      {!isLoading && data && (
        <div className="md:ml-28 py-6 flex flex-col space-y-8">
          <>
            <div
              className="px-6 md:px-12 grid grid-cols-1 
        md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10"
            >
              {data?.pages.map((group, i) => {
                return (
                  <Fragment key={i}>
                    {group.data.rows.map((course, index) => (
                      <Coursecard
                        key={index}
                        author={course.full_name}
                        description={course.description}
                        slug={course.slug}
                        date={course.last_edit}
                        title={course.title}
                        avatar={course.avatar}
                        userId={course.user_id}
                        courseId={course.course_id}
                      />
                    ))}
                  </Fragment>
                );
              })}
            </div>
            <button
              class={`btn btn-info mx-auto ${
                isFetchingNextPage ? 'loading' : ''
              } ${!hasNextPage ? 'hidden' : 'block'}`}
              disabled={!hasNextPage}
              onClick={fetchNextPage}
            >
              View More
            </button>
          </>
        </div>
      )}
    </div>
  );
}

export default FreeCourse;
