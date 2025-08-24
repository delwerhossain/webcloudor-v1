import { type Metadata } from "next"
import { PolicyHero } from "@/components/sections/policies/policy-hero"
import { PolicyTableOfContents } from "@/components/sections/policies/policy-table-of-contents"
import { PolicySection } from "@/components/sections/policies/policy-section"

export const metadata: Metadata = {
  title: "Privacy Policy - WebCloudor | Your Privacy Matters",
  description: "Learn how WebCloudor protects your personal information. GDPR and CCPA compliant privacy practices with full transparency about data collection and usage.",
  keywords: "privacy policy, data protection, GDPR compliance, CCPA compliance, personal information, data security",
  openGraph: {
    title: "Privacy Policy - WebCloudor | Your Privacy Matters",
    description: "We're committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data.",
    url: "https://webcloudor.com/privacy-policy",
    siteName: "WebCloudor",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - WebCloudor",
    description: "Committed to protecting your personal information with full transparency.",
  },
  alternates: {
    canonical: "https://webcloudor.com/privacy-policy",
  },
}

const privacySections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-information", title: "How We Use Your Information" },
  { id: "information-sharing", title: "Information Sharing and Disclosure" },
  { id: "data-security", title: "Data Security and Protection" },
  { id: "privacy-rights", title: "Your Privacy Rights and Choices" },
  { id: "cookies-tracking", title: "Cookies and Tracking Technologies" },
  { id: "third-party-services", title: "Third-Party Services and Links" },
  { id: "international-transfers", title: "International Data Transfers" },
  { id: "data-retention", title: "Data Retention" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "policy-changes", title: "Changes to This Privacy Policy" },
  { id: "contact-information", title: "Contact Information" },
]

const PrivacyPolicyPage = () => {
  return (
    <>
      <PolicyHero
        title="Your Privacy Matters"
        subtitle="We're committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data."
        lastUpdated="Last updated: December 15, 2024"
        keyPoints={[
          "We never sell your personal information",
          "You control your data and can request deletion anytime",
          "We only collect what's necessary to serve you better",
          "All data is encrypted and securely stored",
        ]}
      />

      <PolicyTableOfContents sections={privacySections} />

      <PolicySection id="information-we-collect" title="Information We Collect">
        <p>
          WebCloudor ("we," "our," or "us") operates webcloudor.com and provides web development, 
          cloud architecture, and digital strategy services. This Privacy Policy explains how we 
          collect, use, disclose, and safeguard your information when you visit our website, 
          use our services, or interact with us.
        </p>

        <p>
          This policy applies to all information collected through our website, services, 
          communications, and any related applications, sales, marketing, or events.
        </p>

        <h3>Information You Provide Directly</h3>

        <h4>Contact Forms and Communications</h4>
        <ul>
          <li>Full name and email address (required)</li>
          <li>Company name and role (optional)</li>
          <li>Phone number (optional)</li>
          <li>Project details and requirements</li>
          <li>Any additional information you choose to share</li>
        </ul>

        <h4>Consultation Bookings</h4>
        <ul>
          <li>Contact information for scheduling</li>
          <li>Project scope and timeline preferences</li>
          <li>Budget range and business goals</li>
          <li>Meeting preferences and availability</li>
        </ul>

        <h4>Newsletter Subscriptions</h4>
        <ul>
          <li>Email address</li>
          <li>Communication preferences</li>
          <li>Industry and role information (optional)</li>
        </ul>

        <h4>Client Portal Access (Future)</h4>
        <ul>
          <li>Account credentials and authentication data</li>
          <li>Project-related documents and feedback</li>
          <li>Communication history and preferences</li>
        </ul>

        <h3>Information Collected Automatically</h3>

        <h4>Website Analytics</h4>
        <ul>
          <li>IP address and general location</li>
          <li>Browser type and version</li>
          <li>Operating system and device information</li>
          <li>Pages visited and time spent</li>
          <li>Referral sources and search terms</li>
          <li>User interactions and behavior patterns</li>
        </ul>

        <h4>Technical Information</h4>
        <ul>
          <li>Cookies and similar tracking technologies</li>
          <li>Log files and server data</li>
          <li>Error reports and diagnostic information</li>
          <li>Performance and security monitoring data</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="how-we-use-information" 
        title="How We Use Your Information"
        background="gray"
      >
        <h3>Primary Uses</h3>

        <h4>Service Delivery</h4>
        <ul>
          <li>Respond to your inquiries and consultation requests</li>
          <li>Provide web development and digital strategy services</li>
          <li>Communicate about project progress and deliverables</li>
          <li>Process payments and manage billing</li>
        </ul>

        <h4>Business Communication</h4>
        <ul>
          <li>Send project updates and milestone notifications</li>
          <li>Share relevant industry insights and best practices</li>
          <li>Provide technical support and customer service</li>
          <li>Conduct client satisfaction surveys</li>
        </ul>

        <h4>Website Improvement</h4>
        <ul>
          <li>Analyze website usage and performance</li>
          <li>Optimize user experience and content</li>
          <li>Fix technical issues and security vulnerabilities</li>
          <li>Develop new features and services</li>
        </ul>

        <h4>Marketing and Growth (With Consent)</h4>
        <ul>
          <li>Send newsletter with technical insights and case studies</li>
          <li>Share relevant service announcements</li>
          <li>Invite participation in webinars or events</li>
          <li>Conduct market research and feedback collection</li>
        </ul>

        <h3>Legal and Compliance Uses</h3>
        <ul>
          <li>Comply with legal obligations and regulations</li>
          <li>Protect against fraud and security threats</li>
          <li>Enforce our terms of service and agreements</li>
          <li>Respond to legal requests and court orders</li>
        </ul>
      </PolicySection>

      <PolicySection id="information-sharing" title="Information Sharing and Disclosure">
        <h3>We Do NOT Sell Personal Information</h3>
        <p>
          <strong>WebCloudor does not sell, rent, or lease your personal information to third parties. 
          We do not engage in data brokering or share your information for others' marketing purposes.</strong>
        </p>

        <h3>Limited Sharing Scenarios</h3>

        <h4>Service Providers and Partners</h4>
        <ul>
          <li>Email service providers (for communication)</li>
          <li>Analytics platforms (for website performance)</li>
          <li>Calendar and scheduling tools (for consultations)</li>
          <li>Payment processors (for billing, if applicable)</li>
          <li>Cloud hosting providers (for data storage)</li>
        </ul>

        <h4>Legal Requirements</h4>
        <ul>
          <li>Compliance with applicable laws and regulations</li>
          <li>Response to valid legal processes and court orders</li>
          <li>Protection of rights, property, and safety</li>
          <li>Investigation of fraud or security issues</li>
        </ul>

        <h4>Business Transfers (Hypothetical)</h4>
        <ul>
          <li>In the event of merger, acquisition, or sale</li>
          <li>Due diligence processes with confidentiality agreements</li>
          <li>Asset transfers with equivalent privacy protections</li>
        </ul>

        <h3>Third-Party Safeguards</h3>
        <p>All service providers are contractually required to:</p>
        <ul>
          <li>Protect your information with appropriate security measures</li>
          <li>Use your data only for specified purposes</li>
          <li>Delete data when no longer needed</li>
          <li>Comply with applicable privacy laws</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="data-security" 
        title="Data Security and Protection"
        background="gray"
      >
        <h3>Security Measures</h3>

        <h4>Technical Safeguards</h4>
        <ul>
          <li>End-to-end encryption for all data transmission</li>
          <li>Secure hosting with enterprise-grade infrastructure</li>
          <li>Regular security updates and vulnerability assessments</li>
          <li>Multi-factor authentication for admin access</li>
          <li>Automated backup systems with encryption</li>
        </ul>

        <h4>Administrative Safeguards</h4>
        <ul>
          <li>Limited access to personal information on need-to-know basis</li>
          <li>Regular training on privacy and security best practices</li>
          <li>Incident response procedures for data breaches</li>
          <li>Regular audits of data handling practices</li>
        </ul>

        <h4>Physical Safeguards</h4>
        <ul>
          <li>Secure facilities for any physical data storage</li>
          <li>Controlled access to equipment and systems</li>
          <li>Proper disposal of hardware containing personal data</li>
        </ul>

        <h3>Incident Response</h3>
        <p>In the unlikely event of a data security incident:</p>
        <ul>
          <li>We will investigate and contain the incident immediately</li>
          <li>Affected individuals will be notified within 72 hours</li>
          <li>We will work with authorities as required by law</li>
          <li>We will take steps to prevent similar incidents</li>
        </ul>
      </PolicySection>

      <PolicySection id="privacy-rights" title="Your Privacy Rights and Choices">
        <h3>Universal Rights (All Users)</h3>

        <h4>Access and Portability</h4>
        <ul>
          <li>Request a copy of your personal information</li>
          <li>Receive data in a structured, machine-readable format</li>
          <li>Transfer your data to another service provider</li>
        </ul>

        <h4>Correction and Updates</h4>
        <ul>
          <li>Correct inaccurate or incomplete information</li>
          <li>Update your contact preferences anytime</li>
          <li>Modify newsletter and communication settings</li>
        </ul>

        <h4>Deletion and Erasure</h4>
        <ul>
          <li>Request deletion of your personal information</li>
          <li>Remove data that is no longer necessary</li>
          <li>Exercise "right to be forgotten" where applicable</li>
        </ul>

        <h4>Control and Restriction</h4>
        <ul>
          <li>Limit how we process your personal information</li>
          <li>Object to certain uses of your data</li>
          <li>Withdraw consent for optional data processing</li>
        </ul>

        <h3>Enhanced Rights (EU/UK Residents - GDPR)</h3>

        <h4>Additional Protections</h4>
        <ul>
          <li>Right to object to legitimate interest processing</li>
          <li>Right to restrict processing in specific circumstances</li>
          <li>Right to data portability in machine-readable format</li>
          <li>Right to lodge complaints with supervisory authorities</li>
        </ul>

        <h4>Legal Basis for Processing</h4>
        <ul>
          <li><strong>Consent:</strong> Newsletter subscriptions, marketing communications</li>
          <li><strong>Contract:</strong> Service delivery, project management</li>
          <li><strong>Legitimate Interest:</strong> Website analytics, security, business communications</li>
          <li><strong>Legal Obligation:</strong> Tax records, legal compliance</li>
        </ul>

        <h3>California Residents (CCPA)</h3>

        <h4>California-Specific Rights</h4>
        <ul>
          <li>Right to know what personal information is collected</li>
          <li>Right to delete personal information</li>
          <li>Right to opt-out of sale (we don't sell data)</li>
          <li>Right to non-discrimination for exercising privacy rights</li>
        </ul>

        <h3>How to Exercise Your Rights</h3>
        <p>To exercise any of these rights, contact us at:</p>
        <ul>
          <li><strong>Email:</strong> privacy@webcloudor.com</li>
          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
          <li><strong>Mail:</strong> WebCloudor Privacy Team, [Business Address]</li>
        </ul>
        <p>
          We will respond to your request within 30 days and may need to verify 
          your identity to protect your information.
        </p>
      </PolicySection>

      <PolicySection 
        id="cookies-tracking" 
        title="Cookies and Tracking Technologies"
        background="gray"
      >
        <h3>Types of Cookies We Use</h3>

        <h4>Essential Cookies (Always Active)</h4>
        <ul>
          <li>Website functionality and navigation</li>
          <li>Security features and fraud prevention</li>
          <li>Load balancing and performance optimization</li>
          <li>User session management</li>
        </ul>

        <h4>Analytics Cookies (Can Be Disabled)</h4>
        <ul>
          <li>Website usage statistics and performance</li>
          <li>User behavior analysis for improvements</li>
          <li>A/B testing for website optimization</li>
          <li>Error tracking and diagnostic information</li>
        </ul>

        <h4>Marketing Cookies (Opt-in Required)</h4>
        <ul>
          <li>Personalized content recommendations</li>
          <li>Social media integration features</li>
          <li>Conversion tracking for advertising</li>
          <li>Remarketing and audience building</li>
        </ul>

        <h3>Managing Cookie Preferences</h3>
        <p>You can control cookies through:</p>
        <ul>
          <li>Your browser settings (block, delete, or restrict cookies)</li>
          <li>Our cookie preference center (available in website footer)</li>
          <li>Third-party opt-out tools and industry initiatives</li>
          <li>Private browsing modes to prevent cookie storage</li>
        </ul>

        <h3>Third-Party Analytics</h3>
        <h4>Google Analytics</h4>
        <ul>
          <li>Anonymized IP addresses</li>
          <li>Demographics and interests data (opt-in)</li>
          <li>Enhanced e-commerce tracking</li>
          <li>Custom events for user interactions</li>
        </ul>

        <p>
          <strong>Opt-Out Options:</strong> Links to <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out tools</a>
        </p>
      </PolicySection>

      <PolicySection id="third-party-services" title="Third-Party Services and Links">
        <h3>Integrated Services</h3>

        <h4>Calendar Booking (Calendly or similar)</h4>
        <ul>
          <li>Consultation scheduling and availability</li>
          <li>Meeting preferences and time zones</li>
          <li>Integration with email notifications</li>
          <li>Privacy Policy: [Link to third-party policy]</li>
        </ul>

        <h4>Email Services (Nodemailer/Email Provider)</h4>
        <ul>
          <li>Transactional emails and notifications</li>
          <li>Newsletter delivery and management</li>
          <li>Unsubscribe handling and preferences</li>
          <li>Privacy Policy: [Link to third-party policy]</li>
        </ul>

        <h4>Analytics Platform (Google Analytics)</h4>
        <ul>
          <li>Website performance and user behavior</li>
          <li>Traffic sources and conversion tracking</li>
          <li>Demographic insights (anonymized)</li>
          <li>Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's privacy policy</a></li>
        </ul>

        <h3>External Links</h3>
        <p>
          Our website may contain links to third-party websites, services, or resources. 
          These external sites have their own privacy policies and terms of service. 
          We are not responsible for the privacy practices of third-party sites.
        </p>
        <p>
          We encourage you to review the privacy policies of any external sites you visit.
        </p>
      </PolicySection>

      <PolicySection 
        id="international-transfers" 
        title="International Data Transfers"
        background="gray"
      >
        <h3>Data Processing Locations</h3>
        <p>Your personal information may be processed in:</p>
        <ul>
          <li>United States (Primary hosting and operations)</li>
          <li>European Union (CDN and backup systems)</li>
          <li>Other locations where our service providers operate</li>
        </ul>
        <p>All transfers comply with applicable privacy laws and include appropriate safeguards.</p>

        <h3>Safeguards for International Transfers</h3>
        <ul>
          <li>Standard Contractual Clauses (EU-approved)</li>
          <li>Adequacy decisions by privacy authorities</li>
          <li>Privacy Shield or equivalent protections</li>
          <li>Binding corporate rules for multinational processors</li>
        </ul>

        <h3>EU-US Data Transfers</h3>
        <ul>
          <li>Compliance with GDPR requirements</li>
          <li>Use of approved transfer mechanisms</li>
          <li>Regular review of transfer safeguards</li>
          <li>Rights for EU residents to object to transfers</li>
        </ul>
      </PolicySection>

      <PolicySection id="data-retention" title="Data Retention">
        <h3>Retention Periods</h3>

        <h4>Contact Information</h4>
        <ul>
          <li>Active inquiries: Until resolved + 1 year</li>
          <li>Newsletter subscribers: Until unsubscribe + 30 days</li>
          <li>Client contacts: Duration of relationship + 7 years (tax purposes)</li>
        </ul>

        <h4>Website Analytics</h4>
        <ul>
          <li>Individual user data: 26 months (Google Analytics default)</li>
          <li>Aggregated statistics: Indefinitely (anonymized)</li>
          <li>Technical logs: 90 days for security purposes</li>
        </ul>

        <h4>Project Data (Client Work)</h4>
        <ul>
          <li>Active projects: Duration of project + 1 year</li>
          <li>Completed projects: 7 years (business records requirement)</li>
          <li>Testimonials and case studies: With ongoing consent</li>
        </ul>

        <h3>Deletion Practices</h3>
        <p>We automatically delete personal information when:</p>
        <ul>
          <li>The retention period expires</li>
          <li>The purpose for collection no longer exists</li>
          <li>You request deletion (subject to legal requirements)</li>
          <li>We no longer have a lawful basis for processing</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="childrens-privacy" 
        title="Children's Privacy"
        background="gray"
      >
        <h3>Age Restrictions</h3>
        <p>
          WebCloudor's services are intended for businesses and adults aged 18 and older. 
          We do not knowingly collect personal information from children under 18.
        </p>

        <p>
          If we become aware that we have collected information from a child under 18, 
          we will delete that information promptly.
        </p>

        <p>
          Parents or guardians who believe we may have collected information from a child 
          should contact us immediately at privacy@webcloudor.com.
        </p>
      </PolicySection>

      <PolicySection id="policy-changes" title="Changes to This Privacy Policy">
        <h3>Update Process</h3>
        <p>We may update this Privacy Policy periodically to reflect changes in:</p>
        <ul>
          <li>Our business practices and services</li>
          <li>Legal requirements and regulations</li>
          <li>Technology and security improvements</li>
          <li>Industry best practices and standards</li>
        </ul>

        <h3>Notification of Changes</h3>
        <ul>
          <li><strong>Material Changes:</strong> 30-day advance notice via email</li>
          <li><strong>Minor Updates:</strong> Website notification with effective date</li>
          <li><strong>Legal Requirement Changes:</strong> Immediate implementation with notice</li>
        </ul>

        <h3>Version History</h3>
        <ul>
          <li>Current Version: 2.0 (December 15, 2024)</li>
          <li>Previous Version: 1.0 (January 1, 2024)</li>
          <li>[Link to archived versions for transparency]</li>
        </ul>
      </PolicySection>

      <PolicySection id="contact-information" title="Contact Information">
        <h3>Privacy Contact Information</h3>

        <h4>Primary Contact</h4>
        <ul>
          <li><strong>Email:</strong> privacy@webcloudor.com</li>
          <li><strong>Response Time:</strong> Within 5 business days</li>
          <li><strong>Encryption:</strong> PGP key available upon request</li>
        </ul>

        <h4>Postal Address</h4>
        <p>
          WebCloudor Privacy Team<br />
          [Business Address]<br />
          [City, State, ZIP Code]<br />
          [Country]
        </p>

        <h4>Phone Support</h4>
        <ul>
          <li><strong>Number:</strong> +1 (555) 123-4567</li>
          <li><strong>Hours:</strong> Monday-Friday, 9 AM - 5 PM EST</li>
          <li><strong>Languages:</strong> English, [Additional languages if applicable]</li>
        </ul>

        <h3>Supervisory Authorities (EU Residents)</h3>
        <ul>
          <li>Information Commissioner's Office (ICO) - UK</li>
          <li>Commission Nationale de l'Informatique et des Libertés (CNIL) - France</li>
          <li>[Links to relevant supervisory authorities by country]</li>
        </ul>

        <h3>Data Protection Officer</h3>
        <p>
          While not legally required for our size, we have designated a privacy lead:
        </p>
        <ul>
          <li><strong>Name:</strong> [Privacy Lead Name]</li>
          <li><strong>Email:</strong> dpo@webcloudor.com</li>
          <li><strong>Role:</strong> Data Protection and Compliance Lead</li>
        </ul>
      </PolicySection>
    </>
  )
}

export default PrivacyPolicyPage