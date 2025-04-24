// Navbar.js
import "./Navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 nav-main">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-bold text-white">
          Blood Bank
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-4 sub-nav">
          <a href="/" className="text-white hover:text-red-500 hover:underline">
            Home
          </a>
          <a
            href="/donate"
            className="text-white hover:text-red-500 hover:underline"
          >
            Donor
          </a>
          <a
            href="/aboutus"
            className="text-white hover:text-red-500 hover:underline"
          >
            About us
          </a>
          {/* <a
            href="/profile"
            className="text-white hover:text-red-500 hover:underline"
          >
            Profile
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;