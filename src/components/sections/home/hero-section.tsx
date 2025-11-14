import { Button } from "@/components/ui"
import Link from "next/link"
import { 
  HeroAnimationWrapper, 
  AnimatedContent, 
  PulseButton, 
  FloatingVisual,
  FloatingCard,
  ScrollIndicator
} from "./hero-animation-wrapper"

export const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-[100vh] sm:min-h-[680px] lg:min-h-[700px] max-h-[900px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-24 pb-12 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-8">
      {/* Enhanced multi-layer gradient background with mesh patterns */}
      <div className="absolute inset-0 z-0">
        {/* Animated mesh gradient base */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 20% 40%, rgba(0, 168, 232, 0.15) 0%, transparent 70%),
              radial-gradient(ellipse 100% 70% at 80% 30%, rgba(0, 119, 199, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 90% 60% at 50% 80%, rgba(255, 215, 0, 0.08) 0%, transparent 50%),
              conic-gradient(from 45deg at 30% 70%, rgba(0, 168, 232, 0.1) 0deg, transparent 90deg),
              linear-gradient(135deg, 
                rgba(0, 168, 232, 0.04) 0%, 
                rgba(0, 119, 199, 0.08) 35%, 
                rgba(255, 255, 255, 0.03) 70%,
                rgba(27, 54, 93, 0.06) 100%
              )
            `
          }}
        />
        
        {/* Dynamic grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 sm:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 168, 232, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 168, 232, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 20%, black 40%, transparent 70%)'
          }}
        />
        
        {/* Enhanced floating background orbs with better gradients */}
        <div className="absolute top-[10%] left-[5%] w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 rounded-full opacity-20 sm:opacity-30 blur-2xl sm:blur-3xl animate-pulse">
          <div
            className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800"
          />
        </div>
        
        <div className="absolute top-[50%] right-[10%] sm:right-[15%] w-32 sm:w-48 lg:w-72 h-32 sm:h-48 lg:h-72 rounded-full opacity-15 sm:opacity-25 blur-xl sm:blur-3xl animate-pulse">
          <div
            className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400"
            style={{ animationDelay: '3s' }}
          />
        </div>
        
        <div className="absolute top-[20%] right-[5%] w-24 sm:w-32 lg:w-48 h-24 sm:h-32 lg:h-48 rounded-full opacity-10 sm:opacity-20 blur-xl sm:blur-2xl animate-pulse">
          <div
            className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-900"
            style={{ animationDelay: '6s' }}
          />
        </div>
        
        {/* Additional ambient orbs */}
        <div className="absolute bottom-[30%] left-[5%] w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 rounded-full opacity-10 sm:opacity-15 blur-lg sm:blur-xl animate-bounce">
          <div
            className="w-full h-full bg-gradient-to-br from-blue-400 to-transparent"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>
      

      {/* Main content container with enhanced mobile spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center min-h-[500px] sm:min-h-[480px] lg:min-h-[500px]">
          
          {/* Left Column - Content */}
          <HeroAnimationWrapper className="flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-5">
            
            {/* Results-Focused Headline */}
            <AnimatedContent>
              <div className="relative">
                {/* Expertise Indicator Badge - Mobile Optimized */}
                <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full text-blue-700 font-semibold text-xs sm:text-sm lg:text-base mb-4 sm:mb-5 max-w-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="leading-tight">Modern web solutions that drive business growth</span>
                </div>

                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] sm:leading-[1.1] tracking-tight">
                  <span className="block text-gray-900 mb-3 sm:mb-3 relative">
                    Ship faster, scale better
                    {/* Accent underline */}
                    <div className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-24 sm:w-28 lg:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-80"></div>
                  </span>
                  <span
                    className="block bg-gradient-to-r from-[#00A8E8] via-[#0077C7] to-[#1B365D] bg-clip-text text-transparent font-extrabold relative"
                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    with modern web solutions
                    {/* Glowing effect behind text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8]/20 via-[#0077C7]/20 to-[#1B365D]/20 blur-xl -z-10 opacity-50"></div>
                  </span>
                </h1>
                {/* Success indicators - Hidden on very small screens */}
                <div className="hidden sm:block absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="hidden sm:block absolute top-1/2 -left-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </AnimatedContent>

            {/* Results-Focused Subheadline - Mobile Optimized */}
            <AnimatedContent delay={0.2}>
              <div className="max-w-2xl space-y-3 sm:space-y-4">
                <p className="subheading text-xl xs:text-2xl sm:text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
                  Built for performance, designed for growth
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 font-semibold text-sm sm:text-base">Modern architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 font-semibold text-sm sm:text-base">Conversion-optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 font-semibold text-sm sm:text-base">Enterprise-ready</span>
                  </div>
                </div>
              </div>
            </AnimatedContent>

            {/* Single-Focus CTA - Mobile Optimized */}
            <AnimatedContent delay={0.4} className="hero-cta-buttons pt-5 sm:pt-6">
              <PulseButton>
                <Link href="/contact?source=hero-primary" className="block w-full sm:w-auto">
                  <button className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-2xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 whitespace-nowrap overflow-hidden min-h-[56px] sm:min-h-[72px] touch-manipulation">
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      <span>Start Your Project</span>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-blue-600 opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                  </button>
                </Link>
              </PulseButton>

              {/* Secondary link - Better mobile spacing */}
              <div className="mt-5 sm:mt-4 text-center">
                <Link href="/portfolio?source=hero-secondary" className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-800 underline text-base sm:text-sm font-medium transition-colors min-h-[44px] sm:min-h-0 touch-manipulation">
                  <span>View our work</span>
                  <span>→</span>
                </Link>
              </div>
            </AnimatedContent>

            {/* Results-Focused Trust Indicators - Mobile Optimized */}
            <AnimatedContent delay={0.6} className="pt-5 sm:pt-8">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-gray-700 font-semibold text-xs sm:text-sm">Projects</div>
                </div>

                <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1">99%</div>
                  <div className="text-gray-700 font-semibold text-xs sm:text-sm">On-Time</div>
                </div>

                <div className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1">2-4w</div>
                  <div className="text-gray-700 font-semibold text-xs sm:text-sm">Timeline</div>
                </div>
              </div>

              {/* Quality Assurance - Enhanced Mobile Display */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl shadow-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-blue-800 font-bold text-sm sm:text-sm leading-tight">Free Consultation • Quality Guarantee</span>
                </div>
              </div>
            </AnimatedContent>
            
          </HeroAnimationWrapper>

          {/* Right Column - Enhanced Visual Elements */}
          <FloatingVisual className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Main Technology Card */}
              <FloatingCard className="relative z-30 w-full">
                <div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl border border-white/30"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.95))',
                    boxShadow: '0 25px 50px rgba(0, 168, 232, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="text-center space-y-2">
                    <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Modern Stack</div>
                    <div 
                      className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      Next.js 15
                    </div>
                    <div className="text-[#64748B] font-medium text-sm">React & TypeScript</div>
                    <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-200">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="text-xs text-gray-600 font-medium">Production-ready</div>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* Technology Cards */}
              <FloatingCard 
                delay={0.5}
                className="absolute -top-4 -left-8 z-30 w-36"
              >
                <div 
                  className="rounded-xl p-4 lg:p-5 shadow-xl backdrop-blur-sm"
                  style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
                >
                  <div className="text-center text-white">
                    <div className="text-xl lg:text-2xl font-bold">99.9%</div>
                    <div className="text-xs lg:text-sm font-medium">uptime</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard
                delay={1}
                className="absolute -bottom-4 -right-8 z-30 w-32"
              >
                <div 
                  className="rounded-xl p-4 lg:p-5 shadow-xl backdrop-blur-sm text-white"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #1E40AF)' }}
                >
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold">90</div>
                    <div className="text-xs lg:text-sm font-medium">lighthouse score</div>
                  </div>
                </div>
              </FloatingCard>

              {/* Technology-focused background glow */}
              <div 
                className="absolute inset-0 scale-110 rounded-3xl blur-3xl opacity-30 -z-10"
                style={{
                  background: `
                    radial-gradient(ellipse 60% 50% at 40% 40%, rgba(59, 130, 246, 0.4) 0%, transparent 70%),
                    radial-gradient(ellipse 50% 60% at 70% 70%, rgba(99, 102, 241, 0.3) 0%, transparent 70%)
                  `
                }}
              />
            </div>
          </FloatingVisual>
        </div>
      </div>

      {/* Scroll indicator positioned properly */}
      <ScrollIndicator />
    </section>
  )
}