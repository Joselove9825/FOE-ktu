"use client"
import React from 'react';

const NewsEvents = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto p-6 space-y-12 mt-8">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">News & Events</h1>

        <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Faculty News</h2>
          <article className="mb-6">
            <h3 className="text-xl font-semibold text-indigo-700">New Engineering Innovation Hub Launched</h3>
            <p className="text-gray-700 mt-1">Our new Innovation Hub opened its doors to students and startups to foster creativity and entrepreneurship.</p>
            <time dateTime="2024-06-01" className="text-sm text-gray-500">June 1, 2024</time>
          </article>
          <article className="mb-6">
            <h3 className="text-xl font-semibold text-indigo-700">Faculty Receives National Research Award</h3>
            <p className="text-gray-700 mt-1">For outstanding contributions to renewable energy research, the faculty received a prestigious national award.</p>
            <time dateTime="2024-05-15" className="text-sm text-gray-500">May 15, 2024</time>
          </article>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Research and Student Achievements</h2>
          <article className="mb-6">
            <h3 className="text-xl font-semibold text-indigo-700">Student Team Wins International Robotics Competition</h3>
            <p className="text-gray-700 mt-1">Our engineering students showcased innovative robotics solutions to win the international event.</p>
            <time dateTime="2024-04-20" className="text-sm text-gray-500">April 20, 2024</time>
          </article>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Upcoming Events</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Annual Engineering Symposium</strong> - August 10, 2024</li>
            <li><strong>Research Seminars Series</strong> - Every Thursday, 2 PM, June to September</li>
            <li><strong>Student Tech Expo</strong> - September 5-7, 2024</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-600 mb-6">Event Archives</h2>
          <p className="text-gray-700">Browse past faculty events and seminars in our archive section on the internal site.</p>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Faculty of Engineering. All rights reserved.
      </footer>
    </div>
  );
};

export default NewsEvents;

