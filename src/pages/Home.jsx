import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Cake, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // 💡 LEARN: Framer Motion variants allow us to define reusable animation states.
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[url('https://www.transparenttextures.com/patterns/linen.png')] z-10"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gold/30"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0
              }}
              animate={{
                y: [null, '-20px', '0px'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              <Sparkles size={Math.random() * 20 + 10} />
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-8xl font-playfair font-bold text-chocolate leading-tight"
            >
              Baked with <span className="font-dancing text-blush italic">Love.</span> <br />
              Crafted with <span className="font-dancing text-gold italic">Devotion.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-2xl font-lato text-chocolate/70 max-w-2xl mx-auto"
            >
              Welcome to JOELi's DEVINE CAKERY, where every slice tells a story
              and every celebration becomes a masterpiece.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-8">
              <Link to="/order" className="btn-primary text-lg px-10 py-4">
                Order Your Dream Cake
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-warm-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded-2xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1556910111-a127a7a67692?auto=format&fit=crop&q=80&w=800"
                alt="Bakery Interior"
                className="relative z-10 rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blush text-white p-6 rounded-full font-dancing text-2xl shadow-lg z-20">
                Since 2015
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chocolate">
                The Heart Behind the Oven
              </h2>
              <p className="text-lg font-lato text-chocolate/80 leading-relaxed">
                What started as a small kitchen experiment with a passion for sweets
                has blossomed into JOELi's DEVINE CAKERY. For JOELi, baking isn't just
                about flour and sugar; it's about the laughter at a wedding, the
                surprise of a first birthday, and the quiet joy of a shared dessert.
              </p>
              <div className="p-6 bg-cream rounded-2xl border-l-4 border-gold italic font-dancing text-2xl text-chocolate shadow-sm">
                "Every cake I make carries a piece of my heart.
                That's the DEVINE difference." — JOELi
              </div>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {[
              { icon: <Cake className="text-gold" />, title: "Baked Fresh Daily", desc: "We never use preservatives. Your cake is baked hours before it reaches your table." },
              { icon: <Heart className="text-blush" />, title: "Custom Creations", desc: "Your vision, our expertise. We collaborate with you to design a cake that reflects your dream." },
              { icon: <Star className="text-gold" />, title: "Made with Love", desc: "From the finest Madagascar vanilla to Belgian chocolate, we use only premium ingredients." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gold/10 text-center group"
              >
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3 text-chocolate">{item.title}</h3>
                <p className="font-lato text-chocolate/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE OFFERINGS */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chocolate mb-4">
            Our Signature Masterpieces
          </h2>
          <p className="font-lato text-chocolate/70 max-w-2xl mx-auto">
            Discover the most loved creations from our oven. Each design is
            meticulously crafted to be as beautiful as it is delicious.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The DEVINE Wedding Tier",
              img: "https://images.unsplash.com/photo-1525262013420-5886642452d3?auto=format&fit=crop&q=80&w=600",
              desc: "Elegant, timeless, and breathtaking. The perfect center-piece for your special day."
            },
            {
              title: "Birthday Dream Cake",
              img: "https://images.unsplash.com/photo-1535141123146-27d95ec7229a?auto=format&fit=crop&q=80&w=600",
              desc: "Whimsical, colorful, and filled with joy. Designed to make every birthday wish come true."
            },
            {
              title: "Custom Creations",
              img: "https://images.unsplash.com/photo-1464349095431-6560c1f77565?auto=format&fit=crop&q=80&w=600",
              desc: "Your imagination, baked into reality. From themed parties to corporate elegance."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-chocolate/40 to-transparent opacity-90 flex flex-col justify-end p-8 text-warm-white">
                <h3 className="text-2xl font-playfair font-bold mb-2">{item.title}</h3>
                <p className="font-lato text-sm text-warm-white/80 mb-4">{item.desc}</p>
                <Link to="/gallery" className="text-gold font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Details <Sparkles size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-warm-white px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-chocolate mb-4">
            Sweet Words from Happy Hearts
          </h2>
          <p className="font-lato text-chocolate/70">
            The greatest reward is seeing the smile on your face when you first taste our cakes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Samson Banda",
                text: "The wedding cake JOELi made was not only a work of art but tasted like a dream. Our guests are still talking about it months later!",
                rating: 5
              },
              {
                name: "Michael Zimba",
                text: "Ordered a custom birthday cake for my daughter. The attention to detail was insane. Truly the best bakery in town.",
                rating: 5
              },
              {
                name: "Emily Nyirenda",
                text: "I've tried many patisseries, but the balance of flavors here is unmatched. The blush-gold tart is a must-try!",
                rating: 5
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl shadow-sm border border-gold/10 relative"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(review.rating)].map((_, star) => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="font-lato text-chocolate/80 italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="font-playfair font-bold text-chocolate">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 text-center bg-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="grid grid-cols-10 gap-4">
            {[...Array(100)].map((_, i) => <Sparkles key={i} size={20} className="text-white" />)}
          </div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
            Ready to Make Your <br />
            Celebration DEVINE?
          </h2>
          <p className="text-lg font-lato opacity-90">
            Whether it's a grand wedding or an intimate dinner, we're here to bring
            the sweetness to your special moments.
          </p>
          <Link to="/order" className="bg-chocolate text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-chocolate transition-all duration-300 shadow-xl inline-block">
            Start Your Custom Order
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
