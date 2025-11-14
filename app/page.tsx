'use client'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceAccordion from '../components/ServiceAccordion'
import ContactForm from '../components/ContactForm'

export default function Home() {
  const phoneIcon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 5.25C2.25 4.007 3.257 3 4.5 3h2.121c.92 0 1.742.594 2.012 1.473l.883 2.943c.2.666.017 1.394-.475 1.886L7.4 10.943c1.13 2.339 3.018 4.227 5.357 5.356l1.642-1.64c.492-.492 1.22-.675 1.886-.475l2.943.883c.879.269 1.473 1.091 1.473 2.011V19.5c0 1.243-1.007 2.25-2.25 2.25h-.375C9.718 21.75 2.25 14.282 2.25 5.625V5.25Z" />
    </svg>
  )

  const mailIcon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5C3 6.119 4.119 5 5.5 5h13c1.381 0 2.5 1.119 2.5 2.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 7.5 6.782 4.744c.296.207.43.228.688.228s.392-.021.688-.228L18.69 7.5" />
    </svg>
  )

  const sparkIcon = (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m8-8h-3M7 12H4m15.364-5.364-2.122 2.122M8.758 15.243l-2.122 2.122m0-12.728 2.122 2.122m9.486 8.486 2.122 2.122M9.75 9.75l2.25 1.125 2.25-1.125-1.125 2.25 1.125 2.25-2.25-1.125-2.25 1.125 1.125-2.25-1.125-2.25Z" />
    </svg>
  )

  const services = [
    {
      title: 'AlphaFlow Answering Agent',
      summary: 'Transform every call into a booked appointment or qualified lead.',
      icon: phoneIcon,
      desc: (
        <>
          <div>
            <p className="text-base font-medium text-zinc-100 md:text-lg">Your 24/7 AI Concierge for Your Business</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">Overview</p>
            <p>
              Never miss another customer call again. The AlphaFlow Answering Agent acts as a friendly, reliable concierge that answers calls on your behalf, whether you’re busy or after hours. It listens, understands the customer’s needs, books appointments, takes messages, and can even schedule follow-ups for your team to call back.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">What it does</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Answers calls automatically during and after business hours</li>
              <li>Understands customer questions and responds conversationally</li>
              <li>Books appointments or collects key details from the caller</li>
              <li>Sends call summaries and customer notes to your email or dashboard</li>
              <li>Highlights the most common questions customers ask</li>
              <li>Provides an easy-to-use admin dashboard with call logs and insights</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">How it helps your business</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>No more missed calls or lost customers</li>
              <li>Saves you time by automating repetitive phone interactions</li>
              <li>Gives your business a professional first impression every time</li>
              <li>Lets you focus on doing the work while calls are still being answered</li>
              <li>Offers valuable insights into what customers are asking most so you can improve marketing and services</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'AlphaFlow Email Buddy',
      summary: 'Give every lead a fast, polished reply and keep conversations moving.',
      icon: mailIcon,
      desc: (
        <>
          <div>
            <p className="text-base font-medium text-zinc-100 md:text-lg">AI that manages your incoming leads and email requests</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">Overview</p>
            <p>
              Your inbox is full of potential business — but keeping up with every quote request, inquiry, or follow-up can be overwhelming. The AlphaFlow Smart Lead and Quote Assistant automatically reads and responds to incoming emails, handles quote requests, and keeps the conversation alive even when you’re away.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">What it does</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Automatically identifies what customers are asking for in emails</li>
              <li>Sends brochures, pricing sheets, or responses instantly</li>
              <li>Gathers customer details to prepare and send quotes</li>
              <li>Follows up automatically if no response is received in a few hours</li>
              <li>Keeps a log of all customer interactions for easy reference</li>
              <li>Fully customizable to match your business tone and workflow</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">How it helps your business</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Responds to leads faster, helping you win more business</li>
              <li>Saves hours of manual email work every week</li>
              <li>Makes sure no lead ever slips through the cracks</li>
              <li>Keeps your customers engaged and feeling valued</li>
              <li>Works around the clock while you focus on running your business</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'AlphaFlow Custom AI Solutions',
      summary: 'Build bespoke automations that unlock efficiency across your team.',
      icon: sparkIcon,
      desc: (
        <>
          <div>
            <p className="text-base font-medium text-zinc-100 md:text-lg">Tailored automation built around your unique business needs</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">Overview</p>
            <p>
              Every business is different. That’s why we offer a free consultation to understand your current processes, systems, and challenges — and then build custom AI solutions designed specifically for you. Whether it’s automating scheduling, reporting, data entry, or customer communication, we’ll create something that saves time and drives efficiency.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">What it does</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Offers a free consultation to review your business and technology stack</li>
              <li>Identifies repetitive or time-consuming tasks that can be automated</li>
              <li>Designs and builds AI tools made specifically for your workflow</li>
              <li>Integrates with your existing systems and software</li>
              <li>Provides continuous support and updates as your needs evolve</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand/80">How it helps your business</p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Saves valuable time by automating everyday tasks</li>
              <li>Reduces overhead costs by cutting manual work</li>
              <li>Improves accuracy and consistency in operations</li>
              <li>Lets you focus on growth and customer relationships instead of routine work</li>
              <li>Brings the same level of automation used by large corporations to small businesses</li>
            </ul>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="bg-grid">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_center,rgba(124,58,237,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            <span className="gradient-text">AI That Levels Up Your Business</span>
          </motion.h1>
          <p className="mt-6 text-zinc-300 max-w-2xl mx-auto">
            AlphaFlow builds practical AI systems that help service businesses answer calls, handle leads, and automate day‑to‑day tasks, giving owners more time to grow.
          </p>
          <p className="mt-4 text-sm text-brand/80 font-medium">
            Built by former Fortune 500 product leaders
          </p>
          <div className="mt-4 flex justify-center">
            <a href="#contact" className="rounded-xl bg-brand px-6 py-3 font-medium hover:bg-brand-dark transition-colors shadow-glow">Start My Free AI Consultation</a>
          </div>
        </div>
      </section>

      {/* Logos / credibility hint (optional) */}
      <section className="mx-auto max-w-6xl px-6 pb-4">
        <div className="text-xs uppercase tracking-widest text-zinc-500 text-center">
          Solutions in: Small Business • SaaS • E‑commerce • Services • Local
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold">What we do</h2>
        <p className="text-zinc-400 mt-2">High‑leverage AI systems tailored to your business.</p>
        <ServiceAccordion items={services} />
      </section>

      {/* Why AI Matters */}
      <section id="why-ai" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-white/10 p-8 bg-zinc-900/40">
          <h2 className="text-2xl md:text-3xl font-semibold">Why AI Matters for Your Business Right Now</h2>
          <div className="space-y-4 text-zinc-300 mt-4">
            <p>
              The last time we saw a shift this big was the dot‑com era. Some businesses adapted early and became giants. Many others ignored the internet and disappeared. In fact, almost half of the companies born during that time did not make it past 5 years (
              <a href="https://www2.itif.org/2010-25-years.pdf?utm_source=chatgpt.com" target="_blank" className="text-brand hover:underline">
                ITIF Study
              </a>
              ).
            </p>
            <p>
              AI is the next wave — and it is moving even faster. PwC reports that AI will add over 15 trillion dollars to the global economy by 2030 (
              <a href="https://www.pwc.com/gx/en/issues/analytics/assets/pwc-ai-analysis-sizing-the-prize-report.pdf" target="_blank" className="text-brand hover:underline">
                PwC Global AI Report
              </a>
              ). That means your competitors who use AI will cut their costs, respond faster, and serve customers better. Those who do not will slowly lose margins until it becomes impossible to keep up.
            </p>
            <p>
              This is the moment where small businesses either level up or get left behind. At AlphaFlow, we help business owners bring in simple AI tools that remove busy work, boost efficiency, and keep you ahead of the curve. AI is not just an upgrade — it is survival.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-8">
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
