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
            placeholder="+1 (555) 123-4567"
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
        <Label>Services You're Interested In (Optional)</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {serviceOptions.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox
                id={service}
                checked={selectedServices.includes(service)}
                onCheckedChange={(checked) => 
                  handleServiceChange(service, checked === true)
                }
              />
              <Label
                htmlFor={service}
                className="text-sm font-normal cursor-pointer"
              >
                {serviceLabels[service]}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your project, timeline, budget, or any questions you have..."
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1B365D] focus:border-transparent resize-none"
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
          className="w-full md:w-auto px-8 py-3 h-auto text-base font-medium"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Sending Message...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>

      {/* Privacy Note */}
      <p className="text-sm text-gray-600">
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy" className="text-[#1B365D] hover:underline">
          Privacy Policy
        </a>
        . We'll never share your information with third parties.
      </p>
    </form>
  )
}