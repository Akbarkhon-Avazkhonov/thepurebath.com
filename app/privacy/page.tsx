'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Privacy() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground/70">
            Your privacy is important to us. Learn how we protect your data.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-foreground/70 mb-6">
              We collect information you provide directly to us, such as when you make a purchase, create an account, or contact us. This may include your name, email address, phone number, and shipping address.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p className="text-foreground/70 mb-6">
              We use the information we collect to process your orders, send you product updates, respond to your inquiries, and improve our services. We never sell your personal information to third parties.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Data Security</h2>
            <p className="text-foreground/70 mb-6">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Cookies</h2>
            <p className="text-foreground/70 mb-6">
              We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Contact Us</h2>
            <p className="text-foreground/70">
              If you have any questions about this privacy policy, please contact us at privacy@thepurebath.com
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
