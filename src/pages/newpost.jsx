import React from 'react';
import CreatePost from '../components/CreatePost';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Newpost() {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar currentPage="freecourse" />
      <CreatePost />
    </div>
  );
}

export default Newpost;
