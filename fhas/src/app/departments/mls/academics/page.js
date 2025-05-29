import Image from "next/image"
import Link from "next/link"
import { Clock, Users, BookOpen, Award } from "lucide-react"

export default function AcademicsPage() {
  const programs = [
    {
      title: "Bachelor of Medical Laboratory Science",
      duration: "4 Years",
      credits: "120 Credits",
      description:
        "Comprehensive undergraduate program covering all major areas of medical laboratory science including clinical chemistry, hematology, microbiology, immunology, and molecular diagnostics.",
      highlights: [
        "NAACLS Accredited Program",
        "Clinical Rotations in Partner Hospitals",
        "State-of-the-art Laboratory Facilities",
        "95% Board Exam Pass Rate",
      ],
    },
    {
      title: "Master of Medical Laboratory Science",
      duration: "2 Years",
      credits: "36 Credits",
      description:
        "Advanced graduate program designed for laboratory professionals seeking leadership roles, specialized expertise, or preparation for doctoral studies.",
      highlights: [
        "Research-focused Curriculum",
        "Thesis or Non-thesis Options",
        "Advanced Clinical Rotations",
        "Professional Development Seminars",
      ],
    },
    {
      title: "PhD in Medical Laboratory Science",
      duration: "4-5 Years",
      credits: "72 Credits",
      description:
        "Research-intensive doctoral program preparing future leaders in medical laboratory science education, research, and clinical practice.",
      highlights: [
        "Original Research Project",
        "Teaching Assistantship Opportunities",
        "Conference Presentation Requirements",
        "Publication in Peer-reviewed Journals",
      ],
    },
  ]

  const courses = [
    { name: "Clinical Chemistry", code: "MLS 301", credits: 4 },
    { name: "Hematology & Coagulation", code: "MLS 302", credits: 4 },
    { name: "Medical Microbiology", code: "MLS 303", credits: 4 },
    { name: "Immunology & Serology", code: "MLS 304", credits: 3 },
    { name: "Molecular Diagnostics", code: "MLS 401", credits: 3 },
    { name: "Laboratory Management", code: "MLS 402", credits: 3 },
    { name: "Clinical Correlations", code: "MLS 403", credits: 2 },
    { name: "Research Methods", code: "MLS 404", credits: 3 },
  ]

  return (
    <div className="py-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Academic Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to prepare competent medical laboratory professionals for diverse career
            opportunities in healthcare.
          </p>
        </div>

        {/* Programs */}
        <div className="space-y-12 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h2>
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{program.credits}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Program Highlights</h3>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Award className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={program.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Courses */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{course.code}</p>
                <p className="text-sm text-blue-600 font-medium">{course.credits} Credits</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Training */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Clinical Training</h2>
            <p className="text-gray-600 mb-4">
              Our students gain hands-on experience through clinical rotations at leading healthcare facilities,
              ensuring they are well-prepared for professional practice.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">15+ Partner Healthcare Facilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">600+ Hours of Clinical Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Certified Clinical Supervisors</span>
              </div>
            </div>
            <Link href="/admission" className="btn-primary mt-6 inline-block">
              Apply Now
            </Link>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Clinical Training"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
