import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: `Shipping Policy for ${siteConfig.name} equipment and installation services.`,
}

export default function ShippingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Shipping</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
            <p className="text-lg text-gray-600">Equipment delivery and installation information</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>Equipment Shipping</h2>
              <p>
                All {siteConfig.name} satellite equipment is shipped directly to your service address at no additional
                cost. Professional installation is included with all service plans.
              </p>

              <h2>Shipping Timeline</h2>
              <ul>
                <li>Standard shipping: 3-5 business days</li>
                <li>Express shipping: 1-2 business days (additional fees may apply)</li>
                <li>Installation scheduling: Within 7-14 days of equipment delivery</li>
                <li>Remote areas may require additional shipping time</li>
              </ul>

              <h2>What's Included</h2>
              <ul>
                <li>Satellite dish and mounting hardware</li>
                <li>Indoor modem/router unit</li>
                <li>All necessary cables and connectors</li>
                <li>Installation guide and documentation</li>
                <li>Professional installation service</li>
              </ul>

              <h2>Delivery Requirements</h2>
              <ul>
                <li>Adult signature required for equipment delivery</li>
                <li>Delivery to service address only</li>
                <li>Safe and secure location for equipment storage</li>
                <li>Access to installation location on scheduled date</li>
              </ul>

              <h2>Installation Process</h2>
              <p>
                Our certified technicians will contact you within 24-48 hours of equipment delivery to schedule
                installation. Installation typically takes 2-4 hours and includes:
              </p>
              <ul>
                <li>Site survey and optimal dish placement</li>
                <li>Professional mounting and alignment</li>
                <li>Indoor equipment setup and configuration</li>
                <li>Network testing and optimization</li>
                <li>Customer training and support</li>
              </ul>

              <h2>Shipping Restrictions</h2>
              <ul>
                <li>Service available in {siteConfig.countries} countries</li>
                <li>Some remote locations may have extended delivery times</li>
                <li>Weather conditions may affect installation scheduling</li>
                <li>Special access requirements may apply for certain locations</li>
              </ul>

              <h2>Damaged or Missing Items</h2>
              <p>
                If equipment arrives damaged or items are missing, please contact us immediately at {siteConfig.phone}.
                We will arrange for replacement equipment at no additional cost.
              </p>

              <h2>Returns and Exchanges</h2>
              <p>
                Equipment must be returned upon service cancellation. Return shipping labels will be provided. Failure
                to return equipment may result in additional charges.
              </p>

              <h2>Contact Us</h2>
              <p>For shipping questions or to track your equipment delivery:</p>
              <ul>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
                <li>Customer portal: Available 24/7 online</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
