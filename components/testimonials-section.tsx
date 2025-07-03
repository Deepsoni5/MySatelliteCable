"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Remote Software Developer",
      location: "Rural Montana",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "SkyLink Connect transformed my remote work experience. Living in rural Montana, I struggled with unreliable internet for years. Now I have consistent high-speed connectivity that lets me video conference with clients worldwide without any issues.",
    },
    {
      name: "Captain Robert Thompson",
      role: "Commercial Fishing Vessel Owner",
      location: "Pacific Ocean",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The Boat Plan has been a game-changer for our fishing operations. We can now stay connected with our families and coordinate with other vessels even when we're hundreds of miles offshore. The weather-resistant equipment works flawlessly in harsh conditions.",
    },
    {
      name: "Dr. Sarah Kim",
      role: "Marine Research Scientist",
      location: "Research Vessel Atlantic",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Our research depends on real-time data transmission from remote ocean locations. SkyLink Connect's Roam Plan provides the reliable, high-speed connectivity we need to share critical research data with our lab team instantly.",
    },
    {
      name: "Mike and Lisa Johnson",
      role: "Retired Couple",
      location: "Rural Wyoming Ranch",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "After moving to our dream ranch in Wyoming, we thought we'd have to sacrifice staying connected with our grandchildren. SkyLink Connect's Residential Plan gives us crystal-clear video calls and seamless streaming. It's like living in the city!",
    },
    {
      name: "Alex Rivera",
      role: "Digital Nomad & Content Creator",
      location: "Traveling Worldwide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "As a travel blogger, reliable internet is crucial for uploading content and staying connected with my audience. SkyLink Connect works everywhere I go - from remote islands to mountain peaks. The global coverage is unmatched!",
    },
  ]

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "10M+", label: "Happy Customers" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">What Our Customers Say</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Customers{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From remote workers to maritime professionals, see how SkyLink Connect is transforming lives with reliable
            satellite internet.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-16">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover shadow-lg"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-blue-600 mb-4 mx-auto md:mx-0" />
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-center md:justify-start space-x-1 mb-2">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-blue-600 font-medium">{testimonials[currentTestimonial].role}</p>
                    <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full p-3 hover:bg-blue-50">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full p-3 hover:bg-blue-50">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Customer Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Customer Satisfaction</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our commitment to excellence shows in every customer interaction and service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
