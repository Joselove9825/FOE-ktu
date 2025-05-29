import Image from "next/image"
import { Microscope, FlaskConical, Computer, BookOpen, Users, Wifi } from "lucide-react"

export default function StudentsFacilitiesPage() {
  const facilities = [
    {
      name: "Clinical Chemistry Laboratory",
      description:
        "State-of-the-art automated analyzers for comprehensive metabolic panels, cardiac markers, and therapeutic drug monitoring.",
      equipment: ["Beckman Coulter AU5800", "Roche Cobas 8000", "Abbott Architect ci8200"],
      icon: FlaskConical,
    },
    {
      name: "Hematology & Coagulation Lab",
      description:
        "Advanced hematology analyzers and coagulation testing equipment for complete blood counts and hemostasis studies.",
      equipment: ["Sysmex XN-3000", "Stago STA-R Max", "Beckman Coulter DxH 900"],
      icon: Microscope,
    },
    {
      name: "Microbiology Laboratory",
      description:
        "Comprehensive microbiology testing facility with automated identification and susceptibility testing systems.",
      equipment: ["BD Phoenix M50", "bioMérieux VITEK 2", "Cepheid GeneXpert"],
      icon: FlaskConical,
    },
    {
      name: "Molecular Diagnostics Lab",
      description: "Cutting-edge molecular testing capabilities including PCR, sequencing, and genetic analysis.",
      equipment: ["Applied Biosystems 7500", "Illumina MiSeq", "Roche LightCycler 480"],
      icon: Computer,
    },
  ]

  const studentServices = [
    {
      title: "Academic Advising",
      description: "Personalized guidance for course selection, career planning, and academic success.",
      icon: BookOpen,
    },
    {
      title: "Tutoring Services",
      description: "Peer tutoring and faculty-led study sessions for challenging coursework.",
      icon: Users,
    },
    {
      title: "Career Counseling",
      description: "Professional development workshops, resume assistance, and job placement support.",
      icon: Users,
    },
    {
      title: "Research Opportunities",
      description: "Undergraduate and graduate research programs with faculty mentorship.",
      icon: FlaskConical,
    },
    {
      title: "Student Organizations",
      description: "Active student chapters of professional organizations and honor societies.",
      icon: Users,
    },
    {
      title: "Technology Support",
      description: "24/7 IT support, computer labs, and software access for students.",
      icon: Computer,
    },
  ]

  const amenities = [
    "High-speed wireless internet throughout the building",
    "24/7 secure access to laboratory facilities",
    "Student lounge and study areas",
    "Computer lab with specialized software",
    "Library with extensive medical literature collection",
    "Cafeteria and vending machines",
    "Parking facilities for students",
    "Disability services and accessibility features",
  ]

  return (
    <div className="py-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Students & Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World-class facilities and comprehensive student support services designed to enhance your learning
            experience and academic success.
          </p>
        </div>

        {/* Laboratory Facilities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Laboratory Facilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <facility.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Equipment:</h4>
                      <ul className="space-y-1">
                        {facility.equipment.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Images */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Laboratory Facility 1"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded">
                <span className="text-sm font-medium text-gray-900">Clinical Chemistry Lab</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Laboratory Facility 2"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded">
                <span className="text-sm font-medium text-gray-900">Molecular Diagnostics</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Laboratory Facility 3"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded">
                <span className="text-sm font-medium text-gray-900">Student Study Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Amenities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Campus Amenities</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Life */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Life</h2>
            <p className="text-gray-600 mb-4">
              Our vibrant student community offers numerous opportunities for personal and professional growth beyond
              the classroom.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Student Organizations</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Medical Laboratory Science Student Association</li>
                  <li>• Alpha Eta Honor Society</li>
                  <li>• Research Club</li>
                  <li>• Community Service Organization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Events & Activities</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Annual Research Symposium</li>
                  <li>• Professional Development Workshops</li>
                  <li>• Guest Speaker Series</li>
                  <li>• Laboratory Week Celebrations</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Student Life"
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
