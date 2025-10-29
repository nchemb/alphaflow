export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>© {new Date().getFullYear()} AlphaFlow. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="mailto:hello@goalphaflow.com">hello@goalphaflow.com</a>
        </div>
      </div>
    </footer>
  )
}
