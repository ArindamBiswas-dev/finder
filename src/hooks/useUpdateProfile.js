import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { axiosInstance } from '../util/axiosInstance';

const updateProfile = ({ name, username, bio, avatar }) => {
  const formData = { name, username, bio, avatar };
  console.log(formData);
  return axiosInstance.post('/api/updateprofile', formData);
};

export const useUpdateProfile = () => {
  return useMutation(updateProfile, {
    onSuccess: (data) => {
      toast.success('Profile update successfully');
    },
    onError: (error) => {
      //   console.log(error.response.data.message);
      toast.error(error.response.data.message);
    },
  });
};
