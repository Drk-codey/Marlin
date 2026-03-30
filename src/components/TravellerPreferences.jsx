import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, scaleIn } from '../utils/animations';

const TravellerPreferences = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    { icon: 'bed', title: 'Deluxe Suite', count: '226 Hotels', active: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVU-o5FelNBrKprwqF16BrxE3kMMjmU1g_4viBYjFAW7DINnWWaXzjT-WdcC2_1ZR4XXqwAklqT4dqUIG86rszx4NdXKi7TmUWLm0DHAf3z_eMn0jMAHt7O4vew3bbr6hAtwZYDjM6h6mBXBBF3HbNCaKLLi22QNcTWMdZcBmAApMPsg0yAW0KAjjOgsLozKzFVxw1iIgx1rYlxaLHgAA5Tgttx2W0rftuMrvqetz-cch_zQrcnDIhaVfULznSqIxV2KcWLcop6bg' },
    { icon: 'door_front', title: 'Standard Room', count: '412 Hotels', active: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3TGNE50tJBB407q2Y30MQqcExR8AKduS_SanoWdHizEuzgQIt2QNYR_qCkM5mf0_7VI7xaIluoaMNKPPopEAMydGt63E2eF1xe9W3K2_2bPEmWvToqCDC7UhVnZV4YuYo_o6S3uGVu6mJ1B7GpdSpV0lX5_unsDUMguqLm8-RJEvtMfUL_pQ06TYb8odHYJrVzyussFw_iYfBkj0u7w5_H5fArljGRRu7JFnl3EplNVy-QbHG9pY-nDtF2wxwj8gAorzbNmNlCfI' },
    { icon: 'bedroom_parent', title: 'Suite Room', count: '134 Hotels', active: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGeAgvqDep6EPu-dm1H_dBnMMctb2v9mlRfe0-NMrY0zf7gkM0oA0W6I9RlyN0EqBLjQHhgUEdcUVfQuQ-2v0KUZIpPlnbyBGNuGLqb1lVcbp1Uy6aFlfJrv87ZQoGVAc9OxvXjzDvvH32G3_RDz9GM8d5H2Al1jrsKgsunYTh-B_Q7R2bJd5NJAh2rh1N2vG24l4RH7ZAt7okzHeV1RDhaQyA1dMls2MHwB6kA2JNOCmkp0Venk8HdCBwspwgsBz-KXn-XZZJGyk' },
    { icon: 'balcony', title: 'Doris One Suite', count: '87 Hotels', active: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxb6xu-hgjcVYtF243cCwLkG3g7o_pq3_ekCDmMkClDBPPopa2ReerQAPVxLFI25o05jR-qK1dDKLjjr8zvFIDONy4WuLhErIlGv4l1xkGf-uh6yy6h3no1aVUC2jhqRlswMFNS0OWBc5TtCt6pa0jtUscEe_Q-A-vgLt6OQ2wo7p85y7Hg7MTeD58F2cUYfQkPjJQMlvS6VQxSTpRh0vYL6jAM12XHtewjUHRfjTIFMR8tFwk5DYx2nJpxMx_XHs0p21_Bl5fi68' },
    { icon: 'family_restroom', title: 'Family Rooms', count: '305 Hotels', active: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS7aP4hnXDAnus7mwTldDRwrK8H2lkSLaXpBu_5jrEWKfC8x2GgpKmYUnDPEtioL97e-1GjNlGvn5cCVsThpkJDKhAfvgLY4KUgUXbS-EtvRH9PwLw8m1X5Q_c0VTuX7HnfyDJ1xGOqVU7r59dwi8pRyLStZdnYGOBCGEMurnzvpkIi9ScSYYMet_jBvogzMkkblgNDrFBX-UPv0bKoW1OQs3jKBVzucNMYQgZ-xjEhfQ_YmvjxEEehzS63PfxPa03Zzq0utAEstA' },
  ];

  return (
    <section className="mt-[160px] py-[60px] bg-white">
      <div className="max-w-site mx-auto px-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">TRAVELER PICKS</span>
            <h2 className="text-[24px] font-extrabold text-on-surface mt-1">Travellers & Preferences.</h2>
          </div>
          <button className="px-6 py-2 border-[1.5px] border-primary text-primary rounded-full text-[13px] font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
            View All <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <motion.div 
          ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} 
          variants={staggerContainer}
          className="flex gap-5"
        >
          {cards.map((card, i) => (
            <motion.div key={i} variants={scaleIn}
              className={`flex-1 min-w-[200px] bg-white rounded-[12px] overflow-hidden border ${card.active ? 'border-t-[3px] border-t-primary border-outline-variant' : 'border-outline-variant'}`}>
              <img src={card.img} alt={card.title} className="h-[130px] w-full object-cover" />
              <div className="p-4">
                <span className="material-symbols-outlined text-primary text-[20px]">{card.icon}</span>
                <h3 className="text-[14px] font-bold text-on-surface mt-1.5">{card.title}</h3>
                <p className="text-[12px] text-[#888888] mt-1">{card.count}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
          <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
          <div className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
        </div>
      </div>
    </section>
  );
};

export default TravellerPreferences;
