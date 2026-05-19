"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Zap, Globe, Box, Smartphone, Router, Monitor } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Box,
      title: "Starlink Mini Kit",
      description: "Compact and portable satellite internet kit perfect for on-the-go connectivity.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Fast Starlink Internet Services",
      description: "High-speed internet with access & security solutions for all your needs.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      title: "Low Earth Orbit Satellites",
      description: "Constellation of LEO satellites (~540 km up) providing lower latency and higher speeds.",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const performanceData = [
    { label: "Typical Speeds", value: "100–200 Mbps" },
    { label: "Latency", value: "20–40 ms" },
    { label: "Max Speeds", value: "100–300 Mbps" },
    { label: "Latency Range", value: "30–60 ms" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Part - Features */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Starlink Mini Kit</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fast Starlink Internet Services - <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Access & Security Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Starlink uses a constellation of low Earth orbit (LEO) satellites (~540 km up), providing significantly lower latency (20–40 ms) and higher speeds (typically 100–200 Mbps) compared to traditional geostationary systems.
          </p>
          <div className="flex justify-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center space-x-2 text-lg text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Call : {siteConfig.phone}</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gray-50"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Section */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Performance: Speed & Latency Reality Check</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {performanceData.map((item, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <p className="text-gray-600 mb-2">{item.label}</p>
                  <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Important Notes</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Occasional spikes—switching satellites can briefly increase latency to ~150 ms</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 bg-white shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4">User Experience</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Great for gaming, streaming, and video calls</li>
                  <li>• Some note intermittent disconnections, weather interruptions, or congestion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Starlink Mini Kit Products */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Starlink Mini Kit</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { title: "AC Dual‑Band", icon: Router },
            { title: "Starlink 4th‑Gen Mini Kit", icon: Box },
          ].map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{product.title}</h4>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Plans Section */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Plans</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              "Fixed Residential Plans",
              "Starlink Business",
              "Starlink Maritime",
            ].map((plan, index) => (
              <Card key={index} className="border-0 bg-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-white">{plan}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center space-x-2 text-lg hover:text-cyan-300 transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span>Call : {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
