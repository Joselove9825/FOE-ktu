// pages/biomed/Contact.js
"use client";

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2">We are here to help you with any questions or concerns.</p>
        </div>
      </header>

      <main className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <div className="post-single">
          <p><strong>Postal Address</strong><br />
            Koforidua Technical University<br />
            Post Office Box KF-981<br />
            Koforidua<br />
            Eastern Region<br />
            Ghana.
          </p>
          <br />
          <p><strong>Ghana Post GPS</strong><br />
            EN-112-3991
          </p>
          <br />
          <p><strong>Email Address</strong><br />
            info@ktu.edu.gh
          </p>
          <br />
          <p><strong>Telephone Directory</strong></p>
          <table className="w-full">
            <tbody>
              <tr>
                <td width="247"><strong>Office</strong></td>
                <td width="185"><strong>Telephone</strong></td>
                <td width="185"><strong>Email</strong></td>
              </tr>
              <tr>
                <td width="247">Help desk</td>
                <td width="185">(+233) 034 229 3005</td>
                <td width="185"><a href="mailto:support@ktu.edu.gh">support@ktu.edu.gh</a></td>
              </tr>
              <tr>
                <td width="247">Student Services Dept.</td>
                <td width="185">(+233) 034 229 0311</td>
                <td width="185"><a href="mailto:studentsservices@ktu.edu.gh">studentsservices@ktu.edu.gh</a></td>
              </tr>
              <tr>
                <td width="247">Admission office</td>
                <td width="185">(+233) 0342293705</td>
                <td width="185"><a href="mailto:admissions@ktu.edu.gh">admissions@ktu.edu.gh</a></td>
              </tr>
              <tr>
                <td width="247">Director (Int. Relations)</td>
                <td width="185">+233 034 229 3974</td>
                <td width="185"><a href="mailto:iril@ktu.edu.gh">iril@ktu.edu.gh</a></td>
              </tr>
              <tr>
                <td width="247">VC Secretariat</td>
                <td width="185">(+233) 034 229 3002</td>
                <td width="185"><a href="mailto:vc@ktu.edu.gh">vc@ktu.edu.gh</a></td>
              </tr>
              <tr>
                <td width="247">Liaison Office</td>
                <td width="185">(+233) 030 396 1714</td>
                <td width="185"><a href="mailto:ilo@ktu.edu.gh">ilo@ktu.edu.gh</a></td>
              </tr>
              <tr>
                <td width="247">Security Hotline</td>
                <td width="185">(+233) 0342294185</td>
                <td width="185"><a href="mailto:security@ktu.edu.gh">security@ktu.edu.gh</a></td>
              </tr>
              <tr>
                <td width="247">ICT Directorate</td>
                <td width="185">(+233) 0342293596</td>
                <td width="185"><a href="mailto:support@ktu.edu.gh">support@ktu.edu.gh</a></td>
              </tr>
            </tbody>
          </table>
          <br />
          <section id="contact-form" className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" name="message" required className="mt-1 block w-full p-2 border border-gray-300 rounded-md" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Send Message</button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Biomedical Engineering Department. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
