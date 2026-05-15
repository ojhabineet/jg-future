import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-3xl font-bold text-purple-400">
            JG Future
          </h2>

          <p className="text-gray-400 mt-4">
            Empowering students with future-ready education and innovation.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Programs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Programs
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Computer Science</li>
            <li>Artificial Intelligence</li>
            <li>Cyber Security</li>
            <li>Business Analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">
            Contact
          </h3>

          <div className="space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>contact@jgfuture.edu</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Ahmedabad, India</span>
            </div>

          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12">
        © 2026 JG Future. All rights reserved.
      </div>
    </footer>
  );
}