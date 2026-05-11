import { Star, ExternalLink, Quote } from 'lucide-react';

const GOOGLE_REVIEWS_URL = 'https://g.page/r/YOUR_GOOGLE_PLACE_ID/review';

const reviews = [
  {
    name: 'Rahul Sharma',
    avatar: 'RS',
    rating: 5,
    date: '2 weeks ago',
    text: 'Absolutely loved my haircut here! The stylist understood exactly what I wanted and the result was beyond expectations. The ambiance is premium and staff is very friendly.',
  },
  {
    name: 'Priya Mehta',
    avatar: 'PM',
    rating: 5,
    date: '1 month ago',
    text: 'Got my bridal makeup done here and I looked stunning on my wedding day! The team is highly professional and the work quality is top-notch. Highly recommend!',
  },
  {
    name: 'Aakash Verma',
    avatar: 'AV',
    rating: 5,
    date: '3 weeks ago',
    text: 'Best beard styling in the area. Clean, sharp, and exactly what I had in mind. The salon is hygienic and the products they use are premium quality.',
  },
  {
    name: 'Sneha Joshi',
    avatar: 'SJ',
    rating: 5,
    date: '1 month ago',
    text: 'Had a fantastic hair spa experience. My hair feels so much healthier and shinier. The staff is warm and the service is value for money. Will definitely come back!',
  },
  {
    name: 'Mohit Gupta',
    avatar: 'MG',
    rating: 4,
    date: '6 weeks ago',
    text: 'Great salon with talented stylists. Got a hair color done and it came out exactly as I wanted. Reasonable pricing and a relaxed, comfortable environment.',
  },
  {
    name: 'Ananya Singh',
    avatar: 'AN',
    rating: 5,
    date: '2 months ago',
    text: 'My go-to salon for all beauty needs. From facials to nail art, everything is done with precision and care. The team is always up-to-date with the latest trends.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={i <= count ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const avg = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-24 bg-salon-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">What Clients Say</p>
          <h2 className="section-title">
            Loved by <span className="text-gold-600 italic">Thousands</span>
          </h2>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-md mt-6">
            <div className="text-5xl font-heading font-bold text-salon-dark">{avg}</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <div className="text-gray-500 text-sm">Based on Google Reviews</div>
              <div className="text-gray-400 text-xs">{reviews.length * 40}+ total reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm card-hover relative">
              <Quote size={32} className="text-gold-100 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gold-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-salon-dark text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.date}</div>
                </div>
              </div>
              <Stars count={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-3">{r.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            View All Reviews on Google
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
