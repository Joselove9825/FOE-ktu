// pages/admissions.js
import Head from 'next/head';

export default function Admissions() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Admissions - Faculty of Engineering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-16">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Admissions</h1>
        <p className="text-lg leading-relaxed max-w-4xl mb-8">
          Welcome to the admissions page of the Faculty of Engineering. Here you will find all the information you need to apply for our programmes.
        </p>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Entry Requirements</h2>
          <p className="text-gray-700 mb-4">General entry requirements include:</p>
          <ul className="list-disc list-inside mb-6">
            <li>High school diploma or equivalent</li>
            <li>Minimum GPA of 3.0</li>
            <li>Standardized test scores (SAT, ACT, etc.)</li>
          </ul>
          <p className="text-gray-700 mb-4">Specific requirements by programme level:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Bachelor's programmes: Completion of relevant high school courses</li>
            <li>Master's programmes: Bachelor's degree in a related field</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Application Process</h2>
          <p className="text-gray-700 mb-4">To apply, please follow these steps:</p>
          <ol className="list-decimal list-inside mb-6">
            <li>Complete the online application form.</li>
            <li>Submit required documents (transcripts, test scores, etc.).</li>
            <li>Pay the application fee.</li>
            <li>Attend an interview (if required).</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4"></h2>
           <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Scholarships & Financial Aid</h2>
          <p className="text-gray-700 mb-4">We offer various scholarships and financial aid options to support students in their educational journey. Please visit our financial aid office for more information.</p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-indigo-600 mb-4">FAQs</h2>
          <p className="text-gray-700 mb-4">Here are some frequently asked questions regarding admissions:</p>
          <ul className="list-disc list-inside mb-6">
            <li>What is the application deadline?</li>
            <li>Can I apply for multiple programmes?</li>
            <li>What if I miss the application deadline?</li>
          </ul>
        </section>
      </main>
      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Faculty of Engineering. All rights reserved.
      </footer>
    </div>
  );
}