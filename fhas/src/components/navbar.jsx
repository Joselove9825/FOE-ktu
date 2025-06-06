"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);

  const departmentLinks = [
    { href: "/departments/mls", label: "Medical Lab Sciences" },
    { href: "/departments/biomed/home", label: "Biomedical Engineering" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Brand */}
        <Link href="/faculty/home" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">
          F.H.A.S
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden focus:outline-none"
        >
          <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <Link href="/faculty/home" className="hover:text-indigo-600 transition">Home</Link>

          {/* Departments Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDepartmentsOpen(!departmentsOpen)}
              type="button"
              aria-haspopup="true"
              aria-expanded={departmentsOpen}
              className="hover:text-indigo-600 transition flex items-center focus:outline-none"
            >
              Departments
              <svg className="ml-1 w-4 h-4 fill-current text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.516 7.548l4.484 4.482 4.484-4.482L16 9l-6 6-6-6z" />
              </svg>
            </button>

            {departmentsOpen && (
              <div className="absolute bg-white rounded-md shadow-lg mt-2 w-56 z-50" role="menu" aria-label="Departments menu">
                {departmentLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="block px-4 py-2 text-gray-800 hover:bg-indigo-100" role="menuitem">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/faculty/about-us" className="hover:text-indigo-600 transition">About Us</Link>
          <Link href="/faculty/research" className="hover:text-indigo-600 transition">Research</Link>
          <Link href="/faculty/news" className="hover:text-indigo-600 transition">News</Link>
          <Link href="/faculty/programmes" className="hover:text-indigo-600 transition">Programmes</Link>
          <Link href="/faculty/admissions" className="hover:text-indigo-600 transition">Admissions</Link>
          <Link href="/faculty/student-life" className="hover:text-indigo-600 transition">Student Life</Link>
          <Link href="/faculty/contact-us" className="hover:text-indigo-600 transition">Contact Us</Link>
          <Link href="/faculty/staff-directory" className="hover:text-indigo-600 transition">Staff Directory</Link>
          <Link href="/faculty/facilities" className="hover:text-indigo-600 transition">Facilities</Link>
          <Link href="/faculty/alumni" className="hover:text-indigo-600 transition">Alumni</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col space-y-1 py-4 px-6 text-gray-700 font-medium">
            <Link href="/faculty/home" className="block hover:text-indigo-600 transition py-2">Home</Link>

            <div>
              <button
                onClick={() => setDepartmentsOpen(!departmentsOpen)}
                className="w-full flex justify-between items-center hover:text-indigo-600 transition py-2 focus:outline-none"
              >
                Departments
                <svg className={`w-5 h-5 transition-transform transform ${departmentsOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {departmentsOpen && (
                <div className="flex flex-col pl-4 border-l border-gray-300 mt-1 space-y-1">
                  {departmentLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="block hover:text-indigo-600 transition py-1">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/faculty/about-us" className="hover:text-indigo-600 transition py-2">About Us</Link>
            <Link href="/faculty/research" className="hover:text-indigo-600 transition py-2">Research</Link>
            <Link href="/faculty/news" className="hover:text-indigo-600 transition py-2">News</Link>
            <Link href="/faculty/programmes" className="hover:text-indigo-600 transition py-2">Programmes</Link>
            <Link href="/faculty/admissions" className="hover:text-indigo-600 transition py-2">Admissions</Link>
            <Link href="/faculty/student-life" className="hover:text-indigo-600 transition py-2">Student Life</Link>
            <Link href="/faculty/contact-us" className="hover:text-indigo-600 transition py-2">Contact Us</Link>
            <Link href="/faculty/staff-directory" className="hover:text-indigo-600 transition py-2">Staff Directory</Link>
            <Link href="/faculty/facilities" className="hover:text-indigo-600 transition py-2">Facilities</Link>
            <Link href="/faculty/alumni" className="hover:text-indigo-600 transition py-2">Alumni</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
