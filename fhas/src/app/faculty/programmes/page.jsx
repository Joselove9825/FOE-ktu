// pages/programmes.js
import Head from 'next/head';

export default function Programmes() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Academic Programmes - Faculty of Engineering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-16">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Academic Programmes</h1>
        <p className="text-lg leading-relaxed max-w-4xl mb-8">
          Our faculty offers a variety of undergraduate and postgraduate programmes designed to equip students with the skills and knowledge needed for successful careers in engineering.
        </p>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Undergraduate Programmes</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Bachelor of Science in Civil Engineering</li>
            <li>Bachelor of Science in Mechanical Engineering</li>
            <li>Bachelor of Science in Electrical & Electronics Engineering</li>
            <li>Bachelor of Science in Computer Engineering</li>
            <li>Bachelor of Science in Chemical Engineering</li>
            <li>Bachelor of Science in Biomedical Engineering</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Postgraduate Programmes</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Master of Science in Civil Engineering</li>
            <li>Master of Science in Mechanical Engineering</li>
            <li>Master of Science in Electrical & Electronics Engineering</li>
            <li>Master of Science in Computer Engineering</li>
            <li>Master of Science in Chemical Engineering</li>
            <li>Master of Science in Biomedical Engineering</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Short Courses & Professional Training</h2>
          <p className="text-gray-700 mb-4">We offer various short courses and professional training sessions to enhance skills and knowledge in specific areas of engineering.</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Programme Brochures & Downloads</h2>
          <p className="text-gray-700 mb-4">Download our programme brochures for detailed information on course structures, faculty, and admission requirements.</p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Links to Specific Programme Pages</h2>
          <ul className="list-disc list-inside mb-6">
            <li><a href="civil-engineering.html" className="text-indigo-600 hover:underline">Civil Engineering</a></li>
            <li><a href="mechanical-engineering.html" className="text-indigo-600 hover:underline">Mechanical Engineering</a></li>
            <li><a href="electrical-electronics-engineering.html" className="text-indigo-600 hover:underline">Electrical & Electronics Engineering</a></li>
            <li><a href="computer-engineering.html" className="text-indigo-600 hover:underline">Computer Engineering</a></li>
            <li><a href="chemical-engineering.html" className="text-indigo-600 hover:underline">Chemical Engineering</a></li>
            <li><a href="biomedical-engineering.html" className="text-indigo-600 hover:underline">Biomedical Engineering</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Faculty of Engineering. All rights reserved.
      </footer>
    </div>
  );
}
