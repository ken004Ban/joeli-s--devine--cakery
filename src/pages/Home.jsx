import React from 'react';
import { motion } from 'framer-motion';
import { Star, TreePine, HomeIcon, Coffee, Wifi, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
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
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/30 to-forest/80 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80"
            alt="Lodge surrounded by nature"
            className="w-full h-full object-cover"
          />
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
              className="text-5xl md:text-8xl font-playfair font-bold text-warm-white leading-tight"
            >
              Welcome to <span className="font-dancing text-terracotta italic">Serenity.</span> <br />
              <span className="text-4xl md:text-6xl">Where Nature Meets Comfort.</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-2xl font-lato text-warm-white/80 max-w-2xl mx-auto"
            >
              Escape the ordinary. Experience warm hospitality, breathtaking views,
              and the perfect retreat you've been searching for.
            </motion.p>

            <motion.div variants={fadeIn} className="pt-8 flex gap-4 justify-center flex-wrap">
              <Link to="/rooms" className="btn-primary text-lg px-10 py-4 bg-terracotta hover:bg-warm-white hover:text-forest">
                Explore Rooms
              </Link>
              <Link to="/booking" className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-forest transition-all duration-300 border border-white/30">
                Book Your Stay
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
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-terracotta rounded-2xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Lodge exterior"
                className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-forest text-white p-6 rounded-full font-dancing text-2xl shadow-lg z-20">
                Est. 2020
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest">
                Your Home Away from Home
              </h2>
              <p className="text-lg font-lato text-charcoal/80 leading-relaxed">
                Nestled in the heart of breathtaking landscapes, [Lodge Name] was born
                from a passion for hospitality and a love for nature. Every corner of
                our lodge tells a story of comfort, warmth, and the beauty of the
                great outdoors.
              </p>
              <p className="text-lg font-lato text-charcoal/80 leading-relaxed">
                From the moment you arrive, you'll be embraced by the tranquility of
                our surroundings and the genuine warmth of our staff.
              </p>
              <div className="p-6 bg-sand rounded-2xl border-l-4 border-terracotta italic font-dancing text-2xl text-charcoal shadow-sm">
                "Hospitality is not just a service — it's a feeling of belonging."
              </div>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {[
              { icon: <HomeIcon className="text-terracotta" size={28} />, title: "Comfortable Stays", desc: "Well-appointed rooms with premium bedding, modern amenities, and breathtaking views to make your stay unforgettable." },
              { icon: <Utensils className="text-terracotta" size={28} />, title: "Farm-to-Table Dining", desc: "Savor delicious meals prepared with fresh, locally sourced ingredients. Our menu celebrates authentic local flavors." },
              { icon: <TreePine className="text-terracotta" size={28} />, title: "Nature Immersion", desc: "Guided nature walks, bird watching, stargazing, and outdoor activities that connect you with the beauty around you." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-terracotta/10 text-center group"
              >
                <div className="w-16 h-16 bg-sand rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3 text-forest">{item.title}</h3>
                <p className="font-lato text-charcoal/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-24 px-4 bg-sand">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
            Premium Amenities
          </h2>
          <p className="font-lato text-charcoal/70 max-w-2xl mx-auto">
            Every detail thoughtfully curated for your comfort and enjoyment.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <Wifi size={32} />, label: "Free Wi-Fi" },
            { icon: <Coffee size={32} />, label: "Morning Coffee" },
            { icon: <Utensils size={32} />, label: "Restaurant" },
            { icon: <TreePine size={32} />, label: "Nature Trails" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-forest/10"
            >
              <div className="text-terracotta">{item.icon}</div>
              <span className="font-playfair font-semibold text-forest text-lg">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
            Our Featured Rooms
          </h2>
          <p className="font-lato text-charcoal/70 max-w-2xl mx-auto">
            Discover our most loved accommodations. Each room is a sanctuary of comfort and style.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Safari Suite",
              img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
              desc: "Spacious suite with king bed, en-suite bathroom, private balcony overlooking the wilderness.",
              price: "ZMW 1,500 / night"
            },
            {
              title: "Garden Cottage",
              img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
              desc: "Charming cottage surrounded by lush gardens, featuring a cozy fireplace and outdoor seating.",
              price: "ZMW 900 / night"
            },
            {
              title: "Family Lodge",
              img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
              desc: "Perfect for families, with two bedrooms, a full kitchen, and a large veranda for evening gatherings.",
              price: "ZMW 2,000 / night"
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
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent opacity-90 flex flex-col justify-end p-8 text-warm-white">
                <div className="text-xs font-bold text-terracotta uppercase tracking-widest mb-2">{item.price}</div>
                <h3 className="text-2xl font-playfair font-bold mb-2">{item.title}</h3>
                <p className="font-lato text-sm text-warm-white/80 mb-4">{item.desc}</p>
                <Link to="/rooms" className="text-terracotta font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Details <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-warm-white px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-4">
            What Our Guests Say
          </h2>
          <p className="font-lato text-charcoal/70">
            The greatest reward is seeing the smile on your face when you first taste our cakes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Grace Banda",
                text: "The most peaceful getaway I've ever had. The staff treated us like family and the views were absolutely breathtaking.",
                rating: 5
              },
              {
                name: "Michael Zimba",
                text: "Perfect for a weekend escape. The rooms are spacious, clean, and the food is incredible. Highly recommend!",
                rating: 5
              },
              {
                name: "Emily Nyirenda",
                text: "We booked the Safari Suite for our anniversary. The sunset views from the balcony were out of this world.",
                rating: 5
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl shadow-sm border border-forest/10 relative"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(review.rating)].map((_, star) => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="font-lato text-charcoal/80 italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="font-playfair font-bold text-forest">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 text-center bg-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-10 gap-4">
            {[...Array(100)].map((_, i) => (
              <TreePine key={i} size={20} className="text-white" />
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
            Ready to Escape <br /> to Serenity?
          </h2>
          <p className="text-lg font-lato opacity-90">
            Whether it's a romantic getaway, a family vacation, or a solo retreat —
            your perfect stay awaits.
          </p>
          <Link to="/booking" className="bg-terracotta text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-forest transition-all duration-300 shadow-xl inline-block">
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
