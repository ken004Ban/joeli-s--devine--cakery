import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-warm-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          <motion.div variants={columnVariants} className="flex flex-col space-y-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-playfair font-bold text-warm-white"
            >
              [Lodge] <span className="font-dancing text-4xl text-terracotta italic">Serene</span> Stays
            </motion.div>
            <p className="font-lato text-sm text-warm-white/80 leading-relaxed">
              Escape to tranquility. Nestled in nature, we offer a peaceful retreat
              with warm hospitality, comfortable accommodations, and unforgettable experiences.
            </p>
            <div className="flex space-x-4 pt-4">
              {[
                <svg key="ig" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                <svg key="fb" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                <MessageCircle key="wa" size={20} />,
              ].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, backgroundColor: 'rgba(193, 105, 79, 1)', color: '#FFF8F0' }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 rounded-full text-warm-white"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={columnVariants} className="flex flex-col space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-gold">Quick Links</h4>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2 font-lato text-sm text-warm-white/70"
            >
              {[
                { to: '/', label: 'Home' },
                { to: '/rooms', label: 'Our Rooms' },
                { to: '/booking', label: 'Book Now' },
                { to: '/#about', label: 'About Us' },
                { to: '/#testimonials', label: 'Guest Reviews' },
              ].map((link) => (
                <motion.li key={link.label} variants={linkVariants}>
                  <Link
                    to={link.to}
                    className="inline-block hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={columnVariants} className="flex flex-col space-y-4">
            <h4 className="font-playfair text-xl font-semibold text-gold">Get In Touch</h4>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 font-lato text-sm text-warm-white/70"
            >
              {[
                { icon: <MapPin size={16} className="text-terracotta" />, text: 'Lusaka, Zambia' },
                { icon: <Phone size={16} className="text-terracotta" />, text: '+260 000 000 000' },
                { icon: <Mail size={16} className="text-terracotta" />, text: 'hello@lodgename.com' },
                { icon: <MessageCircle size={16} className="text-terracotta" />, text: 'WhatsApp: +260 000 000 000' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={linkVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-dancing text-2xl text-terracotta italic mb-2"
          >
            "Your home away from home."
          </motion.p>
          <p className="font-lato text-xs text-warm-white/40">
            &copy; {currentYear} Nyota Tech Limited. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
