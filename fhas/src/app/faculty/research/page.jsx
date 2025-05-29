"use client"
// pages/research.js
import Head from 'next/head';

export default function Research() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Research & Innovation - Faculty of Engineering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-12 mt-8 max-w-5xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Research & Innovation</h1>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Faculty-wide Research Goals</h2>
          <p className="text-gray-700 mb-4">
            Our faculty’s research aims to address major engineering challenges through interdisciplinary collaborations, sustainable solutions, and innovative technologies.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Advancing sustainable energy systems</li>
            <li>Improving infrastructure resilience</li>
            <li>Enhancing digital technologies and automation</li>
            <li>Driving biomedical innovations</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Research Centres, Labs, and Focus Areas</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Renewable Energy Research Centre</li>
            <li>Advanced Materials Laboratory</li>
            <li>Robotics and Automation Lab</li>
            <li>Biomedical Imaging and Device Innovation Centre</li>
            <li>Smart Infrastructure and Urban Systems Lab</li>
          </ul>
          <p className="text-gray-700">Each centre provides cutting-edge facilities and collaborative research opportunities for faculty and students.</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Inter-departmental Research Collaboration</h2>
          <p className="text-gray-700 mb-4">
            Our departments collaborate extensively across disciplines to foster innovative solutions that integrate electrical, mechanical, civil, chemical, computer, and biomedical engineering.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Faculty Publications</h2>
          <p className="text-gray-700 mb-4">
            Faculty members regularly publish peer-reviewed articles, conference papers, and technical reports. Access our research publications repository online.
          </p>
          <ul className="list-disc list-inside text-indigo-700">
            <li><a href="#" className="hover:underline">Recent Journal Articles</a></li>
            <li><a href="#" className="hover:underline">Conference Proceedings</a></li>
            <li><a href="#" className="hover:underline">Technical Reports</a></li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Innovation Hub / Startups</h2>
          <p className="text-gray-700 mb-4">
            Our Innovation Hub nurtures faculty and student startups, supporting entrepreneurial activities with mentorship, funding access, and workspace.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Startup Incubation Programs</li>
            <li>Technology Transfer and Commercialization</li>
            <li>Annual Innovation Challenge</li>
          </ul>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Faculty of Engineering. All rights reserved.
      </footer>
    </div>
  );
}
