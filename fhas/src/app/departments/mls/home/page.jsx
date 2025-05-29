// pages/mls/Home.js
"use client";

import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/departments/mls" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700">Medical Laboratory Science</a>
          {/* Navbar removed as per your request */}
        </div>
      </header>

      <main className="container mx-auto p-6 space-y-12 mt-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Welcome to the Medical Laboratory Science Department</h1>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Message from Head of Department</h2>
          <p className="text-gray-700 leading-relaxed">
            Our department fosters innovation and expertise in mechanics, thermodynamics, and robotics, preparing students for leadership in engineering.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Research Focus Areas</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Robotics and Automation</li>
            <li>Thermodynamics and Energy Systems</li>
            <li>Advanced Manufacturing</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Latest News</h2>
          <article className="mb-4">
            <h3 className="font-semibold text-indigo-700">Robotics Research Breakthrough</h3>
            <p className="text-gray-700">The Medical Laboratory Science team developed a new autonomous robot navigation system.</p>
            <time datetime="2024-06-10" className="block text-sm text-gray-500 mt-1">June 10, 2024</time>
          </article>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-4">
            <a href="/departments/mls/programmes" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded py-3 px-4 hover:bg-indigo-200 transition">Programmes</a>
            <a href="/departments/mls/admissions" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded py-3 px-4 hover:bg-indigo-200 transition">Admissions</a>
            <a href="/departments/mls/labs" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded py-3 px-4 hover:bg-indigo-200 transition">Lab & Facilities</a>
            <a href="/departments/mls/contact" className="block text-center bg-indigo-100 text-indigo-700 font-semibold rounded py-3 px-4 hover:bg-indigo-200 transition">Contact Us</a>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2025 Medical Laboratory Science Department. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
