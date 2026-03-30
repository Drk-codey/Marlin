import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, scaleIn } from '../utils/animations';

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    { title: "Absolutely Reviewed!", quote: "Working with MARLIN Booking has been a seamless experience. From the moment I arrived at the villa I booked, every detail was accounted for. The platform is intuitive, the properties are exactly as described.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQVQFpvBsBumyacPWbj3iWJEFlDiKi8g5MqHyABDJvTJq-IpPa7_Ly9BLf4DOwfZS3kUFH0GWJzMXnVWXFTFPl-kKKZxAmXSUcKX_iHKyGPH4Xu4aGTQa5y2wfMjRTzGg01FjqiaDPc0Lp2wTGQBT_Ot4FkZ0HkQUn2VevTBuTxnMbAnNx3xRuaIRtSh7LdMkSrH4iHBBfLlpbOGIRlKl3Cka7kQDiCiAlQ7LRgOsTiHaeMtHjt5MZpJU8wVFU0EiQMnpKV07k", name: "Marcus Thompson", role: "Travel Blogger" },
    { title: "The Best Discovery!", quote: "I found a hidden gem in Florence that I would have never seen on other platforms. The focus on high-end design and central locations is exactly what I look for. The 24/7 support team even helped me book a private vineyard tour last minute.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCh5mmcSRTXfSb9Kmb6GUyrdP2CXUkB55IsYupq0LYFHgetyYSZXi-mRqiNB0mPJ-fZspIiLVeYJlAqn302_CjxnMnNL0lnD8LpQtejQIbUxG4IcVc1TvObQFQfwyAf_lhCqpMetZel8oAo3goRgHcYuUoIxeMLTEyH_sZAmmPGx4dkwZonA1V3NB3kqfVPmY9NK_0mV4w3kpf1knZRsXZTizPIBwdlvPW2I_3SO8fqFVm3BCbnncodJWROIHygnzkd_ht_NlUl20c", name: "Elena Rossi", role: "Lifestyle Influencer" },
    { title: "Hidden Gem Found!", quote: "Searching for family-friendly luxury is usually a nightmare of trade-offs. Marlin Booking curated a suite that was both sophisticated for us and perfect for our two kids. The attention to detail in their property descriptions is unparalleled.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo1RSPQE8jOA_W4O7oSqIQIa6cZbF2ptNtGbULEXw6VjezFJqJpgJu_8FCPhfio32qTI1cr0eH5o2y03-txTmrocPW-w4zxFbUqewvwXJBNNEo9IXxtpS0j_Pu6VrymN426aNufoXibH8U2359uny-x3_4866PAGwdMokkNAjuYFBEkiFe4G4ovO0Ju1RZef2W8eYx7gpNIb4nroTqj_8zI8bIL8zobZSYokUFXM8FYpgZNmLa_KsZ4EP-EdPNsznO7Uf-MF4wex0", name: "David Chen", role: "Architect" }
  ];

  return (
    <section className="py-[80px] bg-surface-container">
      <div className="max-w-site mx-auto px-10">
        <div className="text-center mb-12">
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">Testimonials</span>
          <h2 className="text-[28px] font-extrabold text-on-surface mt-1">What Our Voyagers Say.</h2>
        </div>

        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer} className="grid grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div key={i} variants={scaleIn} className="bg-white rounded-[12px] shadow-[0_4px_20px_rgba(26,31,54,0.07)] p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-[14px] font-bold text-on-surface">{card.title}</h4>
                <p className="text-[13px] text-[#888888] leading-[1.8] mt-3">{`"${card.quote}"`}</p>
              </div>
              
              <div className="mt-6">
                <div className="h-px bg-outline-variant my-4" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img className="w-9 h-9 rounded-full object-cover" src={card.img} alt={card.name} />
                    <div className="flex flex-col">
                      <span className="text-[13px] font-bold text-on-surface">{card.name}</span>
                      <span className="text-[11px] text-[#888888]">{card.role}</span>
                    </div>
                  </div>
                  <div className="flex text-star-gold text-[16px]">
                    <span className="material-symbols-outlined icon-filled">star</span>
                    <span className="material-symbols-outlined icon-filled">star</span>
                    <span className="material-symbols-outlined icon-filled">star</span>
                    <span className="material-symbols-outlined icon-filled">star</span>
                    <span className="material-symbols-outlined icon-filled">star</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
