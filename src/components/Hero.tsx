"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40" />

      {/* Floating Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-purple-400 font-semibold tracking-widest uppercase mb-6">
            Future Ready Education
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Build Your
            <span className="text-purple-400"> Dream </span>
            Career
          </h1>

          <p className="mt-8 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Experience next-generation learning with innovation,
            technology, industry mentorship, and real-world exposure.
          </p>

          <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">

            <button className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-full font-semibold transition hover:scale-105">
              Explore Programs
            </button>

            <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full transition">
              Campus Tour
            </button>

          </div>
        </motion.div>

        {/* Floating Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >
            <h2 className="text-4xl font-bold text-purple-400">
              95%
            </h2>

            <p className="text-gray-300 mt-3">
              Placement Support
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >
            <h2 className="text-4xl font-bold text-purple-400">
              10K+
            </h2>

            <p className="text-gray-300 mt-3">
              Students Enrolled
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >
            <h2 className="text-4xl font-bold text-purple-400">
              250+
            </h2>

            <p className="text-gray-300 mt-3">
              Industry Collaborations
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}