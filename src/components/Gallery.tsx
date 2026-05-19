import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const tabs = ["All", "Haircuts", "Color", "Beard", "Makeup", "Interior"];

const photos = [
  {
    src: "/images/gallery/about1.webp",
    cat: "Interior",
    label: "Salon Interior",
  },
  {
    src: "/images/gallery/g1.webp",
    cat: "Interior",
    label: "Salon Interior",
  },
  {
    src: "/images/gallery/g2.webp",
    cat: "Interior",
    label: "Salon Interior",
  },
  {
    src: "/images/gallery/g3.webp",
    cat: "Interior",
    label: "Salon Interior",
  },
  {
    src: "/images/gallery/g4.webp",
    cat: "Interior",
    label: "Salon Interior",
  },
  {
    src: "/images/gallery/g5.webp",
    cat: "Interior",
    label: "Salon Interior",
  },
  {
    src: "/images/gallery/about2.webp",
    cat: "Haircuts",
    label: "Modern Haircut",
  },
  {
    src: "/images/gallery/g6.webp",
    cat: "Haircuts",
    label: "Modern Haircut",
  },
  {
    src: "/images/gallery/g8.webp",
    cat: "Haircuts",
    label: "Modern Haircut",
  },
  {
    src: "/images/gallery/menshaircut.webp",
    cat: "Haircuts",
    label: "Modern Haircut",
  },
  {
    src: "/images/gallery/g9.webp",
    cat: "Color",
    label: "Hair Coloring",
  },
  {
    src: "/images/gallery/g7.webp",
    cat: "Color",
    label: "Hair Coloring",
  },
  {
    src: "/images/gallery/HairColoring.webp",
    cat: "Color",
    label: "Hair Coloring",
  },
  {
    src: "/images/gallery/menscolor.webp",
    cat: "Color",
    label: "Mens Hair Coloring",
  },
  {
    src: "/images/gallery/BeardStyling.webp",
    cat: "Beard",
    label: "Beard Styling",
  },
  {
    src: "/images/gallery/beard1.webp",
    cat: "Beard",
    label: "Beard Styling",
  },
  {
    src: "/images/gallery/beard2.webp",
    cat: "Beard",
    label: "Beard Styling",
  },
  {
    src: "/images/gallery/g10.webp",
    cat: "Makeup",
    label: "Bridal Look",
  },
  {
    src: "/images/gallery/g11.webp",
    cat: "Haircuts",
    label: "Women Styling",
  },
  {
    src: "/images/gallery/FacialSkincare.webp",
    cat: "Makeup",
    label: "Facial Care",
  },
  {
    src: "/images/gallery/WaxingThreading.webp",
    cat: "Waxing Threading",
    label: "Waxing and Threading",
  },
  {
    src: "/images/gallery/ManicurePedicure.webp",
    cat: "Manicure Pedicure",
    label: "Manicure and Pedicure",
  },
  {
    src: "/images/gallery/HairSpa.webp",
    cat: "Haircuts",
    label: "Hair Spa",
  },
  {
    src: "/images/gallery/BridalMakeup.webp",
    cat: "Makeup",
    label: "Bridal Look",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All" ? photos : photos.filter((p) => p.cat === active);

  return (
    <section id="gallery" className="py-24 bg-salon-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Our Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            Gallery of{" "}
            <span className="text-gold-400 italic">Transformations</span>
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
                  ? "bg-gold-600 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
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
                  <span className="text-white text-xs font-medium">
                    {p.label}
                  </span>
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
