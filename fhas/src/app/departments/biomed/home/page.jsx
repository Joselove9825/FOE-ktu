// pages/LandingPage.js
"use client";

import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="hidden mobile-menu">
        <ul>
          <li className="active">
            <a className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" href="About.html">
              About
            </a>
          </li>
          <li>
            <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" href="Admissions.html">
              Admissions
            </a>
          </li>
          <li>
            <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" href="academics.html">
              Academics
            </a>
          </li>
          <li>
            <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-green-500 tracking-loose">
              Welcome to Biomedical Engineering Department
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              A Place for Learning and Growth
            </h2>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              Join us in our journey to excellence in education. We provide a nurturing environment for students to grow and excel.
            </p>
            <a className="bg-green-500 text-white rounded p-2 hover:bg-green-400" href="#">
              Learn More
            </a>
          </div>
          <div className="p-8 lg:w-2/3">
            <img alt="Students happily studying in a classroom" className="rounded-lg shadow-lg" src="/biomed/lab 4.jpg" />
          </div>
        </div>
      </div>
      {/* About Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <img alt="School building with students in the foreground" className="rounded-lg shadow-lg" src="/biomed/lab 5.jpg" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                Our mission is to provide a high-quality education that prepares students for success in a global society. We are committed to fostering a love of learning and encouraging students to reach their full potential.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We envision a school where every student is inspired to learn, grow, and achieve. Our goal is to create a supportive and inclusive environment that promotes academic excellence and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Admissions Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Admissions</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Join Our School</h3>
              <p className="text-gray-600 mb-4">
                We welcome students from diverse backgrounds and strive to create an inclusive community. Our admissions process is designed to identify students who will thrive in our academic environment.
              </p>
              <a className="bg-green-500 text-white rounded p-2 hover:bg-green-400" href="#">
                Apply Now
              </a>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img alt="Students and parents talking to a teacher during an admissions event" className="rounded-lg shadow-lg" src="/biomed/site 2.jpg" />
            </div>
          </div>
        </div>
      </section>
      {/* Academics Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Academics</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <img alt="Students engaged in a science experiment in a lab" className="rounded-lg shadow-lg" src="/biomed/site 4.jpg" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Program</h3>
              <p className="text-gray-600 mb-4">
                We offer a wide range of academic courses designed to challenge and inspire students. Our curriculum is rigorous and engaging, with a focus on critical thinking, creativity, and collaboration.
              </p>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Extracurricular Activities</h3>
              <p className="text-gray-600">
                In addition to our academic courses, we offer a variety of extracurricular activities that allow students to explore their interests and develop new skills. From sports to arts to clubs, there is something for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">
                We would love to hear from you! Whether you have questions about our programs, admissions, or anything else, please feel free to reach out to us.
              </p>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Your name" type="text" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Your email" type="email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="4"></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img alt="School building with a contact us sign" className="rounded-lg shadow-lg" src="/biomed/site 1.jpg" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-white">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-4">Biomedical Engineering Department</h3>
              <p className="text-gray-400">Koforidua Technical University</p>
              <p className="text-gray-400">Email: info@schoolname.com</p>
              <p className="text-gray-400">Phone: (233) 456-7890</p>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/HomePage.html">Home</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/About.html">About</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/Admissions.html">Admissions</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/academics.html">Academics</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/contact.html">Contact</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/staff.html">Staff</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/research.html">Research</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/students&facilities.html">Students & Facilities</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/alumni&collaborations.html">Alumni & Collaborations</a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-white" href="/others.html">Others</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-8">
            © 2025 Biomedical Engineering Department. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
