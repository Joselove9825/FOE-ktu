// pages/staff.js
import Head from 'next/head';

export default function Staff() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Staff Directory - Faculty of Engineering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-12 mt-8 max-w-5xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Staff Directory</h1>

        {/* Academic Staff */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Academic Staff</h2>

          <div className="space-y-8">
            {/* Civil Engineering Staff */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Civil Engineering</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded p-4 flex flex-col items-center text-center">
                  <img src="https://via.placeholder.com/120" alt="Dr. Alice Smith" className="rounded-full mb-4" />
                  <h4 className="font-semibold">Dr. Alice Smith</h4>
                  <p className="text-sm text-gray-600">Professor</p>
                  <p className="text-sm">Research: Structural Engineering, Materials</p>
                </div>
                <div className="bg-gray-100 rounded p-4 flex flex-col items-center text-center">
                  <img src="https://via.placeholder.com/120" alt="Dr. Bob Johnson" className="rounded-full mb-4" />
                  <h4 className="font-semibold">Dr. Bob Johnson</h4>
                  <p className="text-sm text-gray-600">Associate Professor</p>
                  <p className="text-sm">Research: Geotechnical Engineering</p>
                </div>
              </div>
            </div>

            {/* Mechanical Engineering Staff */}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Mechanical Engineering</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded p-4 flex flex-col items-center text-center">
                  <img src="https://via.placeholder.com/120" alt="Prof. Carol Lee" className="rounded-full mb-4" />
                  <h4 className="font-semibold">Prof. Carol Lee</h4>
                  <p className="text-sm text-gray-600">Professor</p>
                  <p className="text-sm">Research: Robotics, Thermodynamics</p>
                </div>
                <div className="bg-gray-100 rounded p-4 flex flex-col items-center text-center">
                  <img src="https://via.placeholder.com/120" alt="Dr. Dan Kim" className="rounded-full mb-4" />
                  <h4 className="font-semibold">Dr. Dan Kim</h4>
                  <p className="text-sm text-gray-600">Assistant Professor</p>
                  <p className="text-sm">Research: Fluid Mechanics</p>
                </div>
              </div>
            </div>

            {/* Additional departments can be added similarly... */}

          </div>
        </section>

        {/* Administrative & Technical Staff */}
        <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Administrative & Technical Staff</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ms. Emily Green - Department Administrator</li>
            <li>Mr. Frank Miller - Technical Support Specialist</li>
            <li>Ms. Grace Brown - Office Coordinator</li>
          </ul>
        </section>

        {/* Visiting Lecturers/Professors */}
        <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Visiting Lecturers & Professors</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Prof. Hannah Wilson - Renewable Energy Expert</li>
            <li>Dr. Ian Scott - Specialist in Advanced Materials</li>
          </ul>
        </section>

      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2025 Faculty of Engineering. All rights reserved.
      </footer>
    </div>
  );
}
