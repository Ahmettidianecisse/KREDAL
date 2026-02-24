"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Sparkles, Zap, Shield, FileText, Mic, BarChart3, Brain, UserCheck } from "lucide-react"

const products = [
  {
    id: 0,
    title: "Kredal Score",
    description:
      "The core engine. Score any borrower in under 300ms using 54+ alternative data signals — mobile money flows, behavioral patterns, repayment history. No bank account required. Built specifically for African credit contexts with full explainability.",
    tags: ["Credit Scoring", "Alternative Data", "REST API", "Explainable AI"],
    status: "live",
    year: "2025",
    calls: "54+",
    latency: "287ms",
    docs: "/docs/score",
    homepage: "/playground",
    featured: true,
    highlight: true,
    icon: Zap,
  },
  {
    id: 1,
    title: "FraudShield",
    description:
      "Real-time fraud detection trained on African fraud patterns — SIM swap, mobile money fraud, synthetic identities. Flags suspicious borrowers before disbursement with 97% precision.",
    tags: ["Fraud Detection", "Real-time", "Risk Analysis"],
    status: "coming-soon",
    year: "2026",
    calls: "12+",
    latency: "180ms",
    docs: "/docs/fraud",
    featured: true,
    icon: Shield,
  },
  {
    id: 2,
    title: "DocIntel",
    description:
      "Upload any financial document — bank statement PDF, mobile money screenshot, receipt photo — our AI extracts, normalizes and scores it automatically. Supports 15+ document types.",
    tags: ["OCR", "Document AI", "PDF", "Vision"],
    status: "coming-soon",
    year: "2026",
    calls: "20+",
    latency: "1.2s",
    docs: "/docs/docintel",
    featured: false,
    icon: FileText,
  },
  {
    id: 3,
    title: "LoanVoice",
    description:
      "A conversational AI agent that interviews borrowers in local languages — Wolof, Bambara, Swahili, Hausa, French — and extracts psychometric data to generate a behavioral credit score. No smartphone required.",
    tags: ["Multilingual", "Psychometrics", "Voice AI", "NLP"],
    status: "in-dev",
    year: "2026",
    calls: "30+",
    latency: "2.4s",
    docs: "/docs/loanvoice",
    featured: true,
    icon: Mic,
  },
  {
    id: 4,
    title: "PortfolioGuard",
    description:
      "Monitor thousands of borrowers in real-time. Get early warning alerts before defaults occur. Built for microfinance institutions and lending portfolios at scale — up to 500K borrowers.",
    tags: ["Portfolio Analytics", "Monitoring", "Alerts", "MFI"],
    status: "in-dev",
    year: "2026",
    calls: "18+",
    latency: "450ms",
    docs: "/docs/portfolio",
    featured: false,
    icon: BarChart3,
  },
  {
    id: 5,
    title: "CashFlow Predictor",
    description:
      "Predict borrower cash flows 30, 60, and 90 days into the future using transaction history and behavioral signals. Helps lenders structure repayment plans that match real income cycles.",
    tags: ["Forecasting", "Time Series", "ML", "BNPL"],
    status: "in-dev",
    year: "2026",
    calls: "22+",
    latency: "600ms",
    docs: "/docs/cashflow",
    featured: false,
    icon: Brain,
  },
  {
    id: 6,
    title: "KYC Intelligence",
    description:
      "AI-powered identity verification adapted for African documents — CNIB, passeport, carte d'électeur. Liveness detection, face matching, and document authenticity scoring in one API call.",
    tags: ["KYC", "Identity", "Face Match", "Liveness"],
    status: "in-dev",
    year: "2026",
    calls: "16+",
    latency: "900ms",
    docs: "/docs/kyc",
    featured: false,
    icon: UserCheck,
  },
]

const filters = ["all", "live", "coming-soon", "in-dev"]

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProducts = activeFilter === "all" ? products : products.filter((p) => p.status === activeFilter)

  return (
    <section id="products" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              Intelligence Suite
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Seven AI Engines.
              <br />
              One Platform.
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:flex-wrap scrollbar-hide animate-fade-in-up stagger-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "shrink-0 rounded-lg border px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                  activeFilter === filter
                    ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                    : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground hover:bg-secondary/50",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up kredal-card-glow",
                "highlight" in product && product.highlight
                  ? "sm:col-span-2 lg:col-span-2 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                  : "border-border/60",
                product.featured && !("highlight" in product && product.highlight) && "sm:col-span-2 lg:col-span-1",
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
            >
              {/* Featured badge */}
              {"highlight" in product && product.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Core Engine
                  </span>
                </div>
              )}

              {/* Status indicator */}
              <div className={cn(
                "absolute right-5 top-5 flex items-center gap-2.5",
              )}>
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-shadow duration-300",
                    product.status === "live" && "bg-primary shadow-sm shadow-primary/50 animate-pulse",
                    product.status === "coming-soon" && "bg-yellow-500 shadow-sm shadow-yellow-500/50",
                    product.status === "in-dev" && "bg-muted-foreground",
                  )}
                />
                <span className="font-mono text-xs text-muted-foreground">{product.status}</span>
              </div>

              {/* Year + Icon */}
              <div className={cn(
                "mb-5 flex items-center gap-3 font-mono text-xs text-muted-foreground",
                "highlight" in product && product.highlight && "mt-10",
              )}>
                <span>{product.year}</span>
                <span className="h-px flex-1 bg-border/50" />
                <product.icon className="h-4 w-4 text-primary/60 transition-colors group-hover:text-primary" />
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "mb-3 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  "highlight" in product && product.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}
              >
                {product.title}
              </h3>

              {/* Description */}
              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground",
                  "highlight" in product && product.highlight ? "line-clamp-3" : "line-clamp-2",
                )}
              >
                {product.description}
              </p>

              {/* Stats */}
              <div className="mb-5 flex items-center gap-5 font-mono text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-primary">
                  <Zap className="h-3.5 w-3.5" />
                  {product.calls} signals
                </span>
                <span className="flex items-center gap-1.5 transition-colors group-hover:text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                  {product.latency} avg
                </span>
              </div>

              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={product.docs}
                  className="flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-all duration-300 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="font-mono text-primary">{">"}</span>
                  <span className="underline-animate">docs</span>
                </a>
                {product.homepage && (
                  <a
                    href={product.homepage}
                    className="flex items-center gap-2 font-mono text-xs text-primary hover:text-foreground transition-all duration-300 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-4 w-4 transition-transform group-hover/link:scale-110 group-hover/link:rotate-12" />
                    <span className="underline-animate">playground</span>
                  </a>
                )}
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}