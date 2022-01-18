import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { AuthContext } from '../Auth/AuthContext';
// import { UserContext } from '../App';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { useUpdateProfile } from '../hooks/useUpdateProfile';
import { axiosInstance } from '../util/axiosInstance';

const fetchUser = ({ queryKey }) => {
  const username = queryKey[1];
  return axiosInstance.get(`/api/user/${username}`);
};

function Profile() {
  const { id } = useParams();
  // const user = useContext(UserContext);
  const authContext = useContext(AuthContext);
  const userId = authContext.authState.userInfo.id;
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [bio, setBio] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const {
    mutate: updateProfile,
    error: updateError,
    isLoading: isUpdating,
  } = useUpdateProfile();

  console.log(id);

  const { data, isLoading, error } = useQuery(['user-profile', id], fetchUser, {
    onSuccess: (data) => {
      setName(data.data.full_name);
      setUserName(data.data.username);
      setBio(data.data.bio);
    },
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
  // console.log(data?.data);

  const onSave = (event) => {
    event.preventDefault();
    if (name.trim().length === 0) {
      toast.error('Name can not be empty');
      return;
    }
    if (username.trim().length === 0) {
      toast.error('Username can not be empty');
      return;
    }

    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        console.log({ name, username, bio });
        const formData = {
          name,
          username,
          bio,
          avatar: reader.result,
        };
        updateProfile(formData);
      };
      return;
    }

    console.log({ name, username, bio });
    const formData = { name, username, bio, avatar: data.data.avatar };
    updateProfile(formData);
  };
  const onClose = () => {
    setPreviewImage('');
    setFileInputState('');
  };

  const onHanleAvatarChange = (e) => {
    const file = e.target.files[0];
    setFileInputState(e.target.value);
    setSelectedFile(file);
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      console.log(reader.result);
    };
  };

  return (
    <div className="relative h-screen">
      <Navbar />
      <Sidebar />
      {isLoading && (
        <div className="md:ml-28 py-6 flex justify-center items-center h-full -mt-20">
          <ClipLoader loading={isLoading} size={100} />
        </div>
      )}
      {(!data?.data || error) && (
        <div className="md:ml-28 py-6 flex justify-center items-center h-full -mt-20">
          <h3 className="font-medium text-lg">No User Found</h3>
        </div>
      )}
      {!isLoading && data?.data && (
        <div className="md:ml-28">
          <div className="h-44 w-full bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400"></div>
          <div className="w-4/5 mx-auto bg-gray-100 shadow-lg rounded-lg -mt-10 px-1 md:px-6 pb-20">
            <div className="flex">
              <div className="avatar -mt-6 ml-4 md:-mt-10 md:ml-12">
                <div
                  className="rounded-full w-16 h-16 md:w-32 md:h-32 ring ring-info 
            ring-offset-base-100 ring-offset-2"
                >
                  <img alt="avater" src={data.data.avatar} />
                </div>
              </div>

              {data.data.id === userId && (
                <a
                  href="#my-modal"
                  className="btn btn-info ml-auto mt-4 mr-2 md:mt-8 md:mr-6 btn-sm"
                >
                  Edit Profile
                </a>
              )}
            </div>

            {data.data.id === userId && (
              <div id="my-modal" className="modal md:pl-28 overflow-y-scroll">
                <div className="modal-box">
                  <form>
                    <h1 className="font-bold text-center text-xl md:text-2xl">
                      Edit Profile
                    </h1>
                    <div className="flex flex-col">
                      <div className="avatar mx-auto mt-2 md:mt-6">
                        <div
                          className="rounded-full w-16 h-16 md:w-24 md:h-24 ring ring-info 
            ring-offset-base-100 ring-offset-2"
                        >
                          <img
                            alt="avater"
                            src={previewImage ? previewImage : data.data.avatar}
                          />
                        </div>
                      </div>
                      <div className="mb-4 md:mb-6 h-10 text-sm">
                        <p className="mb-2">Upload image</p>
                        <div className="">
                          <input
                            type="file"
                            id="file-input"
                            name="ImageStyle"
                            value={fileInputState}
                            onChange={onHanleAvatarChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:space-y-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="input input-info input-bordered"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Username</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Username"
                          className="input input-info input-bordered"
                          value={username}
                          onChange={(e) => setUserName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Bio</span>
                        </label>
                        <textarea
                          className="textarea h-24 textarea-bordered textarea-info"
                          placeholder="Bio"
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Website</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Website"
                          className="input input-info input-bordered"
                        />
                      </div>
                    </div>

                    <div className="modal-action">
                      <button className="btn btn-info" onClick={onSave}>
                        Save
                      </button>
                      <a href="#close" class="btn" onClick={onClose}>
                        Close
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            )}
            <div className="mx-4 md:ml-12 mt-4">
              <h1 className="font-bold text-xl md:text-2xl">
                {data.data.full_name}
              </h1>
              <h3 className="text-xs md:text-sm mb-4 text-gray-500 -mt-1">
                @{data.data.username}
              </h3>
              <p className="leading-snug text-sm md:text-base text-justify max-w-md text-gray-600">
                {data.data.bio}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
