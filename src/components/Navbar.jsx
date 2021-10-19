import React, { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { VscClose, VscMenu, VscNewFile } from 'react-icons/vsc';
import Logo from './Logo';
import { Link, useHistory } from 'react-router-dom';
import { HiBookmark } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

function Navbar() {
  const history = useHistory();
  const [searchItem, setsearchItem] = useState('');
  const [show, setShow] = useState(false);

  function search(e) {
    e.preventDefault();

    if (!searchItem) return;

    return history.push(`/search?search_query=${searchItem}`);
  }

  return (
    <div className="flex px-6 py-3 items-center shadow-md sticky top-0 z-50 bg-white">
      <button
        className="bg-gray-300 px-2 py-2 rounded-md mr-3 md:hidden"
        onClick={() => setShow(!show)}
      >
        <VscMenu className="text-2xl" />
      </button>

      <div
        className={`fixed top-0
      bg-gray-300 h-screen pt-4 pl-4 z-50
      ${
        !show ? `-left-96 w-0` : 'left-0 w-full'
      } transition-all duration-300 ease-in`}
      >
        <button
          className="bg-red-500 px-2 py-2 rounded-md ml-4 mt-4"
          onClick={() => setShow(!show)}
        >
          <VscClose className="text-2xl" />
        </button>
        <ul className="pr-4 mt-5">
          <Link to="/freecourse">
            <li
              className="px-4 py-4 rounded-md hover:bg-gray-500 
            hover:text-gray-100 cursor-pointer 
            transition-all duration-300 ease-in-out"
            >
              Free Course
            </li>
          </Link>
          <Link to="/job-internship">
            <li
              className="px-4 py-4 rounded-md hover:bg-gray-500 
            hover:text-gray-100 cursor-pointer 
            transition-all duration-300 ease-in-out"
            >
              Job / Internship
            </li>
          </Link>
        </ul>
      </div>

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
      {/* if log in then show */}
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

      {/* Search btn for mobile */}
      <div className="ml-auto md:hidden">
        <Link to="/search?mob=true">
          <button
            className={`btn btn-circle btn-outline btn-md hover:bg-gray-50  
          mr-5 mb-1 hover:text-black`}
          >
            <BsSearch className="text-base" />
          </button>
        </Link>
      </div>
      {/* Search btn for mobile */}

      <div className="dropdown dropdown-hover dropdown-end">
        <div className="avatar z-20">
          <div
            className="rounded-full w-10 h-10 cursor-pointer 
          ring ring-blue-500 ring-offset-base-100 ring-offset-2"
          >
            <img alt="avater" src="https://bit.ly/dan-abramov" />
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
