'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    }))
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      analytics: false,
      marketing: false,
      functional: true,
      timestamp: new Date().toISOString()
    }))
    setShowBanner(false)
  }

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      analytics: false,
      marketing: false,
      functional: true,
      timestamp: new Date().toISOString()
    }))
    setShowBanner(false)
  }

  if (!mounted || !showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/95 via-secondary/95 to-accent/95 backdrop-blur-sm border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex-1 space-y-2">
            <h3 className="text-white font-semibold">Cookie Settings</h3>
            <p className="text-white/80 text-sm">
              We use cookies to enhance your experience, analyze site traffic, and serve personalized content. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences by clicking "Cookie Settings" in the footer.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 whitespace-nowrap">
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full bg-transparent"
              onClick={handleRejectAll}
            >
              Reject All
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full bg-transparent"
              onClick={handleAcceptNecessary}
            >
              Necessary Only
            </Button>
            <Button 
              className="bg-white text-primary hover:bg-white/90 rounded-full font-semibold"
              onClick={handleAcceptAll}
            >
              Accept All
            </Button>
          </div>

          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            aria-label="Close cookie banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
