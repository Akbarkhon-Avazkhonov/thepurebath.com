'use client'

import Link from 'next/link'

const articles = [
  {
    id: 1,
    slug: 'art-of-bathroom-design',
    title: 'The Art of Bathroom Design',
    excerpt: 'Discover how thoughtful design can transform your daily routine into a luxurious ritual.',
    image: '/journal-art-design.jpg',
    date: 'January 15, 2025'
  },
  {
    id: 2,
    slug: 'sustainable-luxury-future',
    title: 'Sustainable Luxury: The Future of Home Wellness',
    excerpt: 'Learn how eco-friendly materials are revolutionizing the luxury home industry.',
    image: '/journal-sustainable.jpg',
    date: 'January 10, 2025'
  },
  {
    id: 3,
    slug: 'water-conservation-comfort',
    title: 'Water Conservation Without Compromising Comfort',
    excerpt: 'Explore innovative showerhead technology that saves water while delivering ultimate comfort.',
    image: '/journal-water.jpg',
    date: 'January 5, 2025'
  },
  {
    id: 4,
    slug: 'brass-fixtures-timeless',
    title: 'Brass Fixtures: Timeless Elegance',
    excerpt: 'A deep dive into why brass remains the material of choice for luxury fixtures.',
    image: '/journal-brass.jpg',
    date: 'December 28, 2024'
  },
  {
    id: 5,
    slug: 'bathroom-sanctuary',
    title: 'Creating Your Perfect Bathroom Sanctuary',
    excerpt: 'Tips and tricks from our design experts on creating a spa-like atmosphere at home.',
    image: '/journal-sanctuary.jpg',
    date: 'December 20, 2024'
  },
  {
    id: 6,
    slug: 'psychology-of-color',
    title: 'The Psychology of Color in Bathroom Design',
    excerpt: 'Understand how colors influence mood and how to choose the perfect palette for your space.',
    image: '/journal-color.jpg',
    date: 'December 15, 2024'
  }
]

export default function JournalPage() {
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
              <Link href="/journal" className="text-foreground/80 hover:text-primary transition-colors font-medium">Journal</Link>
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
              Journal
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Stories, insights, and inspiration from the world of luxury home design
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-primary/10">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={article.image || "/placeholder.svg"} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-primary font-medium">{article.date}</p>
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Link href={`/articles/${article.slug}`} className="inline-flex text-primary font-medium hover:text-secondary transition-colors">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Subscribe to Our Journal
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Get the latest design insights and luxury home tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full bg-white border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-full font-medium">
              Subscribe
            </button>
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
