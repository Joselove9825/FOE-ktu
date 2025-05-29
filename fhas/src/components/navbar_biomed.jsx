import { ChevronLeft } from 'lucide-react'
import React from 'react'

const NavbarBiomed = () => {
  return (
   <>
     {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-10">
              <div>
                <a className="flex items-center py-4 px-2" href="#">
                  <img alt="School logo with a book and a pencil" className="h-10 w-10 mr-2" src="/biomed/LOGO.png" />
                  <span className="font-semibold text-gray-500 text-lg">
                    Biomedical Engineering Department
                  </span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <a className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold" href="/departments/biomed/home">
                  Home
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/about">
                  About
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/admissions">
                  Admissions
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/academics">
                  Academics
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/contact">
                  Contact
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/staff">
                  Staff
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/research">
                  Research
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/students-facilities">
                  Students & Facilities
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/alumni">
                  Alumni & Collaborations
                </a>
                <a className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300" href="/departments/biomed/others">
                  Others
                </a>
                <a className="py-2 px-4 rounded-md bg-green-500 text-white hover:bg-white font-semibold hover:text-green-500 transition duration-300 flex flex-row" href="/faculty/home">
                  <ChevronLeft className='ml-0'/>
                  Faculty
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </nav></>
  )
}

export default NavbarBiomed