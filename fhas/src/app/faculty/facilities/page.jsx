// pages/facilities.js
import Head from 'next/head';

export default function Facilities() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Facilities - faculty of health and allied science</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-12 mt-8 max-w-5xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Facilities</h1>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Shared Laboratories and Workshops</h2>
          <p className="text-gray-700 mb-4">Our faculty maintains well-equipped labs and workshops that serve multiple departments.</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Engineering Library</h2>
          <p className="text-gray-700 mb-4">The Engineering Library provides extensive resources, study spaces, and research assistance.</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Innovation Hub</h2>
          <p className="text-gray-700 mb-4">A dedicated space for student and faculty innovation with cutting-edge technology and mentoring.</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Safety Policies & Procedures</h2>
          <p className="text-gray-700 mb-4">Strict safety protocols are in place across all labs and workshops to ensure a safe environment.</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">ICT & E-learning Support</h2>
          <p className="text-gray-700 mb-4">Comprehensive support is available for ICT resources, e-learning platforms, and software tools for students and faculty.</p>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2025 faculty of health and allied science. All rights reserved.
      </footer>
    </div>
  );
}
