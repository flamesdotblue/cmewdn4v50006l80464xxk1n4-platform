import React from 'react';
import { Bot, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'RF-Home Companion',
    tagline: 'Your daily assistant',
    price: '$1,999',
    specs: ['Vision navigation', 'Voice assistant', 'Auto-docking'],
    accent: 'from-cyan-400/20 to-transparent',
  },
  {
    name: 'RF-Serve Pro',
    tagline: 'Hospitality & retail',
    price: '$4,499',
    specs: ['Payload 20kg', '24h battery', 'Fleet ready'],
    accent: 'from-emerald-400/20 to-transparent',
  },
  {
    name: 'RF-Industrial X',
    tagline: 'Factory automation',
    price: '$9,990',
    specs: ['IP54 rugged', 'Lidar + depth', 'SDK + API'],
    accent: 'from-fuchsia-400/20 to-transparent',
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative mx-auto max-w-7xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Choose your robot</h2>
        <p className="mt-3 text-white/70">Modular, serviceable, and ready to deploy out of the box. Finance and subscriptions available.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40"
          >
            <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${p.accent}`} />
            <div className="relative p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-white/70">{p.tagline}</p>
                </div>
                <div className="rounded-full bg-white/5 p-3">
                  <Bot className="h-5 w-5" />
                </div>
              </div>
              <div className="mb-6 h-28 w-full rounded-lg bg-gradient-to-tr from-white/10 to-transparent backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.02]" />
              <ul className="space-y-2 text-sm text-white/80">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" /> {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xl font-semibold">{p.price}</span>
                <button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white/90">
                  <ShoppingCart className="h-4 w-4" />
                  Add to cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div id="support" className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-6 text-center">
        <p className="text-sm text-white/70">Need a custom build, integration, or fleet pricing?</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90">Talk to sales</a>
          <a href="#" className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/5">Download spec sheets</a>
        </div>
      </div>

      <footer className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} RoboForge Inc. All rights reserved.
      </footer>
    </section>
  );
}
