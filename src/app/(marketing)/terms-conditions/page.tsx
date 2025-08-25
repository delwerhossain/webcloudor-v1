import { type Metadata } from "next"
import { PolicyHero } from "@/components/sections/policies/policy-hero"
import { PolicyTableOfContents } from "@/components/sections/policies/policy-table-of-contents"
import { PolicySection } from "@/components/sections/policies/policy-section"

export const metadata: Metadata = {
  title: "Terms and Conditions - WebCloudor | Professional Service Agreement",
  description: "Clear terms that protect both parties and ensure successful project outcomes. Professional legal framework for WebCloudor services and website usage.",
  keywords: "terms and conditions, service agreement, legal terms, professional services, web development contract",
  openGraph: {
    title: "Terms and Conditions - WebCloudor | Professional Service Agreement",
    description: "Clear terms that protect both parties and ensure successful project outcomes. Please read these terms carefully before using our services.",
    url: "https://webcloudor.com/terms-conditions",
    siteName: "WebCloudor",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions - WebCloudor",
    description: "Professional service agreement with clear, fair terms.",
  },
  alternates: {
    canonical: "https://webcloudor.com/terms-conditions",
  },
}

const termsSections = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms" },
  { id: "description-of-services", title: "Description of Services" },
  { id: "user-accounts-registration", title: "User Accounts and Registration" },
  { id: "payment-terms-billing", title: "Payment Terms and Billing" },
  { id: "intellectual-property", title: "Intellectual Property Rights" },
  { id: "client-responsibilities", title: "Client Responsibilities and Obligations" },
  { id: "service-delivery", title: "Service Delivery and Timelines" },
  { id: "warranties-disclaimers", title: "Warranties and Disclaimers" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "termination-cancellation", title: "Termination and Cancellation" },
  { id: "dispute-resolution", title: "Dispute Resolution" },
  { id: "modifications-terms", title: "Modifications to Terms" },
  { id: "governing-law", title: "Governing Law and Jurisdiction" },
  { id: "contact-information", title: "Contact Information" },
]

const TermsConditionsPage = () => {
  return (
    <>
      <PolicyHero
        title="Terms and Conditions"
        subtitle="Clear terms that protect both parties and ensure successful project outcomes. Please read these terms carefully before using our services."
        lastUpdated="Effective Date: December 15, 2024"
        keyPoints={[
          "These terms govern all WebCloudor services and website usage",
          "By using our services, you agree to these terms",
          "We're committed to fair, transparent business practices",
          "Questions? Contact legal@webcloudor.com",
        ]}
      />

      <PolicyTableOfContents sections={termsSections} />

      <PolicySection id="acceptance-of-terms" title="Acceptance of Terms">
        <p>
          Welcome to WebCloudor. These Terms and Conditions ("Terms", "Terms and Conditions") 
          govern your use of our website located at webcloudor.com (the "Service") and any 
          services provided by WebCloudor ("us", "we", or "our").
        </p>

        <p>
          By accessing or using our Service, you agree to be bound by these Terms. If you 
          disagree with any part of these terms, then you may not access the Service.
        </p>

        <p>
          These Terms apply to all visitors, users, and others who access or use the Service, 
          including but not limited to clients who engage our professional services.
        </p>

        <h3>Key Points</h3>
        <ul>
          <li>Agreement is binding upon use of services</li>
          <li>Applies to website visitors and service clients</li>
          <li>Regular review and updates may occur</li>
          <li>Contact information provided for questions</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="description-of-services" 
        title="Description of Services"
        background="gray"
      >
        <h3>Our Services Include</h3>

        <h4>Web Development Services</h4>
        <ul>
          <li>Custom website design and development</li>
          <li>Web application development and maintenance</li>
          <li>E-commerce platform development</li>
          <li>Performance optimization and technical auditing</li>
        </ul>

        <h4>Digital Strategy Services</h4>
        <ul>
          <li>User experience design and research</li>
          <li>Conversion rate optimization</li>
          <li>Digital marketing strategy consulting</li>
          <li>Business growth planning and analytics</li>
        </ul>

        <h4>Cloud and Infrastructure Services</h4>
        <ul>
          <li>Cloud architecture design and implementation</li>
          <li>DevOps setup and automation</li>
          <li>Security auditing and implementation</li>
          <li>Scalability planning and optimization</li>
        </ul>

        <h4>Additional Services</h4>
        <ul>
          <li>AI integration and automation development</li>
          <li>Startup consulting and MVP development</li>
          <li>Technical training and team mentoring</li>
          <li>Ongoing maintenance and support</li>
        </ul>

        <h3>Service Limitations</h3>
        <p>
          Our services are provided on a project basis with defined scope and deliverables. 
          Services are subject to availability and may be modified or discontinued with 
          reasonable notice. We reserve the right to refuse service to anyone for any 
          lawful reason.
        </p>

        <p>
          All services are provided remotely unless specifically agreed otherwise. On-site 
          services require separate arrangements and may incur additional costs.
        </p>
      </PolicySection>

      <PolicySection id="user-accounts-registration" title="User Accounts and Registration">
        <h3>Account Requirements</h3>
        <p>
          Some features of our Service may require you to register for an account. You are 
          responsible for safeguarding the password and for maintaining the confidentiality 
          of your account information.
        </p>

        <p>You agree to:</p>
        <ul>
          <li>Provide accurate, current, and complete information during registration</li>
          <li>Maintain and promptly update your account information</li>
          <li>Maintain the security and confidentiality of your account credentials</li>
          <li>Notify us immediately of any unauthorized use of your account</li>
        </ul>

        <h3>Account Responsibilities</h3>
        <ul>
          <li><strong>Password Security:</strong> Use strong, unique passwords</li>
          <li><strong>Information Accuracy:</strong> Keep contact information current</li>
          <li><strong>Authorized Use:</strong> Ensure only authorized personnel access account</li>
          <li><strong>Notification Requirements:</strong> Report security incidents promptly</li>
        </ul>

        <h3>Account Termination</h3>
        <ul>
          <li>We may terminate accounts for violation of these Terms</li>
          <li>You may close your account at any time</li>
          <li>Account closure does not affect existing contractual obligations</li>
          <li>Data retention follows our Privacy Policy guidelines</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="payment-terms-billing" 
        title="Payment Terms and Billing"
        background="gray"
      >
        <h3>Payment Structure</h3>

        <h4>Project-Based Services</h4>
        <ul>
          <li>Fixed-price quotes provided before work begins</li>
          <li>Payment typically structured around project milestones</li>
          <li>Standard structure: 50% deposit, 50% upon completion</li>
          <li>Larger projects may use milestone-based payment schedule</li>
        </ul>

        <h4>Ongoing Services</h4>
        <ul>
          <li>Monthly retainer fees for maintenance and support</li>
          <li>Invoiced monthly in advance</li>
          <li>30-day payment terms from invoice date</li>
          <li>Automatic renewal unless terminated with notice</li>
        </ul>

        <h4>Consultation Services</h4>
        <ul>
          <li>Initial consultations typically provided free</li>
          <li>Extended consulting billed hourly or as agreed</li>
          <li>Time tracked and documented transparently</li>
          <li>Invoiced monthly for ongoing consulting</li>
        </ul>

        <h3>Payment Terms</h3>
        <h4>Payment Terms:</h4>
        <ul>
          <li>Invoices are due within 30 days of invoice date</li>
          <li>Late payments subject to 1.5% monthly service charge</li>
          <li>Work may be suspended for accounts over 60 days past due</li>
          <li>Client responsible for all collection costs and legal fees</li>
        </ul>

        <h4>Accepted Payment Methods:</h4>
        <ul>
          <li>Bank transfer (preferred for large amounts)</li>
          <li>Credit card (processing fees may apply)</li>
          <li>Check (US clients only, requires approval)</li>
          <li>Cryptocurrency (Bitcoin, Ethereum - by arrangement)</li>
        </ul>

        <h3>Refund Policy</h3>
        <ul>
          <li><strong>Deposit Refunds:</strong> Available before work begins, subject to cancellation terms</li>
          <li><strong>Milestone Refunds:</strong> Pro-rated based on completed work</li>
          <li><strong>Satisfaction Guarantee:</strong> We work until you're satisfied with deliverables</li>
          <li><strong>Dispute Resolution:</strong> Good faith effort to resolve payment disputes</li>
        </ul>

        <h3>Price Changes</h3>
        <ul>
          <li>Project prices fixed once agreed and signed</li>
          <li>Retainer rates may change with 60-day notice</li>
          <li>Additional work outside scope billed separately</li>
          <li>Emergency or rush work may incur premium rates</li>
        </ul>
      </PolicySection>

      <PolicySection id="intellectual-property" title="Intellectual Property Rights">
        <h3>Our Intellectual Property</h3>
        <p>
          The Service and its original content, features, and functionality are and will 
          remain the exclusive property of WebCloudor and its licensors. The Service is 
          protected by copyright, trademark, and other laws. Our trademarks may not be 
          used without our prior written consent.
        </p>

        <h4>Protected Materials:</h4>
        <ul>
          <li>Website design, code, and content</li>
          <li>Proprietary methodologies and processes</li>
          <li>Training materials and documentation</li>
          <li>Marketing materials and case studies</li>
        </ul>

        <h3>Client Intellectual Property</h3>
        <p>Upon full payment for services, clients receive:</p>
        <ul>
          <li>Full ownership of custom code developed specifically for their project</li>
          <li>Rights to use all deliverables for their business purposes</li>
          <li>Source code and documentation for ongoing maintenance</li>
          <li>License to modify and extend the delivered work</li>
        </ul>

        <h4>Client Ownership Includes:</h4>
        <ul>
          <li>Custom website code and designs</li>
          <li>Content management systems and databases</li>
          <li>Documentation and training materials</li>
          <li>Project-specific assets and resources</li>
        </ul>

        <h3>Third-Party Components</h3>
        <ul>
          <li>Open source components remain under their respective licenses</li>
          <li>Premium plugins or themes licensed separately</li>
          <li>Stock photos and assets require appropriate licensing</li>
          <li>Third-party integrations subject to their terms of service</li>
        </ul>

        <h3>Work-for-Hire Provisions</h3>
        <p>
          All work performed by WebCloudor for clients is considered "work for hire" under 
          applicable copyright law. Upon full payment, all rights, title, and interest in 
          custom developed work transfer to the client.
        </p>

        <p>This excludes:</p>
        <ul>
          <li>Pre-existing WebCloudor intellectual property</li>
          <li>General methodologies and business processes</li>
          <li>Reusable code libraries and frameworks</li>
          <li>Knowledge and experience gained during the project</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="client-responsibilities" 
        title="Client Responsibilities and Obligations"
        background="gray"
      >
        <h3>Information and Access</h3>
        <p>Clients agree to provide:</p>
        <ul>
          <li>Timely access to necessary systems and accounts</li>
          <li>Required content, images, and brand materials</li>
          <li>Clear feedback and approval within agreed timeframes</li>
          <li>Access to key stakeholders for decision-making</li>
        </ul>

        <h3>Content Responsibilities</h3>
        <ul>
          <li><strong>Content Accuracy:</strong> Client responsible for accuracy of provided content</li>
          <li><strong>Copyright Compliance:</strong> Client warrants they own rights to provided materials</li>
          <li><strong>Content Updates:</strong> Client responsible for ongoing content maintenance</li>
          <li><strong>Legal Compliance:</strong> Content must comply with applicable laws and regulations</li>
        </ul>

        <h3>Cooperation Requirements</h3>
        <ul>
          <li><strong>Response Times:</strong> Respond to requests within agreed timeframes</li>
          <li><strong>Decision Making:</strong> Provide clear, timely decisions on project elements</li>
          <li><strong>Testing Participation:</strong> Participate in testing and feedback processes</li>
          <li><strong>Launch Coordination:</strong> Coordinate launch timing and requirements</li>
        </ul>

        <h3>Technical Cooperation</h3>
        <p>For technical projects, clients agree to:</p>
        <ul>
          <li>Provide necessary technical access and credentials</li>
          <li>Coordinate with internal IT teams as required</li>
          <li>Test deliverables thoroughly in their environment</li>
          <li>Follow recommended maintenance and security practices</li>
        </ul>
      </PolicySection>

      <PolicySection id="service-delivery" title="Service Delivery and Timelines">
        <h3>Timeline Commitments</h3>
        <p>Project timelines are estimates based on:</p>
        <ul>
          <li>Agreed project scope and requirements</li>
          <li>Timely client feedback and approvals</li>
          <li>No significant scope changes during development</li>
          <li>Availability of required third-party services</li>
        </ul>

        <p>Delays may occur due to:</p>
        <ul>
          <li>Client feedback cycles and change requests</li>
          <li>Third-party service limitations or outages</li>
          <li>Force majeure events or circumstances beyond our control</li>
          <li>Discovery of technical issues requiring additional work</li>
        </ul>

        <h3>Delivery Process</h3>
        <ul>
          <li><strong>Milestone Reviews:</strong> Regular progress reviews and approvals</li>
          <li><strong>Feedback Integration:</strong> Structured process for incorporating feedback</li>
          <li><strong>Testing Phases:</strong> Comprehensive testing before final delivery</li>
          <li><strong>Launch Support:</strong> Support during launch and initial operation</li>
        </ul>

        <h3>Scope Change Management</h3>
        <ul>
          <li>Changes to agreed scope documented and priced separately</li>
          <li>Minor changes included within reasonable limits</li>
          <li>Major changes require written approval and timeline adjustment</li>
          <li>Emergency changes may be implemented with retroactive approval</li>
        </ul>

        <h3>Force Majeure</h3>
        <p>
          WebCloudor is not liable for delays or failure to perform due to circumstances 
          beyond our reasonable control, including but not limited to natural disasters, 
          government actions, war, terrorism, labor disputes, or widespread technology 
          outages.
        </p>

        <p>In such events, we will:</p>
        <ul>
          <li>Notify clients promptly of the situation</li>
          <li>Provide regular updates on expected resolution</li>
          <li>Resume services as soon as reasonably possible</li>
          <li>Adjust timelines fairly to account for delays</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="warranties-disclaimers" 
        title="Warranties and Disclaimers"
        background="gray"
      >
        <h3>Service Warranties</h3>
        <p>WebCloudor warrants that:</p>
        <ul>
          <li>Services will be performed with professional skill and care</li>
          <li>Deliverables will substantially conform to agreed specifications</li>
          <li>We have the right and authority to enter into this agreement</li>
          <li>Our work will not infringe on third-party intellectual property rights</li>
        </ul>

        <h3>Technical Warranties</h3>
        <ul>
          <li><strong>Code Quality:</strong> Code written to industry standards</li>
          <li><strong>Security Practices:</strong> Implementation of standard security measures</li>
          <li><strong>Performance Standards:</strong> Reasonable performance for intended use</li>
          <li><strong>Compatibility:</strong> Compatibility with specified browsers and devices</li>
        </ul>

        <h3>Warranty Limitations</h3>
        <h4>WARRANTIES ARE LIMITED TO:</h4>
        <ul>
          <li>90-day warranty on technical defects in delivered code</li>
          <li>30-day warranty on configuration and setup issues</li>
          <li>Correction of any work that does not meet agreed specifications</li>
          <li>Resolution of security vulnerabilities in our custom code</li>
        </ul>

        <h4>WARRANTIES DO NOT COVER:</h4>
        <ul>
          <li>Third-party software or services</li>
          <li>Issues caused by client modifications or misuse</li>
          <li>Performance issues due to hosting or infrastructure choices</li>
          <li>Compatibility with future browser or technology changes</li>
        </ul>

        <h3>Disclaimer of Other Warranties</h3>
        <p>
          <strong>EXCEPT AS EXPRESSLY SET FORTH ABOVE, THE SERVICE IS PROVIDED ON AN "AS IS" 
          AND "AS AVAILABLE" BASIS. WEBCLOUDOR MAKES NO OTHER WARRANTIES, EXPRESS OR 
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, 
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</strong>
        </p>
      </PolicySection>

      <PolicySection id="limitation-liability" title="Limitation of Liability">
        <h3>Liability Caps</h3>
        <p>
          <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WEBCLOUDOR'S TOTAL LIABILITY FOR ANY 
          CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT 
          EXCEED THE TOTAL AMOUNT PAID BY CLIENT TO WEBCLOUDOR IN THE 12 MONTHS 
          PRECEDING THE CLAIM.</strong>
        </p>

        <h3>Excluded Damages</h3>
        <p><strong>IN NO EVENT SHALL WEBCLOUDOR BE LIABLE FOR:</strong></p>
        <ul>
          <li>Indirect, incidental, special, consequential, or punitive damages</li>
          <li>Loss of profits, revenue, data, or use</li>
          <li>Cost of replacement goods or services</li>
          <li>Business interruption or loss of business opportunities</li>
          <li>Damage to reputation or loss of goodwill</li>
        </ul>

        <h3>Exceptions to Limitations</h3>
        <p>Liability limitations do not apply to:</p>
        <ul>
          <li>Intentional misconduct or gross negligence</li>
          <li>Breach of confidentiality obligations</li>
          <li>Infringement of intellectual property rights</li>
          <li>Death or personal injury caused by negligence</li>
          <li>Violations that cannot be limited under applicable law</li>
        </ul>

        <h3>Client Mitigation Responsibilities</h3>
        <p>Clients agree to:</p>
        <ul>
          <li>Maintain appropriate backup and disaster recovery procedures</li>
          <li>Test deliverables thoroughly in their own environment</li>
          <li>Implement recommended security and maintenance practices</li>
          <li>Notify WebCloudor promptly of any issues or concerns</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="indemnification" 
        title="Indemnification"
        background="gray"
      >
        <h3>Client Indemnification Obligations</h3>
        <p>
          Client agrees to indemnify, defend, and hold harmless WebCloudor from and against 
          any claims, damages, losses, costs, and expenses (including reasonable attorney 
          fees) arising out of or related to:
        </p>
        <ul>
          <li>Client's use of the delivered services or products</li>
          <li>Content provided by client that infringes third-party rights</li>
          <li>Client's violation of applicable laws or regulations</li>
          <li>Client's breach of these Terms or any service agreement</li>
          <li>Third-party claims related to client's business operations</li>
        </ul>

        <h3>WebCloudor Indemnification</h3>
        <p>
          WebCloudor agrees to indemnify client against claims that our custom-developed 
          work infringes third-party intellectual property rights, provided that:
        </p>
        <ul>
          <li>Client promptly notifies us of any such claims</li>
          <li>We have sole control of the defense and settlement</li>
          <li>Client provides reasonable cooperation in the defense</li>
          <li>Claim relates specifically to our original work product</li>
        </ul>

        <h3>Indemnification Process</h3>
        <ul>
          <li><strong>Prompt Notice:</strong> Party seeking indemnification must provide prompt notice</li>
          <li><strong>Defense Control:</strong> Indemnifying party controls defense and settlement</li>
          <li><strong>Cooperation:</strong> Both parties must cooperate reasonably in defense</li>
          <li><strong>Settlement Approval:</strong> Material settlements require both parties' consent</li>
        </ul>
      </PolicySection>

      <PolicySection id="termination-cancellation" title="Termination and Cancellation">
        <h3>Termination by Client</h3>
        <p>Clients may terminate services:</p>
        <ul>
          <li>For convenience with 30-day written notice</li>
          <li>For cause immediately upon material breach by WebCloudor</li>
          <li>Due to inability to pay (with appropriate notice)</li>
        </ul>

        <p>Upon termination:</p>
        <ul>
          <li>Client pays for all work completed to date</li>
          <li>WebCloudor delivers all completed work products</li>
          <li>Both parties return confidential information</li>
          <li>Ongoing obligations survive termination</li>
        </ul>

        <h3>Termination by WebCloudor</h3>
        <p>WebCloudor may terminate services:</p>
        <ul>
          <li>For non-payment after 60-day notice and opportunity to cure</li>
          <li>For material breach by client after 15-day cure period</li>
          <li>If continuation of services becomes commercially impractical</li>
          <li>For violation of these Terms or applicable laws</li>
        </ul>

        <p>Upon termination:</p>
        <ul>
          <li>Client receives all completed work upon payment</li>
          <li>WebCloudor may retain work until payment is made</li>
          <li>Confidentiality obligations continue</li>
          <li>Client remains liable for all fees earned</li>
        </ul>

        <h3>Effect of Termination</h3>
        <ul>
          <li><strong>Accrued Rights:</strong> Rights and obligations accrued before termination survive</li>
          <li><strong>Payment Obligations:</strong> All outstanding payments become immediately due</li>
          <li><strong>Return of Materials:</strong> Both parties return confidential materials</li>
          <li><strong>Continued Obligations:</strong> IP, confidentiality, and indemnification survive</li>
        </ul>

        <h3>Post-Termination Services</h3>
        <p>After termination, WebCloudor may provide:</p>
        <ul>
          <li>Limited transition assistance (subject to separate agreement)</li>
          <li>Emergency support for critical issues (at premium rates)</li>
          <li>Documentation and training for smooth transition</li>
          <li>Ongoing maintenance under separate agreement</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="dispute-resolution" 
        title="Dispute Resolution"
        background="gray"
      >
        <h3>Good Faith Resolution</h3>
        <p>Before pursuing formal dispute resolution, parties agree to:</p>
        <ul>
          <li>Discuss the dispute directly and in good faith</li>
          <li>Provide written notice of the dispute with specific details</li>
          <li>Allow 30 days for informal resolution attempts</li>
          <li>Consider mediation by a mutually acceptable mediator</li>
        </ul>

        <h3>Mediation Process</h3>
        <ul>
          <li><strong>Neutral Mediator:</strong> Selection by mutual agreement</li>
          <li><strong>Cost Sharing:</strong> Mediation costs shared equally</li>
          <li><strong>Time Limit:</strong> Mediation process limited to 60 days</li>
          <li><strong>Confidentiality:</strong> Mediation discussions remain confidential</li>
        </ul>

        <h3>Binding Arbitration</h3>
        <p>If mediation fails, disputes shall be resolved by binding arbitration:</p>
        <ul>
          <li>Administered by the American Arbitration Association</li>
          <li>Conducted under AAA Commercial Arbitration Rules</li>
          <li>Single arbitrator selected by mutual agreement</li>
          <li>Location: [City, State where WebCloudor is headquartered]</li>
          <li>Governed by laws of [State] without conflict of laws principles</li>
        </ul>

        <h3>Exceptions to Arbitration</h3>
        <p>The following disputes are excluded from arbitration:</p>
        <ul>
          <li>Intellectual property infringement claims</li>
          <li>Temporary or preliminary injunctive relief</li>
          <li>Small claims court matters under jurisdictional limits</li>
          <li>Collection of undisputed amounts owed</li>
        </ul>

        <h3>Class Action Waiver</h3>
        <p>
          <strong>BOTH PARTIES WAIVE ANY RIGHT TO PURSUE DISPUTES ON A CLASS-ACTION BASIS. 
          ALL DISPUTES MUST BE BROUGHT IN INDIVIDUAL CAPACITY ONLY.</strong>
        </p>
      </PolicySection>

      <PolicySection id="modifications-terms" title="Modifications to Terms">
        <h3>Amendment Process</h3>
        <p>
          WebCloudor reserves the right to modify these Terms at any time. Changes will be 
          effective immediately upon posting on our website unless otherwise specified.
        </p>

        <p>For material changes:</p>
        <ul>
          <li>We will provide 30-day advance notice via email</li>
          <li>Continued use of services constitutes acceptance of changes</li>
          <li>Clients may terminate services if they disagree with changes</li>
          <li>Existing projects continue under original terms unless agreed otherwise</li>
        </ul>

        <h3>Notice of Changes</h3>
        <ul>
          <li><strong>Material Changes:</strong> Email notification to registered users</li>
          <li><strong>Minor Updates:</strong> Website posting with revision date</li>
          <li><strong>Emergency Changes:</strong> Immediate implementation with prompt notice</li>
          <li><strong>Legal Requirement Changes:</strong> Implementation as required by law</li>
        </ul>

        <h3>Version Control</h3>
        <ul>
          <li><strong>Current Version:</strong> Version 2.0 (December 15, 2024)</li>
          <li><strong>Previous Version:</strong> Version 1.0 (January 1, 2024)</li>
          <li><strong>Change Log:</strong> Summary of material changes maintained</li>
          <li><strong>Archived Versions:</strong> Previous versions available upon request</li>
        </ul>
      </PolicySection>

      <PolicySection 
        id="governing-law" 
        title="Governing Law and Jurisdiction"
        background="gray"
      >
        <h3>Applicable Law</h3>
        <p>
          These Terms and any disputes arising hereunder shall be governed by and construed 
          in accordance with the laws of [State], without regard to conflict of law 
          principles.
        </p>

        <p>
          The United Nations Convention on Contracts for the International Sale of Goods 
          does not apply to these Terms.
        </p>

        <h3>Jurisdiction and Venue</h3>
        <ul>
          <li><strong>Exclusive Jurisdiction:</strong> State and federal courts in [County, State]</li>
          <li><strong>Personal Jurisdiction:</strong> Both parties consent to personal jurisdiction</li>
          <li><strong>Venue:</strong> Venue is proper in courts of [County, State]</li>
          <li><strong>Service of Process:</strong> May be served on registered business address</li>
        </ul>

        <h3>International Considerations</h3>
        <p>For international clients:</p>
        <ul>
          <li>These Terms are governed by [State] law regardless of client location</li>
          <li>Disputes resolved through arbitration as specified above</li>
          <li>Currency for all payments is US Dollars unless otherwise agreed</li>
          <li>Compliance with local laws is client's responsibility</li>
        </ul>

        <h3>Miscellaneous Provisions</h3>

        <h4>Entire Agreement</h4>
        <p>
          These Terms, together with our Privacy Policy and any signed service agreements, 
          constitute the entire agreement between the parties and supersede all prior or 
          contemporaneous understandings or agreements, whether written or oral, relating 
          to the subject matter hereof.
        </p>

        <h4>Severability</h4>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid, that provision 
          will be limited or eliminated to the minimum extent necessary so that the remaining 
          Terms will otherwise remain in full force and effect.
        </p>

        <h4>Assignment</h4>
        <ul>
          <li><strong>By WebCloudor:</strong> We may assign these Terms in connection with a merger, acquisition, or sale of business</li>
          <li><strong>By Client:</strong> Clients may not assign without our written consent</li>
          <li><strong>Binding Effect:</strong> Terms bind and benefit permitted successors and assigns</li>
        </ul>

        <h4>Waiver</h4>
        <p>
          No waiver of any term of these Terms will be deemed a further or continuing waiver of 
          such term or any other term, and a party's failure to assert any right or provision 
          under these Terms shall not constitute a waiver of such right or provision.
        </p>
      </PolicySection>

      <PolicySection id="contact-information" title="Contact Information">
        <h3>Legal and Business Contacts</h3>

        <h4>General Legal Inquiries</h4>
        <ul>
          <li><strong>Email:</strong> legal@webcloudor.com</li>
          <li><strong>Response Time:</strong> Within 3 business days</li>
          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
        </ul>

        <h4>Contract and Terms Questions</h4>
        <ul>
          <li><strong>Email:</strong> contracts@webcloudor.com</li>
          <li><strong>Business Hours:</strong> Monday-Friday, 9 AM - 5 PM EST</li>
          <li><strong>Urgent Issues:</strong> Mark email as "URGENT" for priority handling</li>
        </ul>

        <h4>Dispute Resolution Contact</h4>
        <ul>
          <li><strong>Email:</strong> disputes@webcloudor.com</li>
          <li>
            <strong>Postal Address:</strong><br />
            WebCloudor Legal Department<br />
            [Business Address]<br />
            [City, State, ZIP Code]
          </li>
        </ul>

        <h4>Service of Legal Process</h4>
        <p>Legal documents may be served at:</p>
        <p>
          WebCloudor<br />
          Attn: Legal Department<br />
          [Registered Business Address]<br />
          [City, State, ZIP Code]
        </p>
        <p>Or via email to: legal-service@webcloudor.com</p>
      </PolicySection>
    </>
  )
}

export default TermsConditionsPage