import { MessageCircle } from 'lucide-react';

const WHATSAPP = '919999999999'; // replace with actual number

const services = [
  {
    name: 'Haircut & Styling',
    desc: 'Precision cuts tailored to your face shape and personality. For men and women.',
    price: '₹299 onwards',
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg',
  },
  {
    name: 'Beard Styling',
    desc: 'Expert shaping, trimming and grooming for a sharp and clean beard look.',
    price: '₹199 onwards',
    image: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg',
  },
  {
    name: 'Hair Coloring',
    desc: 'Global, highlights, balayage and more using premium color brands.',
    price: '₹999 onwards',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
  },
  {
    name: 'Facial & Skincare',
    desc: 'Deep cleansing, brightening and anti-aging facials for glowing skin.',
    price: '₹499 onwards',
    image: 'https://images.pexels.com/photos/3985359/pexels-photo-3985359.jpeg',
  },
  {
    name: 'Bridal Makeup',
    desc: 'Complete bridal packages for your most special day — traditional or modern.',
    price: '₹4999 onwards',
    image: 'https://images.pexels.com/photos/2060211/pexels-photo-2060211.jpeg',
  },
  {
    name: 'Hair Spa',
    desc: 'Nourishing spa treatments that repair, hydrate and restore hair vitality.',
    price: '₹699 onwards',
    image: 'https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg',
  },
  {
    name: 'Manicure & Pedicure',
    desc: 'Relaxing hand and foot care with premium products and nail art options.',
    price: '₹399 onwards',
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg',
  },
  {
    name: 'Waxing & Threading',
    desc: 'Smooth and gentle hair removal services for face and body.',
    price: '₹149 onwards',
    image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg',
  },
];

function whatsappLink(service: string) {
  const msg = encodeURIComponent(`Hi, I'm interested in ${service} service. Can you please share more details?`);
  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-salon-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title">Our Premium Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-3">
            From everyday grooming to special occasions — we have the perfect service for every need.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-salon-dark mb-1">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-600 font-semibold text-sm">{s.price}</span>
                  <a
                    href={whatsappLink(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
                  >
                    <MessageCircle size={13} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
