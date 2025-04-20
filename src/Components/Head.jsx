import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Head() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-20 w-full bg-black fixed z-30 flex items-center justify-between px-6 sm:px-16 pb-[20px]">
      {/* Logo */}
      <div className="h-16">
        <Link to="/">
          <img
            className="h-[80px]"
            src="https://i.imghippo.com/files/0JLVz1727471260.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex text-white text-lg items-center gap-10">
        <Link to="/destination" className="hover:text-red-600">Our Destination's</Link>
        <Link to="/packages" className="hover:text-red-600">Package's</Link>
        <Link to="/SpecialPack" className="hover:text-red-600">Special Package's</Link>
        <Link to="/blogs" className="hover:text-red-600">Blog's</Link>
        <Link to="/aboutus" className="hover:text-red-600">About us</Link>
        <Link to="/authentication">
          <div className="flex items-center gap-2">
            <button className="hover:text-red-600">Sign up</button>
            <CgProfile className="h-6 w-6" />
          </div>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden z-20 transition-all duration-300">
          <Link to="/destination" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Our Destination's</Link>
          <Link to="/packages" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Package's</Link>
          <Link to="/SpecialPack" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Special Package's</Link>
          <Link to="/blogs" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>Blog's</Link>
          <Link to="/aboutus" className="hover:text-red-600" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link to="/authentication" onClick={() => setMenuOpen(false)}>
            <div className="flex items-center gap-2">
              <button className="hover:text-red-600">Sign up</button>
              <CgProfile className="h-6 w-6" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Head;
