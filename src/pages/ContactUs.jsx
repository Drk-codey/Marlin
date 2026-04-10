import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn, slideLeft, slideRight, pageTransition } from '../utils/animations';

/* ── helpers ── */
const inputBase =
  'w-full border border-outline-variant rounded-sm px-4 text-[14px] text-on-surface placeholder:text-[#BBBBBB] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white';

const Field = ({ label, children }) => (
  <div>
    <label className="block text-[13px] font-semibold text-on-surface mb-1.5">{label}</label>
    {children}
  </div>
);

const CONTACT_CARDS = [
  {
    icon: 'call',
    color: 'bg-primary',
    title: 'Phone',
    detail: '+1 800 MARLIN (627-546)',
    sub: 'Mon – Fri, 8 am – 10 pm EST',
    cta: 'Call us now',
    href: 'tel:+18006275460',
  },
  {
    icon: 'mail',
    color: 'bg-blue-600',
    title: 'Email',
    detail: 'hello@marlinbooking.com',
    sub: 'We reply within 2 business hours',
    cta: 'Send an email',
    href: 'mailto:hello@marlinbooking.com',
  },
  {
    icon: 'chat',
    color: 'bg-green-600',
    title: 'Live Chat',
    detail: 'Chat with a specialist',
    sub: 'Available 24 / 7, all time zones',
    cta: 'Start chat',
    href: '#',
  },
  {
    icon: 'location_on',
    color: 'bg-amber-600',
    title: 'Headquarters',
    detail: '14 Belgravia Sq, London SW1X 8PS',
    sub: 'By appointment only',
    cta: 'Get directions',
    href: '#',
  },
];

const OFFICES = [
  { city: 'London', flag: '🇬🇧', role: 'HQ & Curation', email: 'london@marlinbooking.com' },
  { city: 'New York', flag: '🇺🇸', role: 'Americas Hub', email: 'newyork@marlinbooking.com' },
  { city: 'Dubai', flag: '🇦🇪', role: 'Middle East & Asia', email: 'dubai@marlinbooking.com' },
  { city: 'Singapore', flag: '🇸🇬', role: 'Asia Pacific', email: 'singapore@marlinbooking.com' },
];

const TOPICS = ['General Enquiry', 'Booking Support', 'Partnership Proposal', 'Press & Media', 'Feedback', 'Other'];

/* ── Contact form ── */
const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-8"
      >
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_8px_24px_rgba(230,48,39,0.3)]">
          <span className="material-symbols-outlined text-white text-[32px] icon-filled">mark_email_read</span>
        </div>
        <h3 className="text-[22px] font-extrabold text-on-surface font-headline">Message received.</h3>
        <p className="text-on-surface-variant text-[14px] mt-2 max-w-[320px] mx-auto leading-[1.7]">
          A member of our team will reply to <span className="font-semibold text-on-surface">{form.email}</span> within 2 business hours.
        </p>
        <button onClick={() => setSubmitted(false)} className="mt-7 px-7 py-3 border-[1.5px] border-primary text-primary font-bold rounded-full text-[14px] hover:bg-primary hover:text-white transition-all">
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handle} className="space-y-5 p-8 md:p-10">
      <div>
        <h2 className="text-[24px] font-extrabold text-on-surface font-headline">Send us a message.</h2>
        <p className="text-on-surface-variant text-[13px] mt-1">Our team typically replies within 2 hours.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Field label="Full name">
          <div className="relative">
            <span className="material-symbols-outlined text-[17px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2">person</span>
            <input type="text" required placeholder="Your name"
              value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className={`${inputBase} h-[46px] pl-10`} />
          </div>
        </Field>
        <Field label="Phone (optional)">
          <div className="relative">
            <span className="material-symbols-outlined text-[17px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2">call</span>
            <input type="tel" placeholder="+1 555 0000"
              value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              className={`${inputBase} h-[46px] pl-10`} />
          </div>
        </Field>
      </div>

      <Field label="Email address">
        <div className="relative">
          <span className="material-symbols-outlined text-[17px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2">mail</span>
          <input type="email" required placeholder="you@example.com"
            value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={`${inputBase} h-[46px] pl-10`} />
        </div>
      </Field>

      <Field label="Topic">
        <div className="relative">
          <span className="material-symbols-outlined text-[17px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2">tag</span>
          <select
            required
            value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
            className={`${inputBase} h-[46px] pl-10 pr-4 appearance-none cursor-pointer`}
          >
            <option value="" disabled>Select a topic…</option>
            {TOPICS.map(t => <option key={t}>{t}</option>)}
          </select>
          <span className="material-symbols-outlined text-[17px] text-on-surface-variant absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">expand_more</span>
        </div>
      </Field>

      <Field label="Message">
        <textarea
          required rows={5} placeholder="Tell us how we can help…"
          value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`${inputBase} py-3.5 resize-none`}
        />
        <p className="text-[11px] text-on-surface-variant mt-1 text-right">{form.message.length} / 1000</p>
      </Field>

      <motion.button
        type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="w-full h-[50px] bg-primary text-white font-bold text-[15px] rounded-full flex items-center justify-center gap-2 hover:bg-primary-container transition-colors disabled:opacity-70"
      >
        {loading ? (
          <>
            <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
            Sending…
          </>
        ) : (
          <>
            Send Message <span className="material-symbols-outlined text-[20px]">send</span>
          </>
        )}
      </motion.button>

      <p className="text-[12px] text-on-surface-variant text-center">
        By submitting, you agree to our{' '}
        <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
      </p>
    </form>
  );
};

/* ── Page ── */
const ContactUs = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' });

  const officesRef = useRef(null);
  const officesInView = useInView(officesRef, { once: true, margin: '-60px' });

  return (
    <motion.main {...pageTransition}>

      {/* ── Hero ── */}
      <section className="bg-on-surface py-[90px] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #fff, #fff 1px, transparent 1px, transparent 14px)' }} />
        {/* Decorative red glow */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-site mx-auto px-10 relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-primary text-white text-[12px] font-bold rounded-full mb-4 uppercase tracking-wider">
              Get in Touch
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-[52px] font-extrabold text-white font-headline leading-[1.1] max-w-[560px]">
              We're here. Let's talk.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/65 text-[16px] mt-5 leading-[1.8] max-w-[460px]">
              Whether you have a booking question, a partnership proposal, or just want to say hello — our team is ready for you.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-4 bg-white/8 border border-white/15 rounded-[14px] p-5">
              <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-white text-[22px]">support_agent</span>
              </div>
              <div>
                <p className="text-white font-bold text-[14px]">24 / 7 Live Support</p>
                <p className="text-white/55 text-[12px] mt-0.5">Average response: under 2 minutes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact cards ── */}
      <section className="py-[60px] bg-surface-container">
        <div className="max-w-site mx-auto px-10">
          <motion.div
            ref={cardsRef}
            initial="hidden" animate={cardsInView ? 'visible' : 'hidden'} variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {CONTACT_CARDS.map((card) => (
              <motion.a
                key={card.title}
                href={card.href}
                variants={scaleIn}
                className="bg-white rounded-[16px] p-6 border border-outline-variant hover:shadow-[0_6px_28px_rgba(26,31,54,0.09)] transition-shadow group block"
              >
                <div className={`w-11 h-11 ${card.color} rounded-full flex items-center justify-center mb-4`}>
                  <span className="material-symbols-outlined text-white text-[22px]">{card.icon}</span>
                </div>
                <h3 className="text-[15px] font-bold text-on-surface group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-[13px] font-semibold text-on-surface mt-1.5 leading-snug">{card.detail}</p>
                <p className="text-[12px] text-on-surface-variant mt-1">{card.sub}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-bold text-primary mt-4 group-hover:gap-2 transition-all">
                  {card.cta} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main contact split ── */}
      <section className="py-[80px] bg-white">
        <div className="max-w-site mx-auto px-10 grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — form */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={slideLeft}
            className="bg-white border border-outline-variant rounded-[20px] overflow-hidden shadow-[0_4px_32px_rgba(26,31,54,0.06)]"
          >
            <ContactForm />
          </motion.div>

          {/* Right — info */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer}
            className="space-y-8 pt-2"
          >
            <motion.div variants={fadeUp}>
              <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">WHY REACH OUT</span>
              <h2 className="text-[30px] font-extrabold text-on-surface mt-2 font-headline leading-tight">
                Real people,<br />real answers.
              </h2>
              <p className="text-on-surface-variant text-[14px] mt-4 leading-[1.8] max-w-[420px]">
                No bots. No automated holds. Every enquiry is handled by a dedicated MARLIN travel specialist who genuinely cares about your experience.
              </p>
            </motion.div>

            {/* Response time badges */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
              {[
                { icon: 'bolt', label: 'Email reply', time: '< 2h', color: 'text-primary' },
                { icon: 'chat_bubble', label: 'Live chat', time: '< 2 min', color: 'text-green-600' },
                { icon: 'call', label: 'Phone', time: 'Instant', color: 'text-blue-600' },
              ].map(({ icon, label, time, color }) => (
                <div key={label} className="bg-surface-container rounded-[12px] p-4 text-center">
                  <span className={`material-symbols-outlined ${color} text-[24px]`}>{icon}</span>
                  <div className={`text-[17px] font-extrabold font-headline mt-2 ${color}`}>{time}</div>
                  <div className="text-[12px] text-on-surface-variant mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Hero image */}
            <motion.div variants={fadeUp} className="relative overflow-hidden rounded-[20px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-wNNl5qoxtQ7IWeHD5Ys_VL4zPIJ6tO42aniD2-r4spZ6q-w71O8SsAi2TfvWrMrVSKUuv5ms55LVj8m9pQzehBYowZKx3k_mqmlbRc2hk9lsU-SSkcfhJNDT_-DP77dK2S_2prfRuKThRpOm916K8f8laWle7Qfh92VXfMJVLECCXrvNyCKknncGGUCYMEyTWKhkvUywpkFpzPZ86Gc4NbGV7bJ8TLzl7-Hf9LQSRK5oENWR-k85bYf_zRBCvEYY6_x0shISAI"
                alt="Our team"
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-on-surface/70 to-transparent flex items-center px-7">
                <div className="text-white">
                  <p className="text-[22px] font-extrabold font-headline leading-tight">5,000+ stays.<br />One dedicated team.</p>
                  <Link to="/about">
                    <button className="mt-4 text-[13px] font-bold text-white/90 flex items-center gap-1 hover:gap-2 transition-all">
                      Meet the team <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div variants={fadeUp} className="bg-surface-container-low rounded-[14px] p-5">
              <p className="text-[13px] font-bold text-on-surface mb-3">Also find us on</p>
              <div className="flex gap-3">
                {[
                  { icon: 'social_leaderboard', label: 'Twitter / X', handle: '@marlinbooking' },
                  { icon: 'photo_camera', label: 'Instagram', handle: '@marlin.booking' },
                  { icon: 'movie', label: 'TikTok', handle: '@marlinbooking' },
                ].map(({ icon, label, handle }) => (
                  <a key={label} href="#" className="flex-1 flex flex-col items-center gap-1.5 bg-white rounded-[10px] py-3 px-2 hover:shadow-sm transition-shadow group">
                    <span className="material-symbols-outlined text-on-surface-variant text-[22px] group-hover:text-primary transition-colors">{icon}</span>
                    <span className="text-[11px] font-bold text-on-surface">{label}</span>
                    <span className="text-[10px] text-on-surface-variant">{handle}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Global offices ── */}
      <section className="py-[80px] bg-surface-container">
        <div className="max-w-site mx-auto px-10">
          <div className="text-center mb-10">
            <span className="text-[12px] font-bold text-primary uppercase tracking-[0.08em]">OUR OFFICES</span>
            <h2 className="text-[30px] font-extrabold text-on-surface mt-2 font-headline">A global presence.</h2>
            <p className="text-on-surface-variant text-[14px] mt-2 max-w-[420px] mx-auto">
              Four offices across four continents, each staffed with regional specialists.
            </p>
          </div>

          <motion.div
            ref={officesRef}
            initial="hidden" animate={officesInView ? 'visible' : 'hidden'} variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {OFFICES.map((office) => (
              <motion.div
                key={office.city}
                variants={scaleIn}
                className="bg-white rounded-[16px] p-6 border border-outline-variant hover:border-primary transition-colors group"
              >
                <span className="text-[32px]">{office.flag}</span>
                <h3 className="text-[18px] font-extrabold text-on-surface font-headline mt-3 group-hover:text-primary transition-colors">{office.city}</h3>
                <p className="text-[12px] font-semibold text-primary mt-0.5">{office.role}</p>
                <a href={`mailto:${office.email}`} className="text-[12px] text-on-surface-variant mt-2 block hover:text-primary transition-colors truncate">{office.email}</a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Map strip ── */}
      <section className="h-[320px] relative overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQRJxFNH-igv9GfcnXpiz4bUaZWgisKly36Kn-ww-Y_aQdIVvMZyI12Rxz_D8U2HhRIpg6_tO8QWw_RM0078oMSwdnAMv-Ons19Ppj8zFW50megSPVvoTUVlDyjaVbO2S2LngCtU6NzcAD1mvXDfdDNUa6Ha5hWEclJ3KF6dG3ukaidThAezsRHOkrRiPdnmbzWfT7PUFPaTihsrBpV_Ccuvn7fIQFeaupL2Np4SxGFupf-5lXFJC4oZT9QEUX6I6aTr8otV4OAA"
          alt="Global reach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-on-surface/65 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-white text-[36px] font-extrabold font-headline">50+ countries. One standard.</h2>
            <p className="text-white/70 text-[15px] mt-3 max-w-[460px] mx-auto">
              Wherever you're heading, a MARLIN specialist is in or near your destination.
            </p>
            <Link to="/locations">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="mt-7 px-8 py-3.5 bg-primary text-white font-bold rounded-full text-[15px] flex items-center gap-2 mx-auto">
                Explore Destinations <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.main>
  );
};

export default ContactUs;
