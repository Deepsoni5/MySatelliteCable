import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Return Policy",
  description: `Return Policy for ${siteConfig.name} equipment and services.`,
}

export default function ReturnsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Returns</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Return Policy</h1>
            <p className="text-lg text-gray-600">Equipment return and refund information</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>30-Day Satisfaction Guarantee</h2>
              <p>
                We're confident you'll love {siteConfig.name} service. If you're not completely satisfied within the
                first 30 days, you can cancel your service and return the equipment for a full refund of monthly service
                fees.
              </p>

              <h2>Return Process</h2>
              <ol>
                <li>Contact customer service at {siteConfig.phone} to initiate return</li>
                <li>Receive return authorization number and shipping instructions</li>
                <li>Package equipment securely using original packaging when possible</li>
                <li>Ship equipment using provided prepaid return label</li>
                <li>Refund processed within 5-7 business days of equipment receipt</li>
              </ol>

              <h2>Equipment to Return</h2>
              <p>All equipment must be returned, including:</p>
              <ul>
                <li>Satellite dish and mounting hardware</li>
                <li>Indoor modem/router unit</li>
                <li>Power adapters and cables</li>
                <li>Original packaging and documentation</li>
                <li>Any additional accessories provided</li>
              </ul>

              <h2>Return Conditions</h2>
              <ul>
                <li>Equipment must be in good working condition</li>
                <li>Normal wear and tear is acceptable</li>
                <li>Damaged equipment may result in replacement charges</li>
                <li>All components must be included for full refund</li>
              </ul>

              <h2>Refund Information</h2>
              <ul>
                <li>Monthly service fees refunded for unused service period</li>
                <li>Installation fees are non-refundable after 30 days</li>
                <li>Equipment charges waived if returned in good condition</li>
                <li>Refunds processed to original payment method</li>
              </ul>

              <h2>Service Cancellation</h2>
              <p>To cancel service after the 30-day period:</p>
              <ul>
                <li>Provide 30 days written notice</li>
                <li>Early termination fees may apply</li>
                <li>Equipment must still be returned</li>
                <li>Final bill will include prorated charges</li>
              </ul>

              <h2>Damaged Equipment</h2>
              <p>If equipment is damaged during your service period:</p>
              <ul>
                <li>Contact us immediately for replacement</li>
                <li>Warranty covers manufacturing defects</li>
                <li>Customer damage may result in replacement fees</li>
                <li>Insurance options available for equipment protection</li>
              </ul>

              <h2>Return Shipping</h2>
              <ul>
                <li>Prepaid return labels provided for all returns</li>
                <li>Use original packaging when possible</li>
                <li>Package securely to prevent damage during shipping</li>
                <li>Tracking information provided for return shipments</li>
              </ul>

              <h2>Processing Time</h2>
              <ul>
                <li>Return authorization: Same business day</li>
                <li>Equipment inspection: 2-3 business days after receipt</li>
                <li>Refund processing: 5-7 business days</li>
                <li>Credit card refunds may take additional 3-5 business days</li>
              </ul>

              <h2>Contact for Returns</h2>
              <p>To initiate a return or for questions about our return policy:</p>
              <ul>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
                <li>Available: {siteConfig.businessHours}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
