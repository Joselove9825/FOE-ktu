import Image from "next/image"
import Link from "next/link"
import { Users, Building, Award, Globe } from "lucide-react"

export default function AlumniCollaborationsPage() {
  const alumni = [
    {
      name: "Dr. Sarah Johnson",
      class: "Class of 2010",
      position: "Chief Laboratory Officer",
      organization: "Metropolitan Medical Center",
      achievement: "Led implementation of AI-driven diagnostic systems",
    },
    {
      name: "Dr. Michael Chen",
      class: "Class of 2008",
      position: "Research Director",
      organization: "National Institutes of Health",
      achievement: "Published 50+ peer-reviewed research papers",
    },
    {
      name: "Dr. Emily Rodriguez",
      class: "Class of 2015",
      position: "Laboratory Manager",
      organization: "Children's Hospital",
      achievement: "Improved pediatric testing protocols by 40%",
    },
  ]

  const partnerships = [
    {
      name: "Mayo Clinic",
      type: "Clinical Partnership",
      description: "Collaborative research in molecular diagnostics and student clinical rotations",
    },
    {
      name: "Centers for Disease Control",
      type: "Research Collaboration",
      description: "Joint research projects in infectious disease surveillance and public health",
    },
    {
      name: "Abbott Laboratories",
      type: "Industry Partnership",
      description: "Equipment donations, internships, and curriculum development support",
    },
    {
      name: "World Health Organization",
      type: "Global Initiative",
      description: "International health programs and global laboratory standards development",
    },
  ]

  return (
    <div className="py-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Alumni & Collaborations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our graduates are making significant contributions to healthcare worldwide, while our partnerships drive
            innovation and excellence in medical laboratory science.
          </p>
        </div>

        {/* Alumni Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">2,500+</h3>
            <p className="text-gray-600">Alumni Worldwide</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
            <p className="text-gray-600">Partner Organizations</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600">Countries Represented</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
            <p className="text-gray-600">Employment Rate</p>
          </div>
        </div>

        {/* Featured Alumni */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumni.map((alum, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt={alum.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{alum.name}</h3>
                  <p className="text-blue-600 font-medium">{alum.class}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 font-medium">{alum.position}</p>
                  <p className="text-gray-600">{alum.organization}</p>
                  <p className="text-sm text-gray-500 italic">{alum.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Benefits */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alumni Benefits & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Career Services</h3>
              <p className="text-gray-600">
                Lifetime access to career counseling, job placement assistance, and professional development resources.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Continuing Education</h3>
              <p className="text-gray-600">
                Discounted rates on continuing education courses, workshops, and professional certification programs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Networking Events</h3>
              <p className="text-gray-600">
                Annual alumni gatherings, regional meetups, and professional networking opportunities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mentorship Program</h3>
              <p className="text-gray-600">
                Connect with current students as a mentor or seek guidance from experienced professionals.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Research Collaboration</h3>
              <p className="text-gray-600">
                Opportunities to collaborate on research projects and contribute to academic publications.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Library Access</h3>
              <p className="text-gray-600">
                Continued access to university library resources and online databases for research purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategic Partnerships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                      {partner.type}
                    </span>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Alumni Network</h3>
            <p className="mb-6 text-blue-100">
              Stay connected with fellow graduates and access exclusive alumni benefits.
            </p>
            <Link href="#" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Register Now
            </Link>
          </div>
          <div className="bg-green-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
            <p className="mb-6 text-green-100">Explore collaboration opportunities with our department and students.</p>
            <Link href="/contact" className="btn-primary bg-white text-green-600 hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
