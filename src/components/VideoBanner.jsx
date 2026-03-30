import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideLeft, slideRight } from '../utils/animations';

const VideoBanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative w-full h-[380px] flex items-center justify-center overflow-hidden">
      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQRJxFNH-igv9GfcnXpiz4bUaZWgisKly36Kn-ww-Y_aQdIVvMZyI12Rxz_D8U2HhRIpg6_tO8QWw_RM0078oMSwdnAMv-Ons19Ppj8zFW50megSPVvoTUVlDyjaVbO2S2LngCtU6NzcAD1mvXDfdDNUa6Ha5hWEclJ3KF6dG3ukaidThAezsRHOkrRiPdnmbzWfT7PUFPaTihsrBpV_Ccuvn7fIQFeaupL2Np4SxGFupf-5lXFJC4oZT9QEUX6I6aTr8otV4OAA" alt="Resort" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      
      <button className="absolute left-10 w-11 h-11 bg-white rounded-full flex items-center justify-center text-on-surface hover:scale-110 transition-transform z-20">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button className="absolute right-10 w-11 h-11 bg-white rounded-full flex items-center justify-center text-on-surface hover:scale-110 transition-transform z-20">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      <div ref={ref} className="relative z-10 flex items-center gap-16 max-w-[900px]">
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={slideLeft} className="text-left">
          <span className="inline-block px-4 py-1.5 bg-primary text-white text-[12px] font-bold rounded-full mb-3 uppercase tracking-wide">
            Special Offers
          </span>
          <h2 className="text-white text-[38px] font-extrabold leading-tight font-headline">
            Summer Stays.<br/>Extra Savings.
          </h2>
          <p className="text-white/80 text-[14px] leading-[1.7] max-w-[480px] mt-3">
            Book a minimum 3-night stay this summer and enjoy 25% off your accommodation — the boldest deal for every day of your stay.
          </p>
          <motion.button whileHover={{ scale: 1.05 }}
            className="mt-6 px-7 py-3 bg-primary text-white text-[15px] font-bold rounded-full hover:opacity-90 transition-opacity">
            Special Offers
          </motion.button>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={slideRight}>
          <button className="w-[72px] h-[72px] bg-white rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.3)] flex items-center justify-center text-primary hover:scale-110 transition-transform">
            <span className="material-symbols-outlined icon-filled text-[32px]">play_arrow</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoBanner;
