"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Wifi, Zap, Globe, Shield } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 left-40 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Top Brand */}
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
              <Wifi className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">Starline Satellite</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            World-Link Communications <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Starlink Satellite Internet
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Enjoy uninterrupted internet access in remote areas with Starlink’s satellite technology.
          </p>

          {/* Call Button */}
          <div className="mb-8">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center space-x-2 text-xl text-white hover:text-cyan-300 transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span>Call : {siteConfig.phone}</span>
            </a>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            onClick={() => window.open(`tel:${siteConfig.phone}`, "_self")}
          >
            ORDER NOW
          </Button>
        </div>
      </div>
    </section>
  )
}
