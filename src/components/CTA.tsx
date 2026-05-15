export default function CTA() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-[40px] p-12 md:p-20 text-center">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready To Build
            <br />
            Your Future?
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Join a modern learning ecosystem designed for innovation,
            creativity, and career success.
          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}