export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-brand/80 shadow-glow" />
          <span className="font-semibold tracking-tight">AlphaFlow</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center rounded-xl bg-brand px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors shadow-glow">
          Get Started
        </a>
      </div>
    </header>
  )
}
