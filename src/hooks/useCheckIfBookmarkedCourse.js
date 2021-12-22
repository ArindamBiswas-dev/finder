import { useQuery } from 'react-query';
import { axiosInstance } from '../util/axiosInstance';

const checkIfBookmarked = async ({ queryKey }) => {
  const courseId = queryKey[1];
  return axiosInstance.get(`/api/checkbookmarkedcourse/${courseId}`);
};

export const useCheckIfBookmarkedCourse = (
  user,
  setbookmarked,
  courseId,
  enable = true
) => {
  useQuery(['bookamark-course', courseId], checkIfBookmarked, {
    enabled: !!user && enable,
    onSuccess: (data) => {
      if (data.data.length !== 0) {
        console.log(data.data);
        console.log('onSuccess');
        setbookmarked(true);
      }
    },
  });
  return null;
};
