import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Book, Code, Rocket, Users, Search, Filter, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Guides & Tutorials | WebCloudor',
  description: 'Step-by-step guides and tutorials for web development, cloud architecture, and AI integration. Learn from expert developers.',
  keywords: ['tutorials', 'guides', 'web development', 'cloud', 'AI', 'learning'],
  openGraph: {
    title: 'Guides & Tutorials | WebCloudor',
    description: 'Expert guides and tutorials for modern web development',
    type: 'website',
  }
}

const featuredGuides = [
  {
    title: "Building Modern Web Applications",
    description: "Complete guide to building scalable web apps with Next.js and TypeScript",
    category: "Frontend",
    difficulty: "Beginner",
    duration: "45 min",
    rating: 4.9,
    image: "/guides/web-apps.jpg"
  },
  {
    title: "Cloud Architecture Best Practices",
    description: "Design and deploy cloud-native applications on AWS",
    category: "Cloud",
    difficulty: "Advanced",
    duration: "60 min",
    rating: 4.8,
    image: "/guides/cloud.jpg"
  },
  {
    title: "AI Integration in Web Apps",
    description: "Add intelligent features to your applications with modern AI APIs",
    category: "AI/ML",
    difficulty: "Intermediate",
    duration: "30 min",
    rating: 4.7,
    image: "/guides/ai-integration.jpg"
  }
]

const categories = [
  {
    name: "Frontend Development",
    count: 24,
    icon: <Code className="w-5 h-5" />,
    color: "bg-blue-100 text-blue-700"
  },
  {
    name: "Backend & APIs",
    count: 18,
    icon: <Rocket className="w-5 h-5" />,
    color: "bg-green-100 text-green-700"
  },
  {
    name: "Cloud & DevOps",
    count: 15,
    icon: <Users className="w-5 h-5" />,
    color: "bg-purple-100 text-purple-700"
  },
  {
    name: "AI & Machine Learning",
    count: 12,
    icon: <Star className="w-5 h-5" />,
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    name: "Security",
    count: 9,
    icon: <Book className="w-5 h-5" />,
    color: "bg-red-100 text-red-700"
  },
  {
    name: "Performance",
    count: 8,
    icon: <Filter className="w-5 h-5" />,
    color: "bg-orange-100 text-orange-700"
  }
]

const learningPaths = [
  {
    title: "Full Stack Developer",
    description: "Complete path from frontend to backend development",
    courses: 8,
    duration: "6 weeks"
  },
  {
    title: "Cloud Architect",
    description: "Master cloud architecture and DevOps practices",
    courses: 6,
    duration: "4 weeks"
  },
  {
    title: "AI Engineer",
    description: "Learn to integrate AI and ML into web applications",
    courses: 5,
    duration: "3 weeks"
  }
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Guides & Tutorials</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Learn & Build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Together
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Step-by-step guides, tutorials, and best practices from our expert development team. 
              Master modern web development, cloud architecture, and AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Learning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Search className="w-4 h-4 mr-2" />
                Search Guides
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Guides</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hand-picked tutorials covering the most important concepts in modern development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredGuides.map((guide, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{guide.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {guide.rating}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">
                      {guide.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {guide.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {guide.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center text-purple-600 group-hover:text-purple-700 transition-colors">
                      <span className="text-sm font-medium">Start guide</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-600">Find guides tailored to your interests and skill level</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color}`}>
                        {category.icon}
                      </div>
                      <Badge variant="outline">{category.count} guides</Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                      {category.name}
                    </h3>
                    <div className="flex items-center text-purple-600 group-hover:text-purple-700 transition-colors">
                      <span className="text-sm font-medium">Explore guides</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Paths</h2>
              <p className="text-xl text-gray-600">Structured learning journeys for career advancement</p>
            </div>

            <div className="space-y-6">
              {learningPaths.map((path, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                          {path.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{path.description}</p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span>{path.courses} courses</span>
                          <span>•</span>
                          <span>{path.duration}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="group-hover:bg-purple-50 group-hover:border-purple-200 transition-colors">
                        Start Path
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with fellow developers, share your projects, and get help from our expert community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Join Discord Community
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
                  Contact Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}