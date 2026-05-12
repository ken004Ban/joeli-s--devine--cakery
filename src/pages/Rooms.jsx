import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Users, Bath, Wifi, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Suites', 'Cottages', 'Family Rooms'];

  const roomItems = [
    {
      name: "The Safari Suite",
      category: "Suites",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      desc: "Spacious suite with king bed, en-suite bathroom, private balcony overlooking the wilderness.",
      price: "ZMW 1,500 / night",
      capacity: "2 Adults",
      beds: "1 King Bed"
    },
    {
      name: "Sunset Deluxe Suite",
      category: "Suites",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      desc: "Luxurious suite with panoramic sunset views, a soaking tub, and a private lounge area.",
      price: "ZMW 1,800 / night",
      capacity: "2 Adults",
      beds: "1 King Bed"
    },
    {
      name: "Garden Cottage",
      category: "Cottages",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      desc: "Charming cottage surrounded by lush gardens, featuring a cozy fireplace and outdoor seating.",
      price: "ZMW 900 / night",
      capacity: "2 Adults",
      beds: "1 Queen Bed"
    },
    {
      name: "Riverside Cottage",
      category: "Cottages",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      desc: "Secluded cottage by the river, complete with a hammock, fire pit, and private deck.",
      price: "ZMW 1,100 / night",
      capacity: "2 Adults",
      beds: "1 Queen Bed"
    },
    {
      name: "Family Lodge",
      category: "Family Rooms",
      img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      desc: "Perfect for families, with two bedrooms, a full kitchen, and a large veranda for evening gatherings.",
      price: "ZMW 2,000 / night",
      capacity: "4 Adults + 2 Kids",
      beds: "2 Queen Beds"
    },
    {
      name: "Honeymoon Haven",
      category: "Suites",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      desc: "An intimate suite designed for couples, with rose petals, champagne, and a private plunge pool.",
      price: "ZMW 2,500 / night",
      capacity: "2 Adults",
      beds: "1 King Bed"
    },
  ];

  const filteredRooms = activeCategory === 'All'
    ? roomItems
    : roomItems.filter(room => room.category === activeCategory);

  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-forest mb-6"
          >
            Our <span className="font-dancing text-terracotta italic">Rooms</span> & Suites
          </motion.h1>
          <p className="font-lato text-charcoal/70 max-w-2xl mx-auto text-lg">
            Choose from our handpicked selection of accommodations. Each room is
            designed to offer the perfect blend of comfort and character.
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
                ? 'bg-terracotta border-terracotta text-white shadow-lg scale-105'
                : 'bg-white border-terracotta/20 text-charcoal hover:border-terracotta'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode='popLayout'>
            {filteredRooms.map((room) => (
              <motion.div
                layout
                key={room.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-forest/10"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={room.img}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-warm-white">
                    <Link to="/booking" className="bg-terracotta text-white px-4 py-2 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-white hover:text-forest transition-all">
                      Book This Room <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-xs font-bold text-terracotta uppercase tracking-widest">{room.category}</div>
                    <div className="text-sm font-bold text-forest">{room.price}</div>
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-forest mb-2">{room.name}</h3>
                  <p className="text-sm font-lato text-charcoal/70 leading-relaxed mb-4">
                    {room.desc}
                  </p>
                  <div className="flex gap-4 text-xs text-charcoal/60 font-lato border-t border-forest/10 pt-4">
                    <span className="flex items-center gap-1"><Bed size={14} /> {room.beds}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> {room.capacity}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Rooms;
