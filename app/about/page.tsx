'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="bg-grid">
      <Header />

      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-center"
        >
          <span className="gradient-text">About AlphaFlow</span>
        </motion.h1>

        <p className="mt-8 text-zinc-300 text-lg text-center max-w-2xl mx-auto">
          AlphaFlow helps service businesses harness AI to save time, capture more leads, and scale without chaos.
          We build practical automation systems, not hype, that make day-to-day operations smoother and more profitable.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-zinc-400">
          <div>
            <h3 className="text-white font-semibold mb-2">🚀 Mission</h3>
            <p>To make advanced AI simple, accessible, and valuable for small and service-based businesses.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">💡 Approach</h3>
            <p>We focus on practical systems that drive measurable results, not experiments that collect dust.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">🤝 Values</h3>
            <p>Transparency, trust, and results. We only build what we believe truly helps you grow.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 border-t border-zinc-800 mt-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 gradient-text">Meet the Founders</h2>

        <div className="text-zinc-300 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          <p>
            AlphaFlow was founded by <span className="font-medium text-white">Neeraj Chemburkar</span> and <span className="font-medium text-white">Abhi Singh</span>. They are two engineers with over a decade of experience building technology for Fortune 500 companies and their own startups.
          </p>
          <p className="mt-6">
            After years in the enterprise world, they turned their focus to helping local businesses thrive.
            In today’s economy, where margins are tighter and time is scarce, their mission is to use AI to level the playing field by automating the busywork and empowering owners to focus on growth.
          </p>
          <p className="mt-6">
            AlphaFlow isn’t just another tech agency; it’s a team that understands both sides: deep engineering, product management, and small business realities, putting real people and results behind every solution.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}