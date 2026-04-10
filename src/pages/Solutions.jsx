import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn, slideLeft, slideRight, pageTransition } from '../utils/animations';
import Newsletter from '../components/Newsletter';

const SOLUTIONS = [
  {
    icon: 'hotel',
    color: 'bg-primary',
    title: 'Luxury Hotel Stays',
    desc: 'Access our curated portfolio of 5-star hotels, boutique properties, and ultra-luxury resorts across 50+ countries. Every property is hand-verified.',
    features: ['Exclusive member rates', 'Room upgrade priority', 'Late checkout guarantee'],
    cta: 'Explore Hotels',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3z-m_jDoWgtbo-zX55TmzxYi-DSKya9ux1vQ99GABcmqeVePbt8WkPeP1sVwpYji3pBa8JfsN7Q5TeD8csveb52-tVY0PWEebC2uy1kdMKscBOkUF8vH6rAWMRkHEYaBAYijjZrtJtcusoH0YW0P4lIUxfHoGjmZqmmjxRzHlEkdfm84bjIt8SQZCYa_55Vl_bfgnIOwwzliLeWKnOXsFwGNL62ZXTKQXXF08tRuDPWuxU1t-XaM6IaQ2hSva2veirKxzHqUFys',
  },
  {
    icon: 'business_center',
    color: 'bg-blue-600',
    title: 'Business Travel',
    desc: 'Streamlined corporate booking with centralized invoicing, duty-of-care features, and preferred rates for frequent business travellers.',
    features: ['Corporate billing', 'Travel policy compliance', 'Dedicated account manager'],
    cta: 'Corporate Plans',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT2V2Ik_UVKlrcgK7DcyuEIInWGc6QjO6WGWfoDzi35fY2kbFLp8Yp_IbluZ1fclaFQ1QWWpNTGoZ3_R9XWQPONKO63i6Cw371RkKuJZ6rlUA3PGQ3qmrjzosQzr9WnkTuIesjJOh1CLT_tncKZaeYqN1VAjtSVVbBkG3X7sws86Nc72jpcHjzaw-GkiW5_EStaKDCQiVVOkv8XCq6IW7pN52xtUq46rVJLG2dtaA2IloGoRFzSk60lpkzJ-ZLormju6vc42dWQ1I',
  },
  {
    icon: 'family_restroom',
    color: 'bg-green-600',
    title: 'Family Getaways',
    desc: 'Thoughtfully designed family packages with kid-friendly amenities, connecting rooms, and activities that delight guests of every age.',
    features: ['Kids-club access', 'Babysitting services', 'Family suite availability'],
    cta: 'Family Packages',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY4Y3o1DaTrpNT7Sg0fQ_oUl5m4bC4Q7yHa2TSaxr3SFRuZ0ORVLM2Tj3Smy5d0EuFOoSHwE8alyIPPRn04h5N11_yJnIHC_y85GKBC8IDNYQcI2G19Af2yw1cW7bMJgkLyOyH2U5qw8T-9wLFmZOQpuL3dq0mOKQvPY9X-lAl5Zw1TJvJzqjxSvHHW0oPKi3w_8zxIUsMTzfRNmjZfO1OX8xD2L5Hx1b4zVIjlfTLCrI2L3P1n5Z5sPIFhMxS1bCRcRDhv8w',
  },
  {
    icon: 'hiking',
    color: 'bg-orange-500',
    title: 'Adventure Trips',
    desc: 'Curated expedition-style travel combining luxury basecamp comfort with authentic wilderness immersion — safaris, trekking, and remote island escapes.',
    features: ['Expert local guides', 'Gear & logistics', 'Emergency support 24/7'],
    cta: 'View Adventures',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHiGMbaK6lUzpZD1JBUfrf9CZlt_ppp9sLKhHCy6v_x8NC9t0wF5gwKNePaZjku8gFNJk-LqULxM2rSgkjHHPxrwg2RAXB5SOu9D3j6gwN_ODGHRG_97ZdguV3lJORaK7fHesJL_dRkUhY2vgSHKaZNSKdSM52N6RY9PRWt6j_6_kIzC-bcNn68YpB8zr9MpIwKqCJTZeEt3qASWMDHNl-uGDAfRUqF6HOfJiYmQn-zMjgwulXrvyG5h7rYrtiqPcjhySooXvySto',
  },
  {
    icon: 'favorite',
    color: 'bg-rose-500',
    title: 'Romantic Escapes',
    desc: 'Meticulously planned honeymoon and anniversary packages with private pool villas, candle-lit dinners, and spa experiences crafted for two.',
    features: ['Private villa options', 'Couples spa packages', 'Personalized surprises'],
    cta: 'Plan Romance',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLEywoud5aoS-6w-hvUwdTG0nhWDzy5ShRShrIVaG60JSY_y3nvWIzaskNFM55N3hrxHvUksP4aPI5yrL6OrFrQ0REd5CEZnjA1ReQisloGZvD5OAXkdpRmUNDGnZ0TFX_SrQR0cbZQsHCUGt0FkAgTjjocyFOX0Tqv4pcmHKq3BM6kUuCO-JOBzGE1VCnyiRCdLmtqleK9_9xFNHDAq3hMW-v6UcM8P1C-7EIxtwSAjbRhy0SQBSuDeZaN8N243zy2pQXyeC44Fk',
  },
  {
    icon: 'groups',
    color: 'bg-violet-600',
    title: 'Group Bookings',
    desc: 'Effortless coordination for groups of 10 to 500 — weddings, incentive travel, corporate retreats, and destination events with bulk pricing.',
    features: ['Group discount rates', 'Dedicated coordinator', 'Event space booking'],
    cta: 'Group Enquiry',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ-0ooSzBzik_4z00VoomRxlzVUysSVK5T0adFq64GhwS-9EY64bE1g1KsORIJ7-IJSK1-MfOkEJ-OjG-CshFvq5ylvvaDcOE9qSWQayPtv3EcuM8c77bnILABWDrLyIPDKvdXR_DWr7o6Izwfy4YoHlJlWklDRLjpzE_FUxnEZYpIyB9ZI1K0wkoH3Uw6QNQjGBG9xA4S3wROqHIP1wimOtYvJGuyvbZ3LkNHDayxqTZyhVJNSpG4PtjH5y8wDbFZyD78F-zSoLw',
  },
];

const STATS = [
  { value: '5,000+', label: 'Premium Properties' },
  { value: '50+',    label: 'Countries Covered' },
  { value: '98%',    label: 'Satisfaction Rate' },
  { value: '24/7',   label: 'Concierge Support' },
];

const SolutionCard = ({ solution, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={scaleIn}
      className="bg-white rounded-[16px] overflow-hidden border border-outline-variant hover:shadow-[0_8px_32px_rgba(26,31,54,0.1)] transition-shadow group"
    >
      <div className="relative h-[200px] overflow-hidden">
        <img src={solution.img} alt={solution.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className={`absolute top-4 left-4 w-10 h-10 ${solution.color} rounded-full flex items-center justify-center`}>
          <span className="material-symbols-outlined text-white text-[20px]">{solution.icon}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-[17px] font-bold text-on-surface font-headline">{solution.title}</h3>
        <p className="text-[13px] text-on-surface-variant leading-[1.7] mt-2">{solution.desc}</p>
        <ul className="mt-4 space-y-2">
          {solution.features.map(f => (
            <li key={f} className="flex items-center gap-2 text-[13px] text-on-surface">
              <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
              {f}
            </li>
          ))}
        </ul>
        <Link to="/booking">
          <button className="mt-5 w-full py-2.5 border-[1.5px] border-primary text-primary font-bold text-[13px] rounded-full hover:bg-primary hover:text-white transition-all">
            {solution.cta} →
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const Solutions = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <motion.main {...pageTransition}>
      {/* Hero */}
      <section className="bg-on-surface py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 12px)' }} />
        <div className="max-w-site mx-auto px-10 relative z-10 text-center">
          <motion.span {...{ ...fadeUp, initial: 'hidden', animate: 'visible' }} className="inline-block px-4 py-1.5 bg-primary text-white text-[12px] font-bold rounded-full mb-4 uppercase tracking-wider">
            Our Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[52px] font-extrabold text-white font-headline leading-[1.1] max-w-[700px] mx-auto"
          >
            Travel Solutions Crafted for Every Journey.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white/70 text-[16px] leading-[1.8] max-w-[520px] mx-auto mt-6"
          >
            Whether you're a solo explorer, a growing family, or a global corporation — MARLIN has a solution engineered precisely for your needs.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10" ref={statsRef}>
        <motion.div
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="max-w-site mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map(({ value, label }) => (
            <motion.div key={label} variants={fadeUp} className="text-center">
              <div className="text-[36px] font-extrabold text-white font-headline">{value}</div>
              <div className="text-white/75 text-[13px] font-medium mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="py-[80px] bg-surface-container">
        <div className="max-w-site mx-auto px-10">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">ALL SOLUTIONS</span>
            <h2 className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">Built Around Your Travel Style.</h2>
            <p className="text-on-surface-variant text-[14px] mt-3 max-w-[480px] mx-auto leading-[1.7]">
              Six distinct travel verticals, each with dedicated specialists, exclusive rates, and premium support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((s, i) => <SolutionCard key={i} solution={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-[80px] bg-white">
        <div className="max-w-site mx-auto px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="bg-on-surface rounded-[24px] p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 10px)' }} />
            <motion.div variants={slideLeft} className="relative z-10">
              <span className="text-[12px] font-bold text-primary uppercase tracking-wider">GET STARTED</span>
              <h2 className="text-[28px] font-extrabold text-white mt-2 font-headline">Ready to plan your perfect trip?</h2>
              <p className="text-white/60 text-[14px] mt-2 max-w-[380px]">Talk to one of our travel specialists and get a bespoke itinerary crafted just for you.</p>
            </motion.div>
            <motion.div variants={slideRight} className="relative z-10 flex gap-3 flex-shrink-0">
              <Link to="/booking">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 bg-primary text-white font-bold rounded-full text-[15px] flex items-center gap-2">
                  Start Booking <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </motion.button>
              </Link>
              <Link to="/about">
                <button className="px-8 py-3.5 border-[1.5px] border-white/30 text-white font-bold rounded-full text-[15px] hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </motion.main>
  );
};

export default Solutions;
