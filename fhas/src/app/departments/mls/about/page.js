import Image from "next/image"
import { Target, Eye, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Our Department</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in medical laboratory science education and research for over 50 years.
          </p>
        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-gray-600 mb-4">
              Established in 1970, the Medical Laboratory Science Department has been at the forefront of educating
              healthcare professionals who play crucial roles in patient diagnosis and treatment.
            </p>
            <p className="text-gray-600 mb-4">
              Over the decades, we have evolved to meet the changing needs of healthcare, incorporating cutting-edge
              technology and innovative teaching methods to prepare our students for successful careers.
            </p>
            <p className="text-gray-600">
              Today, our graduates work in hospitals, clinics, research institutions, and public health organizations
              worldwide, making significant contributions to healthcare delivery and medical research.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Department History"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide exceptional education in medical laboratory science, conduct innovative research, and serve our
              community through excellence in clinical practice and public health initiatives.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be a globally recognized leader in medical laboratory science education and research, shaping the
              future of healthcare through innovation and excellence.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Excellence, integrity, innovation, collaboration, and commitment to improving human health through quality
              laboratory medicine and scientific advancement.
            </p>
          </div>
        </div>

        {/* Accreditation */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Accreditation & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Accreditation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• National Accrediting Agency for Clinical Laboratory Sciences (NAACLS)</li>
                <li>• Commission on Collegiate Nursing Education (CCNE)</li>
                <li>• American Society for Clinical Laboratory Science (ASCLS)</li>
                <li>• International Federation of Biomedical Laboratory Science (IFBLS)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Excellence in Medical Laboratory Education Award (2023)</li>
                <li>• Outstanding Research Department Recognition (2022)</li>
                <li>• Best Clinical Training Program Award (2021)</li>
                <li>• Innovation in Healthcare Education (2020)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
