'use client'

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { SectionContainer } from "@/components/ui/section-container"
import { Card } from "@/components/ui/card"

const delwerInterests = [
  {
    category: "Technology Passion",
    description: "Building side projects, contributing to open source",
    icon: "💻",
  },
  {
    category: "Learning",
    description: "Reading technical blogs, experimenting with new frameworks",
    icon: "📚",
  },
  {
    category: "Community",
    description: "Mentoring junior developers, tech meetup organizer",
    icon: "🤝",
  },
  {
    category: "Hobbies",
    description: "Photography, traveling to tech conferences",
    icon: "📷",
  },
]

const habibInterests = [
  {
    category: "Strategy Passion",
    description: "Following startup ecosystems, growth strategy research",
    icon: "📈",
  },
  {
    category: "Community",
    description: "Guest lecturing at universities, startup event speaking",
    icon: "🎯",
  },
  {
    category: "Personal Growth",
    description: "Reading business books, attending strategy conferences",
    icon: "🌱",
  },
  {
    category: "Hobbies",
    description: "Writing about entrepreneurship, podcast listening",
    icon: "✍️",
  },
]

const teamActivities = [
  {
    title: "Learning Together",
    description: "Attending conferences, sharing new discoveries",
    icon: "🎯",
    image: "/images/team/learning-together.jpg",
  },
  {
    title: "Community Building",
    description: "Organizing local developer meetups",
    icon: "🌍",
    image: "/images/team/community-building.jpg",
  },
  {
    title: "Knowledge Sharing",
    description: "Internal presentations, cross-training sessions",
    icon: "💡",
    image: "/images/team/knowledge-sharing.jpg",
  },
  {
    title: "Team Building",
    description: "Quarterly team retreats, project celebration dinners",
    icon: "🎉",
    image: "/images/team/team-building.jpg",
  },
]

const candidMoments = [
  {
    title: "Conference Speaking",
    description: "Sharing knowledge at tech conferences",
    image: "/images/team/conference-speaking.jpg",
  },
  {
    title: "Meetup Organizing",
    description: "Building local developer community",
    image: "/images/team/meetup-organizing.jpg",
  },
  {
    title: "Team Collaboration",
    description: "Working together on challenging projects",
    image: "/images/team/team-collaboration.jpg",
  },
  {
    title: "Learning Sessions",
    description: "Exploring new technologies together",
    image: "/images/team/learning-sessions.jpg",
  },
]

export const TeamOutsideWork = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionContainer background="white" padding="large">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0B]">
            Beyond the Code
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            What drives us outside of work
          </p>
        </motion.div>

        {/* Personal Interests */}
        <div className="space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Delwer's Interests */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
              animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#0A0A0B] mb-4">Delwer's Interests</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#00A8E8] to-[#0077C7] mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {delwerInterests.map((interest, index) => (
                  <motion.div
                    key={interest.category}
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl mt-1">{interest.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#0A0A0B] mb-1">{interest.category}</h4>
                          <p className="text-sm text-[#64748B] leading-relaxed">{interest.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Habib's Interests */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
              animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#0A0A0B] mb-4">Habib's Interests</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] to-[#F59E0B] mx-auto lg:mx-0 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {habibInterests.map((interest, index) => (
                  <motion.div
                    key={interest.category}
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl mt-1">{interest.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#0A0A0B] mb-1">{interest.category}</h4>
                          <p className="text-sm text-[#64748B] leading-relaxed">{interest.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team Activities */}
        <div className="space-y-8">
          <motion.h3 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center"
          >
            What We Do Together
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={`${activity.title} - WebCloudor team activity`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="text-3xl mb-2">{activity.icon}</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-[#0A0A0B] mb-2 group-hover:text-[#00A8E8] transition-colors duration-300">
                      {activity.title}
                    </h4>
                    <p className="text-sm text-[#64748B] leading-relaxed">{activity.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Candid Moments Gallery */}
        <div className="space-y-8">
          <motion.h3 
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-2xl md:text-3xl font-bold text-[#0A0A0B] text-center"
          >
            Candid Moments
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {candidMoments.map((moment, index) => (
              <motion.div
                key={moment.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.6 + (index * 0.1), ease: [0.4, 0, 0.2, 1] }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={moment.image}
                    alt={`${moment.title} - ${moment.description}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="font-bold text-sm mb-1">{moment.title}</h4>
                    <p className="text-xs opacity-90">{moment.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Human Connection Statement */}
        <motion.div 
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
          animate={shouldReduceMotion ? {} : isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 2, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-[#00A8E8]/5 to-[#FFD700]/5 border-none">
            <div className="text-center space-y-6">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00A8E8]"></div>
                <div className="text-3xl">❤️</div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#00A8E8] to-transparent"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0B] leading-tight">
                More Than Just Developers
              </h3>
              
              <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
                We believe great work comes from passionate people who care about more than just 
                code. Our diverse interests and community involvement bring fresh perspectives 
                to every project we tackle.
              </p>
              
              <div className="flex justify-center items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">Real</div>
                  <div className="text-xs text-[#64748B]">People</div>
                </div>
                <div className="w-px h-8 bg-[#E2E8F0]"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">Genuine</div>
                  <div className="text-xs text-[#64748B]">Passion</div>
                </div>
                <div className="w-px h-8 bg-[#E2E8F0]"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00A8E8]">Shared</div>
                  <div className="text-xs text-[#64748B]">Values</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  )
}