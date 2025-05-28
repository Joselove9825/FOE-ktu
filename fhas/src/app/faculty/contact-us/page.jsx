// pages/contact.js
import Head from 'next/head';

export default function Contact() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Head>
        <title>Contact Us - Faculty of Engineering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <main className="container mx-auto p-6 space-y-12 mt-8 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">Contact Us</h1>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Faculty Office Location</h2>
          <p className="text-gray-700 mb-4">123 Engineering Plaza, University Campus, City, Country</p>

          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019982363234!2d-122.41941508468121!3d37.77492977975809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c27b0b89d%3A0x48191cbe7997e7d4!2sEngineering%20Building!5e0!3m2!1sen!2sus!4v1618365488329!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Phone & Email</h2>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> (123) 456-7890</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> info@facultyengineering.edu</p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">General Inquiry Form</h2>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
              <input id="name" name="name" type="text" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Message</label>
              <textarea id="message" name="message" rows="4" required className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            <button type="submit" className="bg-indigo-600 text-white rounded px-6 py-2 hover:bg-indigo-700 transition">Submit</button>
          </form>
        </section>
      </main>

      <footer className="bg-white border-t mt-20 py-6 text-center text-gray-600 text-sm">
        &copy; 2024 Faculty of Engineering. All rights reserved.
      </footer>
    </div>
  );
}
