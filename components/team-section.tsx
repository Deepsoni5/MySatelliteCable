import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "15+ years in telecommunications with expertise in satellite technology and global network expansion.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@skylinkconnect.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Former NASA engineer specializing in satellite communications and low-latency network optimization.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@skylinkconnect.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "VP Customer Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Customer service expert with 12 years ensuring exceptional support experiences across global markets.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@skylinkconnect.com",
      },
    },
    {
      name: "David Park",
      role: "Head of Network Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Network infrastructure specialist maintaining 99.9% uptime across our global satellite constellation.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@skylinkconnect.com",
      },
    },
  ]

  const stats = [
    { number: "50+", label: "Patents Filed" },
    { number: "25+", label: "Years Combined Experience" },
    { number: "500+", label: "Team Members" },
    { number: "24/7", label: "Expert Support" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">Meet Our Experts</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Team Behind Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Connection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our world-class team of engineers, customer service experts, and industry veterans work around the clock to
            keep you connected.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Innovation & Excellence</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to innovation and customer satisfaction drives everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
