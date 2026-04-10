import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <motion.header 
      initial={{ y: -64, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white border-b border-outline-variant h-[64px]"
    >
      <div className="max-w-site mx-auto px-10 flex justify-between items-center h-full">
        {/* <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">call</span>
          <span className="text-[13px] font-medium text-on-surface"></span>
        </div> */}

        <div className="flex items-center gap-12">
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl font-extrabold uppercase tracking-tighter text-on-surface font-headline">MARLIN</span>
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            </div>
            <span className="text-[11px] font-medium tracking-widest text-on-surface-variant ml-0.5">Booking.</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {['Home','Solutions','About Us','Services','Booking','How it Works','Locations'].map((item, i) => {
              const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '')}`;
              const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
              return (
                <Link key={item} to={path}
                  className={`text-[14px] font-${isActive ? 'semibold' : 'medium'} ${isActive
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-on-surface transition-colors'}`}>
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 text-on-surface-variant text-[14px] cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">language</span>
            <span>English</span>
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </div>
          <div className="w-px h-6 bg-outline-variant" />
          <Link to="/signin">
            <button className={`px-5 py-2 border-[1.5px] border-on-surface text-[14px] font-semibold rounded-sm transition-all ${
              location.pathname === '/signin'
                ? 'bg-on-surface text-white'
                : 'text-on-surface hover:bg-on-surface hover:text-white'
            }`}>
              Sign In
            </button>
          </Link>
          <Link to="/contactus">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 text-[14px] font-semibold rounded-full flex items-center gap-2 transition-all ${
                location.pathname === '/contactus'
                  ? 'bg-primary-container text-primary'
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}>
              Contact Us <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
