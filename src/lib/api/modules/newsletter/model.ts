import mongoose, { Document, Schema, Model } from 'mongoose'

export interface INewsletter extends Document {
  email: string
  name?: string
  interests?: string[]
  isActive: boolean
  subscribedAt: Date
  unsubscribedAt?: Date
  lastEmailSent?: Date
  emailCount: number
  source?: string // Where they subscribed from
}

const newsletterSchema = new Schema<INewsletter>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  name: {
    type: String,
    trim: true,
    maxlength: 100
  },
  interests: [{
    type: String,
    enum: [
      'web-development',
      'ai-integration',
      'mobile-apps',
      'e-commerce',
      'automation',
      'cloud-services',
      'ui-ux-design',
      'seo-marketing',
      'performance-optimization',
      'security',
      'analytics',
      'consulting'
    ]
  }],
  isActive: {
    type: Boolean,
    default: true,
    index: true
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  unsubscribedAt: {
    type: Date,
    index: true
  },
  lastEmailSent: {
    type: Date,
    index: true
  },
  emailCount: {
    type: Number,
    default: 0
  },
  source: {
    type: String,
    enum: ['website', 'blog', 'footer', 'popup', 'contact-form', 'manual'],
    default: 'website'
  }
}, {
  timestamps: true
})

// Indexes for performance
newsletterSchema.index({ email: 1 })
newsletterSchema.index({ isActive: 1, subscribedAt: -1 })
newsletterSchema.index({ interests: 1 })

// Methods
newsletterSchema.methods.unsubscribe = function() {
  this.isActive = false
  this.unsubscribedAt = new Date()
  return this.save()
}

newsletterSchema.methods.resubscribe = function() {
  this.isActive = true
  this.subscribedAt = new Date()
  this.unsubscribedAt = undefined
  return this.save()
}

// Static methods
newsletterSchema.statics.getActiveSubscribers = function(interests?: string[]) {
  const query: any = { isActive: true }
  if (interests && interests.length > 0) {
    query.interests = { $in: interests }
  }
  return this.find(query).select('email name interests')
}

newsletterSchema.statics.getStats = function() {
  return this.aggregate([
    {
      $group: {
        _id: null,
        totalSubscribers: { $sum: { $cond: ['$isActive', 1, 0] } },
        totalUnsubscribed: { $sum: { $cond: ['$isActive', 0, 1] } },
        avgEmailCount: { $avg: '$emailCount' },
        recentSubscribers: {
          $sum: {
            $cond: [
              {
                $and: [
                  '$isActive',
                  { $gte: ['$subscribedAt', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)] }
                ]
              },
              1,
              0
            ]
          }
        }
      }
    }
  ])
}

// Middleware
newsletterSchema.pre('save', function(next) {
  if (this.isModified('isActive')) {
    if (!this.isActive && !this.unsubscribedAt) {
      this.unsubscribedAt = new Date()
    } else if (this.isActive && this.unsubscribedAt) {
      this.unsubscribedAt = undefined
      this.subscribedAt = new Date()
    }
  }
  next()
})

// Create model
export const Newsletter: Model<INewsletter> = mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', newsletterSchema)