"use client"
// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>About Us - faculty of health and allied science</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-12 mt-8">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">About Us</h1>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Faculty of Health and Allied Sciences is dedicated to delivering exceptional education and advancing innovative research that addresses critical health challenges in society. Through interdisciplinary collaboration and a strong emphasis on practical experience, the faculty equips students with the knowledge and skills to improve healthcare systems, promote well-being, and serve communities locally and globally.


          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Vision, Mission & Core Values</h2>
          <h3 className="font-semibold text-indigo-700 mt-2">Vision</h3>
          <p className="text-gray-700 mb-4">To be a global leader in health and allied sciences education, research, and community health innovation.</p>
          <h3 className="font-semibold text-indigo-700 mt-2">Mission</h3>
          <p className="text-gray-700 mb-4">To cultivate highly skilled and ethical health professionals through quality education, cutting-edge research, and community-centered healthcare initiatives.</p>
          <h3 className="font-semibold text-indigo-700 mt-2">Core Values</h3>
          <p className="text-gray-700 mb-4">Integrity – Upholding ethical standards in all academic and professional activities.

Innovation – Embracing creativity and technology to solve real-world health problems.

Excellence – Striving for the highest standards in teaching, research, and service.

Collaboration – Promoting teamwork across disciplines and with healthcare stakeholders.

Sustainability – Committing to long-term impact in health systems and resource use.</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Dean’s Message</h2>
          <p className="text-gray-700 italic">
            “Our faculty is committed to inspiring the next generation of health professionals to lead with compassion, competence, and innovation. Together, we are shaping a healthier and more equitable future through science, service, and education.”
          </p>
          <p className="font-semibold mt-4">- Dr. Boakye Agyemang, Dean of faculty of health and allied science</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Faculty History</h2>
          <p className="text-gray-700 leading-relaxed">
            Established in 1950, the Faculty of Health and Allied Sciences has grown from its early beginnings into a leading center for health education and research. Over the decades, the faculty has played a pivotal role in training healthcare professionals who have contributed significantly to national health systems and public health development. With a legacy of academic excellence and societal impact, the faculty continues to expand its programmes and partnerships to address evolving healthcare needs.


          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Organizational Structure</h2>
          <p className="text-gray-700 mb-4">The Faculty of Health and Allied Sciences is structured to promote academic excellence, administrative efficiency, and collaborative growth. It comprises:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Dean’s Office
Oversees academic and administrative leadership, strategic planning, and institutional partnerships.

</li>
            <li>Department of Medical Laboratory Science

Department of Biomedical Engineering</li>
            <li>Research Centers
Dedicated to advancing innovation and applied health research across various fields.</li>
            <li>Student Affairs and Academic Services
Provides academic advising, career services, and student support to enhance the learning experience.</li>
            <li>Administrative and Support Units
Ensure smooth day-to-day operations including admissions, finance, records, and infrastructure management.</li>
          </ul>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2025 faculty of health and allied science. All rights reserved.
      </footer>
    </div>
  );
}
