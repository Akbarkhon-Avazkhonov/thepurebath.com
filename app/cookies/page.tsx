'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Cookies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thepurebath
            </Link>
            <Link href="/">
              <Button variant="ghost">Back Home</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-foreground/70">
            Learn about how we use cookies to enhance your experience.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. What Are Cookies?</h2>
            <p className="text-foreground/70 mb-6">
              Cookies are small files that are stored on your browser or device. They help us remember your preferences and understand how you use our website.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
            <p className="text-foreground/70 mb-6">
              We use essential cookies for security and functionality, analytics cookies to understand site usage, and preference cookies to remember your choices.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Essential Cookies</h2>
            <p className="text-foreground/70 mb-6">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Analytics Cookies</h2>
            <p className="text-foreground/70 mb-6">
              We use analytics cookies to understand how visitors use our site. This information helps us improve the user experience and optimize our website.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Managing Cookies</h2>
            <p className="text-foreground/70">
              You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. Note that blocking cookies may affect website functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-secondary to-accent py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white/90">
          <Link href="/" className="text-white hover:text-white/80">Back to Home</Link>
        </div>
      </footer>
    </div>
  )
}
