import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F36] pt-16 pb-8 text-white/60">
      <div className="max-w-site mx-auto px-10">
        <div className="grid grid-cols-5 gap-8">
          
          <div className="col-span-2 pr-8">
            <div className="flex flex-col leading-none mb-6">
              <div className="flex items-baseline gap-0.5">
                <span className="text-2xl font-extrabold uppercase tracking-tighter text-white font-headline">MARLIN</span>
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              </div>
              <span className="text-[12px] font-medium tracking-widest text-white/60 ml-0.5">Booking.</span>
            </div>
            <p className="text-[13px] leading-[1.8] max-w-[300px]">
              Marlin Booking is your curated gateway to the world's most exceptional stays. We believe travel should be precise, personal, and perfectly designed.
            </p>
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-[13px]">
              {['Solutions', 'About Us', 'Services', 'Booking'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-[13px]">
              {['Help Center', 'Safety Information', 'Cancellation Options', 'Our COVID-19 Response'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-white mb-6">Connect</h4>
            <div className="space-y-4">
              <a href="mailto:info@marlinbooking.com" className="flex items-center gap-3 text-[13px] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-primary text-[18px]">mail</span> info@marlinbooking.com
              </a>
              <a href="tel:+234567890" className="flex items-center gap-3 text-[13px] hover:text-white transition-colors">
                <span className="material-symbols-outlined text-primary text-[18px]">call</span> +23 (456) 7890
              </a>
              <div className="flex items-center gap-4 pt-2">
                <span className="material-symbols-outlined text-[20px] hover:text-white cursor-pointer transition-colors">social_leaderboard</span>
                <span className="material-symbols-outlined text-[20px] hover:text-white cursor-pointer transition-colors">movie</span>
                <span className="material-symbols-outlined text-[20px] hover:text-white cursor-pointer transition-colors">photo_camera</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex justify-between items-center text-[12px] text-white/40">
          <p>© 2025 Marlin Booking. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Legal Notice</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
