"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message too long"),
  phone: z.string().optional(),
  company: z.string().max(100, "Company name too long").optional(),
  serviceInterest: z.array(z.string()).optional(),
  source: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  "web-development",
  "ai-integration", 
  "mobile-apps",
  "e-commerce",
  "automation",
  "cloud-services",
  "ui-ux-design",
  "seo-marketing",
  "performance-optimization",
  "security",
  "analytics",
  "consulting"
]

const serviceLabels: Record<string, string> = {
  "web-development": "Web Development",
  "ai-integration": "AI Integration", 
  "mobile-apps": "Mobile Apps",
  "e-commerce": "E-commerce",
  "automation": "Automation",
  "cloud-services": "Cloud Services",
  "ui-ux-design": "UI/UX Design",
  "seo-marketing": "SEO & Marketing",
  "performance-optimization": "Performance Optimization",
  "security": "Security",
  "analytics": "Analytics",
  "consulting": "Consulting"
}

interface ContactFormProps {
  source?: string
  className?: string
}

export const ContactForm = ({ source = "contact-page", className = "" }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      source,
      serviceInterest: [],
    },
  })

  const handleServiceChange = (service: string, checked: boolean) => {
    setSelectedServices(prev => 
      checked 
        ? [...prev, service]
        : prev.filter(s => s !== service)
    )
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          serviceInterest: selectedServices,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong")
      }

      toast.success("Message sent successfully! We'll get back to you soon.")
      reset()
      setSelectedServices([])
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again."
      toast.error(errorMessage)
      console.error("Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      {/* Name & Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            className="h-12"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your@email.com"
            className="h-12"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone & Company Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (Optional)</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+8801571060479"
            className="h-12"
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company (Optional)</Label>
          <Input
            id="company"
            {...register("company")}
            placeholder="Your company name"
            className="h-12"
          />
          {errors.company && (
            <p className="text-sm text-red-600">{errors.company.message}</p>
          )}
        </div>
      </div>

      {/* Services Interest */}
      <div className="space-y-3">
        <Label className="text-sm sm:text-base">Services You&apos;re Interested In (Optional)</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-h-40 sm:max-h-none overflow-y-auto sm:overflow-visible">
          {serviceOptions.map((service) => (
            <div key={service} className="flex items-center space-x-2 p-2 sm:p-0 hover:bg-gray-50 sm:hover:bg-transparent rounded">
              <Checkbox
                id={service}
                checked={selectedServices.includes(service)}
                onCheckedChange={(checked) => 
                  handleServiceChange(service, checked === true)
                }
                className="min-w-[16px] min-h-[16px]"
              />
              <Label
                htmlFor={service}
                className="text-xs sm:text-sm font-normal cursor-pointer leading-tight flex-1"
              >
                {serviceLabels[service]}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your project, timeline, budget, or any questions you have..."
          rows={5}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent resize-none text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium min-h-[48px] touch-manipulation"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              <span className="text-sm sm:text-base">Sending Message...</span>
            </>
          ) : (
            <span className="text-sm sm:text-base">Send Message</span>
          )}
        </Button>
      </div>

      {/* Privacy Note */}
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="text-[#1B365D] hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll never share your information with third parties.
      </p>
    </form>
  )
}