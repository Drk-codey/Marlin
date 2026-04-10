import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { staggerContainer, scaleIn, fadeUp, pageTransition } from '../utils/animations';
import Newsletter from '../components/Newsletter';

const REGIONS = ['All', 'Europe', 'Asia', 'Americas', 'Middle East', 'Oceania', 'Africa'];

const DESTINATIONS = [
  { name: 'Florence', country: 'Italy', region: 'Europe', hotels: 143, highlights: 'Renaissance art, Tuscan wine, cobblestone charm', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1qDYDWrwPaDYyY2UJJ_SqSiDi5GhBw3D2Q_NIn4jfH9yWTxNag3HKRQWIHzhAiZ6kmPaDeHjVMVNywzbcZoJ9WYDxrFoCJDc7lCAjHdpnwTgnMoreNFeEn2VE84Zl5DKkQGspK3kyx4YaGNuw0g0dURBKKE1lEgYIhotG3qNQDOBMsuA3Hgx_Y2WDGojBH5ciPG7fJvqGSQn9GbwcqE6ci88zP5x68ZzV0rBH-QALQJX59ZGfGLPjaWEvoQ9-yQwv-0Kk67Zp5ck', featured: true },
  { name: 'Santorini', country: 'Greece', region: 'Europe', hotels: 89, highlights: 'Caldera views, white-washed villas, sunset dining', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXY4Y3o1DaTrpNT7Sg0fQ_oUl5m4bC4Q7yHa2TSaxr3SFRuZ0ORVLM2Tj3Smy5d0EuFOoSHwE8alyIPPRn04h5N11_yJnIHC_y85GKBC8IDNYQcI2G19Af2yw1cW7bMJgkLyOyH2U5qw8T-9wLFmZOQpuL3dq0mOKQvPY9X-lAl5Zw1TJvJzqjxSvHHW0oPKi3w_8zxIUsMTzfRNmjZfO1OX8xD2L5Hx1b4zVIjlfTLCrI2L3P1n5Z5sPIFhMxS1bCRcRDhv8w', featured: false },
  { name: 'Zermatt', country: 'Switzerland', region: 'Europe', hotels: 62, highlights: 'Alpine luxury, Matterhorn views, ski-in access', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ-0ooSzBzik_4z00VoomRxlzVUysSVK5T0adFq64GhwS-9EY64bE1g1KsORIJ7-IJSK1-MfOkEJ-OjG-CshFvq5ylvvaDcOE9qSWQayPtv3EcuM8c77bnILABWDrLyIPDKvdXR_DWr7o6Izwfy4YoHlJlWklDRLjpzE_FUxnEZYpIyB9ZI1K0wkoH3Uw6QNQjGBG9xA4S3wROqHIP1wimOtYvJGuyvbZ3LkNHDayxqTZyhVJNSpG4PtjH5y8wDbFZyD78F-zSoLw', featured: true },
  { name: 'Neuschwanstein', country: 'Germany', region: 'Europe', hotels: 210, highlights: 'Fairy-tale castles, forest trails, alpine lakes', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn_KTOuLTwBaAe97FqVp9lObSbT_oqYJAJqtrrqVGiGFiIRyxtbgF3EEl3SbZ6u0QNmwE8ZYEmfallQ35EMRQE9HMLw-sZbfqAFB0ljcLsaNKrxnJiOYWr6gfDAkXd1FY0FnKaC_czDVIEDfP1ZUaqxx_fcjBAIjnB5QtROv46pOXmiaA5Taqbwz78HzBctBtDgZPPd8a3PDG0cNHKdqJ3nReSdjOb1z5Er56er5vJhlTXeh0_i2It2ZMyliDV3dDgfoLQxSCu0fM', featured: false },
  { name: 'Maldives', country: 'Maldives', region: 'Asia', hotels: 78, highlights: 'Overwater villas, coral reefs, crystal lagoons', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu_P55ulgThX3oYsj1b-3XItYwh01rBV5roVA0K-4Gavc752vRobt7EUPGP8q7139P6vt6sNXNJEtV5PvquHsOXRqU2F1uFzKVnwYgnLvYKBS70wk42JOVBZwZQN_dmEPooMee99ORs7z9VSgc_IRehluk30ZliR7gQgHHdrsLLVDYggQsetR0dFX854KarhYAo7sw9LrDJFdand9jZ4eB-djYzKBQp8oxHHBPNX7IHF7n45b0GfHNg1qGXmy8eJ3T951ai1ws-bc', featured: true },
  { name: 'Bali', country: 'Indonesia', region: 'Asia', hotels: 215, highlights: 'Temple culture, rice terraces, private pool villas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLEywoud5aoS-6w-hvUwdTG0nhWDzy5ShRShrIVaG60JSY_y3nvWIzaskNFM55N3hrxHvUksP4aPI5yrL6OrFrQ0REd5CEZnjA1ReQisloGZvD5OAXkdpRmUNDGnZ0TFX_SrQR0cbZQsHCUGt0FkAgTjjocyFOX0Tqv4pcmHKq3BM6kUuCO-JOBzGE1VCnyiRCdLmtqleK9_9xFNHDAq3hMW-v6UcM8P1C-7EIxtwSAjbRhy0SQBSuDeZaN8N243zy2pQXyeC44Fk', featured: false },
  { name: 'Thailand', country: 'Thailand', region: 'Asia', hotels: 340, highlights: 'Island paradise, ancient temples, world-class cuisine', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCum97HffPb_pxru3bqqkSpeZz4qUT79r_JvwVecq7Gg0ConuFW5BHs_s_uj-QeZFuKsRGcH4ZJQW6BZcXYN3dtkJLenPpVh4KLmAzzj1G9Q0zvJgVCbUBu8JMu_60klwcW8FI9KjJ9OflEPGmko2cUevNeXApZ0t3mer2gDokauzBLMTzVvOIQaUjTqPEPpDwyjV9L44wuqpWmWxx4JxWQOYOIJQhcj5j0x_vR7F4QGSpCIoyoE0xbt1PjQzpbLhbDKGtVLIA1voM', featured: true },
  { name: 'Rajasthan', country: 'India', region: 'Asia', hotels: 94, highlights: 'Palace hotels, desert safaris, royal heritage', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYRszpUyGtfkbTazwuJ2IIWmnXXXjuSq8JotsPhfrbwj_L1vB1UhAEF2tQ9KLtMHeRctGqhYRAsc_rovlVJEq2BQiYrhW4gfAGT9HTUneqkROeo_sufwx3jfQb-loqKCazLxhyWJQDJe27idBwG44m27eRVvJEEP0FOkw3WqjGu736q8-KisERkmzzHwWYmqPTE0HfvRj-UndWe10HyC5uf68ZMiK0nv4q85kBaoz7MeQtRvH1royfhD-JtK77vuDYq3BQqKItlZo', featured: false },
  { name: 'New York', country: 'USA', region: 'Americas', hotels: 412, highlights: 'Skyline views, Central Park, world-class culture', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT2V2Ik_UVKlrcgK7DcyuEIInWGc6QjO6WGWfoDzi35fY2kbFLp8Yp_IbluZ1fclaFQ1QWWpNTGoZ3_R9XWQPONKO63i6Cw371RkKuJZ6rlUA3PGQ3qmrjzosQzr9WnkTuIesjJOh1CLT_tncKZaeYqN1VAjtSVVbBkG3X7sws86Nc72jpcHjzaw-GkiW5_EStaKDCQiVVOkv8XCq6IW7pN52xtUq46rVJLG2dtaA2IloGoRFzSk60lpkzJ-ZLormju6vc42dWQ1I', featured: false },
  { name: 'Cancún', country: 'Mexico', region: 'Americas', hotels: 156, highlights: 'Caribbean beaches, Mayan ruins, vibrant nightlife', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv3z-m_jDoWgtbo-zX55TmzxYi-DSKya9ux1vQ99GABcmqeVePbt8WkPeP1sVwpYji3pBa8JfsN7Q5TeD8csveb52-tVY0PWEebC2uy1kdMKscBOkUF8vH6rAWMRkHEYaBAYijjZrtJtcusoH0YW0P4lIUxfHoGjmZqmmjxRzHlEkdfm84bjIt8SQZCYa_55Vl_bfgnIOwwzliLeWKnOXsFwGNL62ZXTKQXXF08tRuDPWuxU1t-XaM6IaQ2hSva2veirKxzHqUFys', featured: false },
  { name: 'Sydney', country: 'Australia', region: 'Oceania', hotels: 185, highlights: 'Harbour views, Opera House, coastal escapes', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtGwS2IWjXGDUITb3XBXsgBrYbwel8fz6XgweJXJho78ZnRx01KFjZyGwdh7ec9LW_32QftDdnw_O_gYPbMuYOC1ZkRkTH20SDFqaEByWzWt7_zGKt50OB7osePG6H10GDft1K2xMTVGEgaVDgELa0cg8FjYeRYY4i68-Vs5qd-lqS1kekIN6p7MC4OzoBtUbBpdjGMbwB6T0YpwVjwaBcqdyOsZp0mKkoDavMettM2oyFNON91fgcflaRajQ2Icq3kQDKn1asrAI', featured: false },
  { name: 'Baku', country: 'Azerbaijan', region: 'Middle East', hotels: 56, highlights: 'Flame towers, Caspian coast, ancient old city', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCullpm8fJCJYDV65zQ3qvHP7s23fMGtDxxyksqT075y3GSBql3J4YCToDOegV-AojfoBY9bbsFNOHGt1MjBLuzG-PjwGlDuRgTfmzuue_dJffM6YpKA-4jBVNXvsajJMa6eHBqYtt2bMgjQetM2kACvvZO0ZHWxiNneXt_o0eK5E0nzjvBLBRDTBamE9MjQ8K8LOCLar3jXT5LZF8Ik_nAHrvuSnya5Mb7Hn0Nf3DU6Fpal6NnRvsz9d1-W8vDqv6gLSHykpvFLBY', featured: false },
];

const DestinationCard = ({ dest }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      layout
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={scaleIn}
      className="relative rounded-[16px] overflow-hidden group cursor-pointer"
    >
      <div className="h-[220px]">
        <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
      {dest.featured && (
        <span className="absolute top-4 left-4 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full">Editor's Pick</span>
      )}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-white font-bold text-[18px] font-headline">{dest.name}</h3>
            <p className="text-white/75 text-[12px] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span>{dest.country}
            </p>
            <p className="text-white/60 text-[11px] mt-1 line-clamp-1">{dest.highlights}</p>
          </div>
          <div className="text-right flex-shrink-0 ml-3">
            <span className="text-white font-bold text-[13px] bg-white/20 rounded-full px-3 py-1">{dest.hotels}+ hotels</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Link to="/booking">
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="bg-white text-on-surface font-bold text-[13px] px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg"
          >
            Explore <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const Locations = () => {
  const [activeRegion, setActiveRegion] = useState('All');
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const filtered = activeRegion === 'All' ? DESTINATIONS : DESTINATIONS.filter(d => d.region === activeRegion);

  return (
    <motion.main {...pageTransition}>
      {/* Hero */}
      <section className="relative h-[480px] overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-wNNl5qoxtQ7IWeHD5Ys_VL4zPIJ6tO42aniD2-r4spZ6q-w71O8SsAi2TfvWrMrVSKUuv5ms55LVj8m9pQzehBYowZKx3k_mqmlbRc2hk9lsU-SSkcfhJNDT_-DP77dK2S_2prfRuKThRpOm916K8f8laWle7Qfh92VXfMJVLECCXrvNyCKknncGGUCYMEyTWKhkvUywpkFpzPZ86Gc4NbGV7bJ8TLzl7-Hf9LQSRK5oENWR-k85bYf_zRBCvEYY6_x0shISAI"
          alt="Destinations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-primary text-white text-[12px] font-bold rounded-full mb-4 uppercase tracking-wider">
              Explore the World
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}
              className="text-[56px] font-extrabold text-white font-headline leading-[1.1]">
              Dream Destinations.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-white/80 text-[16px] mt-4 max-w-[480px] mx-auto">
              {DESTINATIONS.length} handpicked destinations across 6 continents. Every one vetted and verified.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-primary py-10">
        <motion.div
          initial="hidden" animate={statsInView ? 'visible' : 'hidden'} variants={staggerContainer}
          className="max-w-site mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { v: '50+',  l: 'Countries' },
            { v: '6',    l: 'Continents' },
            { v: '1,200+', l: 'Destinations' },
            { v: '5,000+', l: 'Properties Listed' },
          ].map(({ v, l }) => (
            <motion.div key={l} variants={fadeUp}>
              <div className="text-[36px] font-extrabold text-white font-headline">{v}</div>
              <div className="text-white/75 text-[13px] font-medium mt-1">{l}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Destinations with filter */}
      <section className="py-[80px] bg-surface-container">
        <div className="max-w-site mx-auto px-10">
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {REGIONS.map(r => (
              <motion.button
                key={r}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveRegion(r)}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-colors ${
                  activeRegion === r
                    ? 'bg-primary text-white shadow-[0_4px_16px_rgba(230,48,39,0.3)]'
                    : 'bg-white text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary'
                }`}
              >
                {r}
              </motion.button>
            ))}
          </div>

          {/* Count */}
          <p className="text-[14px] text-on-surface-variant mb-6 text-center">
            Showing <span className="font-bold text-on-surface">{filtered.length}</span> destinations
            {activeRegion !== 'All' && <span> in <span className="text-primary font-bold">{activeRegion}</span></span>}
          </p>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((dest, i) => <DestinationCard key={dest.name} dest={dest} />)}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-[14px] text-on-surface-variant mb-4">Can't find your dream destination? We can curate a bespoke itinerary.</p>
            <Link to="/booking">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 bg-primary text-white font-bold rounded-full text-[15px] flex items-center gap-2 mx-auto">
                Request Custom Itinerary <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured destination spotlight */}
      <section className="py-[80px] bg-white">
        <div className="max-w-site mx-auto px-10">
          <div className="text-center mb-10">
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">SPOTLIGHT</span>
            <h2 className="text-[32px] font-extrabold text-on-surface mt-2 font-headline">Destination of the Month.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu_P55ulgThX3oYsj1b-3XItYwh01rBV5roVA0K-4Gavc752vRobt7EUPGP8q7139P6vt6sNXNJEtV5PvquHsOXRqU2F1uFzKVnwYgnLvYKBS70wk42JOVBZwZQN_dmEPooMee99ORs7z9VSgc_IRehluk30ZliR7gQgHHdrsLLVDYggQsetR0dFX854KarhYAo7sw9LrDJFdand9jZ4eB-djYzKBQp8oxHHBPNX7IHF7n45b0GfHNg1qGXmy8eJ3T951ai1ws-bc"
                alt="Maldives"
                className="w-full h-[400px] object-cover rounded-[20px]"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="inline-block bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full mb-4">EDITOR'S PICK — APRIL 2025</span>
              <h2 className="text-[36px] font-extrabold text-on-surface font-headline">Maldives</h2>
              <p className="text-primary font-medium text-[14px] mt-1">Indian Ocean, Maldives</p>
              <p className="text-on-surface-variant text-[14px] leading-[1.8] mt-4">
                The Maldives remains our editors' most recommended destination for sheer spectacle. No other place on Earth gives you this — the sensation of floating above an impossibly turquoise ocean in a glass-floored overwater villa, surrounded by nothing but warm horizon.
              </p>
              <p className="text-on-surface-variant text-[14px] leading-[1.8] mt-3">
                April is peak season. Visibility is at its best for snorkelling and diving, water temperatures hover at 28°C, and the sun sets dramatically at 6:15pm — perfectly timed for sundowner cocktails on your private deck.
              </p>
              <div className="flex gap-4 mt-8 text-[13px]">
                {[
                  { icon: 'wb_sunny', label: '28°C Avg Temp' },
                  { icon: 'hotel', label: '78 Properties' },
                  { icon: 'flight', label: '14h from London' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-[18px]">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <Link to="/booking">
                <motion.button whileHover={{ scale: 1.04 }}
                  className="mt-8 px-8 py-3.5 bg-primary text-white font-bold rounded-full text-[15px] flex items-center gap-2">
                  Book Maldives Now <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Newsletter />
    </motion.main>
  );
};

export default Locations;
