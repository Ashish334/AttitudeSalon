import { Phone, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP = "917045641399";

const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.180140714947!2d72.83856507337265!3d19.205160147908718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b77d4aa54bcb%3A0xe8b969002810316d!2sAtittude%20Unisex%20Salon!5e1!3m2!1sen!2sin!4v1779021698484!5m2!1sen!2sin";

const hours = [
  { day: "Monday", time: "11:00 AM – 8:00 PM" },
  { day: "Tuesday – Sunday", time: "10:00 AM – 10:00 PM" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-salon-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Get In Touch</p>

          <h2 className="section-title">
            Visit Us or <span className="text-gold-600 italic">Say Hello</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            Experience premium grooming and beauty services in a luxurious,
            relaxing environment crafted for your comfort and style.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Phone */}
              <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-gold-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center mb-5">
                  <Phone size={22} className="text-gold-600" />
                </div>

                <h3 className="font-heading font-semibold text-lg text-salon-dark mb-4">
                  Call Us
                </h3>

                <div className="space-y-3">
                  <a
                    href="tel:+917045641399"
                    className="flex items-center justify-between bg-gold-50 hover:bg-gold-100 px-4 py-3 rounded-2xl transition-all duration-300 group"
                  >
                    <span className="text-salon-dark font-medium">
                      +91 70456 41399
                    </span>

                    <span className="text-gold-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Call →
                    </span>
                  </a>

                  <a
                    href="tel:+919930574048"
                    className="flex items-center justify-between bg-gold-50 hover:bg-gold-100 px-4 py-3 rounded-2xl transition-all duration-300 group"
                  >
                    <span className="text-salon-dark font-medium">
                      +91 99305 74048
                    </span>

                    <span className="text-gold-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                      Call →
                    </span>
                  </a>
                </div>

                <p className="text-gold-600 text-xs font-medium mt-4">
                  Tap any number to call instantly
                </p>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-green-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-5 group-hover:bg-green-500 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-green-500 group-hover:text-white fill-current transition-colors"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </div>

                <h3 className="font-heading font-semibold text-lg text-salon-dark mb-1">
                  WhatsApp
                </h3>

                <p className="text-gray-500 text-sm">
                  Quick bookings & support
                </p>

                <p className="text-green-600 text-xs font-medium mt-2">
                  Chat with us instantly
                </p>
              </a>

              {/* Email */}
              <a
                href="mailto:pinkyyverma520@gmail.com"
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-gold-100 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center mb-5 group-hover:bg-gold-600 transition-colors">
                  <Mail
                    size={22}
                    className="text-gold-600 group-hover:text-white transition-colors"
                  />
                </div>

                <h3 className="font-heading font-semibold text-lg text-salon-dark mb-1">
                  Email
                </h3>

                <p className="text-gray-500 text-sm break-all">
                  pinkyyverma520@gmail.com
                </p>
              </a>

              {/* Address */}
              <div className="bg-white rounded-3xl p-6 shadow-md border border-gold-100">
                <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center mb-5">
                  <MapPin size={22} className="text-gold-600" />
                </div>

                <h3 className="font-heading font-semibold text-lg text-salon-dark mb-1">
                  Location
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Shop No.1, Burhani Heritage, M.G Road, Kandivali (W), Mumbai –
                  400067
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-black rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/20 flex items-center justify-center">
                    <Clock size={20} className="text-gold-400" />
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-semibold">
                      Business Hours
                    </h3>

                    <p className="text-gray-400 text-sm">
                      We are open all week
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between border-b border-white/10 pb-3"
                    >
                      <span className="text-gray-300">{h.day}</span>

                      <span className="text-gold-400 font-medium">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-gold-400 to-gold-600 rounded-[2rem] blur-xl opacity-20" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[620px] border border-gold-100">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon location on Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
