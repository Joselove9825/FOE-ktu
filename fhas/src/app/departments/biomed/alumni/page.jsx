import React from 'react'

const AlumniPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
        &nbsp;
        &nbsp;
        <main className="container mx-auto p-6 space-y-12 mt-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Biomedical Engineering Alumni</h1>
        &nbsp;
        &nbsp;

        <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Success Stories</h2>
            <p className="text-gray-700 mb-6">Our alumni are leaders in healthcare innovation and medical technology.</p>
            <div>
            <h3 className="text-xl font-semibold text-indigo-700">Dr. Sarah Thompson</h3>
            <p className="text-gray-700">CEO of BioHealth, pioneering wearable medical tech.</p>
            </div>
            <div className="mt-4">
            <h3 className="text-xl font-semibold text-indigo-700">James Lee</h3>
            <p className="text-gray-700">Biomedical researcher widely respected for pioneering work.</p>
            </div>
        </section>
        &nbsp;
        &nbsp;

        <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Alumni Association</h2>
            <p className="text-gray-700 mb-4">Join our network for collaboration, mentorship, and career development opportunities.</p>
        </section>
        &nbsp;
        &nbsp;

        <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">Engagement Opportunities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Guest Lectures</li>
            <li>Mentorship Programs</li>
            <li>Networking Events</li>
            </ul>
        </section>
        </main>
        &nbsp;
        &nbsp;

        <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Biomedical Engineering Department. All rights reserved.
        </footer>
        &nbsp;
        &nbsp;
</div>
  )
}

export default AlumniPage