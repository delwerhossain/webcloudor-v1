import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui'

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'E-commerce Solutions', href: '/services/ecommerce' },
    { name: 'Cloud Architecture', href: '/services/cloud' },
    { name: 'AI Integration', href: '/services/ai' },
    { name: 'Mobile Apps', href: '/services/mobile' },
    { name: 'DevOps & Deployment', href: '/services/devops' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/portfolio/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/about/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'Guides & Tutorials', href: '/guides' },
    { name: 'Best Practices', href: '/best-practices' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-conditions' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
  ]
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/webcloudor',
    icon: Linkedin,
    color: 'hover:text-[#0077B5]'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/webcloudor',
    icon: Twitter,
    color: 'hover:text-[#1DA1F2]'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/webcloudor',
    icon: Github,
    color: 'hover:text-[#333]'
  }
]

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@webcloudor.com',
    href: 'mailto:hello@webcloudor.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#'
  }
]

const certifications = [
  { name: 'AWS Certified', image: '/certifications/aws.svg' },
  { name: 'Google Cloud', image: '/certifications/gcp.svg' },
  { name: 'Microsoft Azure', image: '/certifications/azure.svg' },
  { name: 'ISO 27001', image: '/certifications/iso.svg' },
]

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1B365D] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #00A8E8, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5 blur-2xl"
          style={{ background: 'radial-gradient(circle, #FFD700, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="pt-16 pb-12 border-b border-white/10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Stay ahead with{' '}
                <span 
                  className="bg-gradient-to-r from-[#00A8E8] to-[#FFD700] bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  cutting-edge insights
                </span>
              </h3>
              <p className="text-lg text-white/80 mb-6">
                Get weekly technical deep-dives, industry trends, and exclusive case studies 
                delivered to your inbox.
              </p>
              <div className="flex items-center space-x-4 text-sm text-white/70">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#00A8E8]" />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#00A8E8]" />
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[#00A8E8]" />
                  <span>3,000+ subscribers</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00A8E8] focus:border-transparent"
                  />
                </div>
                <Button 
                  type="submit"
                  variant="primary"
                  className="w-full group"
                >
                  Subscribe Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-[300px_1fr] gap-12">
          
          {/* Company Info */}
          <div>
            <Link 
              href="/" 
              className="flex items-center space-x-3 mb-6 group"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-[#00A8E8] to-[#0077C7] p-2">
                <Image
                  src="/logo.png"
                  alt="WebCloudor"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white group-hover:text-[#00A8E8] transition-colors">
                  WebCloudor
                </span>
              </div>
            </Link>
            
            <p className="text-white/70 mb-8 leading-relaxed">
              Transforming businesses through innovative web solutions, cloud architecture, 
              and AI-powered applications. Your trusted partner for digital growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact) => (
                <Link
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-3 text-white/70 hover:text-[#00A8E8] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#00A8E8]/10 transition-colors">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50">{contact.label}</div>
                    <div className="font-medium">{contact.value}</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110",
                    social.color
                  )}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#00A8E8] transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#00A8E8] transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#00A8E8] transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Trust */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-[#00A8E8] transition-colors hover:translate-x-1 transform duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Certifications */}
              <div>
                <h5 className="text-sm font-medium text-white/80 mb-4">Certified & Trusted</h5>
                <div className="grid grid-cols-2 gap-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors"
                      title={cert.name}
                    >
                      <div className="w-full h-8 bg-white/10 rounded flex items-center justify-center">
                        <span className="text-xs text-white/60 font-medium">
                          {cert.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
          <div className="mb-4 md:mb-0">
            <p>
              © {currentYear} WebCloudor. All rights reserved. Made with ❤️ in San Francisco.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>All systems operational</span>
            </div>
            <Link 
              href="/status" 
              className="hover:text-white transition-colors"
            >
              Status Page
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}