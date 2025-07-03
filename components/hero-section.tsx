"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Zap, Globe, Shield, Star } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function HeroSection() {
  const [address, setAddress] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [isAvailable, setIsAvailable] = useState(true)

  const handleAddressCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (address.trim()) {
      // Simulate checking availability (in real app, this would be an API call)
      setIsAvailable(Math.random() > 0.2) // 80% chance of availability
      setShowResults(true)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-40 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <Badge className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full mb-6 animate-bounce-slow">
              <Star className="h-4 w-4" />
              <span>Rated #1 Satellite Internet Provider</span>
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Connect to the World from{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse-slow">
                Anywhere
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Experience revolutionary satellite internet with lightning-fast speeds, unlimited data, and coverage that
              reaches even the most remote locations on Earth.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg border border-blue-100">
                <Zap className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Up to {siteConfig.maxSpeed}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg border border-purple-100">
                <Globe className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">{siteConfig.coverage} Coverage</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg border border-green-100">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-semibold">{siteConfig.uptime} Uptime</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                View Plans
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Call {siteConfig.phone}
              </Button>
            </div>

            {/* Address Checker */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-md mx-auto lg:mx-0">
              {!showResults ? (
                <>
                  <h3 className="font-semibold text-gray-800 mb-4">Check availability at your address:</h3>
                  <form onSubmit={handleAddressCheck} className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Enter your street address or ZIP code"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="flex-1 rounded-full border-gray-300 focus:border-blue-500"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-sm text-gray-500 mt-2">Instant results. No commitment required.</p>
                </>
              ) : (
                <div className="text-center">
                  {isAvailable ? (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Shield className="h-8 w-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-green-800 text-lg mb-2">Great News!</h3>
                        <p className="text-gray-700 mb-4">
                          {siteConfig.name} service is available at your location with speeds up to{" "}
                          {siteConfig.maxSpeed}!
                        </p>
                        <div className="space-y-2">
                          <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full">
                            View Plans
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full rounded-full"
                            onClick={() => window.open(`tel:${siteConfig.phone}`, "_self")}
                          >
                            Call {siteConfig.phone}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                        <Globe className="h-8 w-8 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-orange-800 text-lg mb-2">Service Coming Soon</h3>
                        <p className="text-gray-700 mb-4">
                          We're expanding our network to your area. Join our waitlist to be notified when service
                          becomes available.
                        </p>
                        <div className="space-y-2">
                          <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-full">
                            Join Waitlist
                          </Button>
                          <Button
                            variant="outline"
                            className="w-full rounded-full"
                            onClick={() => window.open(`tel:${siteConfig.phone}`, "_self")}
                          >
                            Call for Updates
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      setShowResults(false)
                      setAddress("")
                    }}
                    className="text-blue-600 hover:text-blue-700 text-sm mt-4 underline"
                  >
                    Check another address
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-600">Global Network</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">{siteConfig.countries} Countries</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Download Speed</span>
                      <span className="font-bold text-green-600">Up to {siteConfig.maxSpeed}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Network Uptime</span>
                      <span className="font-bold text-green-600">{siteConfig.uptime}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">Secure Connection</span>
                    </div>
                    <p className="text-sm text-gray-600">Enterprise-grade encryption protecting your data 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-float">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
