import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Satellite, Users, Zap } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function CoverageSection() {
  const coverageStats = [
    {
      icon: Globe,
      number: siteConfig.countries,
      label: "Countries Covered",
      description: "Global satellite network coverage",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Users,
      number: "10M+",
      label: "Active Users",
      description: "Customers worldwide trust our service",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Satellite,
      number: "500+",
      label: "Satellites",
      description: "Advanced constellation in orbit",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Coverage Area",
      description: "Earth's surface coverage",
      color: "from-orange-600 to-red-600",
    },
  ]

  const regions = [
    {
      name: "North America",
      coverage: "100%",
      users: "4.2M",
      avgSpeed: "180 Mbps",
      color: "bg-blue-500",
    },
    {
      name: "Europe",
      coverage: "98%",
      users: "3.1M",
      avgSpeed: "165 Mbps",
      color: "bg-green-500",
    },
    {
      name: "Asia Pacific",
      coverage: "95%",
      users: "2.8M",
      avgSpeed: "155 Mbps",
      color: "bg-purple-500",
    },
    {
      name: "South America",
      coverage: "92%",
      users: "1.2M",
      avgSpeed: "145 Mbps",
      color: "bg-orange-500",
    },
  ]

  const networkMetrics = [
    { label: "Average Uptime", value: "99.9%", trend: "+0.1%" },
    { label: "Average Speed", value: "162 Mbps", trend: "+15%" },
    { label: "Average Latency", value: "28ms", trend: "-5ms" },
    { label: "Customer Satisfaction", value: "4.9/5", trend: "+0.2" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">Global Coverage</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Connecting the World with{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Satellite Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced satellite constellation provides reliable, high-speed internet coverage to even the most remote
            locations on Earth.
          </p>
        </div>

        {/* Coverage Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {coverageStats.map((stat, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-blue-50"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Coverage */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Regional Coverage</h3>
            <div className="space-y-6">
              {regions.map((region, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">{region.name}</h4>
                    <div className={`w-4 h-4 rounded-full ${region.color}`}></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{region.coverage}</div>
                      <div className="text-gray-600 text-sm">Coverage</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{region.users}</div>
                      <div className="text-gray-600 text-sm">Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{region.avgSpeed}</div>
                      <div className="text-gray-600 text-sm">Avg Speed</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Network Performance</h3>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="space-y-6">
                {networkMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold">{metric.label}</div>
                      <div className="text-blue-100 text-sm">Real-time metrics</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className="text-green-300 text-sm">{metric.trend}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <Satellite className="h-6 w-6 text-yellow-300" />
                  <span className="font-semibold">Live Network Status</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold">Online</div>
                    <div className="text-blue-100 text-sm">All Systems</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Active</div>
                    <div className="text-blue-100 text-sm">500+ Satellites</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Map Placeholder */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Global Coverage Map</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our satellite constellation provides comprehensive coverage across all continents and oceans.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20"></div>
              <div className="relative z-10 text-center">
                <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4 animate-pulse" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Coverage Map</h4>
                <p className="text-gray-600">Check availability in your specific location</p>
              </div>

              {/* Animated dots representing satellites */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              <div
                className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-500 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-orange-500 rounded-full animate-ping"
                style={{ animationDelay: "3s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
