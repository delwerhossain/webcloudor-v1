import { type Metadata } from "next"
import { PolicyHero } from "@/components/sections/policies/policy-hero"
import { PolicyTableOfContents } from "@/components/sections/policies/policy-table-of-contents"
import { PolicySection } from "@/components/sections/policies/policy-section"

export const metadata: Metadata = {
  title: "Cookie Policy - WebCloudor | Transparent Data Practices",
  description: "Learn about WebCloudor's cookie usage, tracking practices, and your control options. We prioritize transparency and user privacy in all our data collection practices.",
  keywords: "cookie policy, data privacy, tracking, user consent, GDPR compliance, website cookies",
  openGraph: {
    title: "Cookie Policy - WebCloudor | Transparent Data Practices", 
    description: "Learn about our cookie usage and privacy practices. Full transparency on what we track and how you can control your preferences.",
    url: "https://webcloudor.com/cookie-policy",
    siteName: "WebCloudor",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy - WebCloudor",
    description: "Transparent cookie practices and user privacy controls.",
  },
  alternates: {
    canonical: "https://webcloudor.com/cookie-policy",
  },
}

const cookieSections = [
  { id: "what-are-cookies", title: "What Are Cookies?" },
  { id: "how-we-use-cookies", title: "How WebCloudor Uses Cookies" },
  { id: "cookie-categories", title: "Cookie Categories and Controls" },
  { id: "browser-controls", title: "Browser Cookie Controls" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "international-compliance", title: "International Privacy Compliance" },
  { id: "consent-management", title: "Cookie Consent Management" },
  { id: "updates-changes", title: "Updates and Changes" },
  { id: "contact-questions", title: "Contact and Questions" },
]

const CookiePolicyPage = () => {
  return (
    <>
      <PolicyHero
        title="Cookie Policy"
        subtitle="We use cookies to improve your experience on our website. Here's exactly what we track, why we track it, and how you can control your preferences."
        lastUpdated="Last updated: December 15, 2024"
        keyPoints={[
          "You control your cookie preferences",
          "We never use cookies to sell your data",
          "Essential cookies only for basic site functionality",
          "Clear explanations for every cookie type we use",
        ]}
        showControls={true}
        onManagePreferences={() => {
          // Implementation for cookie preference center
          console.log("Manage preferences clicked")
        }}
        onAcceptAll={() => {
          // Implementation for accepting all cookies
          console.log("Accept all clicked")
        }}
        onAcceptEssential={() => {
          // Implementation for accepting only essential cookies
          console.log("Accept essential clicked")
        }}
      />

      <PolicyTableOfContents sections={cookieSections} />

      <PolicySection id="what-are-cookies" title="What Are Cookies?">
        <p>
          Cookies are small text files that websites store on your device when you visit them. 
          Think of them as digital Post-it notes that help websites remember information 
          about your visit, such as your preferences and settings.
        </p>

        <h3>Cookies cannot:</h3>
        <ul>
          <li>Access your personal files or install software</li>
          <li>Contain viruses or malicious code</li>
          <li>Directly identify you as a person</li>
          <li>Access information from other websites</li>
        </ul>

        <h3>Cookies can:</h3>
        <ul>
          <li>Remember your preferences and settings</li>
          <li>Improve website performance and functionality</li>
          <li>Provide analytics about how the website is used</li>
          <li>Enable certain features like forms and shopping carts</li>
        </ul>

        <h3>Types of Cookies by Duration</h3>

        <h4>Session Cookies</h4>
        <ul>
          <li>Temporary cookies that expire when you close your browser</li>
          <li>Used for basic website functionality during your visit</li>
          <li>Automatically deleted when your browsing session ends</li>
          <li>Essential for features like contact forms and navigation</li>
        </ul>

        <h4>Persistent Cookies</h4>
        <ul>
          <li>Stored on your device for a set period of time</li>
          <li>Remember your preferences across multiple visits</li>
          <li>Can be deleted manually or expire automatically</li>
          <li>Used for analytics and user experience improvements</li>
        </ul>

        <h3>Types of Cookies by Source</h3>

        <h4>First-Party Cookies</h4>
        <ul>
          <li>Set directly by WebCloudor for our website functionality</li>
          <li>Used to improve your experience on our site</li>
          <li>Under our direct control and privacy policy</li>
          <li>Generally considered less privacy-invasive</li>
        </ul>

        <h4>Third-Party Cookies</h4>
        <ul>
          <li>Set by external services we use (like analytics platforms)</li>
          <li>Subject to the privacy policies of those third-party services</li>
          <li>Used for analytics, advertising, and social media integration</li>
          <li>Can be blocked separately from first-party cookies</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="how-we-use-cookies" 
        title="How WebCloudor Uses Cookies"
        background="gray"
      >
        <h3>Essential Cookies (Always Active)</h3>
        
        <h4>Website Functionality</h4>
        <p><strong>Purpose:</strong> Enable basic website features and navigation</p>
        <p><strong>Duration:</strong> Session-based (deleted when browser closes)</p>
        <p><strong>Data Collected:</strong> Page navigation, form submissions, error logs</p>
        <p><strong>User Control:</strong> Cannot be disabled (required for website operation)</p>

        <h4>Specific Essential Cookies:</h4>
        <ul>
          <li><strong>PHPSESSID:</strong> PHP session management</li>
          <li><strong>csrf_token:</strong> Security protection for forms</li>
          <li><strong>consent_preferences:</strong> Remember your cookie choices</li>
          <li><strong>language_preference:</strong> Remember your language selection</li>
        </ul>

        <h4>Security and Fraud Prevention</h4>
        <p><strong>Purpose:</strong> Protect website and users from security threats</p>
        <p><strong>Duration:</strong> 24 hours to 30 days</p>
        <p><strong>Data Collected:</strong> IP addresses, suspicious activity patterns</p>
        <p><strong>User Control:</strong> Cannot be disabled (required for security)</p>

        <h3>Analytics Cookies (Can Be Disabled)</h3>

        <h4>Google Analytics</h4>
        <p><strong>Purpose:</strong> Understand website usage patterns and improve user experience</p>
        <p><strong>Duration:</strong> 2 years (configurable)</p>
        <p><strong>Data Collected:</strong> Page views, user interactions, traffic sources, device information</p>
        <p><strong>Third-Party:</strong> Yes (Google Analytics 4)</p>
        <p><strong>Privacy Controls:</strong> IP anonymization enabled, demographics disabled by default</p>

        <h4>Specific Analytics Cookies:</h4>
        <ul>
          <li><strong>_ga:</strong> Distinguishes unique users</li>
          <li><strong>_ga_[ID]:</strong> Used to persist session state</li>
          <li><strong>_gid:</strong> Distinguishes unique users (24-hour expiration)</li>
          <li><strong>_gat:</strong> Used to throttle request rate</li>
        </ul>

        <h4>Custom Analytics</h4>
        <p><strong>Purpose:</strong> Track specific business metrics and conversion goals</p>
        <p><strong>Duration:</strong> 30 days to 1 year</p>
        <p><strong>Data Collected:</strong> Form submissions, consultation requests, page engagement</p>
        <p><strong>User Control:</strong> Can be disabled via cookie preferences</p>

        <h3>Performance Cookies (Can Be Disabled)</h3>

        <h4>Content Delivery Network (CDN)</h4>
        <p><strong>Purpose:</strong> Deliver website content faster by using global servers</p>
        <p><strong>Duration:</strong> 30 days</p>
        <p><strong>Data Collected:</strong> Geographic location (country level), bandwidth usage</p>
        <p><strong>User Control:</strong> Can be disabled (may affect website loading speed)</p>

        <h3>Marketing Cookies (Opt-in Required)</h3>

        <h4>Social Media Integration</h4>
        <p><strong>Purpose:</strong> Enable social sharing and embedded content</p>
        <p><strong>Duration:</strong> Varies by platform (typically 30 days to 2 years)</p>
        <p><strong>Data Collected:</strong> Social media interactions, shared content</p>
        <p><strong>Third-Party:</strong> Yes (LinkedIn, Twitter, YouTube)</p>
        <p><strong>User Control:</strong> Must explicitly opt-in</p>

        <h4>Email Marketing</h4>
        <p><strong>Purpose:</strong> Track email campaign effectiveness and user engagement</p>
        <p><strong>Duration:</strong> 30 days</p>
        <p><strong>Data Collected:</strong> Email opens, link clicks, conversion tracking</p>
        <p><strong>User Control:</strong> Can be disabled; only used for subscribed users</p>
      </PolicySection>

      <PolicySection id="cookie-categories" title="Manage Your Cookie Preferences">
        <p>Control exactly which cookies we can use on your device.</p>

        <h3>Essential Cookies</h3>
        <p><strong>Status:</strong> Always Active (Required)</p>
        <p><strong>Description:</strong> Necessary for basic website functionality and security</p>
        <p><strong>Impact if Disabled:</strong> Website will not function properly</p>
        <p><strong>Examples:</strong> Form submission, page navigation, security protection</p>

        <h3>Analytics and Performance</h3>
        <p><strong>Status:</strong> Enabled by Default (Can be Disabled)</p>
        <p><strong>Description:</strong> Help us understand how visitors use our website</p>
        <p><strong>Impact if Disabled:</strong> We cannot improve user experience based on usage data</p>
        <p><strong>Examples:</strong> Page view tracking, error monitoring, speed optimization</p>

        <h3>Marketing and Advertising</h3>
        <p><strong>Status:</strong> Disabled by Default (Opt-in Required)</p>
        <p><strong>Description:</strong> Used for targeted marketing and social media integration</p>
        <p><strong>Impact if Disabled:</strong> Less relevant content and no social media features</p>
        <p><strong>Examples:</strong> Social sharing buttons, marketing campaign tracking</p>

        <h3>Functionality and Customization</h3>
        <p><strong>Status:</strong> Enabled by Default (Can be Disabled)</p>
        <p><strong>Description:</strong> Remember your preferences and enhance your experience</p>
        <p><strong>Impact if Disabled:</strong> Settings reset on each visit, reduced personalization</p>
        <p><strong>Examples:</strong> Language preference, form auto-fill, theme selection</p>

        <h3>Third-Party Cookie Management</h3>
        <p>
          Some cookies are set by third-party services we use. You can manage these 
          through your browser settings or the following opt-out tools:
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Opt-out Link</a></li>
          <li><strong>Social Media Platforms:</strong> Platform-specific opt-out instructions</li>
          <li><strong>Browser Settings:</strong> Instructions for major browsers</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="browser-controls" 
        title="Browser Cookie Settings"
        background="gray"
      >
        <p>How to manage cookies in popular web browsers</p>

        <h3>Google Chrome</h3>
        <p>To manage cookies in Google Chrome:</p>
        <ol>
          <li>Click the three dots menu in the top-right corner</li>
          <li>Select "Settings"</li>
          <li>Click "Privacy and security" in the left sidebar</li>
          <li>Select "Cookies and other site data"</li>
          <li>Choose your preferred cookie settings</li>
        </ol>

        <h4>Advanced Options:</h4>
        <ul>
          <li>"See all cookies and site data" to view specific cookies</li>
          <li>"Add sites that can always use cookies"</li>
          <li>"Block third-party cookies" for enhanced privacy</li>
        </ul>

        <h3>Mozilla Firefox</h3>
        <p>To manage cookies in Mozilla Firefox:</p>
        <ol>
          <li>Click the menu button (three lines) in the top-right</li>
          <li>Select "Settings"</li>
          <li>Click "Privacy & Security" in the left panel</li>
          <li>Find the "Cookies and Site Data" section</li>
          <li>Choose "Manage Data" to view and delete specific cookies</li>
        </ol>

        <h3>Safari (Mac/iOS)</h3>
        <p>To manage cookies in Safari:</p>
        <ol>
          <li>Open Safari menu and select "Preferences"</li>
          <li>Click the "Privacy" tab</li>
          <li>Choose cookie blocking preferences</li>
          <li>Click "Manage Website Data" for specific control</li>
        </ol>

        <h4>iOS Safari:</h4>
        <ol>
          <li>Go to Settings &gt; Safari</li>
          <li>Scroll to "Privacy & Security"</li>
          <li>Tap "Block All Cookies" or customize settings</li>
        </ol>

        <h3>Microsoft Edge</h3>
        <p>To manage cookies in Microsoft Edge:</p>
        <ol>
          <li>Click the three dots menu</li>
          <li>Select "Settings"</li>
          <li>Click "Cookies and site permissions"</li>
          <li>Select "Cookies and site data"</li>
          <li>Choose your blocking preferences</li>
        </ol>
      </PolicySection>

      <PolicySection id="third-party-services" title="Third-Party Services We Use">
        <p>External tools that may set their own cookies</p>

        <h3>Analytics Services</h3>

        <h4>Google Analytics 4</h4>
        <p><strong>Service Provider:</strong> Google LLC</p>
        <p><strong>Purpose:</strong> Website traffic analysis and user behavior insights</p>
        <p><strong>Data Collected:</strong> Page views, session duration, traffic sources, geographic location</p>
        <p><strong>Cookie Duration:</strong> Up to 2 years</p>
        <p><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></p>
        <p><strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>

        <h4>Google Tag Manager</h4>
        <p><strong>Service Provider:</strong> Google LLC</p>
        <p><strong>Purpose:</strong> Manage tracking codes and analytics tags</p>
        <p><strong>Data Collected:</strong> Tag firing events, custom event tracking</p>
        <p><strong>Cookie Duration:</strong> Varies by implemented tags</p>
        <p><strong>Privacy Controls:</strong> Respects consent management settings</p>

        <h3>Communication Services</h3>

        <h4>Email Service Provider</h4>
        <p><strong>Purpose:</strong> Newsletter delivery and email campaign tracking</p>
        <p><strong>Data Collected:</strong> Email opens, link clicks, unsubscribe requests</p>
        <p><strong>Cookie Duration:</strong> 30 days</p>
        <p><strong>Privacy Controls:</strong> Only active for subscribed users</p>

        <h3>Social Media Integration</h3>

        <h4>LinkedIn Insight Tag</h4>
        <p><strong>Service Provider:</strong> LinkedIn Corporation</p>
        <p><strong>Purpose:</strong> Professional audience analytics and career page promotion</p>
        <p><strong>Data Collected:</strong> Professional demographics, company page interactions</p>
        <p><strong>Cookie Duration:</strong> 90 days</p>
        <p><strong>Privacy Policy:</strong> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/legal/privacy-policy</a></p>
        <p><strong>Opt-out:</strong> LinkedIn account settings or browser controls</p>

        <h4>YouTube Embedded Videos</h4>
        <p><strong>Service Provider:</strong> Google LLC (YouTube)</p>
        <p><strong>Purpose:</strong> Video content delivery and viewing analytics</p>
        <p><strong>Data Collected:</strong> Video interactions, viewing preferences</p>
        <p><strong>Cookie Duration:</strong> Varies (session to 2 years)</p>
        <p><strong>Privacy Enhancement:</strong> YouTube-nocookie domain used when possible</p>
      </PolicySection>

      <PolicySection 
        id="international-compliance" 
        title="International Privacy Compliance"
        background="gray"
      >
        <p>How we respect privacy laws worldwide</p>

        <h3>European Union (GDPR)</h3>

        <h4>Legal Basis for Cookie Processing</h4>
        <p>Under GDPR, we process cookies based on:</p>
        <ul>
          <li><strong>Consent:</strong> For non-essential cookies (analytics, marketing)</li>
          <li><strong>Legitimate Interest:</strong> For security and fraud prevention</li>
          <li><strong>Contract:</strong> For service delivery and client communication</li>
          <li><strong>Legal Obligation:</strong> For compliance and record-keeping requirements</li>
        </ul>

        <h4>EU User Rights</h4>
        <ul>
          <li>Right to withdraw consent at any time</li>
          <li>Right to access cookie data we've collected</li>
          <li>Right to delete cookies and associated data</li>
          <li>Right to data portability for cookie-collected information</li>
        </ul>

        <h4>Consent Management</h4>
        <p>For EU visitors, we:</p>
        <ul>
          <li>Obtain explicit consent before setting non-essential cookies</li>
          <li>Provide granular consent options by cookie category</li>
          <li>Remember consent preferences across visits</li>
          <li>Allow easy withdrawal of consent</li>
        </ul>

        <h3>California (CCPA/CPRA)</h3>

        <h4>California Consumer Privacy Rights</h4>
        <p>California residents have the right to:</p>
        <ul>
          <li>Know what personal information is collected via cookies</li>
          <li>Delete personal information collected through cookies</li>
          <li>Opt-out of "sale" of personal information (we don't sell data)</li>
          <li>Non-discrimination for exercising privacy rights</li>
        </ul>

        <h4>Do Not Sell My Personal Information</h4>
        <p>
          We do not sell personal information collected through cookies. Our third-party 
          analytics and marketing partners process data under service agreements that 
          prohibit sale or unauthorized use of your information.
        </p>
      </PolicySection>

      <PolicySection id="consent-management" title="How We Manage Your Consent">
        <p>Technical implementation of cookie preferences</p>

        <h3>Initial Visit</h3>
        <p>When you first visit our website:</p>
        <ol>
          <li>Essential cookies are set immediately (required for functionality)</li>
          <li>Cookie notice banner appears explaining our cookie use</li>
          <li>You can accept all, reject non-essential, or customize preferences</li>
          <li>Your choice is recorded and respected across all pages</li>
          <li>Consent preference cookie is set to remember your choice</li>
        </ol>

        <h3>Technical Implementation</h3>

        <h4>Consent Storage</h4>
        <ul>
          <li>Consent preferences stored in essential cookie</li>
          <li>Preferences synced across website pages</li>
          <li>Consent timestamp recorded for compliance</li>
          <li>Regular consent refresh (annual re-consent)</li>
        </ul>

        <h4>Cookie Blocking</h4>
        <p>Before consent is obtained:</p>
        <ul>
          <li>Only essential cookies are active</li>
          <li>Analytics and marketing scripts are blocked</li>
          <li>Third-party embeds require consent</li>
          <li>Preference changes take effect immediately</li>
        </ul>

        <h3>Consent Withdrawal</h3>
        <p>Users can withdraw consent by:</p>
        <ul>
          <li>Visiting the preference center anytime</li>
          <li>Clicking "Manage Cookies" in footer</li>
          <li>Clearing browser cookies (triggers re-consent)</li>
          <li>Contacting privacy@webcloudor.com</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="updates-changes" 
        title="Cookie Policy Updates"
        background="gray"
      >
        <p>How we handle changes to our cookie practices</p>

        <h3>When We Update This Policy</h3>
        <p>We may update this Cookie Policy when:</p>
        <ul>
          <li>We add new cookies or tracking technologies</li>
          <li>Third-party services change their cookie practices</li>
          <li>Privacy laws require policy modifications</li>
          <li>We improve our consent management systems</li>
          <li>Business practices change regarding data collection</li>
        </ul>

        <h3>Notification Process</h3>
        
        <h4>For material changes to cookie practices:</h4>
        <ul>
          <li>Email notification to newsletter subscribers (30-day advance notice)</li>
          <li>Website banner notification for all visitors</li>
          <li>Updated "Last Modified" date at top of policy</li>
          <li>Summary of changes provided in clear language</li>
        </ul>

        <h4>For minor updates:</h4>
        <ul>
          <li>Website notification with revision date</li>
          <li>Change summary available upon request</li>
          <li>Continued use implies acceptance of changes</li>
        </ul>

        <h3>Version History</h3>
        <ul>
          <li><strong>Version 2.0:</strong> December 15, 2024 (Current version)</li>
          <li><strong>Version 1.0:</strong> January 1, 2024 (Initial release)</li>
          <li><strong>Change Log:</strong> Available upon request for compliance purposes</li>
        </ul>

        <h3>Re-consent Requirements</h3>
        <p>We may request renewed consent when:</p>
        <ul>
          <li>Material changes affect data collection practices</li>
          <li>New cookie categories are introduced</li>
          <li>Legal requirements mandate fresh consent</li>
          <li>Significant changes to third-party partners occur</li>
        </ul>
      </PolicySection>

      <PolicySection id="contact-questions" title="Questions About Cookies?">
        <p>Contact us for support with privacy and cookie preferences</p>

        <h3>Cookie Support Contacts</h3>

        <h4>General Cookie Questions</h4>
        <ul>
          <li><strong>Email:</strong> cookies@webcloudor.com</li>
          <li><strong>Response Time:</strong> Within 2 business days</li>
          <li><strong>Phone:</strong> +1 (555) 123-4567 (business hours)</li>
        </ul>

        <h4>Technical Support</h4>
        <ul>
          <li><strong>Email:</strong> support@webcloudor.com</li>
          <li><strong>Issues:</strong> Browser compatibility, preference center problems</li>
          <li><strong>Response Time:</strong> Within 24 hours</li>
        </ul>

        <h4>Privacy Officer</h4>
        <ul>
          <li><strong>Email:</strong> privacy@webcloudor.com</li>
          <li><strong>Formal Complaints:</strong> Privacy concerns and consent issues</li>
          <li><strong>Legal Requests:</strong> Data access, deletion, portability requests</li>
        </ul>

        <h3>Postal Address</h3>
        <p>
          WebCloudor Cookie Policy Team<br />
          [Business Address]<br />
          [City, State, ZIP Code]<br />
          [Country]
        </p>

        <h3>Common Questions and Answers</h3>

        <h4>"Can I use your website without cookies?"</h4>
        <p>
          You can use basic website functionality with essential cookies only. However, 
          some features like contact forms, newsletter subscription, and personalized 
          content require additional cookies to function properly.
        </p>

        <h4>"How often should I review my cookie preferences?"</h4>
        <p>
          We recommend reviewing your preferences annually or when you notice changes 
          in website functionality. You can access your preferences anytime through 
          the "Manage Cookies" link in our footer.
        </p>

        <h4>"Do you share cookie data with other companies?"</h4>
        <p>
          We use some third-party services (like Google Analytics) that may receive 
          cookie data, but only as necessary to provide their services. We never sell 
          cookie data or use it for purposes other than improving your website experience.
        </p>
      </PolicySection>
    </>
  )
}

export default CookiePolicyPage