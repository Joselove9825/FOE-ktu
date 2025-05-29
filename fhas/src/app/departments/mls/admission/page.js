import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AdmissionPage() {
  const requirements = {
    undergraduate: [
      "High school diploma or equivalent",
      "Minimum GPA of 3.0",
      "SAT score of 1200+ or ACT score of 26+",
      "Completed prerequisite courses: Biology, Chemistry, Mathematics",
      "Personal statement",
      "Two letters of recommendation",
      "Interview (if selected)",
    ],
    graduate: [
      "Bachelor's degree in Medical Laboratory Science or related field",
      "Minimum GPA of 3.5",
      "GRE scores (recommended)",
      "Professional experience (preferred)",
      "Statement of purpose",
      "Three letters of recommendation",
      "Interview",
    ],
    doctoral: [
      "Master's degree in Medical Laboratory Science or related field",
      "Minimum GPA of 3.7",
      "GRE scores (required)",
      "Research experience",
      "Research proposal",
      "Three letters of recommendation",
      "Interview with faculty committee",
    ],
  }

  const deadlines = [
    { program: "Fall Semester", deadline: "March 1", notification: "April 15" },
    { program: "Spring Semester", deadline: "October 1", notification: "November 15" },
    { program: "Summer Session", deadline: "February 1", notification: "March 15" },
  ]

  const tuitionFees = [
    { program: "Undergraduate (per year)", inState: "$12,000", outState: "$28,000" },
    { program: "Graduate (per year)", inState: "$15,000", outState: "$32,000" },
    { program: "Doctoral (per year)", inState: "$18,000", outState: "$35,000" },
  ]

  return (
    <div className="py-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of dedicated professionals and start your journey in medical laboratory science.
          </p>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete online application with required documents</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Process</h3>
              <p className="text-gray-600">Admissions committee reviews your application</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Selected candidates participate in interviews</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Decision</h3>
              <p className="text-gray-600">Receive admission decision and enrollment information</p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Undergraduate Program</h3>
              <ul className="space-y-3">
                {requirements.undergraduate.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Graduate Program</h3>
              <ul className="space-y-3">
                {requirements.graduate.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Doctoral Program</h3>
              <ul className="space-y-3">
                {requirements.doctoral.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deadlines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Application Deadlines</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Application Deadline
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notification Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {deadlines.map((deadline, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {deadline.program}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deadline.deadline}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deadline.notification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tuition and Fees */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tuition and Fees</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      In-State Tuition
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Out-of-State Tuition
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tuitionFees.map((fee, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{fee.program}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.inState}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fee.outState}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Start your application today and join our community of healthcare professionals.
          </p>
          <Link href="#" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Start Application
          </Link>
        </div>
      </div>
    </div>
  )
}
