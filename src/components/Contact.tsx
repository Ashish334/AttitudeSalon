import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const WHATSAPP = "917045641399";
const MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.180140714947!2d72.83856507337265!3d19.205160147908718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b77d4aa54bcb%3A0xe8b969002810316d!2sAtittude%20Unisex%20Salon!5e1!3m2!1sen!2sin!4v1779021698484!5m2!1sen!2sin";

const hours = [
  { day: "Monday", time: "11:00 AM – 8:00 PM" },
  { day: "Tuesday – Sunday", time: "10:00 AM – 10:00 PM" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">
            Visit Us or <span className="text-gold-600 italic">Say Hello</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="tel:+917045641399"
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-salon-cream transition-colors group"
              >
                <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <Phone
                    size={20}
                    className="text-gold-600 group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <div className="font-semibold text-salon-dark">Phone</div>
                  <div className="text-gray-500 text-sm">+91 70456 41399</div>
                  <div className="text-gold-600 text-xs font-medium mt-0.5">
                    Click to call
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-green-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-green-500 group-hover:text-white fill-current transition-colors"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-salon-dark">WhatsApp</div>
                  <div className="text-gray-500 text-sm">+91 70456 41399</div>
                  <div className="text-green-600 text-xs font-medium mt-0.5">
                    Chat with us
                  </div>
                </div>
              </a>

              <a
                href="mailto:pinkyyverma520@gmail.com"
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-salon-cream transition-colors group"
              >
                <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-600 transition-colors">
                  <Mail
                    size={20}
                    className="text-gold-600 group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <div className="font-semibold text-salon-dark">Email</div>
                  <div className="text-gray-500 text-sm">
                    pinkyyverma520@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl">
                <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold-600" />
                </div>
                <div>
                  <div className="font-semibold text-salon-dark">Address</div>
                  <div className="text-gray-500 text-sm">
                    Shop No.1, Burhani Heritage, M.G Road,
                    <br />
                    Kandivali (W), Mumbai – 400067,
                    <br />
                    Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-salon-cream rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-gold-600" />
                <h3 className="font-heading font-semibold text-salon-dark">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="text-salon-dark font-medium">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-gray-500 text-sm mb-3">
                Follow us on social media
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/attitude_unisex_salon?igsh=NG01cDVpNHRqbnhj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/share/18B7fvMYNU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl h-[500px]">
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
    </section>
  );
}
