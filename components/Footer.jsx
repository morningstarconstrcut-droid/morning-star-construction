import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* ================= CONTACT / CTA ================= */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-yellow-500 mb-4">Morning Star Construction</h3>
          <p className="mb-2">Serving Victoria, TX with reliable construction services.</p>
          <p className="mb-2">Phone: <a href="tel:3617883004" className="hover:text-yellow-500 transition">(361) 788-3004</a></p>
          <p>Email: <a href="mailto:morningstarconstruct@gmail.com" className="hover:text-yellow-500 transition">morningstarconstruct@gmail.com</a></p>
          <Link
            href="/contact"
            className="inline-block mt-4 bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Request a Quote
          </Link>
        </div>

        {/* ================= SERVICE LINKS ================= */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-yellow-500 mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/remodeling" className="hover:text-yellow-500 transition">
                Remodeling & Renovations
              </Link>
            </li>
            <li>
              <Link href="/services/roofing" className="hover:text-yellow-500 transition">
                Roofing
              </Link>
            </li>
            <li>
              <Link href="/services/Masonry" className="hover:text-yellow-500 transition">
                Masonry & Brickwork
              </Link>
            </li>
            <li>
              <Link href="/services/Ext" className="hover:text-yellow-500 transition">
                Exterior Construction
              </Link>
            </li>
            <li>
              <Link href="/services/Int" className="hover:text-yellow-500 transition">
                Interior Finishes
              </Link>
            </li>
          </ul>
        </div>

        {/* ================= PAGES & LOCAL LINKS ================= */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <span>Victoria, TX</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Morning Star Construction. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
