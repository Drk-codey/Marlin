import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations';

const Hero = () => {
  return (
    <section className="relative h-[620px] w-full overflow-visible">
      {/* Background Image Container */}
      <motion.div className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <img className="w-full h-full object-cover" alt="luxury resort exterior with glowing infinity pool at dusk under a deep blue twilight sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCF3g1nalSnnBPZavTqDHUD1koj2IboqnwKTCwHESh1K4mVdgA8m1pBoJEMv10bnoWMHPDa4ziJaved5uGP-VlmpTFJQHefYkALnF-I2fcUBqRd5GLLI9hRwHvCnzCjZR498LoN2WQHBqVCAgz13Rs8KP2pLikQbCkTtlYKkr1Me0FljPHJHrMAqTZ9fM63K14LFCRrQrxFnfGcJGX5L4Pdq_OR2WLMCbsbOQTpF9Ymph3ZK1KrtBgLwxmO3gd-n_2LazJCjmtk9M" />
        {/* Red Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-primary/65"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-site mx-auto px-10 flex flex-col justify-center pb-12">
        <motion.div className="max-w-[640px]"
          initial="hidden" animate="visible" variants={{
            hidden: { x: -60, opacity: 0 },
            visible: { 
              x: 0, opacity: 1, 
              transition: { duration: 0.7, staggerChildren: 0.12, delayChildren: 0.2 } 
            }
          }}
        >
          <motion.span variants={fadeUp} className="inline-block px-3.5 py-1 bg-white/20 text-white text-[12px] font-semibold rounded-full mb-4">
            Find Your Stay
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-[56px] leading-[1.1] font-extrabold text-white font-headline mb-6">
            Find Your Perfect Stay Fast and Easy.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[16px] text-white/90 leading-[1.7] max-w-[420px] mb-9">
            Discover incredible stays and destinations with MARLIN Booking. We handle the complexity, you enjoy the journey.
          </motion.p>
          <motion.button variants={fadeUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-primary text-[15px] font-bold rounded-full flex items-center gap-2 transition-transform">
            Start Your Booking <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute -bottom-[60px] left-0 right-0 z-20 max-w-site mx-auto px-10"
        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-white rounded-[16px] shadow-[0_8px_40px_rgba(26,31,54,0.12)] p-6">
          <div className="flex gap-2 mb-4">
            <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-[14px] font-medium">
              <span className="material-symbols-outlined text-[18px]">nights_stay</span> Nights
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-surface-container text-on-surface-variant rounded-full text-[14px] font-medium hover:bg-outline-variant transition-colors">
              <span className="material-symbols-outlined text-[18px]">hotel</span> Hotel
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-surface-container text-on-surface-variant rounded-full text-[14px] font-medium hover:bg-outline-variant transition-colors">
              <span className="material-symbols-outlined text-[18px]">directions_boat</span> Cruise
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-surface-container text-on-surface-variant rounded-full text-[14px] font-medium hover:bg-outline-variant transition-colors">
              <span className="material-symbols-outlined text-[18px]">flight</span> Trips
            </button>
          </div>
          
          <div className="flex items-center border border-outline-variant rounded-full overflow-hidden">
            <div className="flex-1 px-6 py-2 border-r border-outline-variant">
              <label className="block uppercase text-[11px] font-bold text-[#888888] tracking-wider mb-0.5">City/Destination</label>
              <span className="text-[14px] font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> New York</span>
            </div>
            <div className="flex-1 px-6 py-2 border-r border-outline-variant">
              <label className="block uppercase text-[11px] font-bold text-[#888888] tracking-wider mb-0.5">Check In</label>
              <span className="text-[14px] font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> 21-10-2025</span>
            </div>
            <div className="flex-1 px-6 py-2 border-r border-outline-variant">
              <label className="block uppercase text-[11px] font-bold text-[#888888] tracking-wider mb-0.5">Check Out</label>
              <span className="text-[14px] font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_month</span> 21-10-2025</span>
            </div>
            <div className="flex-1 px-6 py-2 border-r border-outline-variant">
              <label className="block uppercase text-[11px] font-bold text-[#888888] tracking-wider mb-0.5">Guests</label>
              <span className="text-[14px] font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">group</span> 4 Persons</span>
            </div>
            <div className="flex-1 px-6 py-2">
              <label className="block uppercase text-[11px] font-bold text-[#888888] tracking-wider mb-0.5">Price Night</label>
              <span className="text-[14px] font-semibold text-on-surface flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">payments</span> $1000 - $5000</span>
            </div>
            <button className="bg-primary text-white px-10 py-[22px] flex items-center gap-2 font-bold text-[15px] hover:opacity-90 active:scale-95 transition-all outline-none rounded-none">
              <span className="material-symbols-outlined text-[20px]">search</span> Search
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
