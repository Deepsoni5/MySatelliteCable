"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
