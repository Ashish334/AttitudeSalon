import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const tabs = ['All', 'Haircuts', 'Color', 'Beard', 'Makeup', 'Interior'];

const photos = [
  { src: 'https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg', cat: 'Haircuts', label: 'Modern Haircut' },
  { src: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg', cat: 'Interior', label: 'Salon Interior' },
  { src: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg', cat: 'Color', label: 'Hair Coloring' },
  { src: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg', cat: 'Beard', label: 'Beard Styling' },
  { src: 'https://images.pexels.com/photos/2060211/pexels-photo-2060211.jpeg', cat: 'Makeup', label: 'Bridal Look' },
  { src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg', cat: 'Interior', label: 'Premium Lounge' },
  { src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg', cat: 'Haircuts', label: 'Women Styling' },
  { src: 'https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg', cat: 'Haircuts', label: 'Hair Treatment' },
  { src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg', cat: 'Haircuts', label: 'Precision Cut' },
  { src: 'https://images.pexels.com/photos/3985359/pexels-photo-3985359.jpeg', cat: 'Makeup', label: 'Facial Care' },
  { src: 'https://images.pexels.com/photos/3762880/pexels-photo-3762880.jpeg', cat: 'Color', label: 'Balayage' },
  { src: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg', cat: 'Makeup', label: 'Nail Art' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === 'All' ? photos : photos.filter((p) => p.cat === active);

  return (
    <section id="gallery" className="py-24 bg-salon-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Our Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            Gallery of <span className="text-gold-400 italic">Transformations</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real results from real clients. See the magic we create every day.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === t
                  ? 'bg-gold-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((p) => (
            <div
              key={p.src}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setLightbox(p.src)}
            >
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn size={24} className="text-white mx-auto mb-1" />
                  <span className="text-white text-xs font-medium">{p.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gold-400 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightbox}
            alt="Enlarged view"
            className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
