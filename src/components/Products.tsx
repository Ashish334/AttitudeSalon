import { ShoppingBag } from "lucide-react";

const WHATSAPP = "917045641399";

const products = [
  {
    name: "Dione Keratin Duo Shampoo & Conditioner",
    desc: "Argan oil and keratin-infused shampoo & conditioner for smooth, shiny, and healthy-looking hair.",
    price: "₹2000",
    image: "/images/products/KeratinDuo.webp",
    tag: "Best Seller",
  },
  {
    name: "Beardo Godfather Beard Oil Lite",
    desc: "A premium lightweight beard oil that nourishes, softens, and adds a healthy shine for a well-groomed beard look.",
    price: "₹350",
    image: "/images/products/BeardOil.webp",
    tag: "",
  },
  {
    name: "MG5 Hair Wax",
    desc: "Strong hold hair wax for long-lasting style, texture, and a smooth matte finish.",
    price: "₹225",
    image: "/images/products/HairWax.webp",
    tag: "New",
  },
  {
    name: "Biolage Smoothproof Serum",
    desc: "Lightweight avocado-infused serum that smooths frizz and adds silky shine to hair.",
    price: "₹350",
    image: "/images/products/Smoothproof.webp",
    tag: "",
  },
  {
    name: "Dione Keratin Serum",
    desc: "Argan oil and keratin-infused serum that nourishes hair, controls frizz, and adds silky shine.",
    price: "₹799",
    image: "/images/products/KeratinSerum.webp",
    tag: "Popular",
  },
  {
    name: "Osis+ Flexwax",
    desc: "Strong hold styling wax that adds texture, definition, and long-lasting control for all hair types.",
    price: "₹1100",
    image: "/images/products/Flexwax.webp",
    tag: "",
  },
  {
    name: "Actrix Powder Wax",
    desc: "Lightweight powder wax that adds instant volume, texture, and strong long-lasting hold.",
    price: "₹425",
    image: "/images/products/ActrixPowderWax.webp",
    tag: "",
  },
  {
    name: "Toppik Hair Fibers",
    desc: "Instant hair building fibers that add natural-looking volume and fuller coverage for thinning hair.",
    price: "₹999",
    image: "/images/products/ToppikHairFibers.webp",
    tag: "",
  },
  {
    name: "Lotus Professional Phyto Rx Face Wash",
    desc: "Gentle face washes that deeply cleanse, brighten skin, and help control oil for a fresh healthy glow.",
    price: "₹495-₹440",
    image: "/images/products/LotusFaceWash.webp",
    tag: "",
  },
  {
    name: "Co Luxury Hair Finishing Stick",
    desc: "Smooth finishing stick that tames flyaways and keeps hair sleek, neat, and long-lasting.",
    price: "₹350",
    image: "/images/products/CoLuxuryHairFinishingStick.webp",
    tag: "",
  },
  {
    name: "One Home Care Duo",
    desc: "Nourishing shampoo and conditioner enriched with active oils for soft, smooth, and healthy-looking hair.",
    price: "₹3400",
    image: "/images/products/OneHomeCareDuo.webp",
    tag: "",
  },
  {
    name: "911 Shampoo & Conditioner Duo",
    desc: "Nourishing haircare duo that hydrates, softens, and keeps hair healthy and manageable.",
    price: "₹4230",
    image: "/images/products/911Duo.webp",
    tag: "",
  },
  {
    name: "L’Oréal Absolut Repair Molecular Duo",
    desc: "Advanced shampoo and mask duo that deeply repairs damaged hair for stronger, smoother, and healthier-looking results.",
    price: "₹3000",
    image: "/images/products/LOrealAbsolutRepairMolecularDuo.webp",
    tag: "",
  },
  {
    name: "L’Oréal Xtenso Care Duo",
    desc: "Keratin-enriched shampoo and masque that smooth frizz, strengthen hair, and add lasting shine.",
    price: "₹2395",
    image: "/images/products/LOrealXtensoCareDuo.webp",
    tag: "",
  },
  {
    name: "L’Oréal Absolut Repair Duo",
    desc: "Professional repair shampoo and masque that deeply nourish damaged hair for softness, strength, and shine.",
    price: "₹1835",
    image: "/images/products/LOrealAbsolutRepairDuo.webp",
    tag: "",
  },
  {
    name: "L'Oréal Professionnel Liss Unlimited",
    desc: "Smooth and tame unruly hair with this pro-keratin infused shampoo and mask duo for silky, frizz-free shine.",
    price: "₹1835",
    image: "/images/products/LOrealProfessionnelLiss.webp",
    tag: "",
  },
];

function orderLink(product: any) {
  const imageUrl = `https://attitudeunisexsalon.com${product.image}`;

  const msg = encodeURIComponent(
    `✨ *Attitude Unisex Salon* ✨

🛍️ *Product:* ${product.name}

💰 *Price:* ${product.price}

📝 *Product Details:*
${product.desc}

🖼️ *Product Image:*
${imageUrl}

📍 Attitude Unisex Salon
Thank you for choosing us ❤️`,
  );

  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Our Store</p>
          <h2 className="section-title">Premium Hair & Beauty Products</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-3">
            Professional salon-grade products available for home use. Order
            directly via WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-salon-cream rounded-2xl overflow-hidden shadow-sm card-hover group border border-gold-100"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-gold-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-salon-dark mb-1">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-salon-dark font-bold text-xl">
                    {p.price}
                  </span>
                  <a
                    href={orderLink(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                  >
                    <ShoppingBag size={14} />
                    Order Now
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
