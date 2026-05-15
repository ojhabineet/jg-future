export default function CampusLife() {
  return (
    <section className="py-24 bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Campus Life
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Learn, Innovate & Grow
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-80 w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-80 w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl h-80 w-full object-cover"
            alt=""
          />

        </div>

      </div>

    </section>
  );
}