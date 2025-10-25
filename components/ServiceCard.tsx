import { motion } from 'framer-motion'

export default function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 hover:border-brand/40 hover:shadow-glow transition-all"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  )
}
