"use client"

import { useState, ChangeEvent, FormEvent, useRef, useEffect  } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const Footer = () => { 
    
  return (
    
    <footer className="bottom-0 left-0 z-20 w-full p-4 mt-20 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {new Date().getFullYear()}{" "}
      <a href="/" className="hover:underline">
        Capable Technologies
      </a>
      . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      {/* <li>
        <Link href="#" className="hover:underline me-4 md:me-6">
          About
        </Link>
      </li> */}
     
    </ul>
  </footer>

  );
};

export default Footer;
