import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { slideLeft, slideRight } from '../utils/animations';

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "How do I change or cancel a booking?", a: "You can easily manage your stays through your Marlin dashboard. Cancellations are free up to 24 hours before check-in for most premium listings." },
    { q: "What are the check-in and check-out times?", a: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to availability." },
    { q: "Is breakfast included in my stay?", a: "For most of our luxury and boutique accommodations, a complementary continental or full breakfast is included. Please check the specific property details." },
    { q: "Can I request an early check-in?", a: "Yes, early check-in requests can be made directly through the platform or by contacting our 24/7 concierge support team." },
    { q: "Do you offer airport transfer services?", a: "We provide premium airport transfer services at select destinations. This can be added to your booking during checkout." }
  ];

  return (
    <section className="bg-surface-container-low py-[80px]">
      <div ref={ref} className="max-w-site mx-auto px-10 flex flex-col md:flex-row gap-16">
        
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={slideLeft} className="w-full md:w-[45%]">
          <div className="relative">
            <img className="w-full h-[300px] object-cover rounded-[12px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALw19IVvbmrt9Uesx3sdKMj_jwwP4jgrh9S8ysSWKSETiFceg84maOOWw6lQbobKkz0pB20fMTszmm9dP3hKcsJ2a56XGm18DNIWrXKOjIvQlAVjIK0ELOnXhbZ9LE5m1aR45SuSDbKNcseZftRd8Aaj98KZ9oHBOQZ0c0n7BeWiuU0egYBPWTTHF3xXGN8ozInPku94aP6IojAhfBHQkis918JqmmZ7ULwNN7ekB4mQ2YWUJP9svcqCwOzQp2OekBj6OxR6sNLBI" alt="Hotel Interior" />
            <img className="w-[70%] h-[180px] object-cover rounded-[12px] -mt-10 ml-auto relative z-10 shadow-[0_8px_24px_rgba(26,31,54,0.15)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKrBs6OcHiUEwS91J1nJyuGR10RHT-ffg1lk4jwMvjJ36EHx4FGL3x_8EHAf8XnIoXNZ-xaDRmIuFdc34C8hN8RIeXiDMYs7k4Zych4-WrgHJEF8zOgd8grzp8hPJt7uG2b8mNroN-Dnqwhr733XQWS_v3Id2r8vmMB6JvBn7qNLLsBOvFc8blHzc9jCoF8yjf4xMg5KVilDB8qWLhTOf0Br5hFTX2ltNmseWUYM69T9qe4sHZRufdYlFpu2Yb6BsB13fguh0p08o" alt="Minimalist Lobby" />
          </div>
        </motion.div>

        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={slideRight} className="w-full md:w-[55%]">
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">FAQS</span>
          <h2 className="text-[24px] font-extrabold text-on-surface mt-1 mb-6">Frequently Asked Questions.</h2>
          
          <div className="space-y-0">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={`${isOpen ? 'bg-[#FFF0EF] rounded-sm p-4 mb-4' : 'border-b border-outline-variant py-4 group'} transition-colors`}>
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(isOpen ? -1 : i)}>
                    <h4 className={`text-[14px] ${isOpen ? 'font-bold text-primary' : 'font-medium text-on-surface group-hover:text-primary'}`}>
                      {faq.q}
                    </h4>
                    <span className={`material-symbols-outlined text-[20px] ${isOpen ? 'text-primary' : 'text-[#888888]'}`}>
                      {isOpen ? 'expand_more' : 'chevron_right'}
                    </span>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-[13px] text-[#888888] leading-[1.7] mt-2">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
