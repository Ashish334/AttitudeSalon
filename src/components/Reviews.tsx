import { Star, ExternalLink, Quote, Copy, CheckCircle2 } from "lucide-react";

import { useState } from "react";

const GOOGLE_REVIEWS_URL =
  "https://search.google.com/local/writereview?placeid=ChIJy0ulSn235zsRbTEQKABpueg";

/* =========================
   GOOGLE REVIEW REPLIES
========================= */

const happyReplies = [
  "Thank you so much for your valuable feedback. We are delighted that you loved our service and look forward to welcoming you again at Attitude Unisex Salon.",

  "Thank you for your wonderful review. Your support motivates our team to continue providing the best salon experience.",

  "We truly appreciate your kind words and are glad you enjoyed your experience with us. Looking forward to serving you again soon.",

  "Thank you for trusting Attitude Unisex Salon. We’re happy to know you had a great experience with our team and services.",

  "Your feedback means a lot to us. Thank you for visiting Attitude Unisex Salon and sharing your experience.",
];

const premiumReplies = [
  "Thank you for choosing Attitude Unisex Salon. It was a pleasure serving you and we are delighted to know you had a premium salon experience with us.",

  "We sincerely appreciate your kind review. Your satisfaction inspires us to continue delivering luxury beauty and grooming services.",

  "Thank you for your wonderful support. We are thrilled to know our services exceeded your expectations and we look forward to your next visit.",
];

const complaintReplies = [
  "Thank you for sharing your feedback. We sincerely apologize for your experience and would love the opportunity to improve and serve you better.",

  "We appreciate your honest review. Your feedback is important to us and we will work on improving our services.",

  "We’re sorry your experience did not meet expectations. Thank you for bringing this to our attention and helping us improve.",
];

/* =========================
   REVIEWS
========================= */

const reviews = [
  {
    name: "Nitesh Pedigar",
    avatar: "/images/review/nitesh-pedigar.webp",
    rating: 5,
    date: "2 weeks ago",
    service: "Haircut",
    text: "Absolutely loved my haircut here! The stylist understood exactly what I wanted and the result was beyond expectations.",
  },
  {
    name: "Bobby S Rathod",
    avatar: "/images/review/bobby-rathod.webp",
    rating: 5,
    date: "1 month ago",
    service: "Bridal Makeup",
    text: "Got my bridal makeup done here and I looked stunning on my wedding day! Highly recommended salon.",
  },
  {
    name: "Krish Patel",
    avatar: "/images/review/krish-patel.webp",
    rating: 5,
    date: "3 weeks ago",
    service: "Beard Styling",
    text: "Best beard styling in the area. Clean, sharp and exactly what I wanted.",
  },
  {
    name: "Rinku Rathod",
    avatar: "/images/review/rinku-rathod.webp",
    rating: 5,
    date: "1 month ago",
    service: "Hair Spa",
    text: "Fantastic hair spa experience. My hair feels healthier and shinier.",
  },
  {
    name: "Amee Parekh",
    avatar: "/images/review/amee-parekh.webp",
    rating: 4,
    date: "6 weeks ago",
    service: "Hair Color",
    text: "Great salon with talented stylists. Loved the final hair color result.",
  },
  {
    name: "Dr. Nidhi Shah",
    avatar: "/images/review/nidhi-shah.webp",
    rating: 5,
    date: "2 months ago",
    service: "Facial",
    text: "My go-to salon for all beauty services. Professional and friendly team.",
  },
];

/* =========================
   STARS
========================= */

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          className={
            i <= count ? "text-gold-500 fill-gold-500" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

/* =========================
   COMPONENT
========================= */

export default function Reviews() {
  const [copied, setCopied] = useState("");

  const avg = (
    reviews.reduce((a, r) => a + r.rating, 0) / reviews.length
  ).toFixed(1);

  /* =========================
     RANDOM REPLY GENERATOR
  ========================= */

  function randomReply(type: string) {
    let replies = happyReplies;

    if (type === "premium") {
      replies = premiumReplies;
    }

    if (type === "complaint") {
      replies = complaintReplies;
    }

    return replies[Math.floor(Math.random() * replies.length)];
  }

  /* =========================
     COPY REPLY
  ========================= */

  const copyReply = (type: string) => {
    navigator.clipboard.writeText(randomReply(type));

    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-b from-salon-cream to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}

        <div className="text-center mb-16">
          <p className="section-subtitle">What Clients Say</p>

          <h2 className="section-title">
            Loved by <span className="text-gold-600 italic">Thousands</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Experience luxury salon services trusted by happy clients.
          </p>

          {/* RATING BOX */}

          <div className="inline-flex items-center gap-5 bg-white rounded-3xl px-8 py-5 shadow-lg mt-8 border border-gold-100">
            <div className="text-5xl font-heading font-bold text-salon-dark">
              {avg}
            </div>

            <div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-gold-500 fill-gold-500"
                  />
                ))}
              </div>

              <div className="text-gray-500 text-sm">
                Based on Google Reviews
              </div>

              <div className="text-gray-400 text-xs">250+ Happy Clients</div>
            </div>
          </div>
        </div>

        {/* SEMI AUTO REPLY BUTTONS */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <button
            onClick={() => copyReply("happy")}
            className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full text-sm font-medium transition shadow-md"
          >
            {copied === "happy" ? "Copied!" : "Copy Happy Reply"}
          </button>

          <button
            onClick={() => copyReply("premium")}
            className="bg-salon-dark hover:bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition shadow-md"
          >
            {copied === "premium" ? "Copied!" : "Copy Premium Reply"}
          </button>

          <button
            onClick={() => copyReply("complaint")}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium transition shadow-md"
          >
            {copied === "complaint" ? "Copied!" : "Copy Complaint Reply"}
          </button>
        </div>

        {/* REVIEW GRID */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gold-100 relative overflow-hidden group"
            >
              {/* HOVER EFFECT */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-gold-100/20 to-gold-200/10 pointer-events-none" />

              {/* TOP */}

              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gold-400 shadow-md"
                  />
                  <div>
                    <div className="font-semibold text-salon-dark text-sm flex items-center gap-1">
                      {r.name}

                      <CheckCircle2 size={14} className="text-blue-500" />
                    </div>

                    <div className="text-gray-400 text-xs">{r.date}</div>
                  </div>
                </div>

                {/* GOOGLE LOGO */}

                <img
                  src="/images/review/google.webp"
                  alt="Google"
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* STARS */}

              <Stars count={r.rating} />

              {/* SERVICE */}

              <div className="inline-block mt-3 bg-gold-50 text-gold-700 text-xs font-medium px-3 py-1 rounded-full">
                {r.service}
              </div>

              {/* REVIEW */}

              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {r.text}
              </p>

              {/* CARD BUTTONS */}

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => copyReply("happy")}
                  className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-sm font-medium py-2.5 rounded-full transition"
                >
                  <Copy size={15} />
                  Copy Reply
                </button>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-white border border-gold-200 hover:border-gold-400 text-salon-dark px-4 rounded-full transition"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <div className="mt-20">
          <div className="bg-white rounded-[32px] shadow-xl border border-gold-100 p-10 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-salon-dark mb-4">
              Loved Your Experience?
            </h3>

            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              Share your experience with us on Google and help others discover
              our salon.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col sm:flex-row items-center justify-center"
            >
              {/* Google Side */}
              <div className="bg-white h-[56px] sm:h-[60px] px-5 flex items-center justify-center rounded-t-full sm:rounded-l-full sm:rounded-tr-none shadow-lg w-full sm:w-auto">
                <img
                  src="/images/review/google.webp"
                  alt="Google"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>

              {/* CTA Side */}
              <div className="h-[56px] sm:h-[60px] bg-gradient-to-r from-gold-500 to-yellow-500 hover:from-gold-600 hover:to-yellow-600 text-white font-medium px-6 sm:px-8 flex items-center justify-center gap-2 rounded-b-full sm:rounded-r-full sm:rounded-bl-none shadow-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto">
                Write a Google Review
                <ExternalLink size={18} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
