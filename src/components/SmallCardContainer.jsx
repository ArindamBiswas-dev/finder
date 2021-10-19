import React from 'react';
import CourseCardSmall from './CourseCardSmall';

function SmallCardContainer({ isFreecourseActive, withInBookmarked = false }) {
  //* isFreecourseActive === true => fetch for course
  //* else => fetch for j/i

  return (
    <div className="mt-10 space-y-4">
      {isFreecourseActive && (
        <>
          <CourseCardSmall withInBookmarked={withInBookmarked} />
          <CourseCardSmall withInBookmarked={withInBookmarked} />
        </>
      )}
      {!isFreecourseActive && (
        <>
          <CourseCardSmall withInBookmarked={withInBookmarked} />
          <CourseCardSmall withInBookmarked={withInBookmarked} />
        </>
      )}
    </div>
  );
}

export default SmallCardContainer;
