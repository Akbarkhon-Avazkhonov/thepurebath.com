'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Terms() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-foreground/70">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-foreground/70 mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Use License</h2>
            <p className="text-foreground/70 mb-6">
              Permission is granted to temporarily download one copy of the materials (information or software) on Thepurebath for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-foreground/70 mb-6">
              The materials on Thepurebath are provided on an 'as is' basis. Thepurebath makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Limitations</h2>
            <p className="text-foreground/70 mb-6">
              In no event shall Thepurebath or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Thepurebath.
            </p>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
            <p className="text-foreground/70">
              The materials appearing on Thepurebath could include technical, typographical, or photographic errors. Thepurebath does not warrant that any of the materials on the website are accurate, complete, or current.
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
