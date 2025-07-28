import React from "react";
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800">
      <div className="max-w-6xl mx-auto py-8 px-2 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center">
          <h2 className="text-lg font-bold text-white mb-2">About Us</h2>
          <p className="text-white text-sm">
            We are a group of passionate developers and designers dedicated to
            creating the best user experiences on the web.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-lg items-center font-bold text-white mb-2">Quick Links</h2>
          <ul className="space-y-4 text-white  text-sm ">
            <li>пеніа</li>
            <li>іпіапі</li>
            <li>івапів</li>
          </ul>
        </div>
        <div className="">
          <h2 className=" text-center text-lg font-bold text-white mb-2">Contact Us</h2>
          <p className=" text-center text-white text-sm">
            Email: sergeyzt50@gmail.com
          </p>
          <p className=" text-center text-white text-sm">
            LinkedIn: Serhii Yemets
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/" className="text-white hover:text-blue-500">
              <i className="fab fa-facebook">Facebook</i>
            </a>
            <a href="/" className="text-white hover:text-blue-300">
              <i className="fab fa-twitter">Twitter</i>
            </a>
            <a href="/" className="text-white hover:text-pink-500">
              <i className="fab fa-instagram">Instagram</i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs py-4 border-t border-gray-200">
        © 2024 Warhamfb. All Rights Reserved.
      </div>
    </footer>
  );
}

  