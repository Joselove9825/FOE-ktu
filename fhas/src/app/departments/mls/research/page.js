import Image from "next/image"
import Link from "next/link"
import { FlaskConical, BookOpen, Users, Award } from "lucide-react"

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Molecular Diagnostics",
      description:
        "Advanced molecular techniques for disease detection and monitoring, including next-generation sequencing and PCR-based assays.",
      projects: [
        "Development of rapid COVID-19 detection methods",
        "Genetic markers for cancer prognosis",
        "Antimicrobial resistance gene detection",
      ],
      funding: "$2.5M",
      publications: 25,
    },
    {
      title: "Clinical Chemistry Innovation",
      description:
        "Research focused on improving analytical methods and developing new biomarkers for disease diagnosis and monitoring.",
      projects: [
        "Novel cardiac biomarkers for early detection",
        "Point-of-care testing devices",
        "Automated quality control systems",
      ],
      funding: "$1.8M",
      publications: 18,
    },
    {
      title: "Hematology Research",
      description:
        "Investigating blood disorders, coagulation mechanisms, and developing improved diagnostic approaches.",
      projects: [
        "Platelet function testing innovations",
        "Bleeding disorder diagnostics",
        "Automated cell morphology analysis",
      ],
      funding: "$1.2M",
      publications: 15,
    },
    {
      title: "Microbiology & Infectious Diseases",
      description: "Research on pathogen detection, antimicrobial resistance, and infection control strategies.",
      projects: [
        "Rapid bacterial identification systems",
        "Antibiotic susceptibility testing",
        "Hospital-acquired infection prevention",
      ],
      funding: "$2.1M",
      publications: 22,
    },
  ]

  const publications = [
    {
      title: "Novel Biomarkers for Early Detection of Sepsis in Emergency Department Patients",
      authors: "Martinez, J., Chen, R., Williams, S.",
      journal: "Clinical Chemistry",
      year: "2024",
      impact: "High Impact",
    },
    {
      title: "Machine Learning Applications in Automated Blood Cell Classification",
      authors: "Thompson, M., Anderson, L., Kim, D.",
      journal: "Journal of Clinical Laboratory Analysis",
      year: "2024",
      impact: "Medium Impact",
    },
    {
      title: "Rapid Molecular Detection of Antimicrobial Resistance in Gram-Positive Bacteria",
      authors: "Chen, R., Martinez, J., Thompson, M.",
      journal: "Journal of Clinical Microbiology",
      year: "2023",
      impact: "High Impact",
    },
  ]

  const grants = [
    {
      title: "Development of Point-of-Care Molecular Diagnostics",
      agency: "National Institutes of Health",
      amount: "$750,000",
      duration: "2023-2026",
      pi: "Dr. Jennifer Martinez",
    },
    {
      title: "AI-Powered Laboratory Quality Control Systems",
      agency: "National Science Foundation",
      amount: "$500,000",
      duration: "2024-2027",
      pi: "Dr. Michael Thompson",
    },
    {
      title: "Rapid Pathogen Detection in Clinical Samples",
      agency: "Centers for Disease Control",
      amount: "$400,000",
      duration: "2023-2025",
      pi: "Dr. Robert Chen",
    },
  ]

  return (
    <div className="py-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Research & Innovation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advancing medical laboratory science through cutting-edge research, innovative technologies, and
            collaborative partnerships.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FlaskConical className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Active Research Projects</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">80+</h3>
            <p className="text-gray-600">Publications (Last 3 Years)</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">$7.6M</h3>
            <p className="text-gray-600">Research Funding</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
            <p className="text-gray-600">Research Collaborators</p>
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Research Focus Areas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Current Projects:</h4>
                  <ul className="space-y-1">
                    {area.projects.map((project, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{area.funding}</p>
                    <p className="text-sm text-gray-600">Total Funding</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{area.publications}</p>
                    <p className="text-sm text-gray-600">Publications</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Publications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Publications</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="space-y-6 p-6">
              {publications.map((pub, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">{pub.authors}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-blue-600 font-medium">{pub.journal}</span>
                    <span className="text-gray-500">{pub.year}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        pub.impact === "High Impact" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {pub.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Grants */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Active Research Grants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {grants.map((grant, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{grant.title}</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium text-gray-900">Agency:</span> {grant.agency}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Amount:</span> {grant.amount}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Duration:</span> {grant.duration}
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Principal Investigator:</span> {grant.pi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Facilities</h2>
            <p className="text-gray-600 mb-4">
              Our state-of-the-art research facilities provide the infrastructure needed for cutting-edge research in
              medical laboratory science.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FlaskConical className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Molecular Biology Research Lab</span>
              </div>
              <div className="flex items-center space-x-3">
                <FlaskConical className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Cell Culture and Tissue Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <FlaskConical className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Advanced Instrumentation Core</span>
              </div>
              <div className="flex items-center space-x-3">
                <FlaskConical className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Bioinformatics and Data Analysis</span>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Research Facilities"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Interested in Research Opportunities?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Join our research team and contribute to advancing medical laboratory science.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Contact Research Office
          </Link>
        </div>
      </div>
    </div>
  )
}
