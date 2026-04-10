import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { staggerContainer, scaleIn, fadeUp, pageTransition } from '../utils/animations';

const ALL_HOTELS = [
  { id: 1, name: 'Hotel Mariners', location: 'South Folkshire, UK', type: 'Boutique', price: 300, stars: 4.2, reviews: 240, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3z-m_jDoWgtbo-zX55TmzxYi-DSKya9ux1vQ99GABcmqeVePbt8WkPeP1sVwpYji3pBa8JfsN7Q5TeD8csveb52-tVY0PWEebC2uy1kdMKscBOkUF8vH6rAWMRkHEYaBAYijjZrtJtcusoH0YW0P4lIUxfHoGjmZqmmjxRzHlEkdfm84bjIt8SQZCYa_55Vl_bfgnIOwwzliLeWKnOXsFwGNL62ZXTKQXXF08tRuDPWuxU1t-XaM6IaQ2hSva2veirKxzHqUFys', amenities: ['wifi', 'pool', 'local_parking', 'restaurant'], badge: 'Top Rated' },
  { id: 2, name: 'Urban Boutique', location: 'New York, USA', type: 'Luxury', price: 450, stars: 4.9, reviews: 512, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT2V2Ik_UVKlrcgK7DcyuEIInWGc6QjO6WGWfoDzi35fY2kbFLp8Yp_IbluZ1fclaFQ1QWWpNTGoZ3_R9XWQPONKO63i6Cw371RkKuJZ6rlUA3PGQ3qmrjzosQzr9WnkTuIesjJOh1CLT_tncKZaeYqN1VAjtSVVbBkG3X7sws86Nc72jpcHjzaw-GkiW5_EStaKDCQiVVOkv8XCq6IW7pN52xtUq46rVJLG2dtaA2IloGoRFzSk60lpkzJ-ZLormju6vc42dWQ1I', amenities: ['wifi', 'fitness_center', 'spa', 'restaurant'], badge: 'Best Value' },
  { id: 3, name: 'Alpine Edge Lodge', location: 'Zermatt, Switzerland', type: 'Boutique', price: 520, stars: 4.7, reviews: 189, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ-0ooSzBzik_4z00VoomRxlzVUysSVK5T0adFq64GhwS-9EY64bE1g1KsORIJ7-IJSK1-MfOkEJ-OjG-CshFvq5ylvvaDcOE9qSWQayPtv3EcuM8c77bnILABWDrLyIPDKvdXR_DWr7o6Izwfy4YoHlJlWklDRLjpzE_FUxnEZYpIyB9ZI1K0wkoH3Uw6QNQjGBG9xA4S3wROqHIP1wimOtYvJGuyvbZ3LkNHDayxqTZyhVJNSpG4PtjH5y8wDbFZyD78F-zSoLw', amenities: ['restaurant', 'hot_tub', 'fireplace'], badge: null },
  { id: 4, name: 'Serene Cabins', location: 'Bali, Indonesia', type: 'Resort', price: 280, stars: 4.0, reviews: 98, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLEywoud5aoS-6w-hvUwdTG0nhWDzy5ShRShrIVaG60JSY_y3nvWIzaskNFM55N3hrxHvUksP4aPI5yrL6OrFrQ0REd5CEZnjA1ReQisloGZvD5OAXkdpRmUNDGnZ0TFX_SrQR0cbZQsHCUGt0FkAgTjjocyFOX0Tqv4pcmHKq3BM6kUuCO-JOBzGE1VCnyiRCdLmtqleK9_9xFNHDAq3hMW-v6UcM8P1C-7EIxtwSAjbRhy0SQBSuDeZaN8N243zy2pQXyeC44Fk', amenities: ['beach_access', 'pool', 'ac_unit', 'wifi'], badge: 'Popular' },
  { id: 5, name: 'Parmavana Luxury Suites', location: 'Florence, Italy', type: 'Boutique', price: 220, stars: 4.4, reviews: 167, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1qDYDWrwPaDYyY2UJJ_SqSiDi5GhBw3D2Q_NIn4jfH9yWTxNag3HKRQWIHzhAiZ6kmPaDeHjVMVNywzbcZoJ9WYDxrFoCJDc7lCAjHdpnwTgnMoreNFeEn2VE84Zl5DKkQGspK3kyx4YaGNuw0g0dURBKKE1lEgYIhotG3qNQDOBMsuA3Hgx_Y2WDGojBH5ciPG7fJvqGSQn9GbwcqE6ci88zP5x68ZzV0rBH-QALQJX59ZGfGLPjaWEvoQ9-yQwv-0Kk67Zp5ck', amenities: ['restaurant', 'wifi', 'fitness_center'], badge: null },
  { id: 6, name: 'Waterfront Retreat', location: 'Maldives', type: 'Resort', price: 310, stars: 5.0, reviews: 421, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu_P55ulgThX3oYsj1b-3XItYwh01rBV5roVA0K-4Gavc752vRobt7EUPGP8q7139P6vt6sNXNJEtV5PvquHsOXRqU2F1uFzKVnwYgnLvYKBS70wk42JOVBZwZQN_dmEPooMee99ORs7z9VSgc_IRehluk30ZliR7gQgHHdrsLLVDYggQsetR0dFX854KarhYAo7sw9LrDJFdand9jZ4eB-djYzKBQp8oxHHBPNX7IHF7n45b0GfHNg1qGXmy8eJ3T951ai1ws-bc', amenities: ['beach_access', 'pool', 'spa', 'restaurant'], badge: 'Editor\'s Pick' },
  { id: 7, name: 'Golden Heritage Palace', location: 'Rajasthan, India', type: 'Heritage', price: 190, stars: 4.5, reviews: 302, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYRszpUyGtfkbTazwuJ2IIWmnXXXjuSq8JotsPhfrbwj_L1vB1UhAEF2tQ9KLtMHeRctGqhYRAsc_rovlVJEq2BQiYrhW4gfAGT9HTUneqkROeo_sufwx3jfQb-loqKCazLxhyWJQDJe27idBwG44m27eRVvJEEP0FOkw3WqjGu736q8-KisERkmzzHwWYmqPTE0HfvRj-UndWe10HyC5uf68ZMiK0nv4q85kBaoz7MeQtRvH1royfhD-JtK77vuDYq3BQqKItlZo', amenities: ['restaurant', 'pool', 'local_activity'], badge: 'Heritage' },
  { id: 8, name: 'Australian Bay Hotel', location: 'Sydney, Australia', type: 'Luxury', price: 400, stars: 5.0, reviews: 615, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtGwS2IWjXGDUITb3XBXsgBrYbwel8fz6XgweJXJho78ZnRx01KFjZyGwdh7ec9LW_32QftDdnw_O_gYPbMuYOC1ZkRkTH20SDFqaEByWzWt7_zGKt50OB7osePG6H10GDft1K2xMTVGEgaVDgELa0cg8FjYeRYY4i68-Vs5qd-lqS1kekIN6p7MC4OzoBtUbBpdjGMbwB6T0YpwVjwaBcqdyOsZp0mKkoDavMettM2oyFNON91fgcflaRajQ2Icq3kQDKn1asrAI', amenities: ['pool', 'spa', 'restaurant', 'fitness_center'], badge: 'Luxury' },
];

const TYPES = ['All', 'Boutique', 'Luxury', 'Resort', 'Heritage'];
const SORT_OPTIONS = ['Recommended', 'Price: Low → High', 'Price: High → Low', 'Best Rating'];

const Stars = ({ rating }) => (
  <div className="flex text-star-gold text-[13px] gap-[1px]">
    {[1,2,3,4,5].map(i => (
      <span key={i} className={`material-symbols-outlined text-[14px] ${i <= Math.round(rating) ? 'icon-filled' : ''}`}>star</span>
    ))}
  </div>
);

const HotelCard = ({ hotel }) => {
  const [saved, setSaved] = useState(false);
  return (
    <motion.div layout variants={scaleIn} className="bg-white rounded-[16px] overflow-hidden border border-outline-variant hover:shadow-[0_6px_30px_rgba(26,31,54,0.1)] transition-shadow group">
      <div className="relative h-[190px] overflow-hidden">
        <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {hotel.badge && (
          <span className="absolute top-3 left-3 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full">{hotel.badge}</span>
        )}
        <button
          onClick={() => setSaved(v => !v)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
        >
          <span className={`material-symbols-outlined text-[18px] ${saved ? 'text-primary icon-filled' : 'text-on-surface-variant'}`}>favorite</span>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">{hotel.type}</span>
            <h3 className="text-[15px] font-bold text-on-surface mt-0.5 leading-snug">{hotel.name}</h3>
            <p className="text-[12px] text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span>{hotel.location}
            </p>
          </div>
          <div className="text-right flex-shrink-0 ml-3">
            <span className="text-[20px] font-extrabold text-on-surface">${hotel.price}</span>
            <span className="text-[12px] text-on-surface-variant">/night</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2.5">
          <Stars rating={hotel.stars} />
          <span className="text-[13px] font-bold text-on-surface">{hotel.stars}</span>
          <span className="text-[12px] text-on-surface-variant">({hotel.reviews})</span>
        </div>
        <div className="flex items-center gap-2 mt-3 text-on-surface-variant">
          <span className="text-[11px] font-semibold uppercase tracking-tighter">Amenities:</span>
          {hotel.amenities.slice(0, 4).map(a => (
            <span key={a} className="material-symbols-outlined text-[15px]">{a}</span>
          ))}
        </div>
        <button className="w-full mt-4 bg-primary text-white py-2.5 rounded-sm font-bold text-[13px] hover:bg-primary-container transition-colors">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

const Booking = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(600);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('Recommended');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  let filtered = ALL_HOTELS.filter(h => {
    const matchType = selectedType === 'All' || h.type === selectedType;
    const matchPrice = h.price <= maxPrice;
    const matchRating = h.stars >= minRating;
    const matchSearch = h.name.toLowerCase().includes(search.toLowerCase()) || h.location.toLowerCase().includes(search.toLowerCase());
    return matchType && matchPrice && matchRating && matchSearch;
  });

  if (sortBy === 'Price: Low → High') filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortBy === 'Price: High → Low') filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sortBy === 'Best Rating') filtered = [...filtered].sort((a, b) => b.stars - a.stars);

  return (
    <motion.main {...pageTransition}>
      {/* Search Bar */}
      <section className="bg-on-surface py-10">
        <div className="max-w-site mx-auto px-10">
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[36px] font-extrabold text-white font-headline mb-6">
            Find Your Perfect Stay.
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
            className="bg-white rounded-[14px] p-4 flex flex-wrap gap-3 items-end">
            <div className="flex-1 min-w-[180px]">
              <label className="block text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1">Destination</label>
              <div className="flex items-center gap-2 border border-outline-variant rounded-sm px-3 py-2">
                <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                <input
                  type="text"
                  placeholder="City or property"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="text-[14px] font-medium text-on-surface outline-none w-full placeholder:text-[#bbb]"
                />
              </div>
            </div>
            <div className="min-w-[140px]">
              <label className="block text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1">Check In</label>
              <div className="flex items-center gap-2 border border-outline-variant rounded-sm px-3 py-2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_today</span>
                <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className="text-[14px] font-medium text-on-surface outline-none" />
              </div>
            </div>
            <div className="min-w-[140px]">
              <label className="block text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1">Check Out</label>
              <div className="flex items-center gap-2 border border-outline-variant rounded-sm px-3 py-2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_month</span>
                <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className="text-[14px] font-medium text-on-surface outline-none" />
              </div>
            </div>
            <div className="min-w-[110px]">
              <label className="block text-[11px] font-bold text-[#888] uppercase tracking-wider mb-1">Guests</label>
              <div className="flex items-center gap-2 border border-outline-variant rounded-sm px-3 py-2">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">group</span>
                <select value={guests} onChange={e => setGuests(Number(e.target.value))} className="text-[14px] font-medium text-on-surface outline-none bg-transparent">
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                </select>
              </div>
            </div>
            <button className="bg-primary text-white px-8 py-[11px] rounded-full font-bold text-[14px] flex items-center gap-2 hover:bg-primary-container transition-colors flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">search</span> Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-[60px] bg-surface-container">
        <div className="max-w-site mx-auto px-10 flex gap-8">

          {/* Sidebar Filters */}
          <aside className="w-[260px] flex-shrink-0">
            <div className="bg-white rounded-[16px] p-6 border border-outline-variant sticky top-[80px]">
              <h3 className="text-[15px] font-bold text-on-surface mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">tune</span> Filters
              </h3>

              {/* Property type */}
              <div className="mb-6">
                <h4 className="text-[12px] font-bold text-on-surface uppercase tracking-wider mb-3">Property Type</h4>
                <div className="flex flex-wrap gap-2">
                  {TYPES.map(t => (
                    <button
                      key={t}
                      onClick={() => setSelectedType(t)}
                      className={`px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors ${selectedType === t ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant hover:bg-outline-variant'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div className="mb-6">
                <h4 className="text-[12px] font-bold text-on-surface uppercase tracking-wider mb-3">Max Price / Night</h4>
                <div className="flex items-center justify-between text-[13px] font-semibold text-on-surface mb-2">
                  <span>$100</span><span className="text-primary">${maxPrice}</span>
                </div>
                <input
                  type="range" min={100} max={600} step={10} value={maxPrice}
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              {/* Min rating */}
              <div className="mb-6">
                <h4 className="text-[12px] font-bold text-on-surface uppercase tracking-wider mb-3">Minimum Rating</h4>
                <div className="flex gap-2">
                  {[0, 3, 4, 4.5].map(r => (
                    <button
                      key={r}
                      onClick={() => setMinRating(r)}
                      className={`flex-1 py-1.5 rounded-full text-[12px] font-medium transition-colors ${minRating === r ? 'bg-primary text-white' : 'bg-surface-container text-on-surface-variant hover:bg-outline-variant'}`}
                    >
                      {r === 0 ? 'Any' : `${r}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button
                onClick={() => { setSelectedType('All'); setMaxPrice(600); setMinRating(0); setSearch(''); }}
                className="w-full text-[13px] text-on-surface-variant border border-outline-variant py-2.5 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Results grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[14px] text-on-surface-variant">
                Showing <span className="font-bold text-on-surface">{filtered.length}</span> properties
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-on-surface-variant">Sort by:</span>
                <select
                  value={sortBy} onChange={e => setSortBy(e.target.value)}
                  className="text-[13px] font-medium text-on-surface border border-outline-variant rounded-sm px-3 py-1.5 outline-none bg-white"
                >
                  {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key="results"
                  initial="hidden" animate="visible" variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  {filtered.map(h => <HotelCard key={h.id} hotel={h} />)}
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                  <span className="material-symbols-outlined text-[64px] text-outline-variant">search_off</span>
                  <h3 className="text-[18px] font-bold text-on-surface mt-4">No properties found</h3>
                  <p className="text-on-surface-variant text-[14px] mt-2">Try adjusting your filters or search term.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Booking;
