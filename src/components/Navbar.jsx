import React, { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { VscNewFile } from 'react-icons/vsc';
import Logo from './Logo';
import { Link, useHistory } from 'react-router-dom';
import { HiBookmark } from 'react-icons/hi';

function Navbar() {
  const history = useHistory();
  const [searchItem, setsearchItem] = useState('');

  function search(e) {
    e.preventDefault();

    if (!searchItem) return;

    return history.push(`/search?search_query=${searchItem}`);
  }

  return (
    <div className="flex px-6 py-3 items-center shadow-md sticky top-0 z-50 bg-white">
      <Logo />
      <div className="items-center mx-auto hidden sm:flex">
        <form onSubmit={search}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered text-base w-80"
              onChange={(e) => setsearchItem(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="ml-auto md:m-0 hidden">
        <button className="btn btn-sm md:btn-md btn-outline btn-info mx-2">
          Sign Up
        </button>
        <button
          className="btn btn-sm md:btn-md btn-info btn-active"
          aria-pressed="true"
        >
          Log In
        </button>
      </div>
      <div className="dropdown dropdown-hover dropdown-end ml-auto md:ml-0">
        <div className="avatar">
          <div className="rounded-full w-10 h-10 cursor-pointer ring ring-blue-500 ring-offset-base-100 ring-offset-2">
            <img
              alt="avater"
              src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
            />
          </div>
        </div>
        <ul
          tabIndex="0"
          className="p-2 menu dropdown-content border 
            border-gray-300 bg-base-100 rounded-lg w-48 shadow-lg"
        >
          <li>
            <Link
              to="/profile/@sumanrana"
              className="text-sm flex items-center"
            >
              <MdAccountCircle size="22px" />
              <p className="pl-2">Profile</p>
            </Link>
          </li>
          <li>
            <Link to="/bookmarked" className="text-sm flex items-center">
              <HiBookmark size="22px" />
              <p className="pl-2">Bookmark</p>
            </Link>
          </li>
          <li>
            <Link to="/newpost" className="text-sm flex items-center">
              <VscNewFile size="22px" />
              <p className="pl-2">New Post</p>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-sm flex items-center">
              <FaSignOutAlt size="20px" className="ml-1" />
              <p className="pl-2">Log Out</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
