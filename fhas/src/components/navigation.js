"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, Microscope } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/departments/mls" },
    { name: "About", href: "/departments/mls/about" },
    { name: "Academics", href: "/departments/mls/academics" },
    { name: "Admission", href: "/departments/mls/admission" },
    { name: "Alumni & Collaborations", href: "/departments/mls/alumni-collaborations" },
    { name: "Students & Facilities", href: "/departments/mls/students-facilities" },
    { name: "Staff", href: "/departments/mls/staff" },
    { name: "Research", href: "/departments/mls/research" },
    { name: "Others", href: "/departments/mls/others" },
    { name: "Contact", href: "/departments/mls/contact" },
    { name: "Back to Faculty", href: "/faculty/home" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Microscope className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">MLS Department</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
