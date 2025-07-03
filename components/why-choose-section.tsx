import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Shield, Clock, Users, Zap, Globe } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function WhyChooseSection() {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast Speeds",
      description: `Experience blazing-fast internet up to ${siteConfig.maxSpeed} with our advanced satellite technology.`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: `Connect from anywhere on Earth with our extensive satellite network covering ${siteConfig.countries} countries.`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: `${siteConfig.uptime} uptime guarantee with enterprise-grade security protecting your connection.`,
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to ensure you stay connected when it matters most.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description: "Join millions of satisfied customers who rely on our satellite internet service daily.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Get connected in minutes with our quick setup process and professional installation.",
      color: "from-yellow-500 to-amber-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Why Choose Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our satellite internet service provides unmatched reliability, speed, and coverage to keep you connected
            anywhere, anytime. Experience the difference with our cutting-edge technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {siteConfig.countries}
              </div>
              <div className="text-gray-600 font-medium">Countries Covered</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {siteConfig.uptime}
              </div>
              <div className="text-gray-600 font-medium">Network Uptime</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                {siteConfig.maxSpeed}
              </div>
              <div className="text-gray-600 font-medium">Max Speed</div>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
