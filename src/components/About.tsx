import { Award, Users, Clock, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    desc: "Top-grade products and expert techniques for every service.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Skilled professionals trained in the latest trends and styles.",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    desc: "Open daily with flexible timings to fit your schedule.",
  },
  {
    icon: Heart,
    title: "Client First",
    desc: "Your satisfaction and comfort are always our top priority.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/about/SalonInterior.webp"
                alt="Salon interior"
                className="rounded-2xl w-full h-72 object-cover shadow-xl"
              />
              <img
                src="/images/about/StylingSession.webp"
                alt="Styling session"
                className="rounded-2xl w-full h-72 object-cover shadow-xl mt-8"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 left-8 bg-gold-600 text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="font-heading font-bold text-3xl">8+</div>
              <div className="text-gold-100 text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-subtitle">Who We Are</p>
            <h2 className="section-title">
              More Than Just a Salon —<br />
              <span className="text-gold-600 italic">An Experience</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to <strong>Attitude Unisex Salon</strong> — where every
              visit is a transformation. We blend modern techniques with
              personalized care to bring out the very best in you. Whether
              you're here for a quick trim or a full makeover, we make every
              moment count.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of experienced stylists, colorists, and beauticians are
              passionate about their craft and dedicated to making you look and
              feel extraordinary.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-salon-dark text-sm">
                      {title}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#booking" className="btn-gold inline-block mt-8">
              Book Your Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
