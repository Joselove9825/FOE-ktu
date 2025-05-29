// pages/biomed/Academics.js
"use client";

import React from 'react';

const Academics = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Academics in Biomedical Engineering</h1>
          <p className="mt-2">Explore our programs and courses designed to advance your career in healthcare technology.</p>
        </div>
      </header>

      <main className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <section id="program-overview" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Program Overview</h2>
          <p className="text-gray-700">
            Our Biomedical Engineering program integrates engineering principles with medical sciences to develop technologies and devices that improve patient care. Students will gain hands-on experience and knowledge in areas such as biomaterials, medical imaging, and biomechanics.
          </p>
        </section>

        <section id="degree-offerings" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Degree Offerings</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>HND of Science in Biomedical Engineering</li>
            <li>Bachelor of Science in Biomedical Engineering</li>
          </ul>
        </section>

        <section id="course-descriptions" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Course Descriptions</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Introduction to Biomedical Engineering</h3>
              <p className="text-gray-600">An overview of the field of biomedical engineering, including its history, current trends, and future directions.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Biomaterials</h3>
              <p className="text-gray-600">Study of materials used in medical devices and implants, including their properties, applications, and biocompatibility.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Medical Imaging</h3>
              <p className="text-gray-600">Introduction to various medical imaging techniques, including MRI, CT, and ultrasound, and their applications in diagnostics.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold">Biomechanics</h3>
              <p className="text-gray-600">Exploration of the mechanical principles of biological systems and their applications in the design of medical devices.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-row space-x-5">
            <img src="/biomed/Screenshot 2025-03-12 080817.png" alt="entrance" className="rounded-lg border-2 border-blue-500" />
            <img src="/biomed/Screenshot 2025-03-12 081017.png" alt="fountain" className="rounded-lg border-2 border-blue-500" />
          </div>
        </section>

        <section id="department" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Department</h2>
          <p className="text-gray-700">Our department members are leaders in the field of biomedical engineering, dedicated to providing students with a comprehensive education and mentorship. They bring a wealth of experience from both academia and industry, ensuring that students receive a well-rounded education that prepares them for their future careers.</p>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Koforidua Technical University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Academics;
