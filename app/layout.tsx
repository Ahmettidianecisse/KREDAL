import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kredal.ai'),
  title: {
    default: "KREDAL — Financial Intelligence for Africa",
    template: "%s | KREDAL",
  },
  description:
    "AI-powered credit scoring infrastructure built for African fintechs. Score any borrower in milliseconds using alternative data — mobile money, behavioral signals, psychometric insights.",
  keywords: ["Credit Scoring", "Fintech Africa", "Alternative Data", "AI Scoring", "Mobile Money", "Financial Inclusion", "Microfinance", "Machine Learning", "REST API", "BNPL Africa"],
  authors: [{ name: "Kredal", url: "https://kredal.ai" }],
  creator: "Kredal",
  publisher: "Kredal",
  generator: "kredal.ai",
  openGraph: {
    type: "website",
    locale: "fr_SN",
    alternateLocale: "en_US",
    url: "/",
    title: "KREDAL — Financial Intelligence for Africa",
    description: "AI-powered credit scoring infrastructure built for African fintechs. Score any borrower in milliseconds using alternative data.",
    siteName: "KREDAL",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KREDAL — Financial Intelligence for Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KREDAL — Financial Intelligence for Africa",
    description: "AI-powered credit scoring infrastructure built for African fintechs. Score any borrower in milliseconds.",
    creator: "@kredal_ai",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}