'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  // Replace with your Formspree form ID: https://formspree.io/forms
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvgvpwez'

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={() => setStatus('sending')}
      className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 space-y-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-zinc-300 mb-1">Name</label>
          <input name="name" required className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 outline-none focus:border-brand/60" />
        </div>
        <div>
          <label className="block text-sm text-zinc-300 mb-1">Email</label>
          <input type="email" name="email" required className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 outline-none focus:border-brand/60" />
        </div>
      </div>
      <div>
        <label className="block text-sm text-zinc-300 mb-1">Message</label>
        <textarea name="message" rows={5} required className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 outline-none focus:border-brand/60" />
      </div>

      <input type="hidden" name="_subject" value="New inquiry via AlphaFlow" />
      <input type="hidden" name="_template" value="table" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center rounded-xl bg-brand px-5 py-3 font-medium hover:bg-brand-dark transition-colors shadow-glow disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="text-xs text-zinc-500">
        You can also email us directly at <a className="underline hover:text-white" href="mailto:neejbiz@gmail.com">neejbiz@gmail.com</a>.
      </p>
    </form>
  )
}
