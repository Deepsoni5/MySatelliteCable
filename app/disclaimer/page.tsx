import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Legal disclaimer for ${siteConfig.name} satellite internet services.`,
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Disclaimer</h1>
            <p className="text-lg text-gray-600">Important legal information and service limitations</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>Service Performance</h2>
              <p>
                While {siteConfig.name} strives to provide reliable satellite internet service with speeds up to{" "}
                {siteConfig.maxSpeed}
                and {siteConfig.uptime} uptime, actual performance may vary based on various factors including but not
                limited to:
              </p>
              <ul>
                <li>Geographic location and terrain</li>
                <li>Weather conditions and atmospheric interference</li>
                <li>Network congestion and traffic</li>
                <li>Equipment condition and configuration</li>
                <li>User device capabilities and settings</li>
              </ul>

              <h2>Service Availability</h2>
              <p>
                Service availability is subject to coverage area limitations. Not all locations may be eligible for
                service. Coverage maps are estimates and actual service availability may differ.
              </p>

              <h2>Speed and Data Limitations</h2>
              <ul>
                <li>Advertised speeds are maximum theoretical speeds</li>
                <li>Actual speeds may be lower during peak usage periods</li>
                <li>Fair Access Policy may apply to unlimited data plans</li>
                <li>Network management practices may affect certain types of traffic</li>
              </ul>

              <h2>Weather Dependencies</h2>
              <p>Satellite internet service may be affected by severe weather conditions including:</p>
              <ul>
                <li>Heavy rain, snow, or ice storms</li>
                <li>High winds affecting dish alignment</li>
                <li>Atmospheric disturbances</li>
                <li>Solar interference during certain times of year</li>
              </ul>

              <h2>Equipment and Installation</h2>
              <ul>
                <li>Professional installation is required and included</li>
                <li>Installation may not be possible at all locations</li>
                <li>Additional equipment or modifications may be required</li>
                <li>Customer is responsible for providing suitable installation location</li>
              </ul>

              <h2>Limitation of Warranties</h2>
              <p>
                {siteConfig.name} provides services "as is" and disclaims all warranties, express or implied, including
                but not limited to:
              </p>
              <ul>
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Uninterrupted or error-free service</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages, including but not limited to:
              </p>
              <ul>
                <li>Loss of profits or business opportunities</li>
                <li>Data loss or corruption</li>
                <li>Service interruptions or delays</li>
                <li>Third-party claims or damages</li>
              </ul>

              <h2>Third-Party Services</h2>
              <p>
                Our service may integrate with or provide access to third-party services. We are not responsible for the
                availability, content, or performance of third-party services.
              </p>

              <h2>Regulatory Compliance</h2>
              <p>
                Service is subject to applicable federal, state, and local regulations. Regulatory changes may affect
                service availability, pricing, or features.
              </p>

              <h2>Force Majeure</h2>
              <p>
                {siteConfig.name} shall not be liable for any failure or delay in performance due to circumstances
                beyond our reasonable control, including but not limited to:
              </p>
              <ul>
                <li>Natural disasters or severe weather</li>
                <li>Government actions or regulations</li>
                <li>Labor disputes or strikes</li>
                <li>Equipment failures or satellite malfunctions</li>
                <li>Internet backbone or infrastructure issues</li>
              </ul>

              <h2>Changes to Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our service at any time with
                appropriate notice.
              </p>

              <h2>Contact Information</h2>
              <p>For questions about this disclaimer or our services:</p>
              <ul>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
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
