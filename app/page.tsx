'use client'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div className="bg-grid">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            <span className="gradient-text">AI Systems That Make You Money</span>
          </motion.h1>
          <p className="mt-6 text-zinc-300 max-w-2xl mx-auto">
            AlphaFlow builds practical AI systems that help service businesses answer calls, handle leads, and automate day‑to‑day tasks, giving owners more time to grow.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#contact" className="rounded-xl bg-brand px-6 py-3 font-medium hover:bg-brand-dark transition-colors shadow-glow">Get Started</a>
          </div>
        </div>
      </section>

      {/* Logos / credibility hint (optional) */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="text-xs uppercase tracking-widest text-zinc-500 text-center">
          Solutions in: SaaS • E‑commerce • Services • Local
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        <p className="text-zinc-400 mt-2">High‑leverage AI systems tailored to your business.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <ServiceCard
            title="AI Voice & Calling Agents"
            desc="Give your business a 24/7 phone assistant that sounds natural, answers questions, qualifies leads, and books appointments — so you never miss a call or opportunity again."
          />
          <ServiceCard
            title="AI‑Powered Lead & Quote Handling"
            desc="Save hours and money on manual intake. Our AI automatically reads new inquiries, collects job details, and creates accurate quotes or responses — helping you reply faster and win more work."
          />
          <ServiceCard
            title="Custom AI Solutions"
            desc="We design and build custom AI tools for your unique operations — from automating repetitive tasks to creating smart assistants that streamline your day‑to‑day workflow."
          />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-white/10 p-8 bg-zinc-900/50">
          <h2 className="text-2xl md:text-3xl font-semibold">How we work</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { step: '01', title: 'Discover', desc: 'We map your goals, workflows, and data to identify the highest‑leverage opportunities.' },
              { step: '02', title: 'Design', desc: 'We prototype and validate an AI system aligned with your KPIs and stack.' },
              { step: '03', title: 'Deploy', desc: 'We ship, integrate, and measure—then iterate for compound gains.' },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-white/10 p-6">
                <div className="text-brand font-semibold">{s.step}</div>
                <div className="text-lg font-medium mt-2">{s.title}</div>
                <div className="text-zinc-400 text-sm mt-2">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Tell us about your project</h2>
        <p className="text-zinc-400 text-center mt-2">We’ll get back within one business day.</p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
