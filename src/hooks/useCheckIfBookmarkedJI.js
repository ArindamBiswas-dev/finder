import { useQuery } from 'react-query';
import { axiosInstance } from '../util/axiosInstance';

const checkIfBookmarked = async ({ queryKey }) => {
  const jiId = queryKey[1];
  return axiosInstance.get(`/api/checkbookmarkedji/${jiId}`);
};

export const useCheckIfBookmarkedJI = (
  user,
  setbookmarked,
  jiId,
  enable = true
) => {
  useQuery(['bookamark-ji', jiId], checkIfBookmarked, {
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
