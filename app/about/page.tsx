'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
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
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors font-medium">About</Link>
              <Link href="/journal" className="text-foreground/80 hover:text-primary transition-colors">Journal</Link>
              <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground">
              About Thepurebath
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Redefining luxury wellness through innovative design and sustainable practices
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Thepurebath was founded with a singular vision: to transform the bathroom from a purely functional space into a sanctuary of luxury and wellness. We believe that every detail matters, and that true luxury is found in the intersection of exceptional design, sustainable materials, and masterful craftsmanship.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Each fixture in our collection is carefully curated and tested to ensure it meets our rigorous standards for quality, sustainability, and aesthetic beauty.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/about-story.jpg" 
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img 
                src="/about-mission.jpg" 
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-serif font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We are committed to creating bathroom fixtures that elevate daily rituals into moments of pure indulgence. Our mission is to make luxury accessible without compromising on our environmental and ethical values.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                By sourcing responsibly and employing sustainable manufacturing practices, we ensure that choosing Thepurebath is not only a choice for luxury but also for a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'Every fixture undergoes rigorous testing and inspection to ensure durability and performance.'
              },
              {
                title: 'Sustainability',
                description: 'We are committed to using eco-friendly materials and sustainable manufacturing processes.'
              },
              {
                title: 'Innovation',
                description: 'We constantly explore new designs and technologies to improve the bathroom experience.'
              }
            ].map((value, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-colors">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Explore our collections and transform your bathroom into a sanctuary.
          </p>
          <Link href="/collections">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold">
              Shop Collections
            </Button>
          </Link>
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
