import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Wedding Cakes', 'Birthday Cakes', 'Custom Orders', 'Cupcakes & Treats'];

  const cakeItems = [
    {
      name: "Royal Ivory Tier",
      category: "Wedding Cakes",
      img: "https://images.unsplash.com/photo-1525262013420-5886642452d3?auto=format&fit=crop&q=80&w=600",
      desc: "A classic 4-tier ivory masterpiece with hand-piped lace and fresh peonies."
    },
    {
      name: "Midnight Chocolate Dream",
      category: "Birthday Cakes",
      img: "https://images.unsplash.com/photo-1578985545062-69928a499566?auto=format&fit=crop&q=80&w=600",
      desc: "Decadent dark chocolate ganache with gold leaf accents and fresh raspberries."
    },
    {
      name: "Pastel Garden Party",
      category: "Custom Orders",
      img: "https://images.unsplash.com/photo-1535141123146-27d95ec7229a?auto=format&fit=crop&q=80&w=600",
      desc: "A whimsical blend of vanilla and lemon, adorned with edible wildflowers."
    },
    {
      name: "Velvet Rose Symphony",
      category: "Wedding Cakes",
      img: "https://images.unsplash.com/photo-1513116235674-3B0707672771?auto=format&fit=crop&q=80&w=600",
      desc: "Red velvet layers with cream cheese frosting and cascading sugar roses."
    },
    {
      name: "Celebration Sprinkles",
      category: "Birthday Cakes",
      img: "https://images.unsplash.com/photo-1562339566-65e7f80750f7?auto=format&fit=crop&q=80&w=600",
      desc: "Funfettiy bliss! A vanilla bean cake packed with colorful sprinkles."
    },
    {
      name: "Golden Honeycomb",
      category: "Custom Orders",
      img: "https://images.unsplash.com/photo-1464349095431-6560c1f77565?auto=format&fit=crop&q=80&w=600",
      desc: "Honey-infused sponge cake with a salted honey buttercream frosting."
    },
    {
      name: "Petite Patisserie Box",
      category: "Cupcakes & Treats",
      img: "https://images.unsplash.com/photo-1550617931-8732b72a3170?auto=format&fit=crop&q=80&w=600",
      desc: "A curated set of our finest miniature cakes and macarons."
    },
    {
      name: "Blush Berry Delight",
      category: "Cupcakes & Treats",
      img: "https://images.unsplash.com/photo-1582293523413-63f92f4a7870?auto=format&fit=crop&q=80&w=600",
      desc: "Strawberry shortcake cupcakes with a fresh berry center."
    },
    {
      name: "Marble Elegance",
      category: "Wedding Cakes",
      img: "https://images.unsplash.com/photo-1621303017956-3776f8C5658a?auto=format&fit=crop&q=80&w=600",
      desc: "Modern marble effect frosting with metallic gold splatters."
    },
  ];

  const filteredCakes = activeCategory === 'All'
    ? cakeItems
    : cakeItems.filter(cake => cake.category === activeCategory);

  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-chocolate mb-6"
          >
            The Cake <span className="font-dancing text-blush italic">Gallery</span>
          </motion.h1>
          <p className="font-lato text-chocolate/70 max-w-2xl mx-auto text-lg">
            Explore our portfolio of edible art. From minimalist elegance to maximalist
            extravaganzas, we bake the vision you imagine.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-lato text-sm transition-all duration-300 border-2 ${
                activeCategory === category
                ? 'bg-gold border-gold text-white shadow-lg scale-105'
                : 'bg-white border-gold/20 text-chocolate hover:border-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredCakes.map((cake) => (
              <motion.div
                layout
                key={cake.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gold/10"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={cake.img}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-warm-white">
                    <Link to="/order" className="bg-gold text-white px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-chocolate transition-all">
                      Inquire About This <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-gold uppercase tracking-widest mb-2">{cake.category}</div>
                  <h3 className="text-xl font-playfair font-bold text-chocolate mb-2">{cake.name}</h3>
                  <p className="text-sm font-lato text-chocolate/70 leading-relaxed">
                    {cake.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
