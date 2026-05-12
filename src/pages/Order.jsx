import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Mail, Phone, Image as ImageIcon, CheckCircle, Send, Cake, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const WHATSAPP_NUMBER = '+260976365536';

const Order = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    cakeType: 'Wedding Cake',
    guestCount: '',
    specialRequests: '',
    inspirationImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      `*New Cake Order Request*`,
      ``,
      `*Name:* ${formData.fullName}`,
      `*Email:* ${formData.email}`,
      `*Phone:* ${formData.phone}`,
      `*Event Date:* ${formData.eventDate}`,
      `*Cake Type:* ${formData.cakeType}`,
      `*Guest Count:* ${formData.guestCount}`,
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
        <SEO
          title="Order Confirmation"
          description="Your custom cake order has been submitted. JOELi's DEVINE CAKERY will confirm your order via WhatsApp."
          path="/order"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-gold/20"
        >
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-4xl font-playfair font-bold text-chocolate mb-4">
            Order sent via WhatsApp!
          </h1>
          <p className="font-lato text-chocolate/70 text-lg mb-8">
            Your order details have been sent to JOELi via WhatsApp. You'll be redirected
            to WhatsApp to confirm — feel free to add any extra details there!
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              Place Another Order
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 px-4">
      <SEO
        title="Order a Custom Cake"
        description="Order a custom celebration cake in Zambia. Wedding cakes, birthday cakes & bespoke masterpieces. Tell us your vision and we'll craft something truly DEVINE."
        path="/order"
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-chocolate mb-6">
            Order Your <span className="font-dancing text-blush italic">Dream Cake</span>
          </h1>
          <p className="font-lato text-chocolate/70 text-lg max-w-2xl mx-auto">
            Tell us about your vision. Whether it's a grand celebration or a cozy
            gathering, we'll craft something truly DEVINE.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gold/10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-chocolate font-lato" htmlFor="fullName">
                <User size={16} className="text-gold" /> Full Name
              </label>
              <input
                required
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:ring-2 focus:ring-gold outline-none transition-all font-lato"
                placeholder="MJ Banda"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-chocolate font-lato" htmlFor="email">
                <Mail size={16} className="text-gold" /> Email Address
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:ring-2 focus:ring-gold outline-none transition-all font-lato"
                placeholder="mj@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-chocolate font-lato" htmlFor="phone">
                <Phone size={16} className="text-gold" /> Phone Number
              </label>
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:ring-2 focus:ring-gold outline-none transition-all font-lato"
                placeholder="+260 000 000 000"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-chocolate font-lato" htmlFor="eventDate">
                <Calendar size={16} className="text-gold" /> Event Date
              </label>
              <input
                required
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:ring-2 focus:ring-gold outline-none transition-all font-lato"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-chocolate font-lato" htmlFor="cakeType">
                <Cake className="text-gold" size={16} /> Cake Type
              </label>
              <select
                id="cakeType"
                name="cakeType"
                value={formData.cakeType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:ring-2 focus:ring-gold outline-none transition-all font-lato bg-white"
              >
                <option>Wedding Cake</option>
                <option>Birthday Cake</option>
                <option>Custom Masterpiece</option>
                <option>Cupcakes & Treats</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-chocolate font-lato" htmlFor="guestCount">
                <User size={16} className="text-gold" /> Guest Count
              </label>
              <input
                required
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:ring-2 focus:ring-gold outline-none transition-all font-lato"
                placeholder="e.g. 50"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-chocolate font-lato" htmlFor="inspirationImage">
                <ImageIcon size={16} className="text-gold" /> Inspiration Image
              </label>
              <input
                id="inspirationImage"
                type="file"
                accept="image/*"
                className="w-full px-4 py-2 rounded-xl border border-gold/20 text-sm font-lato file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold file:text-white hover:file:bg-chocolate"
                onChange={(e) => setFormData(prev => ({ ...prev, inspirationImage: e.target.files[0] }))}
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-chocolate font-lato" htmlFor="specialRequests">
                <Sparkles size={16} className="text-gold" /> Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gold/20 focus:ring-2 focus:ring-gold outline-none transition-all font-lato"
                placeholder="Dietary restrictions, theme ideas, or favorite flavors..."
              ></textarea>
            </div>
          </div>

          <div className="md:col-span-2 text-center pt-4">
            <button
              type="submit"
              className="btn-primary px-12 py-4 text-lg flex items-center justify-center gap-2 mx-auto"
            >
              Send Order Request <Send size={20} />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Order;
