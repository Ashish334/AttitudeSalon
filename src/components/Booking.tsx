import { useState, type FormEvent } from "react";
import { CalendarDays, CheckCircle } from "lucide-react";

const WHATSAPP = "918808841835";

const services = [
  "Haircut & Styling",
  "Beard Styling",
  "Hair Coloring",
  "Facial & Skincare",
  "Bridal Makeup",
  "Hair Spa",
  "Manicure & Pedicure",
  "Waxing & Threading",
  "Other",
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function change(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const text = `✨ Welcome to Attitude Unisex Salon ✨

Thank you for choosing us for your beauty & grooming experience.

━━━━━━━━━━━━━━━

📅 APPOINTMENT REQUEST

👤 Name:
${form.name}

📞 Phone Number:
${form.phone}

💇 Selected Service:
${form.service}

📆 Preferred Date:
${form.date}

${
  form.message
    ? `📝 Additional Notes:
${form.message}

`
    : ""
}━━━━━━━━━━━━━━━

📍 Attitude Unisex Salon
Kandivali (W), Mumbai

Our team will connect with you shortly to confirm your appointment ❤️`;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
      "_blank",
    );

    // Success state
    setSubmitted(true);

    // Clear form after submit
    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });

    // Hide success message
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  }

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <section
      id="booking"
      className="py-24 bg-salon-dark relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold-600/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Make a Reservation
          </p>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            Book Your <span className="text-gold-400 italic">Appointment</span>
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto">
            Fill in the form below and our team will confirm your appointment
            through WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          {submitted ? (
            <div className="text-center py-10 animate-fade-in">
              <CheckCircle size={60} className="text-green-400 mx-auto mb-5" />

              <h3 className="font-heading text-3xl text-white mb-3">
                Appointment Request Sent Successfully ✨
              </h3>

              <p className="text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you for choosing{" "}
                <span className="text-gold-400 font-medium">
                  Attitude Unisex Salon
                </span>
                .
                <br />
                Our team will connect with you shortly on WhatsApp to confirm
                your booking.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={change}
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={change}
                  required
                  placeholder="+91 8808841835"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Select Service *
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={change}
                  required
                  className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                >
                  <option value="" className="bg-salon-dark">
                    Choose a service
                  </option>

                  {services.map((s) => (
                    <option key={s} value={s} className="bg-salon-dark">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Preferred Date *
                </label>

                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={change}
                    required
                    min={minDate}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"
                  />

                  <CalendarDays
                    size={16}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Additional Notes (optional)
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={change}
                  placeholder="Any special requests or preferences..."
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full btn-gold py-4 text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Confirm via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
