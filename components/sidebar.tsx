"use client"
import Link from "next/link";
import SignOut from "./sign-out";
import Image from 'next/image'

const SideBar = () => {
  return (
    <>
    
  <input type="checkbox" id="menu-open" className="hidden" />
  <label
    htmlFor="menu-open"
    className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
    data-dev-hint="floating action button"
  >
    <svg
      className="h-6 w-6"
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
    className="bg-gray-600 text-gray-100 flex justify-between md:hidden"
    data-dev-hint="mobile menu bar"
  >
    <a
      href="#"
      className="block p-4 text-white font-bold whitespace-nowrap truncate"
    >
      Starter
    </a>
    <label
      htmlFor="menu-open"
      id="mobile-menu-button"
      className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
    >
      <svg
        id="menu-open-icon"
        className="h-6 w-6 transition duration-200 ease-in-out"
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
        className="h-6 w-6 transition duration-200 ease-in-out"
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
    className="z-10 bg-gray-800 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
    data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
  >
    <div
      className="flex flex-col space-y-6"
      data-dev-hint="optional div for having an extra footer navigation"
    >
      <a
        href="#"
        className="text-white flex items-center space-x-2 px-4"
        title="Your App is cool"
      >
        <Image src="/logo.webp" alt="logo" width="20" height="20" className="w-8"/>
        
        <span className="text-2xl font-extrabold whitespace-nowrap truncate">
          Dashboard
        </span>
      </a>
      <nav data-dev-hint="main navigation">

        <Link href="#" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>

          <span>All Products</span>
        </Link>

        <Link href="#" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>

          <span>Create a Product</span>
        </Link>
        <Link href="#" className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>

          <span>View Orders</span>
        </Link>


        <div className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">

          <span className="w-4 h-4 flex-shrink-0 border border-gray-600 rounded group-hover:border-gray-400 transition duration-200" />
          <span><SignOut /></span>
        </div>
      </nav>
    </div>
    
  </aside>
  </>
  );
};

export default SideBar;
