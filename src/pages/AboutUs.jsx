import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn, slideLeft, slideRight, pageTransition } from '../utils/animations';
import Newsletter from '../components/Newsletter';

const TEAM = [
  { name: 'Alexandra Moore', role: 'CEO & Founder', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh5mmcSRTXfSb9Kmb6GUyrdP2CXUkB55IsYupq0LYFHgetyYSZXi-mRqiNB0mPJ-fZspIiLVeYJlAqn302_CjxnMnNL0lnD8LpQtejQIbUxG4IcVc1TvObQFQfwyAf_lhCqpMetZel8oAo3goRgHcYuUoIxeMLTEyH_sZAmmPGx4dkwZonA1V3NB3kqfVPmY9NK_0mV4w3kpf1knZRsXZTizPIBwdlvPW2I_3SO8fqFVm3BCbnncodJWROIHygnzkd_ht_NlUl20c', bio: '15 years in luxury hospitality. Former VP at Four Seasons Hotels.' },
  { name: 'Marcus Thorne', role: 'Head of Curation', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApd0pWhpDlSDcUqhhEkTSLcXdSfnu8hhwOYXmVihXaSLWR6Lg8u8g2KoTVOOQuyDkzEq1LS8iyQVCQuUhbpEb-TVOEhhqEXntF9Evq3cNARV-zvwzlFfHpBXyJY3YJ0kafv6mNxb4jHnB_Qf5wxBO-upjZ0AgvkfXDIBbA-REmkOwerScCFRQHIRxBKjAmpwjWRTWDO6-NRfu2-QXMfbANXwtsRBEtzSSThn3HSItuOFKj2_DhPmtd6NidOAw6hA153YoH1n5tTK8', bio: 'Visited 80+ countries. Personally vets every property we list.' },
  { name: 'Elena Rossi', role: 'Chief Experience Officer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh5mmcSRTXfSb9Kmb6GUyrdP2CXUkB55IsYupq0LYFHgetyYSZXi-mRqiNB0mPJ-fZspIiLVeYJlAqn302_CjxnMnNL0lnD8LpQtejQIbUxG4IcVc1TvObQFQfwyAf_lhCqpMetZel8oAo3goRgHcYuUoIxeMLTEyH_sZAmmPGx4dkwZonA1V3NB3kqfVPmY9NK_0mV4w3kpf1knZRsXZTizPIBwdlvPW2I_3SO8fqFVm3BCbnncodJWROIHygnzkd_ht_NlUl20c', bio: 'Pioneered digital concierge systems at Marriott International.' },
  { name: 'David Chen', role: 'Technology Director', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo1RSPQE8jOA_W4O7oSqIQIa6cZbF2ptNtGbULEXw6VjezFJqJpgJu_8FCPhfio32qTI1cr0eH5o2y03-txTmrocPW-w4zxFbUqewvwXJBNNEo9IXxtpS0j_Pu6VrymN426aNufoXibH8U2359uny-x3_4866PAGwdMokkNAjuYFBEkiFe4G4ovO0Ju1RZef2W8eYx7gpNIb4nroTqj_8zI8bIL8zobZSYokUFXM8FYpgZNmLa_KsZ4EP-EdPNsznO7Uf-MF4wex0', bio: 'Built travel tech platforms serving 10M+ users globally.' },
];

const VALUES = [
  { icon: 'verified', color: 'bg-primary', title: 'Curated Precision', desc: 'Every property is hand-selected. We reject 90% of applicants who don\'t meet our editorial standard.' },
  { icon: 'auto_fix_high', color: 'bg-blue-600', title: 'Design-Led Thinking', desc: 'We treat travel like art. Aesthetics, atmosphere, and spatial experience guide every recommendation.' },
  { icon: 'diversity_3', color: 'bg-green-600', title: 'Human Connection', desc: 'Behind every booking is a real concierge who cares about your story, not just your transaction.' },
  { icon: 'eco', color: 'bg-amber-600', title: 'Responsible Travel', desc: 'We partner with properties committed to sustainable practices and supporting local communities.' },
];

const TIMELINE = [
  { year: '2019', event: 'Founded in London with a team of 8 travel obsessives and a vision for editorial-grade booking.' },
  { year: '2020', event: 'Launched the first AI-powered curation engine, onboarding 1,000 premium properties globally.' },
  { year: '2021', event: 'Expanded to Asia-Pacific. Surpassed 50,000 bookings. Launched 24/7 concierge service.' },
  { year: '2022', event: 'Series B funding. Opened offices in Dubai, Singapore, and New York.' },
  { year: '2023', event: '5,000+ verified properties, 98% satisfaction rate. Launched corporate travel vertical.' },
  { year: '2024', event: 'Introduced MARLIN Experiences — bespoke itineraries beyond hotels to full journey design.' },
];

const AboutUs = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <motion.main {...pageTransition}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface-container py-[100px]">
        <div className="max-w-site mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-primary text-white text-[12px] font-bold rounded-full mb-4 uppercase tracking-wider">
              Our Story
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-[52px] font-extrabold text-on-surface font-headline leading-[1.1]">
              The Story Behind MARLIN.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-on-surface-variant text-[15px] leading-[1.8] mt-5 max-w-[480px]">
              Born out of frustration with impersonal booking platforms, MARLIN was built with one belief: great travel deserves great design. We curate, we verify, we obsess over the details — so you don't have to.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 mt-8">
              <Link to="/solutions">
                <motion.button whileHover={{ scale: 1.04 }} className="px-7 py-3 bg-primary text-white font-bold rounded-full text-[14px] flex items-center gap-2">
                  Our Solutions <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </motion.button>
              </Link>
              <Link to="/booking">
                <button className="px-7 py-3 border-[1.5px] border-on-surface text-on-surface font-bold rounded-full text-[14px] hover:bg-on-surface hover:text-white transition-all">
                  Book a Stay
                </button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-wNNl5qoxtQ7IWeHD5Ys_VL4zPIJ6tO42aniD2-r4spZ6q-w71O8SsAi2TfvWrMrVSKUuv5ms55LVj8m9pQzehBYowZKx3k_mqmlbRc2hk9lsU-SSkcfhJNDT_-DP77dK2S_2prfRuKThRpOm916K8f8laWle7Qfh92VXfMJVLECCXrvNyCKknncGGUCYMEyTWKhkvUywpkFpzPZ86Gc4NbGV7bJ8TLzl7-Hf9LQSRK5oENWR-k85bYf_zRBCvEYY6_x0shISAI"
              alt="MARLIN Story"
              className="w-full h-[400px] object-cover rounded-[20px]"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-[14px] p-5 shadow-[0_8px_32px_rgba(26,31,54,0.15)]">
              <div className="text-[32px] font-extrabold text-on-surface">2019</div>
              <div className="text-[13px] text-on-surface-variant mt-0.5">Year Founded</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-primary py-12">
        <motion.div
          initial="hidden" animate={statsInView ? 'visible' : 'hidden'} variants={staggerContainer}
          className="max-w-site mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          {[
            { v: '5,000+', l: 'Premium Properties' },
            { v: '50+',    l: 'Countries' },
            { v: '200K+',  l: 'Happy Travellers' },
            { v: '98%',    l: 'Satisfaction Rate' },
          ].map(({ v, l }) => (
            <motion.div key={l} variants={fadeUp} className="text-center">
              <div className="text-[38px] font-extrabold text-white font-headline">{v}</div>
              <div className="text-white/75 text-[13px] mt-1 font-medium">{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values */}
      <section className="py-[80px] bg-white">
        <div className="max-w-site mx-auto px-10">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">WHAT DRIVES US</span>
            <h2 className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">Four Principles, One Standard.</h2>
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map((v, i) => (
              <motion.div key={i} variants={scaleIn} className="bg-surface-container rounded-[16px] p-7 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 ${v.color} rounded-full flex items-center justify-center mb-4`}>
                  <span className="material-symbols-outlined text-white text-[22px]">{v.icon}</span>
                </div>
                <h3 className="text-[16px] font-bold text-on-surface font-headline">{v.title}</h3>
                <p className="text-[13px] text-on-surface-variant leading-[1.7] mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[80px] bg-surface-container">
        <div className="max-w-site mx-auto px-10">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">OUR JOURNEY</span>
            <h2 className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">From Idea to Industry Leader.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1 hidden md:block" />
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                      <span className="text-white text-[12px] font-bold">{item.year.slice(2)}</span>
                    </div>
                    <div className="flex-1 bg-white rounded-[12px] p-5 border border-outline-variant">
                      <span className="text-primary font-bold text-[13px]">{item.year}</span>
                      <p className="text-on-surface text-[14px] leading-[1.7] mt-1">{item.event}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-[80px] bg-white">
        <div className="max-w-site mx-auto px-10">
          <div className="text-center mb-12">
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">THE TEAM</span>
            <h2 className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">The Minds Behind the Magic.</h2>
          </div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {TEAM.map((member, i) => (
              <motion.div key={i} variants={scaleIn} className="text-center group">
                <div className="relative overflow-hidden rounded-[16px] mb-4">
                  <img src={member.img} alt={member.name} className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-[15px] text-on-surface">{member.name}</h3>
                <p className="text-primary text-[13px] font-medium mt-0.5">{member.role}</p>
                <p className="text-on-surface-variant text-[12px] leading-[1.6] mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </motion.main>
  );
};

export default AboutUs;
