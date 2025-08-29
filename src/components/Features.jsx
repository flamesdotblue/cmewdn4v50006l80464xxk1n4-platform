import React from 'react';
import { Bot, Cpu, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'AI autonomy',
    desc: 'Navigate, map, and execute tasks with on-device intelligence and cloud coordination.',
    icon: Bot,
    gradient: 'from-cyan-500/20 to-transparent',
  },
  {
    title: 'Industrial-grade build',
    desc: 'CNC-milled chassis, IP54 sealing, hot-swappable batteries, and modular I/O.',
    icon: Shield,
    gradient: 'from-emerald-500/20 to-transparent',
  },
  {
    title: 'Next-gen compute',
    desc: 'NVIDIA-class edge GPUs with real-time sensor fusion and safety co-processors.',
    icon: Cpu,
    gradient: 'from-fuchsia-500/20 to-transparent',
  },
  {
    title: 'Lightning deployment',
    desc: 'No-code behaviors, fleet dashboards, and OTA updates built-in.',
    icon: Zap,
    gradient: 'from-amber-500/20 to-transparent',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Engineered to excel</h2>
        <p className="mt-3 text-white/70">From warehouse automation to home assistance, RoboForge robots deliver uncompromising performance and reliability.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 p-5"
          >
            <div className={`pointer-events-none absolute -inset-px bg-gradient-to-br ${f.gradient}`} />
            <div className="relative">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
