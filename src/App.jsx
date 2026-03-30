import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TravellerPreferences from './components/TravellerPreferences';
import MarqueeBanner from './components/MarqueeBanner';
import TopPicks from './components/TopPicks';
import VideoBanner from './components/VideoBanner';
import PopularAccommodations from './components/PopularAccommodations';
import DreamDestinations from './components/DreamDestinations';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BlogInsights from './components/BlogInsights';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full bg-white font-body selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <TravellerPreferences />
      <MarqueeBanner />
      <TopPicks />
      <VideoBanner />
      <PopularAccommodations />
      <DreamDestinations />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <BlogInsights />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
