import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(104,205,255,0.25),transparent),radial-gradient(800px_400px_at_100%_20%,rgba(255,97,246,0.18),transparent)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative z-10 py-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              In stock and shipping worldwide
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Robots that work while you dream.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Meet the next generation of service, companion, and industrial robots. Designed with precision, powered by AI, and built to last.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#products" className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm hover:bg-white/90">Browse Robots</a>
              <a href="#features" className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5">Why RoboForge</a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-white/70">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400" />
              </div>
              <p className="text-sm">Trusted by 10k+ teams and creators</p>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[380px] w-full sm:h-[520px] md:h-[640px] lg:h-[720px]">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/7sXv0e9aYk11i4Xm/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
