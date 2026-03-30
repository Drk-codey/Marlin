import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, scaleIn } from '../utils/animations';

const TopPicks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-Kv_hN0n-3H0K9_fWYLILa0DyvFxNagIPJrqOHIYz5dGnOuIq_HaWnF3JRjJnPeSCUMAmIlY3dV0jUABpRYz8G2TRHq1W6X_JLjRJnGOqJPPmq4Vn6OdZWd8rGvqk6r4A-oW5c_cSIXajjibYm3pRFYL0zWu6vFJmx-CWI3RFuFvFmHcJX7MOdRdkiYvifm9rJR1S7f2r0gF-ieTaFZ0o3X5fGsT_pz0A7K4VJBp22_-7gGjy04RKX6QJlFJD8qiL8J_YCIc", badge: 'Sold Out', price: '$150', name: 'World Playas', location: 'Cancún, Mexico', stars: '4.5', reviews: '120', type: 'BOUTIQUE' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUfQmz7Ij1u5DJE-0P6uAFwvbthEBYcMFWoA0n2Ot2itkjBQM6nXVj-J91QQMB3-BDBB3K-j0fASlE2IXNjlTgTUAFAoJsRKqU0hxKQpA7MHF9w_1oVBrGV7J1jB0TKQNN5d4bF1mJEbcFr5m4MtlZ1z04J6CwgGmXXibLerj8GBVMPJOGb2JFI_IH95eVi4yZ_lDUj5A_jv3qhGV0TQxN0m9z0VQZ8rKk5xtJYbhGl2DjAQEbkxPdirK3nFuNX_qHT5SJB7Uc", badge: 'Hot Deal', price: '$220', name: 'Urban Boutique', location: 'Paris, France', stars: '4.8', reviews: '340', type: 'HOTEL' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSvQH3YAY2iJBdLEFewYXsY7D0Ur_D97pq8GaM_rDFXVPY8VB1s3Fk_mBrxkHhQvRxHjqT-WLrjGiGJIXDJABH3RUa3c_U-v-K9cTGMEGWH_7bJU2QhBOvIh5QLTQz2XioGPFIDNXkMO65A7qlWOW59c4R-bBqJAEBUL0TDiS-9BIqbRCEhivvgpf6sXfkh44fMOaEagYFq2UpYXqWwvq-zJaI0gpVSj0Eh3rjFGI7MUlSfJi_e7vfvvC-LoBoq_Db0UuOKN_Y", badge: 'Top Pick', price: '$180', name: 'Alpine Chalet Lodge', location: 'Zermatt, Switzerland', stars: '4.7', reviews: '210', type: 'CHALET' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXY4Y3o1DaTrpNT7Sg0fQ_oUl5m4bC4Q7yHa2TSaxr3SFRuZ0ORVLM2Tj3Smy5d0EuFOoSHwE8alyIPPRn04h5N11_yJnIHC_y85GKBC8IDNYQcI2G19Af2yw1cW7bMJgkLyOyH2U5qw8T-9wLFmZOQpuL3dq0mOKQvPY9X-lAl5Zw1TJvJzqjxSvHHW0oPKi3w_8zxIUsMTzfRNmjZfO1OX8xD2L5Hx1b4zVIjlfTLCrI2L3P1n5Z5sPIFhMxS1bCRcRDhv8w", badge: 'New', price: '$310', name: 'Sunrise Cabins', location: 'Santorini, Greece', stars: '4.0', reviews: '98', type: 'RESORT' }
  ];

  return (
    <section className="py-[80px] bg-surface-container">
      <div className="max-w-site mx-auto px-10">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">TOP PICKS</span>
            <h2 className="text-[28px] font-extrabold text-on-surface mt-1">Top Picks for Modern Travellers.</h2>
          </div>
          <button className="px-6 py-2 border-[1.5px] border-primary text-primary rounded-full text-[13px] font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer} className="grid grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div key={i} variants={scaleIn} className="bg-white rounded-[16px] overflow-hidden border border-outline-variant shadow-sm relative">
              <img src={card.img} alt={card.name} className="h-[180px] w-full object-cover" />
              <div className="absolute top-3 left-3 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full">{card.badge}</div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] text-on-surface-variant font-bold tracking-wider">{card.type}</span>
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-[15px] font-bold text-on-surface leading-snug max-w-[60%]">{card.name}</h3>
                  <div className="text-right">
                    <span className="text-[18px] font-extrabold text-on-surface">{card.price}</span>
                    <span className="text-[12px] text-on-surface-variant">/Night</span>
                  </div>
                </div>
                <p className="text-[12px] text-on-surface-variant mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span> {card.location}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-star-gold text-[14px]">
                    <span className="material-symbols-outlined icon-filled">star</span>
                    <span className="material-symbols-outlined icon-filled">star</span>
                    <span className="material-symbols-outlined icon-filled">star</span>
                    <span className="material-symbols-outlined icon-filled">star</span>
                    <span className="material-symbols-outlined">star</span>
                  </div>
                  <span className="text-[13px] font-bold text-on-surface">{card.stars}</span>
                  <span className="text-[11px] text-on-surface-variant">({card.reviews})</span>
                </div>
                <div className="flex items-center gap-3 mt-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px]">beach_access</span>
                  <span className="material-symbols-outlined text-[16px]">ac_unit</span>
                  <span className="material-symbols-outlined text-[16px]">pool</span>
                  <span className="material-symbols-outlined text-[16px]">wifi</span>
                </div>
                <button className="w-full bg-primary text-white py-2.5 rounded-sm font-bold text-[13px] hover:opacity-90 mt-4 transition-opacity">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopPicks;
