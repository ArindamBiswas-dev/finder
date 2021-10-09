import React from 'react';
import { Link } from 'react-router-dom';
import { HiAcademicCap } from 'react-icons/hi';

function Logo() {
  return (
    <Link to="/freecourse">
      <div
        className="flex items-center text-blue-500 
        hover:text-blue-700 transition-colors 
        duration-500 ease-in-out"
      >
        <HiAcademicCap className="text-4xl md:text-4xl mr-2" />
        <h4 className="text-2xl md:text-3xl font-semibold">FInder</h4>
      </div>
    </Link>
  );
}

export default Logo;
