import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { LabNotes } from "@/components/lab-notes"
import { Workbench } from "@/components/workbench"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"

function generateWebsiteStructuredData(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kredal",
    "description": "Financial Intelligence Infrastructure for Africa — AI-powered credit scoring APIs built for African fintechs.",
    "url": baseUrl,
    "inLanguage": ["fr", "en"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/docs?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
}

function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kredal",
    "description": "African AI-powered credit scoring infrastructure — Score any borrower in milliseconds using alternative data.",
    "url": "https://kredal.ai",
    "logo": "https://kredal.ai/logo.png",
    "foundingDate": "2025",
    "areaServed": "Africa",
    "knowsAbout": [
      "Credit Scoring",
      "Artificial Intelligence",
      "Fintech",
      "Alternative Data",
      "Financial Inclusion",
      "Machine Learning"
    ],
    "sameAs": [
      "https://twitter.com/kredal",
      "https://linkedin.com/company/kredal",
      "https://github.com/kredal"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "hello@kredal.ai",
      "availableLanguage": ["French", "English"]
    }
  }
}

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kredal.ai'
  const websiteStructuredData = generateWebsiteStructuredData(baseUrl)
  const organizationStructuredData = generateOrganizationStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <main className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <ProjectsGrid />
          <LabNotes />
          <Workbench />
          <Footer />
        </div>
      </main>
    </>
  )
}