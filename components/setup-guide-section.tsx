"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { 
  User, 
  Home, 
  Cable, 
  Wifi, 
  Zap, 
  AlertCircle, 
  CheckCircle, 
  Smartphone,
  Router,
  Box
} from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function SetupGuideSection() {
  const setupSteps = [
    {
      number: "1",
      title: "Create an Account",
      description: "Go to starlink.com and enter your address. Place the order (hardware ~$599, service ~$120/month).",
      icon: User,
    },
    {
      number: "2",
      title: "Install the Dish",
      description: "Find a clear view of the sky (roof, pole, yard). Use the Starlink app to scan for obstructions. Mount the dish using included base or an optional roof/pole mount.",
      icon: Home,
    },
    {
      number: "3",
      title: "Connect the Cables",
      description: "Plug the dish into the router with the included cable. Plug the router into power.",
      icon: Cable,
    },
    {
      number: "4",
      title: "Activate & Configure Wi-Fi",
      description: "Use the Starlink app (iOS/Android) to name your network and set a password. Wait 5–20 minutes for the dish to auto-align and connect to satellites.",
      icon: Wifi,
    },
    {
      number: "5",
      title: "Test Internet",
      description: "Speed test: Expect 50–200 Mbps. Ping: 20–40 ms. Works with streaming, Zoom, even online gaming (some latency spikes possible).",
      icon: Zap,
    },
  ]

  const errorsAndFixes = [
    {
      error: "No Connection / “Searching” Message",
      cause: "Dish can't connect to satellites due to obstructions or poor positioning.",
      fix: "Use the Starlink app's 'Check for Obstructions' tool. Relocate dish to a spot with 360° clear sky view. Avoid trees, poles, buildings—even small obstructions cause drops.",
    },
    {
      error: "Starlink App Shows “Offline”",
      cause: "Dish is powered but not connecting, or cable is loose.",
      fix: "Check power supply (router + dish connection). Re-seat both ends of the dish cable (in dish and router). Restart the router (unplug for 15 seconds, then plug back in).",
    },
    {
      error: "Router Blinking White or Amber Light",
      cause: "Blinking white: Connecting to satellites. Amber: Firmware updating.",
      fix: "Wait up to 20 minutes after powering up. If it stays stuck, restart the whole system: unplug everything for 1 minute, then reconnect.",
    },
    {
      error: "\"Starlink Disconnected\" in App",
      cause: "Cable not fully inserted, bent pins, or frayed wires.",
      fix: "Ensure the cable from the dish to the router is fully inserted. Inspect for bent pins or frayed wires. Try another power outlet or test with a known-good USB-C charger (for Starlink Mini).",
    },
    {
      error: "Slow or No Internet Despite Good Signal",
      cause: "Obstructions, network congestion, or firmware needs update.",
      fix: "Use the app to verify signal quality. Restart the system via the Starlink app → Settings → Reboot. Let it run for 24 hours to auto-update firmware.",
    },
  ]

  const whenToContactSupport = [
    "Router shows solid red light (hardware issue)",
    "App says “Motors stuck” or “Thermal Shutdown”",
    "Dish not physically moving during setup",
    "Cable visibly damaged or frayed",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Setup Guide Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">Setup Guide</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Set up <br />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Satellite Home Internet
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting up Satellite Home Internet in the USA is straightforward, especially with providers like Starlink, Viasat, and HughesNet. Here’s a complete guide to get started.
          </p>
        </div>

        {/* What's in the Box */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Starlink Setup (Typical for Home)</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Starlink Dish (aka “Dishy”)", icon: Box },
              { name: "Mounting base", icon: Home },
              { name: "Wi-Fi router", icon: Router },
              { name: "75-ft cable & Power cable", icon: Cable },
            ].map((item, index) => (
              <Card key={index} className="border-0 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <p className="font-medium text-gray-900">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Step-by-Step Setup */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Step-by-Step Setup</h3>
          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <Card className="flex-1 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <step.icon className="h-8 w-8 text-blue-600" />
                      <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Errors & Fixes */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <AlertCircle className="h-10 w-10 text-orange-600" />
            <h3 className="text-3xl font-bold text-gray-900">Common Starlink Installation Errors & Fixes</h3>
          </div>
          <div className="space-y-6">
            {errorsAndFixes.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    {item.error}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <span className="font-semibold text-gray-900">Cause:</span> {item.cause}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-green-700">Fix:</span> {item.fix}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* When to Contact Support */}
        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">When to Contact Support</h3>
            <p className="text-blue-200 text-lg">Reach out to Starlink Support if:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {whenToContactSupport.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <p className="text-white">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-6 rounded-full font-bold text-xl shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open(`tel:${siteConfig.phone}`, "_self")}
            >
              Call Now : {siteConfig.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
