'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thepurebath
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/collections" className="text-foreground/80 hover:text-primary transition-colors">Collections</Link>
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
              <Link href="/journal" className="text-foreground/80 hover:text-primary transition-colors">Journal</Link>
              <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/contact-hero.jpg" 
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We'd love to hear from you. Let us know how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-foreground">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Email</label>
                  <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Subject</label>
                  <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Message</label>
                  <textarea placeholder="Your message" rows={5} className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-3 rounded-full font-medium">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Address</h3>
                      <p className="text-foreground/70">
                        1920 Steele Street<br />
                        Naperville, Illinois 60563<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <p className="text-foreground/70">
                        +1 (630) 713-1795<br />
                        Mon-Fri: 9am-6pm CT
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl">✉️</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-foreground/70">
                        hello@thepurebath.com<br />
                        support@thepurebath.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                <h3 className="font-serif font-bold text-foreground mb-2 text-lg">Schedule a Consultation</h3>
                <p className="text-foreground/70 mb-4">
                  Book a free consultation with one of our design experts.
                </p>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-2 rounded-full text-sm">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-primary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold text-foreground mb-4">Thepurebath</h3>
              <p className="text-foreground/70">Luxury bathroom fixtures for the discerning home.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><Link href="/collections" className="text-foreground/70 hover:text-primary">Collections</Link></li>
                <li><Link href="/" className="text-foreground/70 hover:text-primary">Bestsellers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-foreground/70 hover:text-primary">About</Link></li>
                <li><Link href="/journal" className="text-foreground/70 hover:text-primary">Journal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-foreground/70 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-8 text-center text-foreground/70">
            <p>&copy; 2025 Thepurebath. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
