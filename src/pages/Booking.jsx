import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, Phone, Users, Bed, CheckCircle, Send, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '+260000000000';

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Safari Suite',
    guests: '',
    specialRequests: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      `*New Booking Request*`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Check-In:* ${formData.checkIn}`,
      `*Check-Out:* ${formData.checkOut}`,
      `*Room Type:* ${formData.roomType}`,
      `*Guests:* ${formData.guests}`,
      formData.specialRequests ? `*Special Requests:* ${formData.specialRequests}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 px-4 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-forest/20"
        >
          <div className="w-20 h-20 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6 text-terracotta">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-4xl font-playfair font-bold text-forest mb-4">
            Request Sent Successfully!
          </h1>
          <p className="font-lato text-charcoal/70 text-lg mb-8">
            Your booking details have been sent via WhatsApp. You'll be redirected
            to confirm — feel free to add any extra details there!
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              New Booking Request
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-forest mb-6">
            Book Your <span className="font-dancing text-terracotta italic">Stay</span>
          </h1>
          <p className="font-lato text-charcoal/70 text-lg max-w-2xl mx-auto">
            Tell us about your plans. Whether it's a weekend getaway or an extended
            retreat, we'll ensure your stay is unforgettable.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-forest/10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-charcoal font-lato">
                <User size={16} className="text-terracotta" /> Full Name
              </label>
              <input
                required
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:ring-2 focus:ring-terracotta outline-none transition-all font-lato"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-charcoal font-lato">
                <Mail size={16} className="text-terracotta" /> Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:ring-2 focus:ring-terracotta outline-none transition-all font-lato"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-charcoal font-lato">
                <Phone size={16} className="text-terracotta" /> Phone Number
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:ring-2 focus:ring-terracotta outline-none transition-all font-lato"
                placeholder="+260 000 000 000"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-charcoal font-lato">
                <Users size={16} className="text-terracotta" /> Number of Guests
              </label>
              <input
                required
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                min="1"
                className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:ring-2 focus:ring-terracotta outline-none transition-all font-lato"
                placeholder="2"
              />
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-charcoal font-lato">
                <Calendar size={16} className="text-terracotta" /> Check-In Date
              </label>
              <input
                required
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:ring-2 focus:ring-terracotta outline-none transition-all font-lato"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-charcoal font-lato">
                <Calendar size={16} className="text-terracotta" /> Check-Out Date
              </label>
              <input
                required
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:ring-2 focus:ring-terracotta outline-none transition-all font-lato"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-charcoal font-lato">
                <Bed size={16} className="text-terracotta" /> Room Type
              </label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:ring-2 focus:ring-terracotta outline-none transition-all font-lato bg-white"
              >
                <option>Safari Suite</option>
                <option>Sunset Deluxe Suite</option>
                <option>Garden Cottage</option>
                <option>Riverside Cottage</option>
                <option>Family Lodge</option>
                <option>Honeymoon Haven</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-charcoal font-lato">
                <MessageCircle size={16} className="text-terracotta" /> Special Requests
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-forest/20 focus:ring-2 focus:ring-terracotta outline-none transition-all font-lato"
                placeholder="Dietary requirements, celebration notes, or any special needs..."
              ></textarea>
            </div>
          </div>

          <div className="md:col-span-2 text-center pt-4">
            <button
              type="submit"
              className="btn-primary px-12 py-4 text-lg flex items-center justify-center gap-2 mx-auto"
            >
              Send Booking Request <Send size={20} />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Booking;
