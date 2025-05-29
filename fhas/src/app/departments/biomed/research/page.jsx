// pages/biomed/Research.js
"use client";

import React from 'react';

const Research = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Research in Biomedical Engineering</h1>
          <p className="mt-2">Innovative research aimed at advancing healthcare technology.</p>
        </div>
      </header>

      <main className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <section id="research-areas" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Research Areas</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Biomaterials and Tissue Engineering</li>
            <li>Medical Imaging and Signal Processing</li>
            <li>Biomechanics and Rehabilitation Engineering</li>
            <li>Biomedical Devices and Instrumentation</li>
            <li>Bioinformatics and Computational Biology</li>
          </ul>
        </section>

        <img src="/biomed/compuond6.jpg" alt="Research Image" className="mb-8" />

        <section id="ongoing-projects" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Ongoing Projects</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">N/A</h3>
              <p className="text-gray-600">N/A</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">N/A</h3>
              <p className="text-gray-600">N/A</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">N/A</h3>
              <p className="text-gray-600">N/A</p>
            </div>
          </div>
        </section>

        <section id="publications" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Notable Publications</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">N/A</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">N/A</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">N/A</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Biomedical Engineering Department. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Research;
