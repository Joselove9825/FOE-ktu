// components/Navbar.js
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const NavbarMls = () => {
  return (
    <nav className="hidden md:flex space-x-6 text-white font-medium items-center bg-blue-600 py-5 pl-5">
      <Link href="/departments/mls/home" className="hover:text-indigo-600 transition font-semibold">Home</Link>
      <Link href="/departments/mls/staff" className="hover:text-indigo-600 transition">Staff</Link>
      <Link href="/departments/mls/about" className="hover:text-indigo-600 transition">About Us</Link>
      <Link href="/departments/mls/news" className="hover:text-indigo-600 transition">News</Link>
      <Link href="/departments/mls/admissions" className="hover:text-indigo-600 transition">Admissions</Link>
      <Link href="/departments/mls/programmes" className="hover:text-indigo-600 transition">Programmes</Link>
      <Link href="/departments/mls/contact" className="hover:text-indigo-600 transition">Contact Us</Link>
      <Link href="/departments/mls/labs" className="hover:text-indigo-600 transition">Lab & Facilities</Link>
      <Link href="/departments/mls/alumni" className="hover:text-indigo-600 transition">Alumni</Link>
      <Link className="py-2 px-4 rounded-md bg-white text-black hover:bg-transparent font-semibold hover:text-white transition duration-300 flex flex-row" href="/faculty/home">
        <ChevronLeft className='ml-0'/>
        Faculty
      </Link>
    </nav>
  );
};

export default NavbarMls;
