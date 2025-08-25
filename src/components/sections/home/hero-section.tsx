import { Button } from "@/components/ui"
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
    <section className="relative h-screen max-h-[1000px] min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-24">
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
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 168, 232, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 168, 232, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 20%, black 40%, transparent 70%)'
          }}
        />
        
        {/* Enhanced floating background orbs with better gradients */}
        <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full opacity-30 blur-3xl animate-pulse">
          <div
            className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800"
          />
        </div>
        
        <div className="absolute top-[50%] right-[15%] w-72 h-72 rounded-full opacity-25 blur-3xl animate-pulse">
          <div
            className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400"
            style={{ animationDelay: '3s' }}
          />
        </div>
        
        <div className="absolute top-[20%] right-[5%] w-48 h-48 rounded-full opacity-20 blur-2xl animate-pulse">
          <div
            className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-900"
            style={{ animationDelay: '6s' }}
          />
        </div>
        
        {/* Additional ambient orbs */}
        <div className="absolute bottom-[30%] left-[5%] w-32 h-32 rounded-full opacity-15 blur-xl animate-bounce">
          <div
            className="w-full h-full bg-gradient-to-br from-blue-400 to-transparent"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>
      
      
      {/* Main content container with proper responsive padding */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 xl:gap-20 items-center min-h-[600px]">
          
          {/* Left Column - Content */}
          <HeroAnimationWrapper className="flex flex-col justify-center space-y-6 lg:space-y-8">
            
            {/* Main Headline */}
            <AnimatedContent>
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
                  <span className="block text-gray-900 mb-3 relative">
                    Your next breakthrough,
                    {/* Subtle underline accent */}
                    <div className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80"></div>
                  </span>
                  <span 
                    className="block bg-gradient-to-r from-[#00A8E8] via-[#0077C7] to-[#1B365D] bg-clip-text text-transparent font-extrabold relative"
                    style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    powered by AI-first web
                    {/* Glowing effect behind text */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8]/20 via-[#0077C7]/20 to-[#1B365D]/20 blur-xl -z-10 opacity-50"></div>
                  </span>
                </h1>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-40 animate-bounce"></div>
              </div>
            </AnimatedContent>

            {/* Enhanced Subheadline */}
            <AnimatedContent delay={0.2}>
              <div className="max-w-2xl space-y-4">
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 leading-tight">
                  Ship faster. Convert more. Scale with confidence.
                </p>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium">
                  Modern web solutions that move your business forward with 
                  <span className="inline-block mx-2 px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 rounded-full text-base font-semibold">
                    AI-powered efficiency
                  </span>
                  and proven results.
                </p>
              </div>
            </AnimatedContent>

            {/* Enhanced CTA Buttons */}
            <AnimatedContent delay={0.4} className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-6">
              <PulseButton>
                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-900 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap overflow-hidden">
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-50 blur-lg group-hover:opacity-70 transition-opacity duration-300 -z-10"></div>
                </button>
              </PulseButton>
              
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 whitespace-nowrap overflow-hidden shadow-sm hover:shadow-md">
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View Our Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </button>
            </AnimatedContent>

            {/* Enhanced Trust Indicators */}
            <AnimatedContent delay={0.6} className="pt-8 lg:pt-10">
              <div className="flex flex-wrap gap-6 lg:gap-8">
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  <span className="text-gray-800 font-semibold text-base lg:text-lg group-hover:text-slate-900 transition-colors duration-300">
                    50+ Projects Delivered
                  </span>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.5s'}} />
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  <span className="text-gray-800 font-semibold text-base lg:text-lg group-hover:text-slate-900 transition-colors duration-300">
                    99% On-Time
                  </span>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}} />
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full opacity-30 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  <span className="text-gray-800 font-semibold text-base lg:text-lg group-hover:text-slate-900 transition-colors duration-300">
                    Tier-1/2 Clients Served
                  </span>
                </div>
              </div>
              
              {/* Social proof badges */}
              {/* <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-200/50">
                <span className="text-sm text-gray-700 font-medium">Trusted by teams at:</span>
                <div className="flex items-center gap-4 opacity-60">
                  <div className="h-6 w-16 bg-gradient-to-r from-slate-300 to-slate-400 rounded opacity-50"></div>
                  <div className="h-6 w-20 bg-gradient-to-r from-slate-300 to-slate-400 rounded opacity-40"></div>
                  <div className="h-6 w-14 bg-gradient-to-r from-slate-300 to-slate-400 rounded opacity-30"></div>
                </div>
              </div> */}
            </AnimatedContent>
            
          </HeroAnimationWrapper>

          {/* Right Column - Enhanced Visual Elements */}
          <FloatingVisual className="hidden lg:flex items-center justify-center relative">
            <div className="relative w-full max-w-md">
              
              {/* Main Card */}
              <FloatingCard className="relative z-30 w-full">
                <div 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-2xl border border-white/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                    boxShadow: '0 20px 40px rgba(0, 168, 232, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-[#00A8E8] to-[#0077C7] bg-clip-text text-transparent"
                      style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                      +45%
                    </div>
                    <div className="text-[#64748B] font-medium text-base">conversion uplift</div>
                  </div>
                </div>
              </FloatingCard>

              {/* Secondary Cards */}
              <FloatingCard 
                delay={0.5}
                className="absolute -top-4 -left-8 z-20 w-32"
              >
                <div 
                  className="rounded-xl p-4 lg:p-5 shadow-xl backdrop-blur-sm"
                  style={{ background: 'linear-gradient(135deg, #FFD700, #FF8C00)' }}
                >
                  <div className="text-center text-[#0A0A0B]">
                    <div className="text-xl lg:text-2xl font-bold">3×</div>
                    <div className="text-xs lg:text-sm font-medium">faster deployment</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard
                delay={1}
                className="absolute -bottom-4 -right-8 z-20 w-28"
              >
                <div 
                  className="rounded-xl p-4 lg:p-5 shadow-xl backdrop-blur-sm text-white"
                  style={{ background: 'linear-gradient(135deg, #0077C7, #1B365D)' }}
                >
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold">Zero</div>
                    <div className="text-xs lg:text-sm font-medium">downtime</div>
                  </div>
                </div>
              </FloatingCard>

              {/* Background glow effect */}
              <div 
                className="absolute inset-0 scale-110 rounded-3xl blur-3xl opacity-30 -z-10"
                style={{
                  background: `
                    radial-gradient(ellipse 60% 50% at 40% 40%, rgba(0, 168, 232, 0.4) 0%, transparent 70%),
                    radial-gradient(ellipse 50% 60% at 70% 70%, rgba(255, 215, 0, 0.3) 0%, transparent 70%)
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