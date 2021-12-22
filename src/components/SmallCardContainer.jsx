import React from 'react';
import CourseCardSmall from './CourseCardSmall';
import { JobCardSmall } from './JobCardSmall';

function SmallCardContainer({
  isFreecourseActive,
  withInBookmarked = false,
  courses,
  jis,
}) {
  //* isFreecourseActive === true => fetch for course
  //* else => fetch for j/i

  if (courses?.data?.length === 0 || jis?.data?.length === 0)
    return (
      <div className="flex justify-center items-center h-full">
        <h2 className="font-semibold md:text-2xl py-10 md:py-20">
          Nothing Found
        </h2>
      </div>
    );

  return (
    <div className="mt-10 space-y-4">
      {isFreecourseActive &&
        courses.data.map((course) => (
          <CourseCardSmall
            withInBookmarked={withInBookmarked}
            title={course.title}
            author={course.full_name}
            slug={course.slug}
            avatar={course.avatar}
          />
        ))}
      {!isFreecourseActive &&
        jis.data.map((ji) => (
          <JobCardSmall
            withInBookmarked={withInBookmarked}
            title={ji.title}
            author={ji.full_name}
            slug={ji.slug}
            avatar={ji.avatar}
            date={ji.last_edit}
            startDate={ji.start_date}
            endDate={ji.end_date}
            key={ji.id}
          />
        ))}
    </div>
  );
}

export default SmallCardContainer;
