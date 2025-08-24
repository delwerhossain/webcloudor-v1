'use client'

import { motion } from 'framer-motion'
import { Mail, Sparkles, TrendingUp, Zap, Users, Globe } from 'lucide-react'
import { NewsletterForm } from '@/components/forms/NewsletterForm'

interface NewsletterSectionProps {
  variant?: 'default' | 'minimal' | 'featured'
  className?: string
  showStats?: boolean
}

const stats = [
  { icon: Users, value: '5,000+', label: 'Subscribers' },
  { icon: TrendingUp, value: '95%', label: 'Open Rate' },
  { icon: Globe, value: '40+', label: 'Countries' },
]

const benefits = [
  {
    icon: Zap,
    title: 'Weekly Insights',
    description: 'Latest trends and best practices delivered every Tuesday'
  },
  {
    icon: Sparkles,
    title: 'Exclusive Content',
    description: 'Subscriber-only case studies and behind-the-scenes content'
  },
  {
    icon: TrendingUp,
    title: 'Industry Updates',
    description: 'Early access to new tools, frameworks, and opportunities'
  }
]

export const NewsletterSection = ({ 
  variant = 'default',
  className = '',
  showStats = true 
}: NewsletterSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  if (variant === 'minimal') {
    return (
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-md mx-auto text-center"
          >
            <motion.div variants={itemVariants}>
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest insights delivered to your inbox
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <NewsletterForm variant="inline" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  if (variant === 'featured') {
    return (
      <section className={`relative overflow-hidden py-24 ${className}`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    WebCloudor Insider
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-gray-900 via-gray-900 to-primary dark:from-gray-100 dark:via-gray-100 dark:to-primary bg-clip-text text-transparent">
                      Join the
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 dark:from-primary dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      Elite Circle
                    </span>
                  </h2>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Get exclusive access to cutting-edge web development insights, 
                    AI-first strategies, and insider knowledge that drives real results. 
                    Join thousands of forward-thinking developers and entrepreneurs.
                  </p>
                </motion.div>

                {/* Benefits */}
                <motion.div variants={itemVariants} className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Stats */}
                {showStats && (
                  <motion.div variants={itemVariants} className="flex gap-8 pt-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <stat.icon className="w-5 h-5 text-primary mr-1" />
                          <span className="text-2xl font-bold">{stat.value}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Form */}
              <motion.div variants={itemVariants}>
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-30" />
                  
                  <div className="relative bg-background border border-border rounded-2xl p-8 shadow-xl">
                    <div className="text-center mb-6">
                      <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Subscribe Now</h3>
                      <p className="text-sm text-muted-foreground">
                        Join 5,000+ professionals getting weekly insights
                      </p>
                    </div>
                    
                    <NewsletterForm 
                      showName={true}
                      showInterests={true}
                      buttonText="Join the Circle"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-24 left-8 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 right-16 w-40 h-40 bg-gradient-to-r from-green-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>
    )
  }

  // Default variant
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                <Mail className="w-4 h-4 mr-2" />
                Newsletter
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of the Curve
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get weekly insights on web development, AI integration, and digital transformation 
                strategies that actually work.
              </p>
            </motion.div>
          </div>

          {/* Benefits Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div variants={itemVariants}>
            <div className="max-w-md mx-auto">
              <NewsletterForm variant="inline" buttonText="Subscribe" />
            </div>
            
            {showStats && (
              <div className="flex justify-center gap-12 mt-8 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <stat.icon className="w-4 h-4 text-primary mr-1" />
                      <span className="text-xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}