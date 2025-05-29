import Link from "next/link"
import { Microscope, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Microscope className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Medical Laboratory Science</span>
            </div>
            <p className="text-gray-300 mb-4">
              Advancing healthcare through excellence in medical laboratory science education, research, and clinical
              practice.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">University Campus, Medical Sciences Building</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@mls.university.edu</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics" className="text-gray-300 hover:text-blue-400">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/admission" className="text-gray-300 hover:text-blue-400">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-300 hover:text-blue-400">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/staff" className="text-gray-300 hover:text-blue-400">
                  Faculty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/students-facilities" className="text-gray-300 hover:text-blue-400">
                  Student Resources
                </Link>
              </li>
              <li>
                <Link href="/alumni-collaborations" className="text-gray-300 hover:text-blue-400">
                  Alumni Network
                </Link>
              </li>
              <li>
                <Link href="/others" className="text-gray-300 hover:text-blue-400">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Medical Laboratory Science Department. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
