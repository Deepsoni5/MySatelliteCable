import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${siteConfig.name} satellite internet services.`,
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using {siteConfig.name} services, you agree to be bound by these Terms and Conditions.
                If you do not agree to these terms, please do not use our services.
              </p>

              <h2>Service Description</h2>
              <p>
                {siteConfig.name} provides satellite internet services with speeds up to {siteConfig.maxSpeed} and{" "}
                {siteConfig.uptime} uptime guarantee. Service availability and performance may vary based on location,
                weather conditions, and network traffic.
              </p>

              <h2>Service Plans and Pricing</h2>
              <ul>
                <li>Service plans are subject to availability in your area</li>
                <li>Pricing is subject to change with 30 days notice</li>
                <li>Installation fees and equipment costs may apply</li>
                <li>Monthly service fees are billed in advance</li>
              </ul>

              <h2>Equipment and Installation</h2>
              <ul>
                <li>Professional installation is required for satellite equipment</li>
                <li>Equipment remains property of {siteConfig.name} during service term</li>
                <li>Customer is responsible for equipment protection and care</li>
                <li>Equipment must be returned upon service termination</li>
              </ul>

              <h2>Acceptable Use Policy</h2>
              <p>You agree not to use our services for:</p>
              <ul>
                <li>Illegal activities or violation of applicable laws</li>
                <li>Transmitting harmful or malicious content</li>
                <li>Interfering with network operations or other users</li>
                <li>Commercial resale without authorization</li>
              </ul>

              <h2>Service Limitations</h2>
              <ul>
                <li>Data speeds may vary based on network conditions</li>
                <li>Weather conditions may affect service quality</li>
                <li>Fair Access Policy may apply to unlimited plans</li>
                <li>Service interruptions may occur for maintenance</li>
              </ul>

              <h2>Payment Terms</h2>
              <ul>
                <li>Monthly fees are due in advance</li>
                <li>Late payment fees may apply after 30 days</li>
                <li>Service may be suspended for non-payment</li>
                <li>Automatic payment enrollment is available</li>
              </ul>

              <h2>Termination</h2>
              <p>
                Either party may terminate service with 30 days written notice. Early termination fees may apply. Upon
                termination, all equipment must be returned in good condition.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                {siteConfig.name} liability is limited to the monthly service fee. We are not liable for indirect,
                incidental, or consequential damages arising from service use or interruption.
              </p>

              <h2>Dispute Resolution</h2>
              <p>
                Disputes will be resolved through binding arbitration in accordance with applicable arbitration rules.
                Class action lawsuits are waived.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms with 30 days notice. Continued use of services constitutes
                acceptance of modified terms.
              </p>

              <h2>Contact Information</h2>
              <p>For questions about these terms, contact us at:</p>
              <ul>
                <li>Email: {siteConfig.email}</li>
                <li>Phone: {siteConfig.phone}</li>
                <li>Address: {siteConfig.address}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
