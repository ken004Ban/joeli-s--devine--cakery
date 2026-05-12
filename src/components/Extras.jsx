import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.a
      href="https://wa.me/+260976365536"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(37, 211, 102, 0.5)' }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={32} />
        <AnimatePresence>
          {showTooltip && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 px-3 py-1 bg-white text-chocolate text-xs font-bold rounded-lg shadow-md whitespace-nowrap"
            >
              Chat with JOELi! 🍰
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.a>
  );
};

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-cream flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="text-4xl md:text-6xl font-playfair font-bold text-chocolate mb-2">
          JOELi's <span className="font-dancing text-blush italic">Devine</span>
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gold rounded-full"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export { FloatingWhatsApp, LoadingScreen };
