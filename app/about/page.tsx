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

      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 border-t border-zinc-800">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 gradient-text">Meet the Founders</h2>

        <div className="text-zinc-300 text-lg max-w-3xl mx-auto text-center leading-relaxed space-y-6">
          <p>
            We’re <span className="font-medium text-white">Neeraj</span> and <span className="font-medium text-white">Abhi</span>, the founders of AlphaFlow. We have called Chicago home for the past decade, and during that time we have built our careers as technology leaders helping some of the biggest companies in the world design products, improve systems, and implement automation at scale. Our journey through the corporate world taught us not just how to build solutions, but how to build them with efficiency, precision, and lasting business impact.
          </p>

          <p>
            Over the past few years, we have worked deeply in artificial intelligence, using AI to automate complex workflows, drive smarter decision making, and deliver measurable results for global organizations. Through that experience, one thing became clear to us: AI should not be limited to large corporations.
          </p>

          <h3 className="text-3xl md:text-4xl font-semibold text-center mb-8 gradient-text">Why We Started AlphaFlow</h3>

          <p>
            We created AlphaFlow because we saw a growing challenge that small and medium sized businesses face in today’s economy. Prices keep rising, margins keep shrinking, and operational inefficiencies are silently draining profits. Data shows that nearly 1 in 5 U.S. businesses shut down within their first year, and almost half do not make it past year five. By the ten year mark, close to two thirds of them have closed their doors.
          </p>

          <p>
            These aren’t failures of ambition or effort. They are often the result of inefficiencies, outdated systems, and limited resources that make it nearly impossible for business owners to keep up. Studies estimate that inefficiencies can cost companies between twenty to thirty percent of their total revenue every year. That loss can be the difference between survival and closure.
          </p>

          <p>
            At AlphaFlow, we believe AI can change that. The same technologies we have used in large corporations to automate workflows, optimize processes, and enhance decision making can now be applied to small and medium businesses. By introducing AI into everyday operations, we help business owners cut waste, improve productivity, and reclaim the time and profit they deserve.
          </p>

          <p>
            Our mission is to ensure that small businesses, the backbone of every community, not only survive but thrive. With intelligent automation handling the routine, owners can focus on growth, creativity, and building lasting value for their customers.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}