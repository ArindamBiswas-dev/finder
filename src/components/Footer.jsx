import React from 'react';
import { HiAcademicCap } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="p-10 footer bg-blue-900 text-white mt-4">
      <div>
        <HiAcademicCap className="w-14 h-14" />
        <p className="font-medium">FINDER Tech Pvt. Ltd.</p>
        <p className="max-w-xs text-justify mt-1">
          There are many free-courses and job oppurtunity available more than
          you think of. But most of us don’t know about this, But don’t worry
          FInder will help you to find those
        </p>
      </div>
      <div>
        <span className="footer-title">Links</span>
        <Link to="/freecourse" className="link link-hover">
          Free-course
        </Link>
        <Link to="/job-internship" className="link link-hover">
          Job / Internship
        </Link>
        <Link to="/signup" className="link link-hover">
          Sign Up
        </Link>
        <Link to="/signin" className="link link-hover">
          Sign In
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="#terms" className="link link-hover">
          Terms of use
        </Link>
        <Link to="#privacy" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="#cookie" className="link link-hover">
          Cookie policy
        </Link>
      </div>
      <div>
        <span className="footer-title">Copyright</span>
        <p>Copyright © 2021 - All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
