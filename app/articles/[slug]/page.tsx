'use client'

import Link from 'next/link'

const articles = {
  'art-of-bathroom-design': {
    title: 'The Art of Bathroom Design',
    date: 'January 15, 2025',
    image: '/journal-art-design.jpg',
    content: `Bathroom design is more than just choosing fixtures and tiles. It's about creating a space that speaks to your personal style while maintaining functionality and comfort. At Thepurebath, we believe every bathroom should tell a story.

The art of bathroom design begins with understanding your space. Whether you're working with a small ensuite or a sprawling master bathroom, the principles remain the same: balance, functionality, and aesthetics.

Consider the layout first. The toilet, sink, and shower or bathtub form the essential triangle. Arranging these elements efficiently creates a space that feels natural and easy to navigate. Then comes the selection of materials and colors that will define the atmosphere.

Lighting is another crucial element. Proper lighting can transform a bathroom from ordinary to extraordinary. Consider both task lighting for grooming and ambient lighting for relaxation. Natural light, when available, is invaluable.

Finally, accessories and fixtures bring the design together. Premium fixtures don't just look beautiful—they perform better and last longer. They're an investment in both your home's value and your daily comfort.`
  },
  'sustainable-luxury-future': {
    title: 'Sustainable Luxury: The Future of Home Wellness',
    date: 'January 10, 2025',
    image: '/journal-sustainable.jpg',
    content: `The luxury market is evolving, and sustainability is no longer a niche concern—it's becoming the standard. Today's discerning homeowners want products that are beautiful, functional, AND environmentally responsible.

At Thepurebath, we've made sustainability a core principle. We source materials from responsible suppliers, use renewable resources where possible, and ensure that our manufacturing processes minimize environmental impact.

Eco-friendly luxury is about longevity. When you invest in high-quality, sustainable fixtures, you're not just making an environmental statement—you're making a smart financial decision. These products last decades, reducing the need for replacements and ultimately minimizing waste.

Water conservation is particularly important in the bathroom. Our innovative showerheads and faucets reduce water consumption without sacrificing the luxurious experience. Some of our fixtures can save up to 40% on water usage annually.

The future of luxury is green, and it's here now. By choosing sustainable fixtures, you're not just improving your home—you're contributing to a healthier planet.`
  },
  'water-conservation-comfort': {
    title: 'Water Conservation Without Compromising Comfort',
    date: 'January 5, 2025',
    image: '/journal-water.jpg',
    content: `One of the biggest misconceptions about water-efficient fixtures is that they compromise on performance. This couldn't be further from the truth. Modern water-saving technology delivers the comfort and luxury you expect while reducing environmental impact.

Our Crystal Rain collection is a perfect example. These rainfall showerheads use advanced aeration technology to maintain the sensation of abundant water flow while using significantly less. The result? A luxurious shower experience that uses 40% less water.

The same principle applies to faucets. Precision flow control and aerator technology create a satisfying stream while maintaining efficiency. You never feel like you're compromising.

Water conservation extends beyond the environmental benefit. Lower water consumption means lower water heating costs, which translates to savings on your energy bills. Over time, these savings are substantial.

Smart water usage is smart living. Invest in fixtures that deliver on both comfort and conscience.`
  },
  'brass-fixtures-timeless': {
    title: 'Brass Fixtures: Timeless Elegance',
    date: 'December 28, 2024',
    image: '/journal-brass.jpg',
    content: `Brass has been the material of choice for luxury fixtures for centuries, and for good reason. Its timeless appeal, durability, and natural antimicrobial properties make it an ideal choice for bathrooms.

Our Brass Collection represents the pinnacle of traditional craftsmanship. Each piece is hand-finished by artisans who understand the subtle variations and natural beauty of brass. These aren't mass-produced items—they're individual works of functional art.

Brass develops a beautiful patina over time, adding character and depth. This natural aging process is part of what makes brass special. Your fixtures don't just look beautiful—they become more beautiful as they age.

Durability is another key advantage. Quality brass fixtures can last for generations. They won't corrode, rust, or degrade like lesser materials. This longevity makes them a wise investment for your home.

The versatility of brass is remarkable. It complements both classic and contemporary design aesthetics. Whether your bathroom is minimalist modern or ornate traditional, brass fixtures enhance the space.

Invest in brass. Invest in beauty that stands the test of time.`
  },
  'bathroom-sanctuary': {
    title: 'Creating Your Perfect Bathroom Sanctuary',
    date: 'December 20, 2024',
    image: '/journal-sanctuary.jpg',
    content: `Your bathroom should be more than a functional space—it should be a sanctuary. A place where you can escape daily stress and reconnect with yourself. Creating this atmosphere requires thoughtful design and the right fixtures.

Start with lighting. Soft, warm lighting creates a relaxing ambiance. Consider installing dimmers to adjust the mood. Task lighting near the mirror ensures functionality without compromising aesthetics.

Temperature control is crucial. A heated floor or towel warmer adds luxury and comfort. The feeling of stepping onto a warm floor or wrapping yourself in a warm towel is pure indulgence.

Sound can enhance the sanctuary experience. Some homeowners add subtle water features or speakers for soft music. The right sounds can make a tremendous difference in relaxation.

Materials matter. Natural stone, quality wood, and premium fixtures create a spa-like environment. Avoid harsh, cold materials that feel institutional.

Finally, consider scent. Aromatherapy candles or essential oil diffusers add another sensory dimension to your sanctuary.

Your bathroom sanctuary awaits. Make it yours.`
  },
  'psychology-of-color': {
    title: 'The Psychology of Color in Bathroom Design',
    date: 'December 15, 2024',
    image: '/journal-color.jpg',
    content: `Color influences mood and behavior more than most people realize. In bathroom design, color choices directly impact how you feel in the space. Understanding color psychology can transform your bathroom experience.

Blues and greens are calming colors, perfect for bathrooms designed as relaxation spaces. They evoke feelings of tranquility and are associated with water and nature. These colors work well for spa-like bathrooms.

Warm neutrals like beige, cream, and soft gray create a sophisticated, timeless aesthetic. They're versatile and complement any style. These colors make spaces feel larger and more open.

White is classic and creates a clean, fresh feeling. It works in any bathroom style and makes small spaces feel larger. However, pure white can feel sterile if not balanced with warm tones or natural materials.

For those seeking energy and vitality, warm colors like peach or soft coral add warmth and inviting atmosphere. These colors work well in family bathrooms or spaces where you want to feel energized in the morning.

Earth tones create grounding, natural environments. These colors work beautifully with natural materials like stone and wood, creating cohesive, harmonious spaces.

Remember, lighting affects how colors appear. Test your color choices in different lighting conditions before committing.

Choose colors that reflect your personality and create the mood you desire.`
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Article not found</h1>
          <Link href="/journal" className="inline-block text-primary font-medium hover:text-secondary">
            Back to Journal
          </Link>
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

      {/* Article Hero */}
      <section className="relative h-96 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <img 
          src={article.image || "/placeholder.svg"} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <p className="text-primary/80 font-medium mb-2">{article.date}</p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold">{article.title}</h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 pt-8 border-t border-primary/10">
            <Link href="/journal" className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors">
              ← Back to Journal
            </Link>
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
