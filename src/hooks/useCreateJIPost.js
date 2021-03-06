import { useMutation } from 'react-query';
import { axiosInstance } from '../util/axiosInstance';

const createJIPost = async ({
  title,
  description,
  userId,
  startDate,
  endDate,
  link,
}) => {
  const formData = {
    title,
    description,
    userId,
    link,
    startDate,
    endDate,
  };
  return axiosInstance.post(`/api/addji`, formData);
};

export const useCreateJIPost = () => {
  return useMutation(createJIPost);
};
