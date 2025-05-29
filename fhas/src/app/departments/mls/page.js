"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Award, BookOpen, FlaskConical, CheckCircle, Calendar, ArrowUpRight } from "lucide-react"

export default function HomePage() {
  const testimonials = [
    {
      quote:
        "The Medical Laboratory Science program provided me with the skills and knowledge that made me stand out in the job market. I secured a position at a leading hospital before graduation.",
      name: "Emily Johnson",
      role: "Clinical Laboratory Scientist",
      organization: "Memorial Hospital",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The hands-on experience and research opportunities prepared me exceptionally well for my career. The faculty's dedication to student success is unmatched.",
      name: "Michael Chen",
      role: "Research Technologist",
      organization: "National Research Institute",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As an employer, I've found graduates from this program to be exceptionally well-prepared and professional. They consistently demonstrate superior technical skills.",
      name: "Dr. Sarah Williams",
      role: "Laboratory Director",
      organization: "University Medical Center",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const upcomingEvents = [
    {
      title: "Open House",
      date: "June 15, 2024",
      description: "Explore our facilities and meet faculty members",
    },
    {
      title: "Research Symposium",
      date: "July 10, 2024",
      description: "Student and faculty research presentations",
    },
    {
      title: "Application Deadline",
      date: "August 1, 2024",
      description: "Fall semester application due date",
    },
  ]

  const features = [
    {
      title: "State-of-the-Art Laboratories",
      description: "Access to cutting-edge equipment and technology used in modern medical laboratories",
      icon: FlaskConical,
    },
    {
      title: "Expert Faculty",
      description: "Learn from experienced professionals with extensive clinical and research backgrounds",
      icon: Users,
    },
    {
      title: "Clinical Partnerships",
      description: "Gain hands-on experience through rotations at leading healthcare facilities",
      icon: Award,
    },
    {
      title: "Research Opportunities",
      description: "Participate in groundbreaking research projects alongside faculty mentors",
      icon: BookOpen,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container-max section-padding py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Excellence in Medical Laboratory Science Education
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Preparing the next generation of medical laboratory professionals through innovative education,
                  cutting-edge research, and clinical excellence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/admission" className="btn-primary text-center">
                  Apply Now
                </Link>
                <Link href="/academics" className="btn-secondary text-center">
                  Explore Programs
                </Link>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">Accredited Programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">95% Employment Rate</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
              <Image
                src="/placeholder.svg?height=500&width=700"
                alt="Medical Laboratory Scientists"
                width={700}
                height={500}
                className="rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <div className="bg-yellow-50 border-y border-yellow-100">
        <div className="container-max section-padding py-3">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-yellow-600" />
              <span className="font-medium text-yellow-800">Now accepting applications for Fall 2024</span>
            </div>
            <Link
              href="/admission"
              className="text-blue-600 font-medium flex items-center hover:underline mt-2 md:mt-0"
            >
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-gray-600">Employment Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Research Labs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Medical Laboratory Science program offers exceptional education and training opportunities to prepare
              you for a successful career in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive education programs designed to meet the evolving needs of the healthcare industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
              <div className="h-48 bg-blue-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white opacity-30" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Bachelor's Degree</h3>
                  <p className="text-blue-100">4-Year Program</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Comprehensive 4-year program covering all aspects of medical laboratory science with extensive
                  clinical rotations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">NAACLS Accredited</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Clinical Rotations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Board Exam Preparation</span>
                  </li>
                </ul>
                <Link href="/academics" className="text-blue-600 font-medium flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
              <div className="h-48 bg-green-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white opacity-30" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Master's Degree</h3>
                  <p className="text-green-100">2-Year Program</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Advanced graduate program for specialized research and clinical practice with thesis and non-thesis
                  options.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Research Focus</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Advanced Clinical Skills</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Leadership Training</span>
                  </li>
                </ul>
                <Link href="/academics" className="text-blue-600 font-medium flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
              <div className="h-48 bg-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white opacity-30" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">PhD Program</h3>
                  <p className="text-purple-100">4-5 Year Program</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Research-focused doctoral program for future leaders in the field with original research requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Original Research</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Publication Requirements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Teaching Opportunities</span>
                  </li>
                </ul>
                <Link href="/academics" className="text-blue-600 font-medium flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates about their experiences in our Medical Laboratory Science program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="absolute top-6 right-6 text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2 .34-.2.77.05.82.44.03.33.33.6.67.6.54 0 .94-.53.75-1.03-.12-.33-.34-.64-.62-.82-.89-.58-1.98-.8-3.08-.19-1.22.67-2.19 1.91-2.84 3.52-.43 1.08-.7 2.34-.76 3.63-.02.76.07 1.52.32 2.12.39.92 1.13 1.54 2.2 1.84.51.14 1.03.23 1.55.23 1.47 0 2.15-.53 2.55-1.09.4-.55.6-1.3.6-2.24zm8.42 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.695-1.327-.83-.55-.13-1.07-.14-1.54-.03-.16-.95.1-1.95.78-3 .53-.8 1.24-1.48 2.13-2 .34-.2.77.05.82.44.04.33.33.6.67.6.54 0 .94-.53.75-1.03-.13-.33-.34-.64-.62-.82-.89-.58-1.98-.8-3.08-.19-1.22.67-2.19 1.91-2.83 3.52-.44 1.08-.7 2.34-.77 3.63-.02.76.07 1.52.32 2.12.4.92 1.14 1.54 2.2 1.84.52.14 1.03.23 1.55.23 1.47 0 2.15-.53 2.55-1.09.4-.55.6-1.3.6-2.24z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events and News Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4 border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{event.title}</h3>
                      <p className="text-blue-600 text-sm mb-1">{event.date}</p>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/others" className="text-blue-600 font-medium flex items-center mt-6 hover:underline">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest News</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                  Research
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Department Receives $2M Research Grant</h3>
                <p className="text-gray-600 mb-4">
                  The National Institutes of Health has awarded our department a significant grant to advance molecular
                  diagnostic technologies.
                </p>
                <Link href="/others" className="text-blue-600 font-medium flex items-center hover:underline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3">
                  Student Achievement
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Students Win National Competition</h3>
                <p className="text-gray-600 mb-4">
                  Our undergraduate team placed first in the national ASCLS student competition, demonstrating
                  excellence in laboratory skills.
                </p>
                <Link href="/others" className="text-blue-600 font-medium flex items-center hover:underline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Take a Virtual Tour</h2>
              <p className="text-xl mb-8 text-gray-300">
                Explore our state-of-the-art facilities, laboratories, and learning spaces from anywhere in the world.
              </p>
              <Link href="#" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center">
                Start Tour <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-lg h-72 lg:h-96 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <span className="font-bold">360° Tour</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join our community of dedicated professionals making a difference in healthcare through excellence in
            medical laboratory science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
              Apply Today
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
