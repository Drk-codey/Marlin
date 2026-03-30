import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, scaleIn } from '../utils/animations';

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    { n: 1, icon: 'search', title: 'Discover Hotels', desc: 'Browse our curated selection of world-class stays.' },
    { n: 2, icon: 'check_circle', title: 'Confirmation', desc: 'Receive instant confirmation with all booking details.' },
    { n: 3, icon: 'travel_explore', title: 'Enjoy', desc: 'Check in and experience the luxury you\'ve chosen.' }
  ];

  return (
    <section className="py-[80px] bg-white text-center">
      <div className="max-w-site mx-auto px-10">
        <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">EASY BOOKING</span>
        <h2 className="text-[28px] font-extrabold text-on-surface mt-1">Your Journey in 3 Easy Steps.</h2>

        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer} className="grid grid-cols-3 gap-12 mt-12 relative">
          
          <div className="absolute top-8 left-[16.6%] right-[16.6%] border-t border-dashed border-outline-variant -z-10" />

          {steps.map((step) => (
            <motion.div key={step.n} variants={scaleIn} className="flex flex-col items-center gap-4 bg-white z-10 px-4">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[28px]">{step.icon}</span>
              </div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">STEP {step.n}</span>
              <h3 className="text-[16px] font-bold text-on-surface">{step.title}</h3>
              <p className="text-[13px] text-[#888888] leading-[1.7] max-w-[220px]">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
