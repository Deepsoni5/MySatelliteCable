"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check, Star, Zap, Anchor, Home } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function PlansSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Residential Plan",
      icon: Home,
      price: { monthly: 120, yearly: 120 },
      speed: "Low Latency Unlimited Speed",
      popular: true,
      description: "Perfect for homes and families",
      features: [
        "No data caps",
        "Stable and secure connectivity for your residence",
        "Enjoy seamless streaming and browsing",
        "Round-the-clock customer support",
        "99.9% reliability",
      ],
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Roam Plans",
      icon: Zap,
      price: { monthly: 50, yearly: 50 },
      priceNote: "50GB: $50/mo | Unlimited: $165/mo",
      speed: "Up to 500 Mbps",
      tvPackage: "Unlimited: $165/mo",
      description: "High-speed connectivity at sea",
      features: [
        "Reliable high-speed connectivity at sea",
        "24/7 onboard technical support",
        "Smooth streaming and seamless navigation",
        "Multi-device connectivity with secure encryption",
        "99.9% reliability",
      ],
      color: "from-purple-600 to-pink-600",
    },
    {
      name: "Boat Plans",
      icon: Anchor,
      price: { monthly: 50, yearly: 50 },
      priceNote: "Mobile 50GB: $50/mo | 1024GB: $165/mo",
      speed: "Up to 300 Mbps",
      tvPackage: "1024GB: $165/mo",
      description: "Secure connectivity on open waters",
      features: [
        "Stable and secure connectivity on open waters",
        "Enjoy seamless streaming and browsing while offshore",
        "Round-the-clock customer support",
        "Weather-resistant equipment with easy installation",
        "End-to-end encryption for secure communications",
      ],
      color: "from-green-600 to-emerald-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Our Plans</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Internet Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to maritime adventures, we have the perfect satellite internet solution for every
            need.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm ${
                plan.popular ? "ring-2 ring-blue-500 ring-offset-4" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="text-center mb-6">
                  {plan.priceNote ? (
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600 font-medium">{plan.priceNote}</div>
                      <div className="text-lg text-gray-700">+ taxes</div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-gray-900">
                        ${plan.price.monthly}
                        <span className="text-lg text-gray-600 font-normal">/mo</span>
                      </div>
                      <div className="text-sm text-gray-600">+ taxes</div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Internet Speed</span>
                    <span className="font-semibold text-gray-900">{plan.speed}</span>
                  </div>
                  {plan.tvPackage && (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Package</span>
                      <span className="font-semibold text-gray-900">{plan.tvPackage}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105`}
                  onClick={() => window.open(`tel:${siteConfig.phone}`, "_self")}
                >
                  Call Now {siteConfig.phone}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
