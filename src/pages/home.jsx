import React from 'react';
import Logo from '../components/Logo';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import tutorial from '../images/tutorial.svg';
import interview from '../images/interview.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative">
      <div className="absolute top-4 left-4">
        <Logo />
      </div>
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full px-4 pb-10 flex flex-col">
          <div className="h-screen flex justify-center items-center flex-col">
            <h1 className="text-4xl md:text-5xl  md:mt-0 text-center font-bold md:px-4 md:leading-normal">
              The ultimate site to find Free-Courses & Job / Internship
            </h1>
            <p className="text-center text-gray-600 md:text-lg mt-8">
              There are many free-courses and job oppurtunity available more
              than you think of. But most of us don’t know about this, But don’t
              worry
              <span className="text-blue-400 font-semibold text-xl md:text-2xl">
                {' '}
                FInder{' '}
              </span>
              will help you to find those.
            </p>
            <div className="flex justify-center mt-16">
              <Link to="/signup">
                <button className="btn btn-outline btn-info mx-2 w-32 md:w-40">
                  Sign Up
                </button>
              </Link>
              <Link to="/signin">
                <button className="btn btn-info mx-2 w-32 md:w-40">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
          <div className="stack -mt-10">
            <div className="shadow-md card bg-gray-300 text-primary-content">
              <div className="card-body space-y-4 text-gray-900">
                <h2 className="card-title text-2xl md:text-3xl">Features</h2>
                <div className="flex md:text-lg md:items-center space-x-2">
                  <HiOutlineCheckCircle className="text-2xl" />
                  <p>Ultimate collections of free-courses.</p>
                </div>
                <div className="flex md:text-lg md:items-center space-x-2">
                  <HiOutlineCheckCircle className="text-2xl" />
                  <p>Ultimate collections of free-courses.</p>
                </div>
                <div className="flex md:text-lg md:items-center space-x-2">
                  <HiOutlineCheckCircle className="text-2xl" />
                  <p>Ultimate collections of free-courses.</p>
                </div>
                <div className="flex md:text-lg md:items-center space-x-2">
                  <HiOutlineCheckCircle className="text-2xl" />
                  <p>Ultimate collections of free-courses.</p>
                </div>
              </div>
            </div>
            <div className="shadow card bg-info text-primary-content">
              <div className="card-body"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-10 md:gap-20">
            <div className="p-4 border-2 rounded-lg hover:border-blue-400 cursor-pointer">
              <img
                alt="freecourses"
                src={tutorial}
                className="h-60 w-full mx-auto"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold text-justify mb-4">
                  Free-Courses
                </h1>
                <p className="mb-10">
                  There are many free-courses and job oppurtunity available more
                  than you think of. But most of us don’t know about this, But
                  don’t worry FInder will help you to find those
                </p>
                <Link to="/freecourse">
                  <button className="btn btn-md btn-info">
                    Visit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 ml-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-4 border-2 rounded-lg hover:border-blue-400 cursor-pointer">
              <img
                alt="Job / Internship"
                src={interview}
                className="h-60 w-full mx-auto"
              />
              <div className="p-4">
                <h1 className="text-xl font-semibold text-justify mb-4">
                  Job / Internship
                </h1>
                <p className="mb-10">
                  There are many free-courses and job oppurtunity available more
                  than you think of. But most of us don’t know about this, But
                  don’t worry FInder will help you to find those.
                </p>
                <Link to="/job-internship">
                  <button className="btn btn-md btn-info">
                    Visit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 ml-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
