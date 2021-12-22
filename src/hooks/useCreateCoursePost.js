import { useMutation } from 'react-query';
import { axiosInstance } from '../util/axiosInstance';

const createCoursePost = async ({
  title,
  description,
  rating,
  userId,
  link,
}) => {
  const formData = {
    title,
    description,
    rating,
    userId,
    link,
  };
  console.log(formData);
  return axiosInstance.post(`/api/addcourse`, formData);
};

export const useCreateCoursePost = () => {
  return useMutation(createCoursePost);
};
