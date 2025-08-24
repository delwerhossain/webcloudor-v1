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
    <section className="relative h-screen max-h-[1000px] min-h-[700px] flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Enhanced multi-layer gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient layer */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 120% 80% at 20% 40%, rgba(0, 168, 232, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 100% 70% at 80% 30%, rgba(0, 119, 199, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 50% 80%, rgba(255, 215, 0, 0.06) 0%, transparent 40%),
              linear-gradient(135deg, 
                rgba(0, 168, 232, 0.03) 0%, 
                rgba(0, 119, 199, 0.06) 35%, 
                rgba(255, 255, 255, 0.02) 70%,
                rgba(27, 54, 93, 0.04) 100%
              )
            `
          }}
        />
        
        {/* Floating background orbs */}
        <div className="absolute top-[15%] left-[15%] w-80 h-80 rounded-full opacity-25 blur-3xl animate-pulse">
          <div
            style={{ 
              background: 'radial-gradient(circle, #00A8E8 0%, #0077C7 70%, transparent 100%)',
              animation: 'float 6s ease-in-out infinite'
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className="absolute top-[60%] right-[20%] w-60 h-60 rounded-full opacity-20 blur-2xl animate-pulse">
          <div
            style={{ 
              background: 'radial-gradient(circle, #FFD700 0%, #FF8C00 70%, transparent 100%)',
              animation: 'float 8s ease-in-out infinite reverse',
              animationDelay: '2s'
            }}
            className="w-full h-full"
          />
        </div>
        
        <div className="absolute top-[25%] right-[10%] w-40 h-40 rounded-full opacity-15 blur-xl animate-pulse">
          <div
            style={{ 
              background: 'radial-gradient(circle, #0077C7 0%, #1B365D 70%, transparent 100%)',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '4s'
            }}
            className="w-full h-full"
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
                <span className="block text-[#0A0A0B] mb-2">Your next breakthrough,</span>
                <span 
                  className="block bg-gradient-to-r from-[#00A8E8] via-[#0077C7] to-[#1B365D] bg-clip-text text-transparent font-extrabold"
                  style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  powered by AI-first web
                </span>
              </h1>
            </AnimatedContent>

            {/* Subheadline */}
            <AnimatedContent delay={0.2}>
              <p className="text-lg sm:text-xl lg:text-2xl text-[#64748B] max-w-2xl leading-relaxed">
                <span className="font-semibold text-[#0077C7] block mb-2">Ship faster. Convert more. Scale with confidence.</span>
                <span className="text-[#64748B]">Modern web solutions that move your business forward.</span>
              </p>
            </AnimatedContent>

            {/* CTA Buttons */}
            <AnimatedContent delay={0.4} className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4">
              <PulseButton>
                <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#0A0A0B] bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Get Free Consultation
                </button>
              </PulseButton>
              
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#00A8E8] bg-transparent border-2 border-[#00A8E8] rounded-xl hover:bg-[#00A8E8] hover:text-white transition-all duration-300 whitespace-nowrap">
                View Our Work
              </button>
            </AnimatedContent>

            {/* Trust Indicators */}
            <AnimatedContent delay={0.6} className="flex flex-wrap gap-6 lg:gap-8 pt-6 lg:pt-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full shadow-sm" />
                <span className="text-[#64748B] font-medium text-sm lg:text-base">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-[#00A8E8] to-[#0077C7] rounded-full shadow-sm" />
                <span className="text-[#64748B] font-medium text-sm lg:text-base">99% On-Time</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-[#0077C7] to-[#1B365D] rounded-full shadow-sm" />
                <span className="text-[#64748B] font-medium text-sm lg:text-base">Tier-1/2 Clients Served</span>
              </div>
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