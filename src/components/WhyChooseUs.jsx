import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideLeft, slideRight } from '../utils/animations';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    { color: 'bg-primary', icon: 'verified', title: 'Exceptional Services', desc: 'Vetted high-end hospitality standards across all stays.' },
    { color: 'bg-blue-500', icon: 'location_on', title: 'Prime Locations', desc: 'Handpicked properties in the world\'s most sought-after destinations.' },
    { color: 'bg-green-500', icon: 'local_activity', title: 'Personalized Recommendations', desc: 'AI-driven curation that adapts to your unique travel style.' },
    { color: 'bg-purple-500', icon: 'support_agent', title: 'Personalized Support', desc: '24/7 concierge support, available in multiple languages.' }
  ];

  return (
    <section className="bg-surface-container py-[80px] overflow-hidden">
      <div ref={ref} className="max-w-site mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={slideLeft}>
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">WHY CHOOSE US</span>
          <h2 className="text-[28px] font-extrabold text-on-surface mt-1">Why Choose MARLIN Booking?</h2>
          <p className="text-[14px] text-[#888888] leading-[1.8] max-w-[420px] mt-4">
            We redefine the booking experience by combining meticulous precision with editorial-grade aesthetics, ensuring every stay is an unforgettable story.
          </p>
          
          <div className="space-y-6 mt-8">
            {features.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className={`w-9 h-9 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="material-symbols-outlined text-white text-[20px]">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-on-surface">{item.title}</h4>
                  <p className="text-[12px] text-[#888888] mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 outline outline-[1.5px] outline-primary text-primary text-[14px] font-bold rounded-full hover:bg-primary hover:text-white transition-all">
            Read More →
          </motion.button>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={slideRight} className="relative">
          <img className="w-full h-[380px] object-cover rounded-[16px]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVFaSVJ7Br58J2zWE4X9lF5r7hj83Hn5BEEm2JxHf3H8B-BW0h2ILLJNbmSjnRjH0e9Uo4EUzlCGYwfRKHg3HnLqOi-lTFJtNiJ11A0KJlwq69B7-aSXiRaGr0WxQA4kw4HOuBQ2E9I-jcPFwFMBQX9v3XG8F8BHSzh-hBPHQSSuq4Iwe_gU3nLj9fKFvwJCGdIPzFHGPGODGekBm2G02TcgxoK3pqbpPbf6N_gLcJekaDGPzidx3eBYvAOXJJwFmYuUmfuqfnc" alt="Scenic view" />
          
          <div className="absolute -bottom-4 -left-4 bg-white rounded-[12px] p-4 shadow-lg flex flex-col justify-center items-start border border-outline-variant">
            <span className="text-[32px] font-extrabold text-on-surface leading-none">98%</span>
            <span className="text-[13px] font-bold text-on-surface-variant mt-1">Trust Rate</span>
            
            <div className="flex -space-x-2 mt-3">
              <img className="w-[28px] h-[28px] rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEv85ekd_gx10wEuFO8l23FxifkKLWNmFXkNU_lFe4VwF-LNzvURHXbuvnqjtLOjY0JZm8QIj1sN1mAsE7zwZU1UenwL-PtoHMPYjer0Y4WMrOyLbMpJrSBbSNkKLQE_lZmHPUfQpRnAOlnzcUVBblzB7LqVGPdWeLbfILTVfT4PdUZkPubaR-4wxg5EepxGpnwh9OGNYwQp0W_9fxOix9pxtmDgWkDuFAYHUqWhiVRU4c0F-N8d9NkjW6Jr44t_-HZI6bezfJaRM" alt="User 1" />
              <img className="w-[28px] h-[28px] rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfwMWssUj7inJ9R8iVcsrlTLP-n__KICOlNiz8xX6wHNV3YtQRm74VGgbeGMK_F8TzKuvyp_ToAtqfVVAy91gosBp6chFSEug31blhPwyW2EG9YG9GjZ6Rptg297rCbm3VFw5QYmlrM5VFoi2px3hR9OJ0ZdkZ86r1IXIDVRYjhi5MliPf81NG8mNBrhfSTLY4AbKShApQA5W0XcZCw06YQfKN0XDvhohEIafZwcF6oNzkJwtDTSoKBrQcqlBn5H_vh2j7see3TWQ" alt="User 2" />
              <img className="w-[28px] h-[28px] rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMzMxl7s9KGmSjhHn3owl8pLwPWgQG9JpLHX6jmierScHIz3emfGNHCGi6wD6ad2FE7i3bcEkZeCVb2w-t0DU2rgq_pEEJxFPBpcTLTj62PpULniZTJ_wr_1Owl7eozZMm_AnTNijhJeqbK1JC8HhQGpudRV_lcNVwcPFfvfZMI2FQLXhaVht5jFiHH4Nb-ffDnIK2q0ROw0SdaMpidCFLBp6BkhETwttLt7lndihjHaQOcegDEhh824wNLXnbRPq0ZF3lPRhfRhg" alt="User 3" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
