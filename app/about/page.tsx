import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} - your trusted satellite internet provider connecting the world.`,
}

export default function AboutPage() {
  const values = [
    {
      icon: Globe,
      title: "Global Connectivity",
      description: "We believe everyone deserves access to reliable internet, no matter where they are.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do, driving our innovation and service.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of satellite technology to deliver better experiences.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service and customer relationships.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">About {siteConfig.name}</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting the World Through{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to provide reliable, high-speed satellite internet to every corner of the globe,
              ensuring no one is left disconnected in our digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a vision to bridge the digital divide, {siteConfig.name} has been at the forefront of
                  satellite internet technology for over a decade. We started with a simple belief: everyone deserves
                  access to reliable, high-speed internet, regardless of their location.
                </p>
                <p>
                  Today, we serve millions of customers across {siteConfig.countries} countries, providing internet
                  speeds up to {siteConfig.maxSpeed} with {siteConfig.uptime} uptime reliability. Our advanced satellite
                  constellation ensures that whether you're in a bustling city or a remote rural area, you stay
                  connected to what matters most.
                </p>
                <p>
                  We continue to innovate and expand our network, always putting our customers first and maintaining our
                  commitment to excellence in everything we do.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{siteConfig.countries}</div>
                      <div className="text-gray-600 text-sm">Countries Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">10M+</div>
                      <div className="text-gray-600 text-sm">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600 mb-2">{siteConfig.uptime}</div>
                      <div className="text-gray-600 text-sm">Uptime</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                      <div className="text-gray-600 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve our customers every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
