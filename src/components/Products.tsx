import { ShoppingBag } from 'lucide-react';

const WHATSAPP = '919999999999';

const products = [
  {
    name: 'Keratin Hair Serum',
    desc: 'Smoothens frizz, adds shine and protects against heat damage.',
    price: '₹549',
    image: 'https://images.pexels.com/photos/3737573/pexels-photo-3737573.jpeg',
    tag: 'Best Seller',
  },
  {
    name: 'Argan Oil Shampoo',
    desc: 'Sulfate-free nourishing shampoo for dry and damaged hair.',
    price: '₹399',
    image: 'https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg',
    tag: '',
  },
  {
    name: 'Beard Growth Wax',
    desc: 'Holds, conditions and promotes healthy beard growth.',
    price: '₹299',
    image: 'https://images.pexels.com/photos/4068313/pexels-photo-4068313.jpeg',
    tag: 'New',
  },
  {
    name: 'Deep Conditioning Mask',
    desc: 'Intensive repair mask for strong, lustrous hair.',
    price: '₹449',
    image: 'https://images.pexels.com/photos/3762880/pexels-photo-3762880.jpeg',
    tag: '',
  },
  {
    name: 'Vitamin C Face Serum',
    desc: 'Brightens skin tone and reduces dark spots with daily use.',
    price: '₹699',
    image: 'https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg',
    tag: 'Popular',
  },
  {
    name: 'Hair Color Kit',
    desc: 'Professional-grade ammonia-free hair color in 20+ shades.',
    price: '₹349',
    image: 'https://images.pexels.com/photos/3992866/pexels-photo-3992866.jpeg',
    tag: '',
  },
];

function orderLink(product: string) {
  const msg = encodeURIComponent(`Hi, I'd like to order ${product}. Please share the details.`);
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
            Professional salon-grade products available for home use. Order directly via WhatsApp.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.name} className="bg-salon-cream rounded-2xl overflow-hidden shadow-sm card-hover group border border-gold-100">
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
                <h3 className="font-heading font-semibold text-lg text-salon-dark mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-salon-dark font-bold text-xl">{p.price}</span>
                  <a
                    href={orderLink(p.name)}
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
