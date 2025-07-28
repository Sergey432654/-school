import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { MdAppRegistration } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";
import "./Header.modules.css"
export default function Header(){

  return (
    <header className="w-full border-b border-gray-200">
      <div className="bg-gray-800 text-gray-100 text-lg">
        <div className="container mx-auto flex justify-between items-center px-4 py-10">
          <div className="flex items-center">
            <button className="text-white-400 hover:text-blue-500 focus:text-blue-500 duration-400">
            <a href="" className="font-display"><HiSparkles size={60}/></a>
            </button>
            <a className="font-display text-4xl tracking-tighter">Zirocka</a>
          </div>
          <div className="flex space-x-5 ">
            <a title="Login" href="/" className="text-white-500 hover:text-blue-500 focus:text-blue-500 duration-600"><RxAvatar size={40}/></a>

          </div>
        </div>
      </div>
      <div className="bg-blue-300">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-900 hover:text-blue-900">TUKE</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">FBERG</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">FMMR</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">SjF</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">FEI</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">SvF</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">SjF</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">EkF</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">FVT</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">FU</a>
            <a href="#" className="text-gray-900 hover:text-blue-900">LF</a>
          </nav>
          <div>
            <a href="">Kontakt</a>
          </div>
        </div>
      </div>
    </header>
  );
};


