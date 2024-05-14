"use client"

import Link from "next/link";
import SignOut from "./sign-out";
import Image from 'next/image'
import { IoIosLink } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";

const SideBar = () => {
  return (
    <>
    
  <input type="checkbox" id="menu-open" className="hidden" />
  <label
    htmlFor="menu-open"
    className="absolute right-2 bottom-2 p-2 text-gray-600 bg-gray-100 rounded-full shadow-lg md:hidden"
    data-dev-hint="floating action button"
  >
    <svg
      className="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </label>
  <header
    className="flex justify-between text-gray-100 bg-gray-600 md:hidden"
    data-dev-hint="mobile menu bar"
  >
    <a
      href="#"
      className="block p-4 font-bold text-white truncate whitespace-nowrap"
    >
      Starter
    </a>
    <label
      htmlFor="menu-open"
      id="mobile-menu-button"
      className="p-2 m-2 rounded-md focus:outline-none hover:text-white hover:bg-gray-700"
    >
      <svg
        id="menu-open-icon"
        className="w-6 h-6 transition duration-200 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        id="menu-close-icon"
        className="w-6 h-6 transition duration-200 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </label>
  </header>
  <aside
    id="sidebar"
    className="overflow-y-auto absolute inset-y-0 left-0 z-10 px-0 pt-6 space-y-6 w-3/4 text-gray-100 bg-gray-800 transition duration-200 ease-in-out transform md:w-64 md:relative md:translate-x-0 md:flex md:flex-col md:justify-between"
    data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
  >
    <div
      className="flex flex-col space-y-6"
      data-dev-hint="optional div for having an extra footer navigation"
    >
      <a
        href="/protected"
        className="flex items-center px-4 space-x-2 text-white"
        title="Your App is cool"
      >
        <Image src="/logo.webp" alt="logo" width="20" height="20" className="w-8"/>
        
        <span className="text-2xl font-extrabold truncate whitespace-nowrap">
          Dashboard
        </span>
      </a>
      <nav data-dev-hint="main navigation">

        <Link href="/protected/view/shortlink" className="flex items-center px-4 py-2 space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white">
          <IoIosLink />

          <span>Shortlinks / QR</span>
        </Link>

        <Link href="#" className="flex items-center px-4 py-2 space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white">
          <FaCartPlus />

          <span>Create a Product</span>
        </Link>
        <Link href="#" className="flex items-center px-4 py-2 space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white">
          <RiMoneyDollarCircleLine />

          <span>View Orders</span>
        </Link>


        <div className="flex items-center px-4 py-2 space-x-2 transition duration-200 hover:bg-gray-700 hover:text-white">

          <BiLogOut />
          <span><SignOut /></span>
        </div>
      </nav>
    </div>
    
  </aside>
  </>
  );
};

export default SideBar;
