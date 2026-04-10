import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { staggerContainer, scaleIn, fadeUp, slideLeft, slideRight, pageTransition } from '../utils/animations';
import Newsletter from '../components/Newsletter';

const STEPS = [
  {
    n: '01',
    icon: 'search',
    title: 'Discover & Search',
    color: 'bg-primary',
    desc: 'Use our intelligent search to filter by destination, dates, property type, amenities, and budget. Our algorithm surfaces the most relevant results based on your travel profile.',
    subSteps: ['Enter your destination and travel dates', 'Apply filters for price, type, and amenities', 'Browse curated results sorted by relevance'],
  },
  {
    n: '02',
    icon: 'fact_check',
    title: 'Select & Personalise',
    color: 'bg-blue-600',
    desc: 'Review detailed property profiles with editorial photography, verified reviews, and a full amenity breakdown. Add special requests, room preferences, or dietary requirements.',
    subSteps: ['Read verified guest reviews and editorial notes', 'Choose room type and board option', 'Add special requests via concierge chat'],
  },
  {
    n: '03',
    icon: 'credit_card',
    title: 'Book Securely',
    color: 'bg-green-600',
    desc: 'Checkout is protected by 256-bit SSL encryption. Pay in your local currency with no hidden foreign transaction fees. Instant confirmation sent to your inbox.',
    subSteps: ['Secure payment with SSL encryption', 'Pay in your local currency', 'Instant email and app confirmation'],
  },
  {
    n: '04',
    icon: 'support_agent',
    title: 'Pre-trip Concierge',
    color: 'bg-violet-600',
    desc: 'Once booked, your dedicated MARLIN concierge reaches out to coordinate transfers, restaurant reservations, spa bookings, and any special arrangements.',
    subSteps: ['Dedicated concierge assigned within 2 hours', 'Pre-trip coordination and itinerary build', 'Airport transfer and activity bookings'],
  },
  {
    n: '05',
    icon: 'travel_explore',
    title: 'Check In & Enjoy',
    color: 'bg-amber-600',
    desc: 'Arrive stress-free with a digital key, pre-arranged transport, and a welcome package prepared to your taste. Live support throughout your stay.',
    subSteps: ['Digital check-in and room key via app', 'Welcome amenities pre-arranged by concierge', 'In-stay support for any requests'],
  },
  {
    n: '06',
    icon: 'stars',
    title: 'Review & Earn',
    color: 'bg-rose-500',
    desc: 'After checkout, share your experience to help the MARLIN community. Earn loyalty points redeemable on future stays, upgrades, and experiences.',
    subSteps: ['Post-stay review within the app', 'Earn MARLIN loyalty points per night stayed', 'Redeem for upgrades, credits, or free nights'],
  },
];

const FAQS = [
  { q: 'Is there a cancellation fee?', a: 'Most premium listings offer free cancellation up to 48 hours before check-in. The specific policy is always shown clearly before you confirm your booking.' },
  { q: 'Can I modify my booking after confirmation?', a: 'Yes — dates, room type, and guest count can be modified through your MARLIN dashboard at no cost (subject to availability). Special modifications can be handled by your concierge.' },
  { q: 'How is MARLIN different from other booking platforms?', a: 'We only list hand-verified, design-led properties. Every listing is reviewed by our curation team. We refuse 90% of applicants. You\'re not searching through thousands of mediocre options — every result meets an editorial standard.' },
  { q: 'Do you offer payment plans?', a: 'Voyager and Elite members can split payments for bookings over $500. Contact your concierge or use the "Split Pay" option at checkout.' },
  { q: 'What happens if there\'s an issue at the property?', a: 'Your MARLIN concierge is available 24/7 to resolve any issue in real time. If we cannot resolve a problem during your stay, we will rebook you at an equivalent property at our expense.' },
];

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.main {...pageTransition}>
      {/* Hero */}
      <section className="bg-on-surface py-[100px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E63027 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 40%)' }} />
        <div className="max-w-site mx-auto px-10 text-center relative z-10">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary text-white text-[12px] font-bold rounded-full mb-4 uppercase tracking-wider">
            The Process
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[52px] font-extrabold text-white font-headline leading-[1.1] max-w-[640px] mx-auto">
            Luxury Travel in Six Simple Steps.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-white/70 text-[16px] leading-[1.8] max-w-[500px] mx-auto mt-6">
            From your first search to your final checkout — here's exactly how MARLIN makes extraordinary travel effortless.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link to="/booking">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="mt-8 px-8 py-4 bg-primary text-white font-bold rounded-full text-[15px] flex items-center gap-2 mx-auto">
                Start Your Journey <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-[80px] bg-surface-container">
        <div className="max-w-site mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {STEPS.map((step, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: '-60px' });
              return (
                <motion.div
                  key={i} ref={ref}
                  initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={scaleIn}
                  className="bg-white rounded-[16px] p-7 border border-outline-variant relative overflow-hidden group hover:shadow-md transition-shadow"
                >
                  <span className="absolute -right-3 -top-3 text-[80px] font-extrabold text-surface-container leading-none select-none">{step.n}</span>
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mb-5 relative z-10`}>
                    <span className="material-symbols-outlined text-white text-[24px]">{step.icon}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-on-surface font-headline relative z-10">{step.title}</h3>
                  <p className="text-[13px] text-on-surface-variant leading-[1.7] mt-2 relative z-10">{step.desc}</p>
                  <ul className="mt-4 space-y-2 relative z-10">
                    {step.subSteps.map(s => (
                      <li key={s} className="flex items-start gap-2 text-[12px] text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[14px] mt-0.5">chevron_right</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why MARLIN split */}
      <section className="py-[80px] bg-white">
        <div className="max-w-site mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={slideLeft}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQRJxFNH-igv9GfcnXpiz4bUaZWgisKly36Kn-ww-Y_aQdIVvMZyI12Rxz_D8U2HhRIpg6_tO8QWw_RM0078oMSwdnAMv-Ons19Ppj8zFW50megSPVvoTUVlDyjaVbO2S2LngCtU6NzcAD1mvXDfdDNUa6Ha5hWEclJ3KF6dG3ukaidThAezsRHOkrRiPdnmbzWfT7PUFPaTihsrBpV_Ccuvn7fIQFeaupL2Np4SxGFupf-5lXFJC4oZT9QEUX6I6aTr8otV4OAA"
              alt="Resort" className="w-full h-[380px] object-cover rounded-[20px]"
            />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer}>
            <motion.span variants={fadeUp} className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">WHY IT WORKS</motion.span>
            <motion.h2 variants={fadeUp} className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">The MARLIN Difference.</motion.h2>
            <div className="space-y-6 mt-8">
              {[
                { icon: 'verified', title: 'Every property is verified', desc: 'Our team physically inspects or conducts video audits of all new listings before they go live.' },
                { icon: 'lock', title: 'Bank-grade security', desc: 'All transactions are processed through PCI-DSS Level 1 compliant systems with no stored card data.' },
                { icon: 'thumb_up', title: 'Best-rate guarantee', desc: 'Found it cheaper elsewhere? We\'ll match it and give you a 10% credit on your next booking.' },
                { icon: 'refresh', title: 'Free cancellation', desc: 'Over 80% of our properties offer free cancellation. We always show the policy before you commit.' },
              ].map(({ icon, title, desc }) => (
                <motion.div key={icon} variants={fadeUp} className="flex gap-4">
                  <div className="w-9 h-9 bg-surface-container rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-on-surface">{title}</h4>
                    <p className="text-[13px] text-on-surface-variant mt-0.5 leading-[1.6]">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-surface-container-low">
        <div className="max-w-[720px] mx-auto px-10">
          <div className="text-center mb-10">
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">FAQ</span>
            <h2 className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">Common Questions.</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`rounded-sm border transition-colors ${isOpen ? 'border-primary bg-[#FFF0EF]' : 'border-outline-variant bg-white'}`}>
                  <button
                    className="w-full flex justify-between items-center p-5 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span className={`text-[14px] font-${isOpen ? 'bold' : 'medium'} ${isOpen ? 'text-primary' : 'text-on-surface'}`}>{faq.q}</span>
                    <span className={`material-symbols-outlined text-[22px] flex-shrink-0 ml-4 ${isOpen ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {isOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[13px] text-on-surface-variant leading-[1.8]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[14px] text-on-surface-variant">Still have questions?</p>
            <Link to="/booking">
              <button className="mt-3 px-7 py-3 bg-primary text-white font-bold rounded-full text-[14px] hover:bg-primary-container transition-colors">
                Talk to a Specialist
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </motion.main>
  );
};

export default HowItWorks;
