import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer */}
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.webp"
              alt="Attitude Unisex Salon"
              className="h-20 w-auto mb-4"
            />

            <p className="text-gray-300 text-sm leading-relaxed">
              Premium unisex salon offering luxury hair, beauty, skincare,
              makeup and grooming services in Mumbai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#home"
                className="text-gray-300 hover:text-gold-400 transition-colors"
              >
                Home
              </a>

              <a
                href="#services"
                className="text-gray-300     hover:text-gold-400 transition-colors"
              >
                Services
              </a>

              <a
                href="#products"
                className="text-gray-300 hover:text-gold-400 transition-colors"
              >
                Products
              </a>

              <a
                href="#reviews"
                className="text-gray-300 hover:text-gold-400 transition-colors"
              >
                Reviews
              </a>

              <a
                href="#contact"
                className="text-gray-300 hover:text-gold-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-300">
              <p>+91 70456 41399</p>
              <p>pinkyyverma520@gmail.com</p>
              <p>Kandivali (W), Mumbai, Maharashtra</p>
              <p className="text-gold-400">Open Monday: 11 AM – 08 PM</p>
              <p className="text-gold-400">Open Other Days: 10 AM – 10 PM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">
              Follow Us
            </h3>

            <div className="flex gap-4 mb-5">
              <a
                href="https://www.instagram.com/attitude_unisex_salon?igsh=NG01cDVpNHRqbnhj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/18B7fvMYNU/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Facebook size={18} />
              </a>
            </div>

            <a
              href="https://wa.me/917045641399"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left hover:text-gold-400 transition-colors">
            © 2026 Attitude Unisex Salon. All rights reserved.
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
            <img
              src="/images/developedby.jpeg"
              alt="Developer Logo"
              className="h-5 w-auto object-contain opacity-80"
            />

            <p className="text-sm hover:text-gold-400 transition-colors">
              Designed & Developed by Sankatha One Solution
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
