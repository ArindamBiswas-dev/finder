import { useMutation } from 'react-query';
import { axiosInstance } from '../util/axiosInstance';

const createCoursePost = async ({ title, description, rating, userId }) => {
  const formData = {
    title,
    description,
    rating,
    userId,
  };
  console.log(formData);
  return axiosInstance.post(`/api/addcourse`, formData);
};

export const useCreateCoursePost = () => {
  return useMutation(createCoursePost);
};
