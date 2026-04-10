import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, scaleIn, fadeUp, slideLeft, slideRight, pageTransition } from '../utils/animations';
import Newsletter from '../components/Newsletter';

const SERVICES = [
  { icon: 'hotel',         color: 'bg-primary',       title: 'Hotel Booking',          price: 'From $0',  desc: 'Instant confirmation across 5,000+ hand-curated properties. Best-rate guarantee on every booking.' },
  { icon: 'local_airport', color: 'bg-blue-600',      title: 'Airport Transfers',      price: 'From $45', desc: 'Chauffeur-driven transfers in premium vehicles. Meet-and-greet service available at 120+ airports.' },
  { icon: 'spa',           color: 'bg-rose-500',       title: 'Spa & Wellness',         price: 'Add-on',   desc: 'Pre-book treatments at world-class spas. In-room massage, yoga, and wellness sessions on demand.' },
  { icon: 'restaurant',    color: 'bg-amber-600',      title: 'Fine Dining Reservations', price: 'Free',   desc: 'Priority access to Michelin-starred restaurants and exclusive private dining experiences.' },
  { icon: 'directions_car', color: 'bg-green-600',    title: 'Luxury Car Rental',      price: 'From $90', desc: 'Curated fleet of premium vehicles — from SUVs to convertibles. Delivered to your hotel entrance.' },
  { icon: 'support_agent', color: 'bg-violet-600',    title: '24/7 Concierge',         price: 'Included', desc: 'Your dedicated travel assistant, available round-the-clock via app, phone, or WhatsApp.' },
  { icon: 'tour',          color: 'bg-teal-600',       title: 'Private Tours',          price: 'From $120', desc: 'Bespoke cultural immersions, private museum access, and off-the-beaten-track experiences.' },
  { icon: 'flight',        color: 'bg-sky-600',        title: 'Flight Booking',         price: 'From $0',  desc: 'Business class and first-class flights with partner airlines. Upgrades and lounge access included.' },
  { icon: 'shield',        color: 'bg-slate-600',      title: 'Travel Insurance',       price: 'From $12', desc: 'Comprehensive coverage including cancellation, medical, and luggage protection for every journey.' },
];

const PRICING = [
  {
    tier: 'Explorer',
    price: 'Free',
    period: 'forever',
    color: 'border-outline-variant',
    accent: 'text-on-surface',
    features: ['Hotel booking access', 'Standard customer support', 'Email confirmations', 'Basic trip history', '3 saved wish lists'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    tier: 'Voyager',
    price: '$19',
    period: '/month',
    color: 'border-primary',
    accent: 'text-primary',
    features: ['All Explorer features', '24/7 concierge support', 'Member-only rates (avg 12% off)', 'Priority room upgrades', 'Unlimited wish lists', 'Airport lounge access (4x/year)', 'Dedicated account manager'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    tier: 'Elite',
    price: '$79',
    period: '/month',
    color: 'border-on-surface',
    accent: 'text-on-surface',
    features: ['All Voyager features', 'Guaranteed suite upgrades', 'Unlimited lounge access', 'Private jet booking', 'Bespoke itinerary design', 'Global transfer credits', 'Dedicated travel specialist'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const ServiceCard = ({ service }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={scaleIn}
      className="bg-white rounded-[16px] p-7 border border-outline-variant hover:shadow-[0_6px_28px_rgba(26,31,54,0.09)] transition-shadow group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center`}>
          <span className="material-symbols-outlined text-white text-[22px]">{service.icon}</span>
        </div>
        <span className="text-[12px] font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{service.price}</span>
      </div>
      <h3 className="text-[16px] font-bold text-on-surface font-headline group-hover:text-primary transition-colors">{service.title}</h3>
      <p className="text-[13px] text-on-surface-variant leading-[1.7] mt-2">{service.desc}</p>
      <Link to="/booking">
        <button className="mt-4 text-[13px] font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
          Book this service <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </Link>
    </motion.div>
  );
};

const Services = () => (
  <motion.main {...pageTransition}>
    {/* Hero */}
    <section className="bg-on-surface py-[100px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #fff, #fff 1px, transparent 1px, transparent 12px)' }} />
      <div className="max-w-site mx-auto px-10 text-center relative z-10">
        <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block px-4 py-1.5 bg-primary text-white text-[12px] font-bold rounded-full mb-4 uppercase tracking-wider">
          Premium Services
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="text-[52px] font-extrabold text-white font-headline leading-[1.1] max-w-[680px] mx-auto">
          Premium Services, Zero Compromises.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-white/70 text-[16px] leading-[1.8] max-w-[500px] mx-auto mt-6">
          From the moment you search to the moment you check out — every touchpoint is handled with editorial precision.
        </motion.p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-[80px] bg-surface-container">
      <div className="max-w-site mx-auto px-10">
        <div className="text-center mb-12">
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">EVERYTHING YOU NEED</span>
          <h2 className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">Nine services, one platform.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => <ServiceCard key={i} service={s} />)}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-[80px] bg-white">
      <div className="max-w-site mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={slideLeft}>
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">HOW IT WORKS</span>
          <h2 className="text-[32px] font-extrabold text-on-surface mt-2 mb-8 font-headline">Services that feel seamless.</h2>
          <div className="space-y-7">
            {[
              { step: '01', title: 'Choose your services', desc: 'Browse our service catalogue and add what you need — hotels, transfers, dining, and more.' },
              { step: '02', title: 'Customize your journey', desc: 'Our concierge works with you to tailor every detail to your preferences and schedule.' },
              { step: '03', title: 'Instant confirmation', desc: 'Receive a comprehensive itinerary with all bookings confirmed in one digital document.' },
              { step: '04', title: 'Support throughout', desc: 'From pre-departure to check-out, your MARLIN concierge is one message away, always.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-5">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-[13px] font-bold">{step}</div>
                <div>
                  <h4 className="text-[14px] font-bold text-on-surface">{title}</h4>
                  <p className="text-[13px] text-on-surface-variant mt-1 leading-[1.7]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={slideRight}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALw19IVvbmrt9Uesx3sdKMj_jwwP4jgrh9S8ysSWKSETiFceg84maOOWw6lQbobKkz0pB20fMTszmm9dP3hKcsJ2a56XGm18DNIWrXKOjIvQlAVjIK0ELOnXhbZ9LE5m1aR45SuSDbKNcseZftRd8Aaj98KZ9oHBOQZ0c0n7BeWiuU0egYBPWTTHF3xXGN8ozInPku94aP6IojAhfBHQkis918JqmmZ7ULwNN7ekB4mQ2YWUJP9svcqCwOzQp2OekBj6OxR6sNLBI"
            alt="Service"
            className="w-full h-[420px] object-cover rounded-[20px]"
          />
        </motion.div>
      </div>
    </section>

    {/* Pricing */}
    <section className="py-[80px] bg-surface-container">
      <div className="max-w-site mx-auto px-10">
        <div className="text-center mb-12">
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">PRICING</span>
          <h2 className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">Transparent Pricing, Real Value.</h2>
          <p className="text-on-surface-variant text-[14px] mt-3">No hidden fees. No markup surprises.</p>
        </div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto"
        >
          {PRICING.map((plan, i) => (
            <motion.div
              key={i} variants={scaleIn}
              className={`bg-white rounded-[20px] p-8 border-2 ${plan.color} relative ${plan.highlight ? 'shadow-[0_8px_40px_rgba(230,48,39,0.15)]' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[11px] font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
              )}
              <h3 className="text-[16px] font-bold text-on-surface">{plan.tier}</h3>
              <div className="mt-3 mb-6">
                <span className={`text-[40px] font-extrabold font-headline ${plan.accent}`}>{plan.price}</span>
                <span className="text-on-surface-variant text-[14px]">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-on-surface">
                    <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/booking">
                <button className={`w-full py-3 rounded-full font-bold text-[14px] transition-all ${plan.highlight ? 'bg-primary text-white hover:bg-primary-container' : 'border-[1.5px] border-on-surface text-on-surface hover:bg-on-surface hover:text-white'}`}>
                  {plan.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <Newsletter />
  </motion.main>
);

export default Services;
