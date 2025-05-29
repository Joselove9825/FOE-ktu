// pages/biomed/StudentsAndFacilities.js
"use client";

import React from 'react';

const StudentsAndFacilities = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Students and Facilities</h1>
          <p className="mt-2">Resources and facilities to support your academic journey.</p>
        </div>
      </header>

      <main className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <section id="student-resources" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Student Resources</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Academic advising and mentorship programs</li>
            <li>Access to online learning platforms and resources</li>
            <li>Career services and internship opportunities</li>
            <li>Library resources and research support</li>
            <li>Health and wellness services</li>
          </ul>
        </section>

        <div className="flex flex-row space-x-4 items-center justify-center">
          <img src="/biomed/lab 2.jpg" alt="Lab 2" className="rounded-2xl shadow-lg" height="500" width="600" />
          <img src="/biomed/lab 7.jpg" alt="Lab 7" className="rounded-2xl shadow-lg" height="500" width="600" />
        </div>

        <section id="student-organizations" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Student Organizations</h2>
          <p className="text-gray-700">Join one of our student organizations to enhance your learning experience, network with peers, and participate in extracurricular activities:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Biomedical Engineering Society (BMES)</strong>: A professional organization that promotes the field of biomedical engineering.</li>
            <li><strong>Engineering Student Council</strong>: Represents the interests of engineering students and organizes events.</li>
            <li><strong>Women in Engineering</strong>: Supports and encourages women pursuing careers in engineering.</li>
            <li><strong>Robotics Club</strong>: Engages students in robotics projects and competitions.</li>
          </ul>
        </section>

        <section id="facilities" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Facilities</h2>
          <p className="text-gray-700">Our department is equipped with state-of-the-art facilities to support your education and research:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Biomedical Engineering Lab</h3>
              <p className="text-gray-600">A fully equipped lab for hands-on experiments and research in biomedical engineering.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Medical Imaging Suite</h3>
              <p className="text-gray-600">A dedicated space for conducting medical imaging research and experiments.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Biomechanics Lab</h3>
              <p className="text-gray-600">Equipped with motion capture technology and analysis tools for biomechanics research.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Tissue Engineering Facility</h3>
              <p className="text-gray-600">A specialized lab for research in tissue engineering and regenerative medicine.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Computer Lab</h3>
              <p className="text-gray-600">Access to high-performance computers for simulations and data analysis.</p>
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-5">
            <img src="/biomed/labalatory 2.jpg" alt="Laboratory 2" height="500" width="300" className="rounded-2xl border-2 border-black shadow-lg" />
            <img src="/biomed/labalatory 3.jpg" alt="Laboratory 3" height="500" width="300" className="rounded-2xl border-2 border-black shadow-lg" />
            <img src="/biomed/labalatory 6.jpg" alt="Laboratory 6" height="500" width="300" className="rounded-2xl border-2 border-black shadow-lg" />
            <img src="/biomed/labalatory 9.jpg" alt="Laboratory 9" height="500" width="300" className="rounded-2xl border-2 border-black shadow-lg" />
          </div>
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

export default StudentsAndFacilities;
