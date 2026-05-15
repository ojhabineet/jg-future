"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#12051f] via-black to-[#071224]" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-purple-400 uppercase tracking-[0.3em] font-semibold">
            Admissions Open 2026
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">

            Empower Your
            <span className="text-purple-400"> Future </span>
            With Innovation

          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-2xl">
            Experience world-class education, cutting-edge technology,
            industry-focused learning, and global career opportunities
            designed for future leaders.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">

            <button className="bg-purple-500 hover:bg-purple-600 transition px-8 py-4 rounded-full font-semibold hover:scale-105">
              Apply Now
            </button>

            <button className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-full">
              Enquiry
            </button>

            <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-full font-semibold hover:scale-105">
              Free Psychometric Test
            </button>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-purple-400">
                15K+
              </h2>

              <p className="text-gray-400 mt-2">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-400">
                250+
              </h2>

              <p className="text-gray-400 mt-2">
                Recruiters
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-purple-400">
                95%
              </h2>

              <p className="text-gray-400 mt-2">
                Placements
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* Main Image Card */}
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-xl">

            <img
              src="https://jguni.in/images/2.png"
              alt="University Student"
              className="w-full h-[700px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          </div>

          {/* Floating Info Card */}
          <div className="absolute -bottom-8 -left-8 bg-black/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">

            <h3 className="text-2xl font-bold">
              #1 Emerging University
            </h3>

            <p className="text-gray-300 mt-2">
              Excellence • Innovation • Careers
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
