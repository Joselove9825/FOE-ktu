import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Medical Laboratory Science Department",
        "University Medical Center",
        "123 Health Sciences Drive",
        "Medical City, MC 12345",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: (555) 123-4567",
        "Admissions: (555) 123-4568",
        "Student Services: (555) 123-4569",
        "Research Office: (555) 123-4570",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General Info: info@mls.university.edu",
        "Admissions: admissions@mls.university.edu",
        "Research: research@mls.university.edu",
        "Alumni: alumni@mls.university.edu",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
        "Emergency Contact: Available 24/7",
      ],
    },
  ]

  const departments = [
    {
      name: "Admissions Office",
      contact: "Dr. Sarah Williams",
      email: "admissions@mls.university.edu",
      phone: "(555) 123-4568",
      description: "Application process, requirements, and enrollment information",
    },
    {
      name: "Academic Affairs",
      contact: "Dr. Jennifer Martinez",
      email: "academics@mls.university.edu",
      phone: "(555) 123-4567",
      description: "Curriculum, course scheduling, and academic policies",
    },
    {
      name: "Student Services",
      contact: "Amanda Foster",
      email: "students@mls.university.edu",
      phone: "(555) 123-4569",
      description: "Student support, counseling, and campus resources",
    },
    {
      name: "Research Office",
      contact: "Dr. Michael Thompson",
      email: "research@mls.university.edu",
      phone: "(555) 123-4570",
      description: "Research opportunities, grants, and collaborations",
    },
    {
      name: "Clinical Coordination",
      contact: "Dr. David Kim",
      email: "clinical@mls.university.edu",
      phone: "(555) 123-4571",
      description: "Clinical rotations, hospital partnerships, and training",
    },
    {
      name: "Alumni Relations",
      contact: "Maria Rodriguez",
      email: "alumni@mls.university.edu",
      phone: "(555) 123-4572",
      description: "Alumni services, networking, and career support",
    },
  ]

  return (
    <div className="py-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our Medical Laboratory Science Department. We're here to help with your questions and
            provide the information you need.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="academics">Academic Information</option>
                  <option value="research">Research Opportunities</option>
                  <option value="clinical">Clinical Training</option>
                  <option value="alumni">Alumni Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Department Contacts</h2>
            <div className="space-y-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{dept.contact}</p>
                  <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <a href={`mailto:${dept.email}`} className="text-blue-600 hover:underline text-sm">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-600 text-sm">{dept.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map and Directions */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Location & Directions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center mb-6">
                <p className="text-gray-600">Interactive Map Placeholder</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Parking Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Visitor parking available in Lot A (free for first 2 hours)</li>
                  <li>• Student parking permits required for extended stays</li>
                  <li>• Handicap accessible parking spaces available</li>
                  <li>• Public transportation: Bus routes 15, 22, and 45</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Directions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">From Downtown:</h4>
                  <p className="text-gray-600 text-sm">
                    Take Highway 101 North for 5 miles. Exit at University Drive and turn right. Continue for 2 miles,
                    then turn left on Health Sciences Drive. The Medical Laboratory Science Department is in Building C.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">From Airport:</h4>
                  <p className="text-gray-600 text-sm">
                    Take Airport Boulevard to Highway 101 South. Exit at University Drive and turn left. Continue for 2
                    miles, then turn left on Health Sciences Drive. Building C will be on your right.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Public Transportation:</h4>
                  <p className="text-gray-600 text-sm">
                    Bus routes 15, 22, and 45 stop at the University Medical Center. The department is a 3-minute walk
                    from the main bus stop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
