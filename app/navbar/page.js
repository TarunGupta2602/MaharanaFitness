"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "/", label: "Home" },
    
    { href: "/about", label: "About us" },
    { href: "/membership", label: "Membership" },

    { href: "/schedules", label: "Schedules" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full flex items-center h-20 relative px-2 sm:px-4">
        {/* Logo and Manufacturer */}
        <div className="flex items-center gap-4 min-w-[180px]">
         <span className="uppercase tracking-widest text-2xl font-extrabold bg-gradient-to-r from-gray-600 to-gray-900 text-transparent bg-clip-text font-['Montserrat']">Health Club</span>
          <div className="h-8 w-px bg-gray-300 mx-2" />
         <span className="uppercase tracking-wide text-xl font-extrabold bg-gradient-to-l from-gray-600 to-gray-500 text-transparent bg-clip-text font-['Roboto_Condensed'] hover:bg-gradient-to-r transition-all duration-300">Maharana Pratap Fitness</span>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden ml-auto p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors z-50"
          aria-label="Open menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        {/* Nav Links */}
       <ul className="hidden md:flex flex-1 justify-center gap-6 lg:gap-10 items-center">
  {navItems.map((item) => (
    <li key={item.href}>
      <Link
        href={item.href}
        className="relative font-['Oswald'] font-bold text-lg bg-gradient-to-r from-amber-500 to-red-600 text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-900 transition-all duration-300 px-2 py-1 group"
      >
        {item.label}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
      </Link>
    </li>
  ))}
</ul>
       
        {/* Mobile Nav Dropdown */}
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setIsOpen(false)} />
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 flex flex-col pt-8 px-6 rounded-l-2xl transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col items-start gap-1 mb-8 mt-2">
                <span className="uppercase font-bold text-lg text-gray-900">Health Club</span>
                <span className="uppercase text-sm font-semibold text-gray-600">Maharana Pratap Fitness</span>
              </div>
              <ul className="flex flex-col gap-4 w-full">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block font-bold text-base text-gray-900 hover:text-blue-700 py-2 px-2 rounded transition-colors duration-200 relative group"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}