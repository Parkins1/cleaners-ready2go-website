import { SEO } from "@/components/seo/SEO";
import JsonLd from "@/components/seo/JsonLd";
import { makeWebPage, makeBreadcrumb } from "@/components/seo/schema";
import { site } from "@/config/site";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy - Cleaners Ready 2 Go"
        description="How Cleaners Ready 2 Go collects, uses, and protects your information in Washington State, including your rights and choices."
      />
      <JsonLd
        data={[
          makeWebPage({
            siteUrl: site.url,
            path: "/privacy",
            title: "Privacy Policy - Cleaners Ready 2 Go",
            description:
              "How Cleaners Ready 2 Go collects, uses, and protects your information in Washington State, including your rights and choices.",
          }),
          makeBreadcrumb([
            { name: "Home", url: `${site.url}/` },
            { name: "Privacy Policy", url: `${site.url}/privacy` },
          ]),
        ]}
      />

      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12">
          <h1 className="text-4xl font-bold text-text mb-xl">Privacy Policy</h1>

          <div className="space-y-8 text-text font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
              <p>
                Cleaners Ready 2 Go (“we,” “us,” “our”) values your privacy. This Privacy Policy explains how we
                collect, use, and share your personal information, with a focus on Washington State laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Scope</h2>
              <p>This Policy applies to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Visitors to our website</li>
                <li>Customers booking cleaning services in Washington State</li>
                <li>Individuals contacting us by phone, text, or email</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Information We Collect</h2>
              <p>We may collect:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact details: Name, phone number, email, service address</li>
                <li>Billing info: Payment card details, billing address</li>
                <li>Service notes: Cleaning preferences, access instructions</li>
                <li>Communications: Feedback, reviews, or questions</li>
                <li>Website usage data: Through cookies and pixels (see Section 11)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Schedule and provide cleaning services</li>
                <li>Process payments and billing</li>
                <li>Respond to questions and requests</li>
                <li>Send reminders and updates about your appointments</li>
                <li>Improve our website and marketing efforts (via analytics tools)</li>
                <li>Send promotional messages when you’ve given consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Health-Related Preferences (My Health, My Data Act)</h2>
              <p>
                We do not typically collect consumer health data (CHD) as defined by Washington law. If you share a
                health-related preference (e.g., “Please avoid bleach”), we will:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Record only the preference itself</li>
                <li>Not document or request your reasoning</li>
                <li>Use it solely to guide service delivery</li>
                <li>Delete it upon your request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Sharing of Information</h2>
              <p>We share data only as needed to run our business:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Service providers: Scheduling, payment processing, communications</li>
                <li>Legal obligations: If required by law, regulation, or court order</li>
              </ul>
              <p className="mt-2">We do not sell your information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Security and Retention</h2>
              <p>
                We use reasonable security measures (encryption, access controls). We retain your data only as long as
                needed for services, legal, or tax obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Data Breach Notification (Washington RCW 19.255.010)</h2>
              <p>
                If your personal information is compromised, we will notify you within 30 days of discovery. If more than
                500 Washington residents are affected, we will also notify the Washington Attorney General’s Office.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Your Rights</h2>
              <p>Washington residents may request:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access to their personal data</li>
                <li>Correction or deletion of data</li>
                <li>Withdrawal of consent for non-essential uses</li>
              </ul>
              <p className="mt-2">We will respond to verified requests within 30 days.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Text Messaging and Phone Communications</h2>
              <p>If you provide your phone number:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>We may send transactional messages (appointment reminders, updates).</li>
                <li>
                  With your explicit consent, we may send marketing texts or calls (e.g., offers, promotions).
                </li>
                <li>Message/data rates may apply.</li>
                <li>You may opt out of promotional messages at any time by replying STOP.</li>
                <li>We do not share your phone number with unrelated third parties for marketing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">11. Website Analytics and Tracking</h2>
              <p>We use tracking tools (e.g., Google Analytics, Meta Pixel) to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Understand how our website is used</li>
                <li>Improve performance and services</li>
                <li>Measure and optimize advertising campaigns</li>
              </ul>
              <p className="mt-2">
                These tools may collect: IP address, pages visited, browser/device type, and referral sources.
              </p>
              <p className="mt-2">You can opt out by:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Adjusting browser settings</li>
                <li>Using ad-blocking tools</li>
                <li>
                  Visiting <a className="underline" href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a> for
                  interest-based advertising opt-outs
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">12. Policy Updates</h2>
              <p>
                We may update this Policy as laws or practices change. Updates will be posted here with a new Effective
                Date. Significant changes may be communicated via email or website notice.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

Privacy.displayName = "Privacy";
