'use client'

import { useState } from 'react'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import Loading from './loading'
import Link from 'next/link'

const collections = [
  {
    id: 1,
    name: 'Brass Collection',
    slug: 'brass-collection',
    description: 'Timeless elegance with premium brass fixtures',
    image: '/brass-collection.jpg',
    price: '$299'
  },
  {
    id: 2,
    name: 'Stone Haven',
    slug: 'stone-haven',
    description: 'Luxurious stone and marble designs',
    image: '/stone-haven.jpg',
    price: '$349'
  },
  {
    id: 3,
    name: 'Bamboo Eco-Line',
    slug: 'bamboo-eco-line',
    description: 'Sustainable luxury for eco-conscious living',
    image: '/bamboo-eco.jpg',
    price: '$249'
  },
  {
    id: 4,
    name: 'Crystal Rain',
    slug: 'crystal-rain',
    description: 'Modern rainfall showerheads with precision',
    image: '/crystal-rain.jpg',
    price: '$399'
  }
]

const bestsellers = [
  {
    id: 1,
    name: 'Aquamarine Faucet',
    price: '$189',
    rating: 4.9,
    reviews: 348,
    image: '/brass-collection.jpg'
  },
  {
    id: 2,
    name: 'Orchid Shower System',
    price: '$549',
    rating: 4.8,
    reviews: 256,
    image: '/crystal-rain.jpg'
  },
  {
    id: 3,
    name: 'Coral Vanity',
    price: '$799',
    rating: 5.0,
    reviews: 412,
    image: '/stone-haven.jpg'
  }
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Interior Designer',
    text: 'Thepurebath transformed my project. The attention to detail is unmatched.',
    avatar: '/avatar-sarah.jpg'
  },
  {
    name: 'James Wilson',
    role: 'Homeowner',
    text: 'Worth every penny. My bathroom feels like a luxury spa now.',
    avatar: '/avatar-james.jpg'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Architect',
    text: 'The quality and design philosophy align perfectly with my high standards.',
    avatar: '/avatar-emma.jpg'
  }
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const searchParams = useSearchParams()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1)
    alert('Product added to cart!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Thepurebath
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/collections" className="text-foreground/80 hover:text-primary transition-colors">Collections</Link>
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
              <Link href="/journal" className="text-foreground/80 hover:text-primary transition-colors">Journal</Link>
              <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
            </div>

            {/* Right Icons */}
            
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <Link href="/collections" className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors">Collections</Link>
              <Link href="/about" className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors">About</Link>
              <Link href="/journal" className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors">Journal</Link>
              <Link href="/contact" className="block px-4 py-2 text-foreground/80 hover:text-primary transition-colors">Contact</Link>
            </div>
          )}

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="pb-4">
              <input 
                type="text" 
                placeholder="Search fixtures..." 
                className="w-full px-4 py-2 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&h=1080&fit=crop" 
            alt="luxury bathroom background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent font-medium tracking-wider uppercase text-sm">Iridescent Hydro-Fantasy</p>
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                  Where luxury meets <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">wellness</span>
                </h1>
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                Transform your bathroom into a sanctuary of pure indulgence. Our curated collection of premium fixtures combines innovative design with sustainable materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full" onClick={() => scrollToSection('collections')}>
                  Explore Collections
                </Button>
                <Button variant="outline" className="px-8 py-3 rounded-full border-primary/20 hover:bg-primary/5 bg-transparent text-white border-white" onClick={() => scrollToSection('about')}>
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Visual - Bubble Design */}
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Floating Bubbles */}
                <div className="absolute w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl opacity-40 -top-10 -right-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-40 h-40 bg-gradient-to-br from-secondary/25 to-accent/25 rounded-full blur-2xl opacity-50 -bottom-5 left-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
                
                {/* Center Product Showcase */}
                <div className="relative z-10 text-center">
                  <div className="w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center backdrop-blur-md border border-white/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-full"></div>
                    <div className="relative text-center space-y-2">
                      <div className="text-5xl">💧</div>
                      <p className="font-serif text-2xl font-bold text-foreground">Pure Bath</p>
                      <p className="text-sm text-foreground/60">Experience luxury</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Our Collections</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Curated Luxury Collections
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Each collection represents our commitment to quality, sustainability, and timeless design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <div 
                key={collection.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/10"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={collection.image || "/placeholder.svg"} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-foreground">{collection.name}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{collection.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <Link href={`/products/${collection.slug}`}>
                      <Button variant="ghost" className="text-primary hover:bg-primary/10 rounded-full">
                        View →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainable Design',
                description: 'Crafted with eco-conscious materials that don\'t compromise on luxury'
              },
              {
                title: 'Premium Quality',
                description: 'Handpicked fixtures engineered for durability and timeless elegance'
              },
              {
                title: 'Expert Curation',
                description: 'Each piece selected by our team of luxury home design specialists'
              }
            ].map((feature, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-gradient-to-br from-white via-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-xl text-white">✨</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Most Loved</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Bestselling Fixtures
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Discover the fixtures that our customers love most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestsellers.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary/10">
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={item.image || "/placeholder.svg"} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    ⭐ {item.rating}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-foreground">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    
                    <span className="text-sm text-foreground/60">({item.reviews} reviews)</span>
                  </div>
                  <Link href="/collections">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Inspiration Section */}
      <section className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Inspiration Gallery</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Bathroom Design Ideas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Minimalist Luxury', img: '/design-minimalist.jpg' },
              { title: 'Spa Sanctuary', img: '/design-spa.jpg' },
              { title: 'Modern Elegance', img: '/design-modern.jpg' },
              { title: 'Eco-Chic', img: '/design-eco.jpg' },
              { title: 'Classic Heritage', img: '/design-heritage.jpg' },
              { title: 'Contemporary Smart', img: '/design-smart.jpg' }
            ].map((design, idx) => (
              <div key={idx} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <img 
                  src={design.img || "/placeholder.svg"} 
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-white">{design.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Loved by Customers</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Customer Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gradient-to-br from-white to-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.avatar || "/placeholder.svg"} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-serif font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/70 italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">⭐</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation & Care Section */}
      <section className="py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Expertise</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Installation & Care Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔧', title: 'Installation', desc: 'Professional installation guides & support' },
              { icon: '💧', title: 'Water Care', desc: 'Optimize water flow and efficiency' },
              { icon: '✨', title: 'Maintenance', desc: 'Easy cleaning and care instructions' },
              { icon: '🛡️', title: 'Warranty', desc: 'Comprehensive 5-year warranty' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-primary/10 text-center hover:border-primary/30 transition-colors">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-serif font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Bespoke Services</p>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                  Custom Bathroom Solutions
                </h2>
              </div>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Work with our design experts to create a bathroom that's uniquely yours. From concept to completion, we handle every detail.
              </p>
              <ul className="space-y-3">
                {['Personalized design consultation', 'Custom fixture fabrication', '3D visualization & mockups', 'Project management & delivery'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full" onClick={() => alert('Consultation request submitted!')}>
                Schedule Consultation
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img 
                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop" 
                alt="Custom bathroom design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">Our Commitment</p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Sustainable Luxury
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Every fixture is crafted with environmental responsibility at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '100%', label: 'Recyclable Materials' },
              { value: '40%', label: 'Water Savings' },
              { value: '0', label: 'Carbon Footprint' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl bg-white border border-primary/10">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Start your journey to luxury wellness today with Thepurebath
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-full font-semibold" onClick={() => scrollToSection('collections')}>
              Shop Collections
            </Button>
            <Button className="bg-white/20 text-white border border-white/40 hover:bg-white/30 px-8 py-3 rounded-full" onClick={() => scrollToSection('collections')}>
              Get Inspired
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Get exclusive access to new collections, design inspiration, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full bg-white border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold">Thepurebath</h3>
              <p className="text-white/60">Luxury fixtures for modern living</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                
                
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                
                
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-white/60 text-sm gap-4">
            <div className="space-y-2">
              <p>&copy; 2025 Thepurebath. All rights reserved.</p>
              <p className="text-xs text-white/50">As an Amazon Associate, we earn from qualifying purchases.</p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
