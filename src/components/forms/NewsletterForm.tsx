'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from 'sonner'

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(1, 'Name is required').max(100, 'Name too long').optional(),
  interests: z.array(z.string()).optional(),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

const interestOptions = [
  { id: 'web-development', label: 'Web Development' },
  { id: 'ai-integration', label: 'AI Integration' },
  { id: 'mobile-apps', label: 'Mobile Apps' },
  { id: 'e-commerce', label: 'E-commerce' },
  { id: 'automation', label: 'Automation' },
  { id: 'cloud-services', label: 'Cloud Services' },
  { id: 'ui-ux-design', label: 'UI/UX Design' },
  { id: 'seo-marketing', label: 'SEO & Marketing' },
  { id: 'performance-optimization', label: 'Performance' },
  { id: 'security', label: 'Security' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'consulting', label: 'Consulting' },
]

interface NewsletterFormProps {
  variant?: 'default' | 'inline' | 'modal'
  showInterests?: boolean
  showName?: boolean
  placeholder?: string
  buttonText?: string
  className?: string
}

export const NewsletterForm = ({
  variant = 'default',
  showInterests = false,
  showName = false,
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  className = ''
}: NewsletterFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const selectedInterests = watch('interests') || []

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        if (response.status === 409) {
          toast.error('This email is already subscribed to our newsletter.')
        } else {
          throw new Error(result.message || 'Failed to subscribe')
        }
        return
      }

      setIsSuccess(true)
      reset()
      toast.success('Successfully subscribed! Check your email for confirmation.')
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)

    } catch (error: any) {
      console.error('Newsletter subscription error:', error)
      toast.error(error.message || 'Failed to subscribe. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInterestChange = (interestId: string, checked: boolean) => {
    const currentInterests = selectedInterests || []
    let newInterests: string[]

    if (checked) {
      newInterests = [...currentInterests, interestId]
    } else {
      newInterests = currentInterests.filter(id => id !== interestId)
    }

    setValue('interests', newInterests)
  }

  if (isSuccess) {
    return (
      <div className={`flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg ${className}`}>
        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-green-800 dark:text-green-200">
            Welcome to WebCloudor Insider!
          </p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
            Check your email for confirmation
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={`flex gap-2 ${className}`}>
        <div className="flex-1">
          <Input
            type="email"
            placeholder={placeholder}
            {...register('email')}
            className="h-11"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email.message}
            </p>
          )}
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="h-11 px-6"
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Mail className="w-4 h-4 mr-2" />
              {buttonText}
            </>
          )}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 ${className}`}>
      {showName && (
        <div className="space-y-2">
          <Label htmlFor="name">Name (optional)</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            {...register('name')}
          />
          {errors.name && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.name.message}
            </p>
          )}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder={placeholder}
          {...register('email')}
        />
        {errors.email && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.email.message}
          </p>
        )}
      </div>

      {showInterests && (
        <div className="space-y-3">
          <Label>Interests (optional)</Label>
          <div className="grid grid-cols-2 gap-3 max-h-40 overflow-y-auto">
            {interestOptions.map((interest) => (
              <div key={interest.id} className="flex items-center space-x-2">
                <Checkbox
                  id={interest.id}
                  checked={selectedInterests.includes(interest.id)}
                  onCheckedChange={(checked) => 
                    handleInterestChange(interest.id, checked as boolean)
                  }
                />
                <Label 
                  htmlFor={interest.id}
                  className="text-sm font-normal cursor-pointer"
                >
                  {interest.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <Mail className="w-4 h-4 mr-2" />
        )}
        {isSubmitting ? 'Subscribing...' : buttonText}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
      </p>
    </form>
  )
}