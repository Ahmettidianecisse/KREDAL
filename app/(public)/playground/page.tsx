"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Zap, ArrowRight, RefreshCw, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

const sampleBorrowers = [
  { name: "Amadou Diallo", phone: "+221 77 123 4567", city: "Dakar" },
  { name: "Fatou Mbaye", phone: "+221 76 234 5678", city: "Thiès" },
  { name: "Oumar Sy", phone: "+221 78 345 6789", city: "Saint-Louis" },
  { name: "Aissatou Diop", phone: "+221 70 456 7890", city: "Ziguinchor" },
]

type ScoreResult = {
  score: number
  risk: "LOW" | "MEDIUM" | "HIGH"
  recommendation: "APPROVE" | "REVIEW" | "DECLINE"
  confidence: number
  latency: number
  factors: { name: string; score: number; impact: "positive" | "negative" | "neutral" }[]
  explanation: string
}

function generateMockScore(name: string): ScoreResult {
  const hash = name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const score = 450 + (hash % 400)
  const risk = score >= 700 ? "LOW" : score >= 550 ? "MEDIUM" : "HIGH"
  const recommendation = score >= 700 ? "APPROVE" : score >= 550 ? "REVIEW" : "DECLINE"

  return {
    score,
    risk,
    recommendation,
    confidence: 88 + (hash % 10),
    latency: 240 + (hash % 100),
    factors: [
      { name: "Mobile Money Flow", score: 60 + (hash % 35), impact: "positive" },
      { name: "Repayment History", score: 50 + (hash % 40), impact: score > 650 ? "positive" : "negative" },
      { name: "Behavioral Score", score: 65 + (hash % 30), impact: "positive" },
      { name: "Social Signals", score: 40 + (hash % 45), impact: "neutral" },
      { name: "Income Regularity", score: 55 + (hash % 35), impact: score > 600 ? "positive" : "negative" },
    ],
    explanation:
      score >= 700
        ? `${name} présente un profil de risque faible. Les flux mobile money sont réguliers et l'historique de remboursement est solide.`
        : score >= 550
        ? `${name} présente un profil de risque modéré. Une vérification supplémentaire est recommandée avant approbation.`
        : `${name} présente un profil de risque élevé. Les signaux comportementaux indiquent un risque de défaut élevé.`,
  }
}

export default function PlaygroundPage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<ScoreResult | null>(null)
  const [logs, setLogs] = useState<string[]>([])

  const handleScore = async () => {
    if (!name.trim()) return

    setIsLoading(true)
    setResult(null)
    setLogs([])

    const steps = [
      "$ kredal score --init",
      "> Connecting to Kredal API...",
      "> Fetching alternative data sources...",
      ">  mobile_money: ✓ analyzed",
      ">  behavioral: ✓ analyzed",
      ">  social_signals: ✓ analyzed",
      ">  repayment_history: ✓ analyzed",
      "> Running ML model...",
      "> Generating explanation...",
      "> Score generated ✓",
    ]

    for (let i = 0; i < steps.length; i++) {
      await new Promise((r) => setTimeout(r, 200 + Math.random() * 150))
      setLogs((prev) => [...prev, steps[i]])
    }

    const mockResult = generateMockScore(name)
    setResult(mockResult)
    setIsLoading(false)
  }

  const handleSample = (borrower: typeof sampleBorrowers[0]) => {
    setName(borrower.name)
    setPhone(borrower.phone)
    setResult(null)
    setLogs([])
  }

  const handleReset = () => {
    setName("")
    setPhone("")
    setResult(null)
    setLogs([])
  }

  const riskConfig = {
    LOW: { color: "text-primary", bg: "bg-primary/10 border-primary/30", icon: CheckCircle },
    MEDIUM: { color: "text-yellow-500", bg: "bg-yellow-500/10 border-yellow-500/30", icon: AlertTriangle },
    HIGH: { color: "text-destructive", bg: "bg-destructive/10 border-destructive/30", icon: XCircle },
  }

  const recommendationConfig = {
    APPROVE: { color: "text-primary", label: "APPROVE" },
    REVIEW: { color: "text-yellow-500", label: "REVIEW" },
    DECLINE: { color: "text-destructive", label: "DECLINE" },
  }

  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <div className="relative z-10 px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-12 space-y-4 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              Playground
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Test the API.
              <br />
              <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                See the magic.
              </span>
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Score a borrower in real-time. No account required — just enter a name and see Kredal in action.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">

            {/* Left — Input */}
            <div className="space-y-5 animate-fade-in-up stagger-2">

              {/* Sample borrowers */}
              <div className="rounded-xl border border-border/60 bg-card/40 glass p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                  Sample borrowers
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {sampleBorrowers.map((borrower) => (
                    <button
                      key={borrower.name}
                      onClick={() => handleSample(borrower)}
                      className="group flex flex-col items-start gap-1 rounded-lg border border-border/60 p-3 text-left transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 active:scale-[0.98]"
                    >
                      <span className="font-mono text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                        {borrower.name}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {borrower.city}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="rounded-xl border border-border/60 bg-card/40 glass p-5 sm:p-6 space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Borrower data
                </p>

                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-muted-foreground">
                      {">"} Full name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="ex: Amadou Diallo"
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-muted-foreground">
                      {">"} Phone number (optional)
                    </label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="ex: +221 77 123 4567"
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleScore}
                    disabled={!name.trim() || isLoading}
                    className="group relative flex-1 inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-6 py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isLoading ? (
                        <RefreshCw className="h-4 w-4 animate-spin" />
                      ) : (
                        <Zap className="h-4 w-4" />
                      )}
                      {isLoading ? "Scoring..." : "Run Score"}
                    </span>
                    <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
                  </button>

                  {(result || logs.length > 0) && (
                    <button
                      onClick={handleReset}
                      className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3.5 font-mono text-xs text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary active:scale-[0.98]"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <p className="font-mono text-[10px] text-muted-foreground/50 text-center">
                  * This is a sandbox environment. Data is simulated.
                </p>
              </div>
            </div>

            {/* Right — Terminal + Result */}
            <div className="space-y-5 animate-fade-in-up stagger-3">

              {/* Terminal logs */}
              <div className="rounded-xl border border-border bg-card/60 overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/40 px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">terminal://kredal/score</span>
                  {isLoading && (
                    <div className="ml-auto flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-[10px] text-muted-foreground">running</span>
                    </div>
                  )}
                  {result && (
                    <div className="ml-auto flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="font-mono text-[10px] text-primary">done</span>
                    </div>
                  )}
                </div>

                <div className="p-5 font-mono text-xs space-y-1.5 min-h-[200px]">
                  {logs.length === 0 && !isLoading && (
                    <div className="flex items-center gap-2 text-muted-foreground/40">
                      <span className="text-primary">$</span>
                      <span className="typing-cursor">waiting for input</span>
                    </div>
                  )}
                  {logs.map((log, i) => (
                    <div
                      key={i}
                      className={cn(
                        "transition-all duration-200",
                        log.startsWith("$") ? "text-primary" : log.includes("✓") ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {log}
                    </div>
                  ))}
                  {isLoading && logs.length > 0 && (
                    <div className="flex items-center gap-1 text-muted-foreground/40">
                      <span className="typing-cursor" />
                    </div>
                  )}
                </div>
              </div>

              {/* Score Result */}
              {result && (
                <div className="rounded-xl border border-primary/30 bg-card/60 glass overflow-hidden animate-scale-in">
                  <div className="flex items-center justify-between border-b border-border/50 bg-secondary/40 px-5 py-3">
                    <span className="font-mono text-xs text-muted-foreground">kredal://score/result</span>
                    <span className="font-mono text-[10px] text-primary">
                      {result.latency}ms
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 space-y-6">
                    {/* Score + Risk */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="font-mono text-6xl font-bold text-primary leading-none">
                          {result.score}
                        </div>
                        <div className="font-mono text-xs text-muted-foreground mt-1">
                          credit score / 1000
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <div className={cn(
                          "inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 font-mono text-xs font-bold",
                          riskConfig[result.risk].bg,
                          riskConfig[result.risk].color,
                        )}>
                          {result.risk} RISK
                        </div>
                        <div className="block">
                          <span className={cn(
                            "font-mono text-lg font-bold",
                            recommendationConfig[result.recommendation].color,
                          )}>
                            → {result.recommendation}
                          </span>
                        </div>
                        <div className="font-mono text-xs text-muted-foreground">
                          {result.confidence}% confidence
                        </div>
                      </div>
                    </div>

                    {/* Score bar */}
                    <div className="space-y-2">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/80">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-destructive via-yellow-500 to-primary transition-all duration-1000"
                          style={{ width: `${(result.score / 1000) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
                        <span>0</span>
                        <span>500</span>
                        <span>1000</span>
                      </div>
                    </div>

                    {/* Factors */}
                    <div className="space-y-2">
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        Key factors
                      </p>
                      {result.factors.map((factor) => (
                        <div key={factor.name} className="flex items-center gap-3">
                          <span className="font-mono text-xs text-muted-foreground w-36 shrink-0">
                            {factor.name}
                          </span>
                          <div className="flex-1 h-1.5 rounded-full bg-secondary/80 overflow-hidden">
                            <div
                              className={cn(
                                "h-full rounded-full transition-all duration-700",
                                factor.impact === "positive" ? "bg-primary" : factor.impact === "negative" ? "bg-destructive" : "bg-yellow-500",
                              )}
                              style={{ width: `${factor.score}%` }}
                            />
                          </div>
                          <span className={cn(
                            "font-mono text-xs w-8 text-right shrink-0",
                            factor.impact === "positive" ? "text-primary" : factor.impact === "negative" ? "text-destructive" : "text-yellow-500",
                          )}>
                            {factor.score}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Explanation */}
                    <div className="rounded-lg border border-border/50 bg-secondary/20 p-4">
                      <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
                        AI Explanation
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {result.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}