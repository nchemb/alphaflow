'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type ServiceItem = {
  title: string
  summary: string
  icon: ReactNode
  desc: ReactNode
}

export default function ServiceAccordion({ items }: { items: ServiceItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `service-panel-${index}`
        const triggerId = `service-trigger-${index}`

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="border-t border-white/10 first:border-t-0"
          >
            <button
              type="button"
              id={triggerId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
            >
              <span className="flex flex-1 items-start gap-4">
                <span aria-hidden="true" className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand">
                  {item.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-medium text-zinc-100 md:text-lg">{item.title}</span>
                  <span className="mt-1 text-sm text-zinc-400 md:text-base">{item.summary}</span>
                </span>
              </span>
              <motion.svg
                animate={{ rotate: isOpen ? -180 : 0 }}
                transition={{ duration: 0.2 }}
                className="h-4 w-4 shrink-0 text-zinc-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </motion.svg>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: 'auto', opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="px-6 pb-6 text-sm leading-relaxed text-zinc-300 md:text-base"
                >
                  <div className="space-y-4">{item.desc}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
