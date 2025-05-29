import Image from "next/image"
import Link from "next/link"
import { Calendar, Award, Newspaper, Users } from "lucide-react"

export default function OthersPage() {
  const news = [
    {
      title: "Department Receives $2M Grant for Molecular Diagnostics Research",
      date: "March 15, 2024",
      summary:
        "The National Institutes of Health has awarded our department a significant grant to advance molecular diagnostic technologies.",
      category: "Research",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Students Win National Laboratory Science Competition",
      date: "February 28, 2024",
      summary:
        "Our undergraduate team placed first in the national ASCLS student competition, demonstrating excellence in laboratory skills.",
      category: "Student Achievement",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "New Partnership with Regional Medical Center",
      date: "February 10, 2024",
      summary:
        "We've established a new clinical partnership to expand student training opportunities and collaborative research.",
      category: "Partnership",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const events = [
    {
      title: "Annual Research Symposium",
      date: "April 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "University Conference Center",
      description:
        "Join us for presentations of student and faculty research projects, poster sessions, and keynote speakers.",
    },
    {
      title: "Medical Laboratory Professionals Week",
      date: "April 14-20, 2024",
      time: "All Week",
      location: "Department Building",
      description:
        "Celebrating the contributions of medical laboratory professionals with special events and recognition ceremonies.",
    },
    {
      title: "Guest Lecture: Future of Laboratory Medicine",
      date: "March 25, 2024",
      time: "2:00 PM - 3:30 PM",
      location: "Auditorium A",
      description:
        "Dr. Patricia Johnson from Mayo Clinic will discuss emerging trends and technologies in laboratory medicine.",
    },
    {
      title: "Career Fair for Laboratory Sciences",
      date: "March 18, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Student Union",
      description: "Meet with representatives from leading healthcare organizations and explore career opportunities.",
    },
  ]

  const awards = [
    {
      title: "Excellence in Medical Laboratory Education Award",
      recipient: "Department of Medical Laboratory Science",
      organization: "National Accrediting Agency for Clinical Laboratory Sciences",
      year: "2023",
      description:
        "Recognized for outstanding contributions to medical laboratory science education and student outcomes.",
    },
    {
      title: "Outstanding Faculty Research Award",
      recipient: "Dr. Jennifer Martinez",
      organization: "American Society for Clinical Laboratory Science",
      year: "2023",
      description: "Honored for groundbreaking research in clinical chemistry and molecular diagnostics.",
    },
    {
      title: "Student Excellence Award",
      recipient: "Sarah Thompson, Class of 2023",
      organization: "Alpha Eta Honor Society",
      year: "2023",
      description: "Recognized for academic excellence and leadership in medical laboratory science.",
    },
  ]

  const resources = [
    {
      title: "Student Handbook",
      description:
        "Comprehensive guide for current students including policies, procedures, and academic requirements.",
      link: "#",
    },
    {
      title: "Clinical Rotation Manual",
      description: "Detailed information about clinical training requirements and partner healthcare facilities.",
      link: "#",
    },
    {
      title: "Research Guidelines",
      description: "Guidelines for student and faculty research projects, including ethics and safety protocols.",
      link: "#",
    },
    {
      title: "Professional Development Resources",
      description: "Career guidance, certification information, and continuing education opportunities.",
      link: "#",
    },
    {
      title: "Laboratory Safety Manual",
      description: "Comprehensive safety protocols and procedures for all laboratory activities.",
      link: "#",
    },
    {
      title: "Technology Resources",
      description: "Information about software, equipment, and technical support available to students and faculty.",
      link: "#",
    },
  ]

  return (
    <div className="py-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">News, Events & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, upcoming events, awards, and helpful resources from our Medical
            Laboratory Science Department.
          </p>
        </div>

        {/* Latest News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{article.category}</span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.summary}</p>
                  <Link href="#" className="text-blue-600 font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-4">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-blue-600 font-medium">{award.recipient}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium text-gray-900">Organization:</span> {award.organization}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Year:</span> {award.year}
                  </p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student & Faculty Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Newspaper className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <Link href={resource.link} className="text-blue-600 font-medium hover:underline">
                      Access Resource →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-6 text-blue-100">
            Subscribe to our newsletter for the latest updates, events, and announcements.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg text-gray-900" />
            <button className="btn-primary bg-white text-blue-600 hover:bg-gray-100">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
