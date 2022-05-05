import React from 'react';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/logos/logo.svg';

export default function Footer() {
  return (
    <footer className="p-2 bg-white sm:p-10">
      <div className="container mx-auto flex flex-col items-center justify-between mt-4">
        <div className="grid grid-cols-2 w-full md:grid-cols-4 gap-20 md:gap-18">
          <div>
            <h1 className="text-blue_dark font-bold">Social media</h1>
            <div className="w-6 h-1 bg-verde my-2" />
            <div className="text-blue_dark">
              <h1 className="cursor-pointer my-2">Discord</h1>
              <h1 className="cursor-pointer my-2">Twitter</h1>
              <h1 className="cursor-pointer my-2">Instagram</h1>
            </div>
          </div>
          <div>
            <h1 className="text-blue_dark font-bold">Company</h1>
            <div className="w-6 h-1 bg-verde my-2" />
            <div className="text-blue_dark">
              <h1 className="cursor-pointer my-2">Community</h1>
              <h1 className="cursor-pointer my-2">Blog</h1>
            </div>
          </div>
          <div>
            <h1 className="text-blue_dark font-bold">Resources</h1>
            <div className="w-6 h-1 bg-verde my-2" />
            <div className="text-blue_dark">
              <h1 className="cursor-pointer my-2">Contact us</h1>
            </div>
          </div>
          <div className="hidden md:flex flex-col  items-center">
            <ReactSVG className="w-40 ml-24 md:ml-1" src={logo} />
            <h1 className="hidden md:block text-blue_dark text-xs my-2 text-justify">
              Ullamcorper orci, venenatis ac euismod vel purus tortor rhoncu.
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center my-12 md:hidden">
        <ReactSVG className="w-52" src={logo} />
        <h1 className="text-blue_dark text-xs my-4 text-center w-1/2">
          Ullamcorper orci, venenatis ac euismod vel purus tortor rhoncu.
        </h1>
      </div>
    </footer>
  );
}
