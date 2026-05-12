import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Wedding Cakes', 'Birthday Cakes', 'Custom Orders'];

  const cakeItems = [
    {
      name: "Golden Bloom Tier",
      category: "Wedding Cakes",
      img: "/images/cakes/golden-bloom-tier.png",
      desc: "Sophisticated double-tiered cake with luxurious gold leaf detailing and sugar roses."
    },
    {
      name: "Butterfly Bloom Cake",
      category: "Wedding Cakes",
      img: "/images/cakes/butterfly-bloom-cake.png",
      desc: "A white cake adorned with vibrant buttercream flowers and delicate edible butterflies."
    },
    {
      name: "Princess Pink Celebration",
      category: "Birthday Cakes",
      img: "/images/cakes/princess-pink-celebration.png",
      desc: "A whimsical pink buttercream cake fit for a princess, celebrating her 20th birthday."
    },
    {
      name: "Paw Patrol Adventure Cake",
      category: "Birthday Cakes",
      img: "/images/cakes/paw-patrol-adventure-cake.png",
      desc: "Celebrate with this playful vanilla cake featuring favorite Paw Patrol characters."
    },
    {
      name: "Golden Grandpa Celebration Cake",
      category: "Birthday Cakes",
      img: "/images/cakes/golden-grandpa-celebration-cake.png",
      desc: "A warm chocolate-drip cake with copper and ivory swirls, honoring a beloved grandpa's 50th birthday."
    },
    {
      name: "Trio Harmony Cake",
      category: "Birthday Cakes",
      img: "/images/cakes/trio-harmony-cake.png",
      desc: "A pastel ombré cake celebrating Taonga, Tapiwa, and Alinase with golden butterflies and name banners."
    },
    {
      name: "Batman Cake Knight Tribute",
      category: "Birthday Cakes",
      img: "/images/cakes/batman-cake-knight-tribute.png",
      desc: "A heroic vanilla cake topped with Batman decorations for the ultimate superhero fan."
    },
    {
      name: "Blushing Bow Half-Birthday Cake",
      category: "Birthday Cakes",
      img: "/images/cakes/blushing-bow-half-birthday-cake.png",
      desc: "A playful pink cake with bows and baby-themed toppers, celebrating the adorable halfway-to-one milestone."
    },
    {
      name: "Arsenal Passion Cake",
      category: "Custom Orders",
      img: "/images/cakes/arsenal-passion-cake.png",
      desc: "A bold red cake celebrating Arsenal fandom, dripping with white chocolate and adorned with soccer-themed toppers."
    },
    {
      name: "Manchester United Glory Cake",
      category: "Custom Orders",
      img: "/images/cakes/manchester-united-glory-cake.png",
      desc: "Show your Red Devils pride with this vanilla buttercream cake topped with the iconic Manchester United emblem."
    },
    {
      name: "Golden Virtue Cake",
      category: "Custom Orders",
      img: "/images/cakes/golden-virtue-cake.png",
      desc: "Gracefully adorned in gold, celebrating a Super Woman's spirit and elegance."
    },
    {
      name: "Blue Frost Harmony Cake",
      category: "Custom Orders",
      img: "/images/cakes/blue-frost-harmony-cake.png",
      desc: "A serene square cake with white and blue buttercream ombré frosting."
    },
    {
      name: "Barcelona Spirit Cake",
      category: "Custom Orders",
      img: "/images/cakes/barcelona-spirit-cake.png",
      desc: "A vibrant red-and-blue cake celebrating FC Barcelona passion with trophy and player toppers."
    },
  ];

  const filteredCakes = activeCategory === 'All'
    ? cakeItems
    : cakeItems.filter(cake => cake.category === activeCategory);

  return (
    <div className="pt-24 pb-24 px-4">
      <SEO
        title="Cake Gallery"
        description="Browse our portfolio of custom celebration cakes in Zambia. Wedding cakes, birthday cakes, and bespoke masterpieces crafted with premium ingredients."
        path="/gallery"
        image="https://joelisdevine.com/images/cakes/golden-bloom-tier.png"
      />

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

        <div className="flex flex-wrap justify-center gap-4 mb-16" role="tablist" aria-label="Filter cakes by category">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
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
                    alt={`${cake.name} — ${cake.category} by JOELi's DEVINE CAKERY`}
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
