// pages/biomed/About.js
"use client";

import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/biomed" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">Biomedical Engineering</a>
          {/* Removed the navbar as per your request */}
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-12 mt-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">About Biomedical Engineering</h1>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed">
            The Biomedical Engineering Department integrates engineering with medical and biological sciences to improve healthcare technology. Established in 1985, 
            it leads innovations in medical devices, diagnostics, and regenerative medicine.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Vision & Mission</h2>
          <p className="text-gray-700 mb-4">Vision: Advance healthcare through engineering innovation.</p>
          <p className="text-gray-700 mb-4">Mission: Educate and research to develop technologies improving lives.</p>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Biomedical Engineering Department. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
