"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-black text-white py-24 px-6" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-400 font-semibold mb-4">
            ABOUT US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A New Era Of
            <span className="text-purple-400"> Smart Learning</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            We empower students with future-ready education,
            practical exposure, innovation-driven learning,
            and strong industry collaboration.
          </p>

          <button className="mt-8 bg-purple-500 hover:bg-purple-600 px-7 py-3 rounded-full transition">
            Discover More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-lg">
            <h3 className="text-4xl font-bold text-purple-400">50+</h3>
            <p className="text-gray-300 mt-2">Industry Partnerships</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-lg">
            <h3 className="text-4xl font-bold text-purple-400">10K+</h3>
            <p className="text-gray-300 mt-2">Students Enrolled</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-lg">
            <h3 className="text-4xl font-bold text-purple-400">95%</h3>
            <p className="text-gray-300 mt-2">Placement Support</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-lg">
            <h3 className="text-4xl font-bold text-purple-400">100+</h3>
            <p className="text-gray-300 mt-2">Expert Faculties</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}