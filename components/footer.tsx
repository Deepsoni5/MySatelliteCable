import Link from "next/link"
import { Wifi, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import { siteConfig } from "@/config/site"

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "Home", href: "/" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookies Policy", href: "/privacy" },
      { name: "Refund Policy", href: "/returns" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Enjoy uninterrupted internet access in remote areas with Starlink’s satellite technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href={`tel:${siteConfig.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © {new Date().getFullYear()} Starline Satellite | Powered by {siteConfig.name}
            </div>
            <div className="flex space-x-6">
              <a href={siteConfig.social.facebook} className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
