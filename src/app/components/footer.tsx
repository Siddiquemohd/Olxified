"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Content */}
      <main className="flex-grow">
        <h1 className="text-4xl font-bold text-center mt-20">Welcome to Olxified</h1>
        <p className="text-center text-gray-600 mt-4">
          Your one-stop solution for buying and selling items easily.
        </p>
      </main>

      {/* Footer Section */}
      <footer className="bg-indigo-600 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Brand Info */}
          <div>
            <h2 className="text-2xl font-semibold">Olxified</h2>
            <p className="mt-3 text-gray-200 text-sm">
              Connecting buyers and sellers with ease and reliability.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-200">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h3 className="text-xl font-medium mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="h-10 rounded-1xl text-white w-full p-2  focus:outline-none border-2 border-indigo-900"
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-indigo-400 mt-8 pt-4 text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Olxified. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
