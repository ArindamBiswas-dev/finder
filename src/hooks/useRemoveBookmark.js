import { useMutation } from 'react-query';
import { axiosInstance } from '../util/axiosInstance';

const removeFromBookmark = async ({ itemId, userId, topic }) => {
  console.log({ itemId, userId });
  return axiosInstance.post(`/api/removefrombookmark/${topic}`, {
    itemId,
    userId,
  });
};

export const useRemoveBookmark = () => {
  return useMutation(removeFromBookmark);
};
