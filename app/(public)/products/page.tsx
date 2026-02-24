import type { Metadata } from "next"
import { Zap, Shield, FileText, Mic, BarChart3, Brain, UserCheck, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Products | KREDAL",
  description: "Seven AI engines built for African fintech. Score, detect fraud, verify identity and predict cashflow — all in one platform.",
}

const products = [
  {
    id: "score",
    name: "Kredal Score",
    tagline: "Credit scoring reimagined for Africa",
    description:
      "The core engine of Kredal. Score any borrower in under 300ms using 54+ alternative data signals — mobile money flows, behavioral patterns, repayment history, and social signals. No bank account required. Full explainability included.",
    status: "live",
    icon: Zap,
    color: "from-primary/20 to-emerald-500/20",
    stats: [
      { label: "Avg latency", value: "287ms" },
      { label: "Data signals", value: "54+" },
      { label: "Accuracy", value: "94.3%" },
      { label: "Uptime", value: "99.9%" },
    ],
    features: [
      "Alternative data scoring (mobile money, tontines, behavioral)",
      "Explainable AI — human-readable output in French & English",
      "Score range 0–1000 with risk level and recommendation",
      "Confidence score on every prediction",
      "Webhook support for real-time notifications",
      "Batch processing for portfolio scoring",
    ],
    endpoint: "POST /v1/score",
    tags: ["Credit Scoring", "Alternative Data", "REST API", "Explainable AI"],
  },
  {
    id: "fraud",
    name: "FraudShield",
    tagline: "Fraud detection built for African patterns",
    description:
      "Real-time fraud detection trained specifically on African fraud patterns — SIM swap attacks, mobile money fraud, synthetic identities, and coordinated fraud rings. Flags suspicious borrowers before disbursement.",
    status: "coming-soon",
    icon: Shield,
    color: "from-blue-500/20 to-cyan-500/20",
    stats: [
      { label: "Avg latency", value: "180ms" },
      { label: "Fraud patterns", value: "120+" },
      { label: "Precision", value: "97.1%" },
      { label: "False positive", value: "<2%" },
    ],
    features: [
      "SIM swap detection",
      "Mobile money fraud patterns",
      "Synthetic identity detection",
      "Device fingerprinting",
      "Coordinated fraud ring detection",
      "Real-time risk score 0–100",
    ],
    endpoint: "POST /v1/fraud/check",
    tags: ["Fraud Detection", "Real-time", "Risk Analysis", "Mobile Money"],
  },
  {
    id: "docintel",
    name: "DocIntel",
    tagline: "Extract financial data from any document",
    description:
      "Upload any financial document — bank statement PDF, mobile money screenshot, blurry receipt photo — and DocIntel extracts, normalizes, and structures the data automatically. Supports 15+ African document types.",
    status: "coming-soon",
    icon: FileText,
    color: "from-purple-500/20 to-pink-500/20",
    stats: [
      { label: "Avg latency", value: "1.2s" },
      { label: "Doc types", value: "15+" },
      { label: "Accuracy", value: "96.8%" },
      { label: "Languages", value: "5+" },
    ],
    features: [
      "PDF bank statement parsing",
      "Mobile money screenshot OCR",
      "Receipt and invoice extraction",
      "Automatic data normalization",
      "Multi-language support (FR, EN, AR)",
      "Structured JSON output",
    ],
    endpoint: "POST /v1/documents/extract",
    tags: ["OCR", "Document AI", "PDF", "Vision", "NLP"],
  },
  {
    id: "loanvoice",
    name: "LoanVoice",
    tagline: "Voice-based credit interviews in local languages",
    description:
      "An AI agent that conducts credit interviews in local African languages — Wolof, Bambara, Swahili, Hausa, French. Extracts psychometric and behavioral data to generate a credit score. No smartphone required.",
    status: "in-dev",
    icon: Mic,
    color: "from-orange-500/20 to-amber-500/20",
    stats: [
      { label: "Avg latency", value: "2.4s" },
      { label: "Languages", value: "5+" },
      { label: "Data points", value: "30+" },
      { label: "Interview time", value: "~4min" },
    ],
    features: [
      "Wolof, Bambara, Swahili, Hausa, French",
      "Psychometric data extraction",
      "Behavioral scoring from conversation",
      "Works on basic feature phones (USSD/call)",
      "No smartphone or internet required",
      "Automated interview flow",
    ],
    endpoint: "POST /v1/voice/interview",
    tags: ["Voice AI", "Multilingual", "Psychometrics", "USSD"],
  },
  {
    id: "portfolio",
    name: "PortfolioGuard",
    tagline: "Monitor your loan portfolio in real-time",
    description:
      "Monitor thousands of borrowers simultaneously. Get early warning alerts before defaults occur. Built for microfinance institutions and lending portfolios at scale — up to 500,000 borrowers.",
    status: "in-dev",
    icon: BarChart3,
    color: "from-primary/20 to-teal-500/20",
    stats: [
      { label: "Max borrowers", value: "500K" },
      { label: "Alert latency", value: "<1min" },
      { label: "Default prediction", value: "30d ahead" },
      { label: "Uptime", value: "99.9%" },
    ],
    features: [
      "Real-time portfolio health dashboard",
      "Early warning alerts before defaults",
      "30-day default probability scores",
      "Segment analysis by risk cohort",
      "Automated alert workflows",
      "Portfolio-level reporting",
    ],
    endpoint: "POST /v1/portfolio/monitor",
    tags: ["Portfolio", "Monitoring", "Alerts", "MFI", "Analytics"],
  },
  {
    id: "cashflow",
    name: "CashFlow Predictor",
    tagline: "Predict borrower cash flows before lending",
    description:
      "Predict borrower cash flows 30, 60, and 90 days into the future using transaction history and behavioral signals. Helps lenders structure repayment plans that match real income cycles.",
    status: "in-dev",
    icon: Brain,
    color: "from-rose-500/20 to-pink-500/20",
    stats: [
      { label: "Avg latency", value: "600ms" },
      { label: "Forecast horizon", value: "90 days" },
      { label: "Accuracy", value: "91.2%" },
      { label: "Data signals", value: "22+" },
    ],
    features: [
      "30/60/90-day cashflow forecasting",
      "Income cycle pattern detection",
      "Optimal repayment date suggestion",
      "Seasonal income adjustment",
      "Mobile money transaction analysis",
      "Confidence intervals on predictions",
    ],
    endpoint: "POST /v1/cashflow/predict",
    tags: ["Forecasting", "Time Series", "ML", "BNPL", "Repayment"],
  },
  {
    id: "kyc",
    name: "KYC Intelligence",
    tagline: "Identity verification for African documents",
    description:
      "AI-powered identity verification adapted for African documents — CNIB, passeport, carte nationale d'identité, carte d'électeur. Liveness detection, face matching, and document authenticity in one API call.",
    status: "in-dev",
    icon: UserCheck,
    color: "from-cyan-500/20 to-blue-500/20",
    stats: [
      { label: "Avg latency", value: "900ms" },
      { label: "Doc types", value: "16+" },
      { label: "Accuracy", value: "98.4%" },
      { label: "Countries", value: "12+" },
    ],
    features: [
      "CNIB, passeport, carte nationale",
      "Carte d'électeur and more",
      "Liveness detection (anti-spoofing)",
      "Face matching against document",
      "Document authenticity scoring",
      "Covers 12+ African countries",
    ],
    endpoint: "POST /v1/kyc/verify",
    tags: ["KYC", "Identity", "Face Match", "Liveness", "OCR"],
  },
]

const statusConfig = {
  "live": { label: "● live", className: "text-primary border-primary/30 bg-primary/10" },
  "coming-soon": { label: "◐ coming soon", className: "text-yellow-500 border-yellow-500/30 bg-yellow-500/10" },
  "in-dev": { label: "◌ in dev", className: "text-muted-foreground border-border bg-secondary/40" },
}

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <div className="relative z-10 px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-16 sm:mb-20 space-y-4 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              Intelligence Suite
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Seven AI engines.
              <br />
              <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                One platform.
              </span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Every API in the Kredal suite is built specifically for African financial contexts —
              trained on local data, calibrated for local realities.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-5">
            {products.map((product, index) => (
              <article
                key={product.id}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 glass hover:border-primary/40 hover:bg-card/70 transition-all duration-400 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  product.color,
                )} />

                <div className="relative z-10 p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-3 lg:items-start">

                    {/* Left — Info */}
                    <div className="lg:col-span-2 space-y-5">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/80 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                            <product.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold tracking-tight group-hover:text-gradient transition-all duration-300">
                              {product.name}
                            </h2>
                            <p className="font-mono text-xs text-muted-foreground">{product.tagline}</p>
                          </div>
                        </div>
                        <span className={cn(
                          "font-mono text-xs px-3 py-1.5 rounded-lg border shrink-0",
                          statusConfig[product.status as keyof typeof statusConfig].className,
                        )}>
                          {statusConfig[product.status as keyof typeof statusConfig].label}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="grid gap-2 sm:grid-cols-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5 text-sm">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right — Stats + Endpoint */}
                    <div className="space-y-4">
                      {/* Stats grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {product.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="rounded-lg border border-border/60 bg-card/60 p-3 text-center"
                          >
                            <div className="font-mono text-lg font-bold text-primary">{stat.value}</div>
                            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Endpoint */}
                      <div className="rounded-lg border border-border/60 bg-card/60 overflow-hidden">
                        <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/40 px-3 py-2">
                          <div className="h-2 w-2 rounded-full bg-primary/60" />
                          <span className="font-mono text-[10px] text-muted-foreground">endpoint</span>
                        </div>
                        <div className="p-3 font-mono text-xs text-primary">
                          {product.endpoint}
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href={`/docs/${product.id}`}
                        className="group/btn w-full inline-flex items-center justify-center gap-3 rounded-lg border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/10 active:scale-[0.98]"
                      >
                        <span>View documentation</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}