import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <Sparkles size={16} className="text-gold-400" />
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
            Premium Unisex Salon
          </span>
          <Sparkles size={16} className="text-gold-400" />
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-slide-up leading-tight">
          Attitude
          <br />
          <span className="text-gold-400 italic">Unisex Salon</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-light italic font-heading mb-8 animate-fade-in">
          Style that defines you
        </p>

        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in">
          Experience the art of grooming and beauty in a space crafted for you.
          Every cut, every style, every treatment — tailored to perfection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <a href="#booking" className="btn-gold text-base px-8 py-4">
            Book Appointment
          </a>
          <a href="#services" className="btn-outline border-white/60 text-white hover:bg-white/10 hover:border-white text-base px-8 py-4">
            Explore Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto animate-fade-in">
          {[
            { num: '5000+', label: 'Happy Clients' },
            { num: '8+', label: 'Years Experience' },
            { num: '15+', label: 'Expert Stylists' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-gold-400 font-heading font-bold text-2xl">{s.num}</div>
              <div className="text-gray-400 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-gold-400 transition-colors animate-float"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
