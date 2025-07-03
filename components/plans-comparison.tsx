import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function PlansComparison() {
  const comparisonData = [
    {
      feature: "Data Allowance",
      residential: "Unlimited",
      roam: "50GB / Unlimited",
      boat: "50GB / 1024GB",
    },
    {
      feature: "Internet Speed",
      residential: "Low Latency Unlimited",
      roam: "Up to 500 Mbps",
      boat: "Up to 300 Mbps",
    },
    {
      feature: "Package",
      residential: "Not included",
      roam: "Unlimited: $165/mo",
      boat: "1024GB: $165/mo",
    },
    {
      feature: "24/7 Support",
      residential: true,
      roam: true,
      boat: true,
    },
    {
      feature: "Multi-device Support",
      residential: true,
      roam: true,
      boat: true,
    },
    {
      feature: "Weather Resistant Equipment",
      residential: true,
      roam: true,
      boat: true,
    },
    {
      feature: "End-to-end Encryption",
      residential: true,
      roam: true,
      boat: true,
    },
    {
      feature: "Maritime Optimized",
      residential: false,
      roam: true,
      boat: true,
    },
    {
      feature: "Onboard Technical Support",
      residential: false,
      roam: true,
      boat: false,
    },
    {
      feature: "Reliability",
      residential: "99.9%",
      roam: "99.9%",
      boat: "99.9%",
    },
  ]

  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-400 mx-auto" />
      )
    }
    return <span className="text-gray-700 font-medium">{value}</span>
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">Compare Plans</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Detailed Plan{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Comparison
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare all features across our satellite internet plans to find the perfect solution for your needs.
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <th className="text-left p-6 font-semibold">Features</th>
                    <th className="text-center p-6 font-semibold">Residential Plan</th>
                    <th className="text-center p-6 font-semibold">Roam Plans</th>
                    <th className="text-center p-6 font-semibold">Boat Plans</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                      }`}
                    >
                      <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-6 text-center">{renderValue(row.residential)}</td>
                      <td className="p-6 text-center">{renderValue(row.roam)}</td>
                      <td className="p-6 text-center">{renderValue(row.boat)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Summary */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Plan</h3>
            <div className="text-3xl font-bold text-blue-600 mb-1">$120/mo</div>
            <div className="text-gray-600">+ taxes</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Roam Plans</h3>
            <div className="text-lg font-bold text-purple-600 mb-1">$50 - $165/mo</div>
            <div className="text-gray-600">+ taxes</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Boat Plans</h3>
            <div className="text-lg font-bold text-green-600 mb-1">$50 - $165/mo</div>
            <div className="text-gray-600">+ taxes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
