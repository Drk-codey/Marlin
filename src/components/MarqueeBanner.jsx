import React from 'react';
import { motion } from 'framer-motion';

const MarqueeBanner = () => {
  const items = [
    "Beach • Maldives", "Mountains • Swiss Alps", "City • New York", "Safari • Kenya", 
    "Heritage • Rajasthan", "Island • Bali", "Culture • Kyoto", "History • Rome"
  ];

  return (
    <div className="bg-primary py-3 overflow-hidden w-full flex">
      <div className="marquee-track">
        {items.map((item, index) => (
          <div key={index} className="text-white text-[13px] font-semibold flex items-center gap-2">
            <span>{item}</span>
            <span className="mx-2 text-[10px]">●</span>
          </div>
        ))}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {items.map((item, index) => (
          <div key={'d'+index} className="text-white text-[13px] font-semibold flex items-center gap-2">
            <span>{item}</span>
            <span className="mx-2 text-[10px]">●</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
