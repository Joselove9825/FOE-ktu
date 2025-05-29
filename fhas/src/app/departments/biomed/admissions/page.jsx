// pages/biomed/Admissions.js
"use client";

import React from 'react';

const Admissions = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/biomed" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">Biomedical Engineering</a>
          {/* Removed the navbar as per your request */}
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-12 mt-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Admissions</h1>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Entry Requirements</h2>
          <p className="text-gray-700 mb-4">
            Candidates should have completed high school with coursework in biology, chemistry, physics, and mathematics.
            Degree level entry requirements:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Bachelor's Programme: relevant science subjects in high school.</li>
            <li>Master's Programme: Bachelor's degree in related field.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Application Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Complete the university online application.</li>
            <li>Submit transcripts and test scores.</li>
            <li>Application fee payment.</li>
            <li>Interviews if required.</li>
          </ol>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Scholarships & Financial Aid</h2>
          <p className="text-gray-700">Scholarships based on merit and need are available. Contact the faculty office for details.</p>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Biomedical Engineering Department. All rights reserved.
      </footer>
    </div>
  );
};

export default Admissions;
