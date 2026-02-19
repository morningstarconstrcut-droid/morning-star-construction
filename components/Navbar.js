"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close dropdowns on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const servicesLinks = [
    { href: "/services/Masonry", label: "Masonry / Brickwork" },
    { href: "/services/roofing", label: "Roofing" },
    { href: "/services/remodeling", label: "Remodeling / Renovations" },
    { href: "/services/Ext", label: "Exterior Construction" },
    { href: "/services/Int", label: "Interior Finishes" },
  ];

  return (
    <nav className="w-full bg-black text-white fixed top-0 z-50 shadow-md left-0">
      <div className="max-w-8xl mx-auto flex justify-between items-center py-4 px-6 md:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/dove.png"
            alt="Morning Star Construction"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="text-2xl md:text-3xl font-bold">
            Morning Star Construction
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10 text-xl">
          {/* Services Dropdown */}
          <div className="relative flex items-center space-x-1">
            {/* Clicking text navigates */}
            <Link href="/services" className="hover:text-yellow-500 transition">
              Services
            </Link>

            {/* Clicking arrow toggles dropdown */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              style={{ fontSize: "0.8rem" }}
              className="text-white hover:text-yellow-500 transition"
              aria-label="Toggle Services Dropdown"
            >
              ▼
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-56 bg-black border border-gray-700 rounded shadow-lg"
                >
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}
          <Link href="/about" className="hover:text-yellow-500 transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-yellow-500 transition">
            Blog
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white hover:text-yellow-500 transition text-2xl"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-2 text-lg">
              <Link
                href="/services"
                className="hover:text-yellow-500 transition"
              >
                Services
              </Link>
              {/* Mobile services dropdown */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-left hover:text-yellow-500 transition"
              >
                More Services ▼
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 flex flex-col space-y-1"
                  >
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="hover:text-yellow-500 transition"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <Link href="/about" className="hover:text-yellow-500 transition">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-yellow-500 transition">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
