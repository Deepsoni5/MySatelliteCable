import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { siteConfig } from "@/config/site"
import Client from "./client"
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@skylinkconnect",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>

        {/* Google Ads / Analytics */}
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18137511673"
          strategy="afterInteractive"
        />

        <Script 
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18137511673');
            `,
          }}
        />

        {/* Statcounter */}
        <Script
          id="statcounter-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project=13227668;
              var sc_invisible=1;
              var sc_security="5cffa333";
            `,
          }}
        />

        <Script
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
        />

      </head>

      <body>
        <Client children={children} />

        {/* Optional noscript fallback */}
        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13227668/0/5cffa333/1/"
                alt="Web Analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>

      </body>
    </html>
  )
}
