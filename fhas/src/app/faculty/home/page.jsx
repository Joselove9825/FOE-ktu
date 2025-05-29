// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Faculty of Engineering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-16">
        {/* Home Section */}
        <section id="home" className="space-y-12 scroll-mt-20">
          {/* Welcome from the Dean */}
          <article className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Welcome from the Dean</h1>
            <p className="text-lg leading-relaxed max-w-4xl">
              Welcome to the Faculty of Engineering.
              <br />
              It is a privilege to lead a faculty that is at the forefront of engineering education and research. Our mission is to produce graduates who are not only technically proficient but also equipped with the ethical, entrepreneurial, and leadership skills necessary to transform industries and communities.
              In today’s rapidly changing world, engineering plays a pivotal role in addressing critical issues such as climate change, digital transformation, infrastructure development, and health technologies. Our faculty is deeply committed to innovation and excellence. Through rigorous academic training, hands-on experience, and collaboration with industry, we ensure our students are prepared for the challenges and opportunities ahead.
              We invite you to explore our departments, programmes, research, and vibrant community. Whether you are a prospective student, partner, or researcher, we look forward to engaging with you in shaping a better future through engineering.
              <br />
              Prof. [Dean's Full Name]
              <br />
              Dean, Faculty of Engineering
            </p>
          </article>

          {/* Featured Departments */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Featured Departments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Civil Engineering</h3>
                <p className="text-gray-600">Design and develop infrastructure projects shaping our cities and communities.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Medical Laboratory Science</h3>
                <p className="text-gray-600">Innovating in power systems, electronics, and telecommunications.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Mechanical Engineering</h3>
                <p className="text-gray-600">Advancing technology through robotics, thermodynamics, and design.</p>
              </div>
            </div>
          </section>

          {/* News Highlights */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-6">News Highlights</h2>
            <ul className="space-y-4 max-w-4xl">
              <li className="bg-white p-5 rounded-lg shadow hover:bg-indigo-50 transition">
                <h3 className="text-lg font-semibold text-indigo-700">Engineering students win national robotics competition</h3>
                <p className="text-gray-700 mt-1">Our students showcased their innovative designs and secured first place.</p>
                <time dateTime="2024-06-10" className="block text-sm text-gray-500 mt-2">June 10, 2024</time>
              </li>
              <li className="bg-white p-5 rounded-lg shadow hover:bg-indigo-50 transition">
                <h3 className="text-lg font-semibold text-indigo-700">New research lab inaugurated for sustainable energy</h3>
                <p className="text-gray-700 mt-1">Dedicated to breakthrough projects in renewable energy and efficiency.</p>
                <time dateTime="2024-05-20" className="block text-sm text-gray-500 mt-2">May 20, 2024</time>
              </li>
            </ul>
          </section>

          {/* Research Spotlights */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Research Spotlights</h2>
            <div className="space-y-6 max-w-4xl">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Autonomous Vehicles Safety Systems</h3>
                <p className="text-gray-700">Pioneering methods to enhance sensor reliability and decision algorithms for driverless cars.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">Smart Grid Optimization</h3>
                <p className="text-gray-700">Projects focusing on intelligent distribution and energy use reduction in urban areas.</p>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Quick Links to Departments & Programmes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-4xl">
              <a href="civil-engineering.html" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded-lg py-3 px-4 hover:bg-indigo-200 transition">Civil Engineering</a>
              <a href="medical-laboratory-science.html" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded-lg py-3 px-4 hover:bg-indigo-200 transition">Medical Laboratory Science</a>
              <a href="mechanical-engineering.html" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded-lg py-3 px-4 hover:bg-indigo-200 transition">Mechanical Engineering</a>
              <a href="computer-engineering.html" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded-lg py-3 px-4 hover:bg-indigo-200 transition">Computer Engineering</a>
              <a href="chemical-engineering.html" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded-lg py-3 px-4 hover:bg-indigo-200 transition">Chemical Engineering</a>
              <a href="biomedical-engineering.html" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded-lg py-3 px-4 hover:bg-indigo-200 transition">Biomedical Engineering</a>
            </div>
          </section>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2025 Faculty of Engineering. All rights reserved.
      </footer>
    </div>
  );
}
