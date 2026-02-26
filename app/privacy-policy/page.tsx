'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <div className="bg-grid">
      <Header />

      <section className="mx-auto max-w-4xl px-6 pt-20 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-center"
        >
          <span className="gradient-text">Privacy Policy</span>
        </motion.h1>

        <p className="mt-4 text-zinc-500 text-sm text-center">
          Effective Date: February 26, 2026
        </p>

        <div className="mt-12 text-zinc-300 text-lg leading-relaxed space-y-10 max-w-3xl mx-auto">
          <p>
            Ascended Code uses the Instagram Graph API to publish content to Instagram professional accounts authorized by the account owner.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Data We Access</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Instagram account ID</li>
              <li>Instagram username</li>
              <li>Media publishing permissions</li>
              <li>Page ID (if connected)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">We do NOT</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Store Instagram passwords</li>
              <li>Access personal messages</li>
              <li>Sell user data</li>
              <li>Share data with third parties</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Purpose of Data Use</h2>
            <p className="mb-4">The app uses granted permissions solely to:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Create media containers</li>
              <li>Publish posts (images, carousels, Reels)</li>
              <li>Manage comments (if authorized)</li>
            </ul>
            <p className="mt-4 text-zinc-400">
              All access is performed using Meta's official OAuth tokens.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
            <p className="text-zinc-400">
              We do not store long-term personal data. Media files may be temporarily stored for publishing purposes and deleted automatically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Deletion</h2>
            <p className="mb-3">If you wish to revoke access or request deletion of data:</p>
            <ul className="list-disc list-inside space-y-2 text-zinc-400">
              <li>Remove the app from your Instagram/Facebook app settings</li>
              <li>Or contact: <a href="mailto:nchemb@gmail.com" className="text-brand-light hover:text-white transition-colors">nchemb@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              <a href="mailto:nchemb@gmail.com" className="text-brand-light hover:text-white transition-colors">nchemb@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
