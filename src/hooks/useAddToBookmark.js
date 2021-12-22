import { useMutation } from 'react-query';
import { axiosInstance } from '../util/axiosInstance';

const addToBookmark = async ({ itemId, userId, topic }) => {
  console.log('useAddToBookmark', { itemId, userId, topic });
  return axiosInstance.post(`/api/addtobookmark/${topic}`, {
    itemId: itemId,
    userId: userId,
  });
};

export const useAddToBookmark = () => {
  return useMutation(addToBookmark, {});
};
