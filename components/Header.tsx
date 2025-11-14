import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/alphaflowlogoupdatedpng.png"
            alt="AlphaFlow full logo"
            width={140}
            height={32}
            className="object-contain h-8 w-auto"
            priority
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="/#services" className="hover:text-white">Services</a>
          <a href="/#process" className="hover:text-white">Process</a>
          <a href="/#contact" className="hover:text-white">Contact</a>
          <a href="/about" className="hover:text-white">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-zinc-300 hover:text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <a href="#contact" className="hidden md:inline-flex items-center rounded-xl bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors shadow-glow">
            Get Started
          </a>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 mx-4 rounded-xl bg-black/90 border border-white/10 shadow-lg md:hidden z-40"
          >
            <nav className="flex flex-col p-4 space-y-3 text-zinc-200">
              <a href="/#services" onClick={() => setMenuOpen(false)} className="hover:text-white">Services</a>
              <a href="/#process" onClick={() => setMenuOpen(false)} className="hover:text-white">Process</a>
              <a href="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-white">Contact</a>
              <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center rounded-xl bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors shadow-glow">
                Get Started
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
