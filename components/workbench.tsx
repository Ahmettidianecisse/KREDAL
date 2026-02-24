import { cn } from "@/lib/utils"
import { ExternalLink, Zap } from "lucide-react"

const wipItems = [
  {
    id: 1,
    name: "kredal-score-api",
    description: "Core credit scoring engine — 54+ alternative data signals, 287ms avg latency, explainable output",
    progress: 90,
    lastUpdated: "Feb 2026",
    url: "/docs/score",
    status: "live",
  },
  {
    id: 2,
    name: "fraudshield-api",
    description: "Real-time fraud detection — SIM swap, mobile money fraud, synthetic identity patterns",
    progress: 65,
    lastUpdated: "Feb 2026",
    url: "/docs/fraud",
    status: "building",
  },
  {
    id: 3,
    name: "docintel-api",
    description: "Document AI — PDF extraction, mobile money screenshots, OCR for 15+ African document types",
    progress: 55,
    lastUpdated: "Jan 2026",
    url: "/docs/docintel",
    status: "building",
  },
  {
    id: 4,
    name: "loanvoice-api",
    description: "Multilingual voice scoring agent — Wolof, Bambara, Swahili, Hausa, French interview engine",
    progress: 35,
    lastUpdated: "Jan 2026",
    url: "/docs/loanvoice",
    status: "forging",
  },
  {
    id: 5,
    name: "portfolioguard-api",
    description: "Portfolio monitoring at scale — early warning alerts, default prediction for 500K+ borrowers",
    progress: 25,
    lastUpdated: "Dec 2025",
    url: "/docs/portfolio",
    status: "forging",
  },
  {
    id: 6,
    name: "kyc-intelligence-api",
    description: "African KYC — CNIB, passeport, carte d'électeur, liveness detection, face matching",
    progress: 20,
    lastUpdated: "Dec 2025",
    url: "/docs/kyc",
    status: "forging",
  },
]

export function Workbench() {
  return (
    <section id="workbench" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Work in Progress
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Workbench</h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Active APIs being forged, tested, and refined. The full Kredal intelligence suite — in real-time.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card/40 glass backdrop-blur-sm overflow-hidden hover-lift animate-scale-in stagger-2">
          {/* Terminal header */}
          <div className="flex items-center gap-3 border-b border-border/50 bg-secondary/40 px-4 sm:px-5 py-3.5 sm:py-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-destructive/60 transition-colors hover:bg-destructive cursor-pointer" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60 transition-colors hover:bg-yellow-500 cursor-pointer" />
              <div className="h-3 w-3 rounded-full bg-primary/60 transition-colors hover:bg-primary cursor-pointer" />
            </div>
            <span className="ml-4 font-mono text-xs text-muted-foreground truncate">~/kredal/apis/active</span>
            <div className="ml-auto hidden sm:flex items-center gap-2 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs">forging</span>
            </div>
          </div>

          {/* Items */}
          <div className="divide-y divide-border/30">
            {wipItems.map((item, index) => (
              <a
                key={item.id}
                href={item.url}
                className="group flex flex-col gap-4 p-5 sm:p-6 transition-all duration-300 sm:flex-row sm:items-center sm:justify-between hover:bg-secondary/30 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="flex-1 space-y-2 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-mono text-sm shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                      $
                    </span>
                    <h4 className="font-mono text-sm font-medium tracking-tight transition-colors group-hover:text-gradient truncate">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Zap className="h-3.5 w-3.5 text-primary" />
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                  </div>
                  <p className="pl-6 text-xs text-muted-foreground line-clamp-2 sm:line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 pl-6 sm:pl-0 sm:justify-end">
                  {/* Progress bar */}
                  <div className="flex items-center gap-3 flex-1 sm:flex-none">
                    <div className="h-2 w-full sm:w-28 overflow-hidden rounded-full bg-secondary/80 relative">
                      <div
                        className={cn(
                          "h-full rounded-full transition-all duration-700 ease-out",
                          item.progress >= 80
                            ? "bg-primary"
                            : item.progress >= 50
                              ? "bg-yellow-500"
                              : "bg-orange-500",
                        )}
                        style={{ width: `${item.progress}%` }}
                      />
                      <div className="absolute inset-0 animate-shimmer opacity-30" />
                    </div>
                    <span
                      className={cn(
                        "font-mono text-xs w-10 shrink-0 transition-colors",
                        item.progress >= 80 ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {item.progress}%
                    </span>
                  </div>

                  {/* Status badge */}
                  <span
                    className={cn(
                      "font-mono text-xs shrink-0 px-2.5 py-1 rounded-md border",
                      item.status === "live"
                        ? "text-primary border-primary/30 bg-primary/10"
                        : item.status === "building"
                          ? "text-yellow-500 border-yellow-500/30 bg-yellow-500/10"
                          : "text-muted-foreground border-border bg-secondary/40",
                    )}
                  >
                    {item.status}
                  </span>

                  <span className="font-mono text-xs text-muted-foreground shrink-0 hidden sm:block">
                    {item.lastUpdated}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Terminal footer */}
          <div className="border-t border-border/50 bg-secondary/30 px-4 sm:px-5 py-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="text-primary">❯</span>
              <span className="typing-cursor truncate">kredal deploy --all --env production</span>
              <span className="ml-auto text-primary/50 hidden sm:block">press enter to run</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}