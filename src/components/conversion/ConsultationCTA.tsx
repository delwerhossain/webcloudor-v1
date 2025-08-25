/**
 * Strategic Consultation CTA Component
 * Optimized for 3-5% conversion rate targeting tier-1/2 clients
 */

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Zap,
  Shield,
  Rocket
} from 'lucide-react'
import Link from 'next/link'

type CTAVariant = 'primary' | 'secondary' | 'minimal' | 'floating'
type CTAContext = 'homepage' | 'services' | 'portfolio' | 'blog' | 'about'

interface ConsultationCTAProps {
  variant?: CTAVariant
  context?: CTAContext
  title?: string
  subtitle?: string
  showBenefits?: boolean
  showUrgency?: boolean
  className?: string
}

export const ConsultationCTA = ({
  variant = 'primary',
  context = 'homepage',
  title,
  subtitle,
  showBenefits = true,
  showUrgency = true,
  className = ''
}: ConsultationCTAProps) => {
  const [isHovered, setIsHovered] = useState(false)

  // Context-specific copy optimization
  const ctaContent = {
    homepage: {
      title: title || 'Ready to Ship Faster?',
      subtitle: subtitle || 'Get a free 30-minute strategy consultation with our founders. No pitch, just actionable insights for your project.',
      urgency: 'Only 3 consultation slots available this week',
      benefits: [
        'Direct founder involvement from day one',
        'Technical architecture review',
        'Project timeline & cost estimate',
        'Technology stack recommendations'
      ]
    },
    services: {
      title: title || 'Discuss Your Project Requirements',
      subtitle: subtitle || 'Book a technical consultation to explore how we can accelerate your development goals.',
      urgency: 'Next available: This Thursday 2pm EST',
      benefits: [
        'Service-specific strategy session',
        'Custom solution architecture',
        'Resource allocation planning',
        'Risk assessment & mitigation'
      ]
    },
    portfolio: {
      title: title || 'Achieve Similar Results?',
      subtitle: subtitle || 'See how we can replicate this success for your business. Free consultation with case study walkthrough.',
      urgency: 'Limited spots for detailed case reviews',
      benefits: [
        'Case study methodology review',
        'Success metric analysis',
        'Implementation roadmap',
        'Competitive advantage insights'
      ]
    },
    blog: {
      title: title || 'Implement These Strategies?',
      subtitle: subtitle || 'Get personalized guidance on applying these concepts to your specific project.',
      urgency: 'Free implementation consultation',
      benefits: [
        'Article-specific implementation guide',
        'Custom code examples',
        'Best practices checklist',
        'Troubleshooting support'
      ]
    },
    about: {
      title: title || 'Work With Our Team?',
      subtitle: subtitle || 'Meet our founders and discuss how we can help accelerate your project goals.',
      urgency: 'Meet the team behind 50+ successful projects',
      benefits: [
        'Meet founders Delwer & Habib',
        'Team expertise overview',
        'Cultural fit assessment',
        'Collaboration approach discussion'
      ]
    }
  }

  const content = ctaContent[context]

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as any }
    }
  }

  const buttonVariants = {
    rest: { scale: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
    hover: { 
      scale: 1.02, 
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.2 as any }
    }
  }

  const benefitVariants = {
    initial: { opacity: 0, x: -10 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: index * 0.1 }
    })
  }

  if (variant === 'minimal') {
    return (
      <motion.div
        className={`inline-flex items-center gap-3 ${className}`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <Link href="/contact?source=cta-minimal">
          <Button size="sm" className="group">
            <Calendar className="w-4 h-4 mr-2" />
            Book Consultation
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        {showUrgency && (
          <Badge variant="secondary" className="text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {content.urgency}
          </Badge>
        )}
      </motion.div>
    )
  }

  if (variant === 'floating') {
    return (
      <motion.div
        className={`fixed bottom-6 right-6 z-50 max-w-sm ${className}`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <Card className="shadow-2xl border-0 bg-gradient-to-r from-primary to-primary/90">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-sm leading-tight">
                  {content.title}
                </h3>
                <p className="text-white/80 text-xs mt-1 leading-relaxed">
                  Free 30-min consultation
                </p>
                <Link href="/contact?source=cta-floating" className="mt-3 block">
                  <Button size="sm" variant="secondary" className="w-full text-xs">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`w-full ${className}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Card className={`${
        variant === 'primary' 
          ? 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20' 
          : 'bg-gradient-to-br from-background to-muted/20'
      }`}>
        <CardContent className="p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="text-xs px-2 py-1">
                    <Rocket className="w-3 h-3 mr-1" />
                    Free Consultation
                  </Badge>
                  {showUrgency && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      <Clock className="w-3 h-3 mr-1" />
                      Limited Availability
                    </Badge>
                  )}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {content.title}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {content.subtitle}
                </p>
              </div>

              {/* Benefits */}
              {showBenefits && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    What you will get:
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {content.benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        className="flex items-center gap-3"
                        variants={benefitVariants}
                        initial="initial"
                        animate="animate"
                        custom={index}
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 border-2 border-background flex items-center justify-center"
                      >
                        <Users className="w-3 h-3 text-white" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    50+ successful consultations
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="space-y-4">
              <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href={`/contact?source=cta-${context}`}>
                  <motion.div
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    className="w-full"
                  >
                    <Button 
                      size="lg" 
                      className="w-full text-base py-6 group relative overflow-hidden"
                    >
                      <motion.div className="flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>Book Free Consultation</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Urgency */}
              {showUrgency && (
                <AnimatePresence>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center justify-center gap-2 text-sm text-amber-600 bg-amber-50 rounded-lg px-3 py-2">
                      <Zap className="w-4 h-4" />
                      <span className="font-medium">{content.urgency}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {/* Trust Signals */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ConsultationCTA