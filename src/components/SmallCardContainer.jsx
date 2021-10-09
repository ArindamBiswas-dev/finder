import React from 'react';
import CourseCardSmall from './CourseCardSmall';

function SmallCardContainer({ isFreecourseActive }) {
  //* isFreecourseActive === true => fetch for course
  //* else => fetch for j/i

  return (
    <div className="mt-10 space-y-4">
      {isFreecourseActive && (
        <>
          <CourseCardSmall />
          <CourseCardSmall />
        </>
      )}
      {!isFreecourseActive && (
        <>
          <CourseCardSmall />
          <CourseCardSmall />
        </>
      )}
    </div>
  );
}

export default SmallCardContainer;
