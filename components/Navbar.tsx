"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-white">
          JG University
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white">
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>

          <a href="#features" className="hover:text-purple-400 transition">
            Features
          </a>

          <a href="#testimonials" className="hover:text-purple-400 transition">
            Testimonials
          </a>

          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>

        <button className="hidden md:block bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-full text-white font-medium transition">
          Apply Now
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-6 text-white">

              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>

              <button className="bg-purple-500 px-6 py-3 rounded-full">
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
