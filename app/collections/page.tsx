'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const collections = [
  {
    id: 1,
    name: 'Brass Collection',
    slug: 'brass-collection',
    description: 'Timeless elegance with premium brass fixtures',
    image: '/brass-collection.jpg',
    price: '$299',
    details: 'Handcrafted brass fixtures that combine traditional craftsmanship with modern design. Each piece is individually inspected for quality and durability.'
  },
  {
    id: 2,
    name: 'Stone Haven',
    slug: 'stone-haven',
    description: 'Luxurious stone and marble designs',
    image: '/stone-haven.jpg',
    price: '$349',
    details: 'Premium marble and stone fixtures that bring natural elegance to your bathroom. Sourced from the finest quarries worldwide.'
  },
  {
    id: 3,
    name: 'Bamboo Eco-Line',
    slug: 'bamboo-eco-line',
    description: 'Sustainable luxury for eco-conscious living',
    image: '/bamboo-eco.jpg',
    price: '$249',
    details: 'Environmentally sustainable fixtures made from renewable bamboo. Perfect for the eco-conscious homeowner.'
  },
  {
    id: 4,
    name: 'Crystal Rain',
    slug: 'crystal-rain',
    description: 'Modern rainfall showerheads with precision',
    image: '/crystal-rain.jpg',
    price: '$399',
    details: 'State-of-the-art rainfall showerheads designed for ultimate comfort and water efficiency.'
  }
]

export default function CollectionsPage() {
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
              <Link href="/collections" className="text-foreground/80 hover:text-primary transition-colors font-medium">Collections</Link>
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
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
              Our Collections
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore our curated selection of premium bathroom fixtures designed for luxury and sustainability
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {collections.map((collection) => (
              <div key={collection.id} className="group">
                <div className="relative h-96 rounded-2xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-shadow">
                  <img 
                    src={collection.image || "/placeholder.svg"} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-2">{collection.name}</h2>
                    <p className="text-lg text-foreground/60 mb-4">{collection.description}</p>
                    <p className="text-foreground/70 leading-relaxed">{collection.details}</p>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-primary/10">
                    <Link href={`/products/${collection.slug}`}>
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
