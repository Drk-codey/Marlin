import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, scaleIn } from '../utils/animations';

const PopularAccommodations = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1qDYDWrwPaDYyY2UJJ_SqSiDi5GhBw3D2Q_NIn4jfH9yWTxNag3HKRQWIHzhAiZ6kmPaDeHjVMVNywzbcZoJ9WYDxrFoCJDc7lCAjHdpnwTgnMoreNFeEn2VE84Zl5DKkQGspK3kyx4YaGNuw0g0dURBKKE1lEgYIhotG3qNQDOBMsuA3Hgx_Y2WDGojBH5ciPG7fJvqGSQn9GbwcqE6ci88zP5x68ZzV0rBH-QALQJX59ZGfGLPjaWEvoQ9-yQwv-0Kk67Zp5ck", name: 'Parmavana Luxury Suites', meta: 'Boutique · Florence, Italy', price: '$220', stars: '4' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu_P55ulgThX3oYsj1b-3XItYwh01rBV5roVA0K-4Gavc752vRobt7EUPGP8q7139P6vt6sNXNJEtV5PvquHsOXRqU2F1uFzKVnwYgnLvYKBS70wk42JOVBZwZQN_dmEPooMee99ORs7z9VSgc_IRehluk30ZliR7gQgHHdrsLLVDYggQsetR0dFX854KarhYAo7sw9LrDJFdand9jZ4eB-djYzKBQp8oxHHBPNX7IHF7n45b0GfHNg1qGXmy8eJ3T951ai1ws-bc", name: 'Waterfront Retreat', meta: 'Resort · Maldives', price: '$310', stars: '5' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYRszpUyGtfkbTazwuJ2IIWmnXXXjuSq8JotsPhfrbwj_L1vB1UhAEF2tQ9KLtMHeRctGqhYRAsc_rovlVJEq2BQiYrhW4gfAGT9HTUneqkROeo_sufwx3jfQb-loqKCazLxhyWJQDJe27idBwG44m27eRVvJEEP0FOkw3WqjGu736q8-KisERkmzzHwWYmqPTE0HfvRj-UndWe10HyC5uf68ZMiK0nv4q85kBaoz7MeQtRvH1royfhD-JtK77vuDYq3BQqKItlZo", name: 'Golden Heritage Palace', meta: 'Heritage · Rajasthan, India', price: '$190', stars: '4.5' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtGwS2IWjXGDUITb3XBXsgBrYbwel8fz6XgweJXJho78ZnRx01KFjZyGwdh7ec9LW_32QftDdnw_O_gYPbMuYOC1ZkRkTH20SDFqaEByWzWt7_zGKt50OB7osePG6H10GDft1K2xMTVGEgaVDgELa0cg8FjYeRYY4i68-Vs5qd-lqS1kekIN6p7MC4OzoBtUbBpdjGMbwB6T0YpwVjwaBcqdyOsZp0mKkoDavMettM2oyFNON91fgcflaRajQ2Icq3kQDKn1asrAI", name: 'Australian Bay Hotel', meta: 'Luxury · Sydney, Australia', price: '$400', stars: '5' }
  ];

  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-site mx-auto px-10">
        <div className="mb-10">
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">TOP PICKS</span>
          <h2 className="text-[28px] font-extrabold text-on-surface mt-1">Popular Accommodations.</h2>
        </div>

        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer} className="grid grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <motion.div key={i} variants={scaleIn} className="flex items-center gap-4 bg-white border border-outline-variant rounded-[12px] p-3 hover:shadow-md transition-shadow cursor-pointer">
              <img src={card.img} alt={card.name} className="w-20 h-20 rounded-sm object-cover flex-shrink-0" />
              <div>
                <h3 className="text-[14px] font-bold text-on-surface leading-tight">{card.name}</h3>
                <p className="text-[12px] text-[#888888] mt-1">{card.meta}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-primary font-bold text-[13px]">{card.price}/Night</span>
                  <div className="flex items-center text-star-gold text-[12px] gap-[1px]">
                    <span className="material-symbols-outlined icon-filled text-[14px]">star</span>
                    <span className="font-bold text-on-surface ml-1">{card.stars}★</span>
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

export default PopularAccommodations;
