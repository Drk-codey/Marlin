import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp } from '../utils/animations';

const Newsletter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="w-full bg-primary py-[60px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 10px)' }} />
      
      <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} className="text-center relative z-10 max-w-site mx-auto px-10">
        <h2 className="text-white text-[30px] font-extrabold font-headline">Subscribe to our Newsletter</h2>
        <p className="text-white/80 text-[13px] mt-2 mb-8 max-w-[400px] mx-auto">Get the latest news on luxury destinations, exclusive deals, and tailored travel experiences delivered directly to your inbox.</p>
        
        <form className="max-w-[480px] mx-auto flex" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 h-[50px] bg-white rounded-l-full px-6 text-[14px] text-on-surface placeholder:text-[#888888] outline-none"
            required
          />
          <button type="submit" className="h-[50px] bg-on-secondary-fixed text-white font-bold px-8 rounded-r-full hover:opacity-90 transition-opacity">
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
