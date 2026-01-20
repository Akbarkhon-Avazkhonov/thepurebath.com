'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

const products = {
  'brass-collection': {
    id: 1,
    name: 'Brass Collection',
    description: 'Timeless elegance with premium brass fixtures',
    image: '/brass-collection.jpg',
    price: '$299',
    details: 'Handcrafted brass fixtures that combine traditional craftsmanship with modern design. Each piece is individually inspected for quality and durability.',
    specifications: [
      'Premium solid brass construction',
      'Durable finish resistant to tarnishing',
      'Ergonomic design for comfort',
      '5-year warranty included',
      'Easy to install and maintain'
    ],
    features: 'Our Brass Collection represents the pinnacle of traditional bathroom design. Each fixture is hand-finished by skilled craftspeople who understand the nuances of brass working. The collection includes faucets, showerheads, and accessories designed to create a cohesive, elegant bathroom aesthetic.'
  },
  'stone-haven': {
    id: 2,
    name: 'Stone Haven',
    description: 'Luxurious stone and marble designs',
    image: '/stone-haven.jpg',
    price: '$349',
    details: 'Premium marble and stone fixtures that bring natural elegance to your bathroom. Sourced from the finest quarries worldwide.',
    specifications: [
      'Authentic marble and stone materials',
      'Hand-carved by master artisans',
      'Natural variation in each piece',
      'Seamless integration with any design',
      'Lifetime durability guarantee'
    ],
    features: 'Stone Haven brings the timeless beauty of natural stone to your bathroom. Each piece is sourced from the world\'s finest quarries and carved by artisans who have perfected their craft over decades. The collection celebrates the natural patterns and colors inherent in marble and stone.'
  },
  'bamboo-eco-line': {
    id: 3,
    name: 'Bamboo Eco-Line',
    description: 'Sustainable luxury for eco-conscious living',
    image: '/bamboo-eco.jpg',
    price: '$249',
    details: 'Environmentally sustainable fixtures made from renewable bamboo. Perfect for the eco-conscious homeowner.',
    specifications: [
      'Sustainable bamboo material',
      'Renewable and biodegradable',
      'FSC certified',
      'Water-efficient design',
      'Chemical-free finishes'
    ],
    features: 'Our Bamboo Eco-Line proves that luxury doesn\'t require environmental compromise. By using rapidly renewable bamboo, we create fixtures that are both beautiful and sustainable. Each purchase supports responsible forestry practices and reduces your environmental footprint.'
  },
  'crystal-rain': {
    id: 4,
    name: 'Crystal Rain',
    description: 'Modern rainfall showerheads with precision',
    image: '/crystal-rain.jpg',
    price: '$399',
    details: 'State-of-the-art rainfall showerheads designed for ultimate comfort and water efficiency.',
    specifications: [
      'Advanced rainfall technology',
      '40% water reduction compared to standard showerheads',
      'Precision flow control',
      'Adjustable spray patterns',
      'Easy to clean and maintain'
    ],
    features: 'Crystal Rain represents the future of shower technology. With innovative design and precision engineering, we\'ve created a showerhead that delivers an indulgent rainfall experience while consuming significantly less water. It\'s luxury with a conscience.'
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [quantity, setQuantity] = useState(1)
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50">
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Thepurebath
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center h-96">
          <p className="text-2xl text-foreground/70">Product not found</p>
        </div>
      </div>
    )
  }

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
              <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Product Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/collections" className="text-primary hover:text-primary/80 mb-8 inline-block">
            ← Back to Collections
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative h-full min-h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-primary font-medium tracking-wider uppercase text-sm">Premium Collection</p>
                <h1 className="text-5xl font-serif font-bold text-foreground">
                  {product.name}
                </h1>
                <p className="text-xl text-foreground/60">{product.description}</p>
              </div>

              {/* Price */}
              

              {/* Details */}
              <p className="text-lg text-foreground/70 leading-relaxed">
                {product.details}
              </p>

              {/* Features */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl border border-primary/10">
                <h3 className="font-serif font-bold text-foreground mb-3">Why Choose This Collection?</h3>
                <p className="text-foreground/70">{product.features}</p>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="font-serif font-bold text-foreground mb-4">Specifications</h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2"></span>
                      <span className="text-foreground/70">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 pt-6">
                <div className="flex items-center border border-primary/20 rounded-full">
                  
                  
                  
                </div>
                <Button
                  onClick={() => window.open('https://www.amazon.com', '_blank')}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full text-lg"
                >
                  Buy Amazon
                </Button>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-primary/10 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-primary font-bold text-xl">5-Year</p>
                  <p className="text-sm text-foreground/60">Warranty</p>
                </div>
                <div className="text-center">
                  <p className="text-primary font-bold text-xl">Free</p>
                  <p className="text-sm text-foreground/60">Shipping</p>
                </div>
                <div className="text-center">
                  <p className="text-primary font-bold text-xl">30-Day</p>
                  <p className="text-sm text-foreground/60">Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-primary/10 py-12 mt-20">
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
