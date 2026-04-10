import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeUp, pageTransition } from '../utils/animations';

const inputBase =
  'w-full h-[48px] border border-outline-variant rounded-sm px-4 text-[14px] text-on-surface placeholder:text-[#BBBBBB] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 bg-white';

const GoogleButton = ({ label }) => (
  <button
    type="button"
    className="w-full h-[48px] border border-outline-variant rounded-sm flex items-center justify-center gap-3 text-[14px] font-semibold text-on-surface hover:bg-surface-container transition-colors"
  >
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
      <path d="M22 12c0-.617-.05-1.21-.148-1.786H12v3.38h5.617c-.24 1.3-.99 2.4-2.117 3.135v2.606h3.427C20.64 17.56 22 14.99 22 12z" fill="#4285F4"/>
      <path d="M12 22c2.7 0 4.963-.895 6.617-2.42l-3.427-2.607c-.895.599-2.04.952-3.19.952-2.453 0-4.531-1.657-5.274-3.886H3.19v2.69A9.997 9.997 0 0012 22z" fill="#34A853"/>
      <path d="M6.726 14.04A5.991 5.991 0 016.333 12c0-.708.123-1.397.393-2.04V7.27H3.19A9.997 9.997 0 002 12c0 1.616.387 3.143 1.19 4.73l3.536-2.69z" fill="#FBBC05"/>
      <path d="M12 6.07c1.38 0 2.614.475 3.588 1.406l2.692-2.692C16.956 3.238 14.693 2 12 2a9.997 9.997 0 00-8.81 5.27l3.536 2.69C7.469 7.73 9.547 6.07 12 6.07z" fill="#EA4335"/>
    </svg>
    {label}
  </button>
);

const Divider = ({ label }) => (
  <div className="flex items-center gap-3">
    <div className="flex-1 h-px bg-outline-variant" />
    <span className="text-[12px] text-on-surface-variant font-medium">{label}</span>
    <div className="flex-1 h-px bg-outline-variant" />
  </div>
);

const PasswordField = ({ label, value, onChange, placeholder }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label className="block text-[13px] font-semibold text-on-surface mb-1.5">{label}</label>
      <div className="relative">
        <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2">lock</span>
        <input
          type={show ? 'text' : 'password'}
          required
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${inputBase} pl-10 pr-11`}
        />
        <button
          type="button"
          onClick={() => setShow(v => !v)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-[18px]">{show ? 'visibility_off' : 'visibility'}</span>
        </button>
      </div>
    </div>
  );
};

/* ───── Sign-In form ───── */
const SignInForm = ({ onSuccess, onSwitch }) => {
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const handle = e => {
    e.preventDefault();
    onSuccess();
  };
  return (
    <motion.form
      key="signin"
      initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }}
      transition={{ duration: 0.28 }}
      onSubmit={handle}
      className="space-y-5"
    >
      <div>
        <h1 className="text-[28px] font-extrabold text-on-surface font-headline">Welcome back.</h1>
        <p className="text-on-surface-variant text-[14px] mt-1">Sign in to manage your bookings.</p>
      </div>

      <GoogleButton label="Continue with Google" />
      <Divider label="or sign in with email" />

      <div>
        <label className="block text-[13px] font-semibold text-on-surface mb-1.5">Email address</label>
        <div className="relative">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2">mail</span>
          <input
            type="email" required placeholder="you@example.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={`${inputBase} pl-10`}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-[13px] font-semibold text-on-surface">Password</label>
          <button type="button" className="text-[12px] text-primary font-semibold hover:underline">Forgot password?</button>
        </div>
        <PasswordField value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} placeholder="Enter your password" />
      </div>

      <label className="flex items-center gap-2.5 cursor-pointer select-none">
        <div
          onClick={() => setForm(f => ({ ...f, remember: !f.remember }))}
          className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0 ${form.remember ? 'bg-primary border-primary' : 'border-outline-variant'}`}
        >
          {form.remember && <span className="material-symbols-outlined text-white icon-filled" style={{ fontSize: 12 }}>check</span>}
        </div>
        <span className="text-[13px] text-on-surface-variant">Remember me for 30 days</span>
      </label>

      <motion.button
        type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        className="w-full h-[50px] bg-primary text-white font-bold text-[15px] rounded-full flex items-center justify-center gap-2 hover:bg-primary-container transition-colors"
      >
        Sign In <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </motion.button>

      <p className="text-center text-[13px] text-on-surface-variant">
        Don't have an account?{' '}
        <button type="button" onClick={onSwitch} className="text-primary font-semibold hover:underline">Create one free</button>
      </p>
    </motion.form>
  );
};

/* ───── Sign-Up form ───── */
const SignUpForm = ({ onSuccess, onSwitch }) => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', agree: false });
  const handle = e => { e.preventDefault(); onSuccess(); };
  const strength = form.password.length < 4 ? 0 : form.password.length < 7 ? 1 : form.password.length < 10 ? 2 : 3;
  const strengthLabel = ['Weak', 'Fair', 'Good', 'Strong'][strength];
  const strengthColors = ['bg-primary', 'bg-amber-400', 'bg-green-500'];

  return (
    <motion.form
      key="signup"
      initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.28 }}
      onSubmit={handle}
      className="space-y-4"
    >
      <div>
        <h1 className="text-[28px] font-extrabold text-on-surface font-headline">Create account.</h1>
        <p className="text-on-surface-variant text-[14px] mt-1">Join 200,000+ discerning travellers.</p>
      </div>

      <GoogleButton label="Continue with Google" />
      <Divider label="or use your email" />

      <div>
        <label className="block text-[13px] font-semibold text-on-surface mb-1.5">Full name</label>
        <div className="relative">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2">person</span>
          <input type="text" required placeholder="Your full name"
            value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={`${inputBase} pl-10`} />
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-on-surface mb-1.5">Email address</label>
        <div className="relative">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2">mail</span>
          <input type="email" required placeholder="you@example.com"
            value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={`${inputBase} pl-10`} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <PasswordField label="Password" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} placeholder="Create password" />
        <PasswordField label="Confirm" value={form.confirm} onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))} placeholder="Repeat it" />
      </div>

      {form.password.length > 0 && (
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map(i => (
            <div key={i} className={`flex-1 h-1 rounded-full transition-colors ${strength > i ? strengthColors[i] : 'bg-outline-variant'}`} />
          ))}
          <span className="text-[11px] text-on-surface-variant ml-1 w-10">{strengthLabel}</span>
        </div>
      )}

      <label className="flex items-start gap-2.5 cursor-pointer select-none">
        <div
          onClick={() => setForm(f => ({ ...f, agree: !f.agree }))}
          className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors cursor-pointer ${form.agree ? 'bg-primary border-primary' : 'border-outline-variant'}`}
        >
          {form.agree && <span className="material-symbols-outlined text-white icon-filled" style={{ fontSize: 12 }}>check</span>}
        </div>
        <span className="text-[12px] text-on-surface-variant leading-[1.6]">
          I agree to MARLIN's{' '}
          <a href="#" className="text-primary hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-primary hover:underline">Privacy Policy</a>
        </span>
      </label>

      <motion.button
        type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        disabled={!form.agree}
        className="w-full h-[50px] bg-primary text-white font-bold text-[15px] rounded-full flex items-center justify-center gap-2 hover:bg-primary-container transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Create Account <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
      </motion.button>

      <p className="text-center text-[13px] text-on-surface-variant">
        Already have an account?{' '}
        <button type="button" onClick={onSwitch} className="text-primary font-semibold hover:underline">Sign in</button>
      </p>
    </motion.form>
  );
};

/* ───── Success state ───── */
const SuccessPanel = ({ type }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="text-center py-10"
  >
    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_8px_24px_rgba(230,48,39,0.3)]">
      <span className="material-symbols-outlined text-white text-[32px] icon-filled">check_circle</span>
    </div>
    <h2 className="text-[24px] font-extrabold text-on-surface font-headline">
      {type === 'signin' ? 'Welcome back!' : 'Account created!'}
    </h2>
    <p className="text-on-surface-variant text-[14px] mt-2 max-w-[280px] mx-auto leading-[1.7]">
      {type === 'signin'
        ? "You're signed in. Ready to explore your next luxury stay."
        : "Your MARLIN account is ready. Let's find your perfect stay."}
    </p>
    <div className="flex gap-3 justify-center mt-7">
      <Link to="/booking">
        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
          className="px-7 py-3 bg-primary text-white font-bold rounded-full text-[14px] flex items-center gap-2">
          Browse Stays <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </motion.button>
      </Link>
      <Link to="/">
        <button className="px-7 py-3 border-[1.5px] border-on-surface text-on-surface font-bold rounded-full text-[14px] hover:bg-on-surface hover:text-white transition-all">
          Go Home
        </button>
      </Link>
    </div>
  </motion.div>
);

/* ───── Page ───── */
const SignIn = () => {
  const [tab, setTab] = useState('signin');
  const [done, setDone] = useState(null); // null | 'signin' | 'signup'

  return (
    <motion.main {...pageTransition} className="min-h-[calc(100vh-64px)] flex">

      {/* Left — luxury image panel */}
      <div className="hidden lg:flex w-[46%] flex-shrink-0 relative overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLEywoud5aoS-6w-hvUwdTG0nhWDzy5ShRShrIVaG60JSY_y3nvWIzaskNFM55N3hrxHvUksP4aPI5yrL6OrFrQ0REd5CEZnjA1ReQisloGZvD5OAXkdpRmUNDGnZ0TFX_SrQR0cbZQsHCUGt0FkAgTjjocyFOX0Tqv4pcmHKq3BM6kUuCO-JOBzGE1VCnyiRCdLmtqleK9_9xFNHDAq3hMW-v6UcM8P1C-7EIxtwSAjbRhy0SQBSuDeZaN8N243zy2pQXyeC44Fk"
          alt="Luxury resort"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/45 to-on-surface/15" />

        {/* Brand mark */}
        <Link to="/" className="absolute top-10 left-10 z-10 flex flex-col leading-none">
          <div className="flex items-baseline gap-0.5">
            <span className="text-2xl font-extrabold uppercase tracking-tighter text-white font-headline">MARLIN</span>
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
          <span className="text-[11px] font-medium tracking-widest text-white/60 ml-0.5">Booking.</span>
        </Link>

        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute top-[38%] right-8 z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-[16px] p-5 text-white"
        >
          <div className="text-[30px] font-extrabold font-headline">200K+</div>
          <div className="text-[12px] text-white/70 mt-0.5 font-medium">Happy travellers</div>
          <div className="flex -space-x-2 mt-3.5">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCh5mmcSRTXfSb9Kmb6GUyrdP2CXUkB55IsYupq0LYFHgetyYSZXi-mRqiNB0mPJ-fZspIiLVeYJlAqn302_CjxnMnNL0lnD8LpQtejQIbUxG4IcVc1TvObQFQfwyAf_lhCqpMetZel8oAo3goRgHcYuUoIxeMLTEyH_sZAmmPGx4dkwZonA1V3NB3kqfVPmY9NK_0mV4w3kpf1knZRsXZTizPIBwdlvPW2I_3SO8fqFVm3BCbnncodJWROIHygnzkd_ht_NlUl20c',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDo1RSPQE8jOA_W4O7oSqIQIa6cZbF2ptNtGbULEXw6VjezFJqJpgJu_8FCPhfio32qTI1cr0eH5o2y03-txTmrocPW-w4zxFbUqewvwXJBNNEo9IXxtpS0j_Pu6VrymN426aNufoXibH8U2359uny-x3_4866PAGwdMokkNAjuYFBEkiFe4G4ovO0Ju1RZef2W8eYx7gpNIb4nroTqj_8zI8bIL8zobZSYokUFXM8FYpgZNmLa_KsZ4EP-EdPNsznO7Uf-MF4wex0',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAQVQFpvBsBumyacPWbj3iWJEFlDiKi8g5MqHyABDJvTJq-IpPa7_Ly9BLf4DOwfZS3kUFH0GWJzMXnVWXFTFPl-kKKZxAmXSUcKX_iHKyGPH4Xu4aGTQa5y2wfMjRTzGg01FjqiaDPc0Lp2wTGQBT_Ot4FkZ0HkQUn2VevTBuTxnMbAnNx3xRuaIRtSh7LdMkSrH4iHBBfLlpbOGIRlKl3Cka7kQDiCiAlQ7LRgOsTiHaeMtHjt5MZpJU8wVFU0EiQMnpKV07k',
            ].map((src, i) => (
              <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white/30 object-cover" />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white/30 bg-primary/80 flex items-center justify-center text-white text-[10px] font-bold">+99</div>
          </div>
        </motion.div>

        {/* Bottom testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-10 left-10 right-10 z-10"
        >
          <p className="text-primary text-[52px] leading-none font-headline font-extrabold select-none">"</p>
          <p className="text-white text-[16px] leading-[1.75] -mt-4 max-w-[380px]">
            MARLIN transformed how I experience luxury travel. Every booking feels like a curated act of precision.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh5mmcSRTXfSb9Kmb6GUyrdP2CXUkB55IsYupq0LYFHgetyYSZXi-mRqiNB0mPJ-fZspIiLVeYJlAqn302_CjxnMnNL0lnD8LpQtejQIbUxG4IcVc1TvObQFQfwyAf_lhCqpMetZel8oAo3goRgHcYuUoIxeMLTEyH_sZAmmPGx4dkwZonA1V3NB3kqfVPmY9NK_0mV4w3kpf1knZRsXZTizPIBwdlvPW2I_3SO8fqFVm3BCbnncodJWROIHygnzkd_ht_NlUl20c"
              alt="Elena Rossi"
              className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
            />
            <div>
              <p className="text-white font-bold text-[14px]">Elena Rossi</p>
              <p className="text-white/55 text-[12px]">Lifestyle Influencer</p>
            </div>
            <div className="ml-1 flex text-star-gold">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined icon-filled text-[14px]">star</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right — form panel */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-14">
        <motion.div
          initial="hidden" animate="visible" variants={staggerContainer}
          className="w-full max-w-[440px]"
        >
          {/* Mobile logo */}
          <motion.div variants={fadeUp} className="lg:hidden mb-8">
            <Link to="/" className="flex flex-col leading-none inline-flex">
              <div className="flex items-baseline gap-0.5">
                <span className="text-xl font-extrabold uppercase tracking-tighter text-on-surface font-headline">MARLIN</span>
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              </div>
              <span className="text-[11px] font-medium tracking-widest text-on-surface-variant ml-0.5">Booking.</span>
            </Link>
          </motion.div>

          {/* Tab switcher */}
          {!done && (
            <motion.div variants={fadeUp} className="flex bg-surface-container rounded-sm p-1 mb-8">
              {['signin', 'signup'].map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-2.5 rounded-[6px] text-[14px] font-semibold transition-all ${tab === t ? 'bg-white text-on-surface shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
                >
                  {t === 'signin' ? 'Sign In' : 'Create Account'}
                </button>
              ))}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {done ? (
              <SuccessPanel key="success" type={done} />
            ) : tab === 'signin' ? (
              <SignInForm
                key="signin"
                onSuccess={() => setDone('signin')}
                onSwitch={() => setTab('signup')}
              />
            ) : (
              <SignUpForm
                key="signup"
                onSuccess={() => setDone('signup')}
                onSwitch={() => setTab('signin')}
              />
            )}
          </AnimatePresence>

          {/* Trust badges */}
          {!done && (
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-5 mt-8 pt-6 border-t border-outline-variant"
            >
              {[
                { icon: 'lock', label: 'SSL Encrypted' },
                { icon: 'verified_user', label: 'GDPR Compliant' },
                { icon: 'security', label: 'PCI-DSS Level 1' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                  <span className="material-symbols-outlined text-[15px] text-primary">{icon}</span>
                  {label}
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.main>
  );
};

export default SignIn;
