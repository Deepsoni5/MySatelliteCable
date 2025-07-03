"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Phone, Search, Shield, Clock, Users } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function CTASection() {
  const [address, setAddress] = useState("")

  const handleAddressCheck = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle address checking logic here
    console.log("Checking address:", address)
  }

  const handleRequestCallback = () => {
    // Redirect to contact page
    window.location.href = "/contact"
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-white/20 text-white px-4 py-2 backdrop-blur-sm">Ready to Get Connected?</Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Your Satellite Internet Journey <span className="text-yellow-300">Today</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join millions of satisfied customers who trust SkyLink Connect for reliable, high-speed satellite internet
            anywhere on Earth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Quick Start */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Start</h3>

            {/* Address Checker */}
            <div className="mb-6">
              <form onSubmit={handleAddressCheck} className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Enter your address or ZIP code"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-1 bg-white/90 border-white/30 text-gray-900 placeholder-gray-600"
                />
                <Button type="submit" size="sm" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6">
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              <p className="text-blue-100 text-sm mt-2 text-center">Check availability in your area instantly</p>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 text-lg">
                View All Plans
              </Button>
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 text-lg"
                onClick={() => window.open(`tel:${siteConfig.phone}`, "_self")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </div>
          </div>

          {/* Right Side - Talk to Expert */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Talk to an Expert</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Personalized Consultation</h4>
                  <p className="text-blue-100 text-sm">Get expert advice on the best plan for your needs</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">24/7 Availability</h4>
                  <p className="text-blue-100 text-sm">Our experts are available around the clock</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">No Commitment</h4>
                  <p className="text-blue-100 text-sm">Free consultation with no obligation</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 text-lg"
                onClick={() => window.open(`tel:${siteConfig.phone}`, "_self")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 text-lg"
                onClick={handleRequestCallback}
              >
                Request Callback
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-2xl font-bold mb-2">30-Day Guarantee</div>
              <div className="text-blue-100">Risk-free trial period</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Free Installation</div>
              <div className="text-blue-100">Professional setup included</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">24/7 Support</div>
              <div className="text-blue-100">Always here to help</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
