import React, { Fragment } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { ClipLoader } from 'react-spinners';
import Jobcard from '../components/Jobcard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { axiosInstance } from '../util/axiosInstance';

const fetchJIs = async ({ pageParam = 1 }) => {
  return await axiosInstance.get(`/api/getallji?page=${pageParam}`);
};

const fetchJIsCount = async () => {
  return await axiosInstance.get('/api/countallji');
};

function JobInternship() {
  const { data: pages } = useQuery('jicount', fetchJIsCount);
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
  } = useInfiniteQuery(['ji'], fetchJIs, {
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
      <Sidebar currentPage="jobinternship" />
      {isLoading && (
        <div className="md:ml-28 py-6 flex justify-center items-center h-full -mt-20">
          <ClipLoader loading={isLoading} size={100} />
        </div>
      )}
      {!isLoading && data && (
        <div className="md:ml-28 py-6 flex flex-col space-y-8">
          <div
            className="px-6 md:px-12 grid grid-cols-1 
        md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10"
          >
            {/* <Jobcard /> */}
            {data?.pages.map((group, i) => {
              return (
                <Fragment key={i}>
                  {group.data.rows.map((ji, index) => (
                    <Jobcard
                      key={index}
                      author={ji.full_name}
                      description={ji.description}
                      slug={ji.slug}
                      date={ji.last_edit}
                      title={ji.title}
                      avatar={ji.avatar}
                      userId={ji.user_id}
                      startDate={ji.start_date}
                      endDate={ji.end_date}
                      jiId={ji.ji_id}
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
        </div>
      )}
    </div>
  );
}

export default JobInternship;
