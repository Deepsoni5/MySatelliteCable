import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Learn how we protect and handle your personal information.`,
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                At {siteConfig.name}, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our satellite internet services.
              </p>

              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <ul>
                <li>Name, address, phone number, and email address</li>
                <li>Payment and billing information</li>
                <li>Service usage data and preferences</li>
                <li>Customer service communications</li>
              </ul>

              <h3>Technical Information</h3>
              <ul>
                <li>IP addresses and device identifiers</li>
                <li>Network usage statistics</li>
                <li>Service performance metrics</li>
                <li>Location data for service provision</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and maintain our satellite internet services</li>
                <li>Process payments and manage your account</li>
                <li>Improve our services and customer experience</li>
                <li>Communicate with you about your service</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>With service providers who assist in our operations</li>
                <li>In connection with a business transfer or merger</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. Our security measures include
                encryption, access controls, and regular security assessments.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of certain communications</li>
                <li>Data portability where applicable</li>
              </ul>

              <h2>Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your experience on our website. You can control
                cookie settings through your browser preferences.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on our website and updating the "Last updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
