import React from 'react';
import { Rocket, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-500 to-fuchsia-500">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">RoboForge</span>
        </a>
        <nav className="hidden gap-8 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#products" className="hover:text-white">Robots</a>
          <a href="#support" className="hover:text-white">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/5 md:inline-block">Sign in</button>
          <button className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-neutral-900 hover:bg-white/90">
            <ShoppingCart className="h-4 w-4" />
            Shop
          </button>
        </div>
      </div>
    </header>
  );
}
