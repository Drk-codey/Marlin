import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, scaleIn } from '../utils/animations';

const BlogInsights = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const articles = [
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNpDg_KGioc2eJ0cF-PjfGGZS0zLsSKdzlF6rAyobVnT-0CCcAIXd7X0Qz4_y42xHNbLJMzwk2u95nLLWvMMGD12a72EfqWB1ShuHzLOVZmpWerfrSRbqyQl-FjidSlbayOZAEYyeO_TxDA9wcFgzz_LmmqEOS0ZEla27m32iVXgg9xDnWlsY_R2Tb-A3ZhZowZ0io1uRVTy0DlcH26gYxjwzSXLyESsdhUQh4aCHgUtJSfmAVDkbe8vpax0HSjnipFOWzCTEPmK8", badge: "Top Picks", title: "Top 10 Hidden Gems in the Maldives for 2025", author: "Sarah Jenkins", date: "Oct 15, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9ncavu9YL_wwrYxXjjIOGmMGm2MpZRCJs2InMpZYZagmYX-te-Q09RnAc3E7M7WMQXviNgM8iaBpHBbC7xAfKhJh07pARiF6iznfW407mVFp2s0ZtsBRpWGzdSgjxexspowaodQkm82c4Q8xmNzCDZ7he8YnwFSRF0S1UPFyVMVT_RSM4aE_jW-n8NbwjfomU79LAZggTqKrHCinA-uX5jEFXNBTAEAXIbUle86ZcCIZ7aoWTGi9duZC2mRNNq-s38qi6XkAm0Ys" },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUjf0ouVRfPaRKAA57AuR6QJqjsm_Il4-2iuuI7d_3Fute-NKqqCA8kNeA2etZT4GKImEV88IVClNuw0iKKf7v2cu5TE051Y08Wf2UDYnOqp3X5NI8VbwOp-HUWDioAvgewjSRWQRdHK1gnPa3edWd1HEUDPywnWOK0izjvpi6Sl1Q72p7uiDAC1P8C1bY2kpIgMTI92sOHSpJux_Ek3Nw1_9FipZ1CXwSGk05FNxS3koREB0l_yP8_b0vblnXL-XQhomsWdMV0-w", badge: "Money Saving", title: "The Ultimate Guide to Airport Lounge Access", author: "James Wilson", date: "Oct 12, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCYYRHui9GeiICQdO-2x97ZEkjwlsquIkZfL2trdwoCf99bEKe8ZUgo0GmxQWg5pBLBBU2yUf-nQE9nNZ0sjInRyiwpIOzkz-kuGcV4XSNbimOuHbErHHfVOq4umycRq4GNM7e6GlYdTdLgkRTotV06R3Z3xuF84x5OHQgjeO-QirEBZKJIz3i8So5y_E-hD__AuYVVIkl4Tnqk17NaHw6DrIpw8yiWsVhMIj4FvxSYN6XItjoltI8Sy3QZUOT5P-46dKylG1EOeE" },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHiGMbaK6lUzpZD1JBUfrf9CZlt_ppp9sLKhHCy6v_x8NC9t0wF5gwKNePaZjku8gFNJk-LqULxM2rSgkjHHPxrwg2RAXB5SOu9D3j6gwN_ODGHRG_97ZdguV3lJORaK7fHesJL_dRkUhY2vgSHKaZNSKdSM52N6RY9PRWt6j_6_kIzC-bcNn68YpB8zr9MpIwKqCJTZeEt3qASWMDHNl-uGDAfRUqF6HOfJiYmQn-zMjgwulXrvyG5h7rYrtiqPcjhySooXvySto", badge: "Destinations", title: "Sustainable Hiking in the Swiss Alps", author: "Mila Kunis", date: "Oct 08, 2024", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqQVPGStSQD_JmsYn4D77jnI3rii1pg48DH3PRsgcqHjJ9jnFVex2wbpNkmzEyYgGnk3EgqK5xVkR0Pha5k5aP42rUBjg7fM6cHq-34L1utVTdLD00_5Ylw8kLSk5tAkRMHOkanpC8rbo9gZ3tVPmull3jTB1x76xeA-O2pW1BDHtY8CoVKNQU-vrsl3IwZ2jiC1MePthTbeH97Jc1QUREXl_mlEniqt6ra-wB964-CE897rCj7NFUVXlFG4gyJj5owQwPNlR7Yu4" }
  ];

  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-site mx-auto px-10">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">BLOG POSTS</span>
            <h2 className="text-[28px] font-extrabold text-on-surface mt-1">Travel Insights.</h2>
          </div>
          <button className="px-6 py-2 border-[1.5px] border-on-surface text-on-surface rounded-full text-[13px] font-bold hover:bg-on-surface hover:text-white transition-all flex items-center gap-2">
            All Articles <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer} className="grid grid-cols-3 gap-6">
          {articles.map((item, i) => (
            <motion.div key={i} variants={scaleIn} className="bg-white rounded-[12px] border border-outline-variant overflow-hidden group">
              <div className="relative h-[200px] overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full">{item.badge}</span>
              </div>
              <div className="p-4">
                <h3 className="text-[15px] font-bold text-on-surface line-clamp-2 h-[44px] leading-snug hover:text-primary transition-colors cursor-pointer">{item.title}</h3>
                <div className="h-px bg-outline-variant my-4" />
                <div className="flex items-center gap-2">
                  <img src={item.avatar} alt={item.author} className="w-8 h-8 rounded-full object-cover" />
                  <div className="flex items-center text-[12px]">
                    <span className="font-bold text-on-surface">{item.author}</span>
                    <span className="mx-2 text-outline-variant">•</span>
                    <span className="text-[#888888]">{item.date}</span>
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

export default BlogInsights;
