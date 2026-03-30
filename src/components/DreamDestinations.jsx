import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, scaleIn } from '../utils/animations';

const DreamDestinations = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const row1 = [
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhHybypqWqjTXZCVzDLdYcSriSTva1LfCqxjD2lS4H4jRHViMEZmTCjN0lrWGJi2RvOFTbKzWPvsgq5-gVF8cztOZrVHc6gWm7djTxlTU6b2kEQTJ5GdNgaSQ2ooyz9Blw5J7X6Jg7JK4JdeI-miX2z6EMd4sI7oWGklJGyrZPGxh9rqmnKHVOk-_KD6TIRYwhJoBf34mzkoJyKpJQJDp8pbDNs5k0nqwNChyzONnOp7GIexzH4bQu_7Y6k_iaWjRzfI2qBsVC4mk", name: 'Ukraine', hotels: '120+ Hotels', h: 'h-[200px]' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS9fvpvCCsF_fthKvFJVu4LLFa0PpMrzM0mI6yvY69eKFmFDlS3IxOKg-Pmo579EbVMTaZBgdS_BDui5YrJUdsyXR6TW0sN50XpXh4B-oXTl_JNngiaaLErs_3snQNhk_p1RDFF9-bD2ijB88QE4T8EN9OLbiI1Z2zxWrghWXXjG8abIoaj68S2Z2WRKYw1rQVXI25K3DYobYPtjDAL2BxytP_eTGbH12C-msTYvSpRFDrBXD6fdAZ2KZKBbwA64_72ngI0zO-xdg", name: 'Russia', hotels: '85+ Hotels', h: 'h-[200px]' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCum97HffPb_pxru3bqqkSpeZz4qUT79r_JvwVecq7Gg0ConuFW5BHs_s_uj-QeZFuKsRGcH4ZJQW6BZcXYN3dtkJLenPpVh4KLmAzzj1G9Q0zvJgVCbUBu8JMu_60klwcW8FI9KjJ9OflEPGmko2cUevNeXApZ0t3mer2gDokauzBLMTzVvOIQaUjTqPEPpDwyjV9L44wuqpWmWxx4JxWQOYOIJQhcj5j0x_vR7F4QGSpCIoyoE0xbt1PjQzpbLhbDKGtVLIA1voM", name: 'Thailand', hotels: '340+ Hotels', h: 'h-[200px]' }
  ];
  
  const row2 = [
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCullpm8fJCJYDV65zQ3qvHP7s23fMGtDxxyksqT075y3GSBql3J4YCToDOegV-AojfoBY9bbsFNOHGt1MjBLuzG-PjwGlDuRgTfmzuue_dJffM6YpKA-4jBVNXvsajJMa6eHBqYtt2bMgjQetM2kACvvZO0ZHWxiNneXt_o0eK5E0nzjvBLBRDTBamE9MjQ8K8LOCLar3jXT5LZF8Ik_nAHrvuSnya5Mb7Hn0Nf3DU6Fpal6NnRvsz9d1-W8vDqv6gLSHykpvFLBY", name: 'Azerbaijan', hotels: '56+ Hotels', h: 'h-[220px]' },
    { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn_KTOuLTwBaAe97FqVp9lObSbT_oqYJAJqtrrqVGiGFiIRyxtbgF3EEl3SbZ6u0QNmwE8ZYEmfallQ35EMRQE9HMLw-sZbfqAFB0ljcLsaNKrxnJiOYWr6gfDAkXd1FY0FnKaC_czDVIEDfP1ZUaqxx_fcjBAIjnB5QtROv46pOXmiaA5Taqbwz78HzBctBtDgZPPd8a3PDG0cNHKdqJ3nReSdjOb1z5Er56er5vJhlTXeh0_i2It2ZMyliDV3dDgfoLQxSCu0fM", name: 'Germany', hotels: '210+ Hotels', h: 'h-[220px]' }
  ];

  const DestCard = ({ item }) => (
    <motion.div variants={scaleIn} className={`relative rounded-[12px] overflow-hidden group ${item.h}`}>
      <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white font-bold text-[18px]">{item.name}</h3>
        <p className="text-white/80 text-[13px]">{item.hotels}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-[80px] bg-white text-center">
      <div className="max-w-site mx-auto px-10">
        <div className="mb-10 text-center">
          <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">WHERE TO NEXT?</span>
          <h2 className="text-[28px] font-extrabold text-on-surface mt-1">Dream Destinations.</h2>
        </div>

        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={staggerContainer} className="space-y-4 text-left">
          <div className="grid grid-cols-3 gap-4">
            {row1.map((item, i) => <DestCard key={'r1'+i} item={item} />)}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {row2.map((item, i) => <DestCard key={'r2'+i} item={item} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DreamDestinations;
