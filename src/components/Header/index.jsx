import React, { useRef } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/logos/logo.svg';

export default function Header() {
  const navbar = useRef();
  const toggle = useRef();

  /**
   * When the menu button is clicked, toggle the class 'flex' on the navbar, and toggle the class
   * 'hidden' on the navbar
   */
  const handleMenuButton = () => {
    navbar.current.classList.toggle('flex');
    navbar.current.classList.toggle('hidden');
  };

  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            ref={toggle}
          >
            <GoThreeBars className="w-6 h-6" onClick={() => handleMenuButton()} />
          </button>
          <ReactSVG src={logo} />
          <GoThreeBars className="px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden md:mt-2" />
        </div>

        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" ref={navbar}>
          <a
            href="/"
            className="p-2 lg:px-4 md:mx-2 text-blue_dark rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 mt-1 md:mt-0 md:ml-1 md:mb-0 mb-1"
          >
            Community
          </a>
          <a
            href="/"
            className="p-2 lg:px-4 md:mx-2 text-blue_dark rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 mt-1 md:mt-0 md:ml-1 md:mb-0 mb-1"
          >
            Blog
          </a>
          <button
            type="button"
            className="p-2 md:p-1 outline outline-offset-1 outline-verde flex justify-center items-center mt-1 transition duration-150 ease-in-out lg:font-bold  hover:text-blue_dark  text-verde px-4 sm:px-4 py-2 sm:py-4 text-sm font-bold rounded-lg"
          >
            Get early access
          </button>
        </div>
      </div>
    </nav>
  );
}
