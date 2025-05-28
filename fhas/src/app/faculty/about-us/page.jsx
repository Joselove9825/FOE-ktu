"use client"
// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>About Us - Faculty of Engineering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-12 mt-8">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">About Us</h1>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            The Faculty of Engineering is dedicated to delivering exceptional education and fostering innovative research to address engineering challenges in society.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Vision, Mission & Core Values</h2>
          <h3 className="font-semibold text-indigo-700 mt-2">Vision</h3>
          <p className="text-gray-700 mb-4">To be a global leader in engineering education and innovation.</p>
          <h3 className="font-semibold text-indigo-700 mt-2">Mission</h3>
          <p className="text-gray-700 mb-4">To cultivate engineering professionals through quality education and research.</p>
          <h3 className="font-semibold text-indigo-700 mt-2">Core Values</h3>
          <p className="text-gray-700 mb-4">Integrity, Innovation, Excellence, Collaboration, Sustainability.</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Dean’s Message</h2>
          <p className="text-gray-700 italic">
            “Our faculty is committed to inspiring the next generation of engineers to create a sustainable and innovative future.”
          </p>
          <p className="font-semibold mt-4">- Prof. Jane Doe, Dean of Faculty of Engineering</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Faculty History</h2>
          <p className="text-gray-700 leading-relaxed">
            Established in 1950, the Faculty of Engineering has been a pioneer in engineering education and research, contributing significantly to regional and national development.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Organizational Structure</h2>
          <p className="text-gray-700 mb-4">Our faculty is organized into multiple departments and administrative units led by experienced professionals:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Dean’s Office</li>
            <li>Departments of Civil, Electrical, Mechanical, Computer, Chemical, and Biomedical Engineering</li>
            <li>Research Centers</li>
            <li>Student Affairs and Academic Services</li>
            <li>Administrative and Support Units</li>
          </ul>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Faculty of Engineering. All rights reserved.
      </footer>
    </div>
  );
}
