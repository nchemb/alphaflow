import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AlphaFlow — AI Automation & Lead Generation',
  description: 'Automate growth with custom AI systems. AlphaFlow builds AI-powered lead generation, automation, chatbots, and LLM integrations for modern businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black selection:bg-brand/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}
