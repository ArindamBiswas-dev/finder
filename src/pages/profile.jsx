import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// import Test from './test';

function Profile() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <div className="md:ml-28">
        <div className="h-44 w-full bg-gradient-to-r from-yellow-300 via-red-400 to-pink-400"></div>
        <div className="w-4/5 mx-auto bg-gray-100 shadow-lg rounded-lg -mt-10 px-1 md:px-6 pb-20">
          <div className="flex">
            <div className="avatar -mt-6 ml-4 md:-mt-10 md:ml-12">
              <div
                className="rounded-full w-16 h-16 md:w-32 md:h-32 ring ring-info 
            ring-offset-base-100 ring-offset-2"
              >
                <img alt="avater" src="https://bit.ly/dan-abramov" />
              </div>
            </div>

            <a
              href="#my-modal"
              className="btn btn-info ml-auto mt-4 mr-2 md:mt-8 md:mr-6 btn-sm"
            >
              Edit Profile
            </a>
          </div>

          <div id="my-modal" className="modal md:pl-28 overflow-y-scroll">
            <div className="modal-box">
              <h1 className="font-bold text-center text-xl md:text-2xl">
                Edit Profile
              </h1>
              <div className="flex flex-col">
                <div className="avatar mx-auto mt-2 md:mt-6">
                  <div
                    className="rounded-full w-16 h-16 md:w-24 md:h-24 ring ring-info 
            ring-offset-base-100 ring-offset-2"
                  >
                    <img alt="avater" src="https://bit.ly/dan-abramov" />
                  </div>
                </div>
                <div className="mb-4 md:mb-6 h-10 text-sm">
                  <p className="mb-2">Upload image</p>
                  <div className="">
                    <input type="file" id="file-input" name="ImageStyle" />
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
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bio</span>
                  </label>
                  <textarea
                    className="textarea h-24 textarea-bordered textarea-info"
                    placeholder="Bio"
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
                <button className="btn btn-info">Save</button>
                <a href="#close" class="btn">
                  Close
                </a>
              </div>
            </div>
          </div>
          <div className="mx-4 md:ml-12 mt-4">
            <h1 className="font-bold text-xl md:text-2xl">Suman Rana</h1>
            <h3 className="text-xs md:text-sm mb-4 text-gray-500 -mt-1">
              @suman_rana123
            </h3>
            <p className="leading-snug text-sm md:text-base text-justify max-w-md text-gray-600">
              Be positive about yourself. Make sure it’s upbeat and positive but
              not too arrogant or people may get turned off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
