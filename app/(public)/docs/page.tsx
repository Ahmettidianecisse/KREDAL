"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Copy, Check, ChevronRight, Zap, Shield, FileText, Mic, BarChart3, Brain, UserCheck } from "lucide-react"

const sidebarItems = [
  { id: "introduction", label: "Introduction", icon: null },
  { id: "authentication", label: "Authentication", icon: null },
  { id: "quickstart", label: "Quick Start", icon: null },
  { id: "score", label: "Kredal Score", icon: Zap },
  { id: "fraud", label: "FraudShield", icon: Shield },
  { id: "docintel", label: "DocIntel", icon: FileText },
  { id: "loanvoice", label: "LoanVoice", icon: Mic },
  { id: "portfolio", label: "PortfolioGuard", icon: BarChart3 },
  { id: "cashflow", label: "CashFlow Predictor", icon: Brain },
  { id: "kyc", label: "KYC Intelligence", icon: UserCheck },
  { id: "errors", label: "Error Handling", icon: null },
  { id: "sdks", label: "SDKs & Libraries", icon: null },
]

const codeExamples = {
  curl: `curl -X POST https://api.kredal.ai/v1/score \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Amadou Diallo",
    "phone": "+221771234567",
    "mobile_money": true,
    "country": "SN"
  }'`,
  python: `import requests

response = requests.post(
  "https://api.kredal.ai/v1/score",
  headers={
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  json={
    "name": "Amadou Diallo",
    "phone": "+221771234567",
    "mobile_money": True,
    "country": "SN"
  }
)

result = response.json()
print(f"Score: {result['score']}")
print(f"Recommendation: {result['recommendation']}")`,
  javascript: `const response = await fetch(
  "https://api.kredal.ai/v1/score",
  {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Amadou Diallo",
      phone: "+221771234567",
      mobile_money: true,
      country: "SN"
    })
  }
)

const result = await response.json()
console.log(\`Score: \${result.score}\`)
console.log(\`Recommendation: \${result.recommendation}\`)`,
}

const responseExample = `{
  "score": 782,
  "risk_level": "LOW",
  "recommendation": "APPROVE",
  "confidence": 94.3,
  "latency_ms": 287,
  "factors": {
    "mobile_money_flow": 88,
    "repayment_history": 72,
    "behavioral_score": 91,
    "social_signals": 65,
    "income_regularity": 78
  },
  "explanation": {
    "fr": "Profil de risque faible. Flux mobile money réguliers et historique solide.",
    "en": "Low risk profile. Regular mobile money flows and solid repayment history."
  },
  "request_id": "req_abc123xyz",
  "timestamp": "2026-02-24T04:00:00Z"
}`

function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/50 bg-secondary/40 px-4 py-2.5">
        <span className="font-mono text-xs text-muted-foreground">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "copied!" : "copy"}
        </button>
      </div>
      <pre className="p-5 font-mono text-xs text-foreground/80 overflow-x-auto leading-relaxed bg-card/60">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [activeLang, setActiveLang] = useState<"curl" | "python" | "javascript">("curl")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <div className="relative z-10 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex gap-8 lg:gap-12">

            {/* Sidebar */}
            <aside className="hidden lg:block w-56 shrink-0 pt-16">
              <div className="sticky top-24 space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-3 mb-4">
                  Documentation
                </p>
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={cn(
                      "w-full flex items-center gap-2.5 rounded-lg px-3 py-2.5 font-mono text-xs text-left transition-all duration-200",
                      activeSection === item.id
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                    )}
                  >
                    {item.icon && <item.icon className="h-3.5 w-3.5 shrink-0" />}
                    {!item.icon && (
                      <ChevronRight className={cn(
                        "h-3 w-3 shrink-0 transition-transform",
                        activeSection === item.id && "text-primary",
                      )} />
                    )}
                    {item.label}
                  </button>
                ))}
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 pt-12 pb-20 min-w-0">

              {/* Introduction */}
              <section className="mb-16 animate-fade-in-up">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-3">
                  Documentation
                </p>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                  Kredal API
                  <br />
                  <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                    Reference
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  Everything you need to integrate Kredal into your fintech product.
                  Score borrowers, detect fraud, verify identity — all via simple REST APIs.
                </p>

                {/* Base URL */}
                <div className="rounded-xl border border-border bg-card/40 glass overflow-hidden mb-6">
                  <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/40 px-4 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-xs text-muted-foreground">Base URL</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-primary">
                    https://api.kredal.ai/v1
                  </div>
                </div>
              </section>

              {/* Authentication */}
              <section className="mb-16 animate-fade-in-up stagger-2">
                <h2 className="text-2xl font-bold tracking-tight mb-2">Authentication</h2>
                <div className="h-px bg-border/50 mb-6" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  All API requests require an API key passed in the <code className="font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded text-xs">Authorization</code> header.
                  Get your API key from the dashboard after signing up.
                </p>
                <CodeBlock
                  language="Authorization header"
                  code={`Authorization: Bearer YOUR_API_KEY`}
                />
                <div className="mt-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
                  <p className="font-mono text-xs text-yellow-500 flex items-start gap-2">
                    <span className="shrink-0">⚠</span>
                    Never expose your API key in client-side code. Always use it server-side.
                  </p>
                </div>
              </section>

              {/* Quick Start */}
              <section className="mb-16 animate-fade-in-up stagger-3">
                <h2 className="text-2xl font-bold tracking-tight mb-2">Quick Start</h2>
                <div className="h-px bg-border/50 mb-6" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Score your first borrower in under 2 minutes. Choose your language:
                </p>

                {/* Language tabs */}
                <div className="flex gap-2 mb-4">
                  {(["curl", "python", "javascript"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveLang(lang)}
                      className={cn(
                        "rounded-lg border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.98]",
                        activeLang === lang
                          ? "border-primary bg-primary/15 text-primary"
                          : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground",
                      )}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <CodeBlock
                  language={`Request — ${activeLang}`}
                  code={codeExamples[activeLang]}
                />

                <div className="mt-5">
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    Response
                  </p>
                  <CodeBlock language="JSON response" code={responseExample} />
                </div>
              </section>

              {/* Score API */}
              <section className="mb-16 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold tracking-tight">Kredal Score API</h2>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded border border-primary/30 bg-primary/10 text-primary">
                    ● LIVE
                  </span>
                </div>
                <div className="h-px bg-border/50 mb-6" />

                {/* Endpoint */}
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card/40 px-4 py-3 mb-6">
                  <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    POST
                  </span>
                  <span className="font-mono text-sm">/v1/score</span>
                </div>

                {/* Parameters */}
                <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Request Parameters
                </h3>
                <div className="rounded-xl border border-border overflow-hidden mb-6">
                  {[
                    { param: "name", type: "string", required: true, desc: "Full name of the borrower" },
                    { param: "phone", type: "string", required: false, desc: "Phone number with country code" },
                    { param: "country", type: "string", required: true, desc: "ISO country code (SN, CI, ML...)" },
                    { param: "mobile_money", type: "boolean", required: false, desc: "Include mobile money analysis" },
                    { param: "explain", type: "boolean", required: false, desc: "Include human-readable explanation" },
                  ].map((p, i) => (
                    <div
                      key={p.param}
                      className={cn(
                        "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-4",
                        i !== 0 && "border-t border-border/50",
                      )}
                    >
                      <code className="font-mono text-sm text-primary w-32 shrink-0">{p.param}</code>
                      <span className="font-mono text-xs text-muted-foreground w-16 shrink-0">{p.type}</span>
                      <span className={cn(
                        "font-mono text-[10px] px-2 py-0.5 rounded border w-fit shrink-0",
                        p.required
                          ? "text-primary border-primary/30 bg-primary/10"
                          : "text-muted-foreground border-border bg-secondary/40",
                      )}>
                        {p.required ? "required" : "optional"}
                      </span>
                      <span className="text-sm text-muted-foreground">{p.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Response fields */}
                <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Response Fields
                </h3>
                <div className="rounded-xl border border-border overflow-hidden">
                  {[
                    { field: "score", type: "integer", desc: "Credit score from 0 to 1000" },
                    { field: "risk_level", type: "string", desc: "LOW, MEDIUM, or HIGH" },
                    { field: "recommendation", type: "string", desc: "APPROVE, REVIEW, or DECLINE" },
                    { field: "confidence", type: "float", desc: "Model confidence percentage (0–100)" },
                    { field: "latency_ms", type: "integer", desc: "Processing time in milliseconds" },
                    { field: "factors", type: "object", desc: "Individual factor scores (0–100)" },
                    { field: "explanation", type: "object", desc: "Human-readable explanation in FR and EN" },
                  ].map((f, i) => (
                    <div
                      key={f.field}
                      className={cn(
                        "flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-4",
                        i !== 0 && "border-t border-border/50",
                      )}
                    >
                      <code className="font-mono text-sm text-primary w-36 shrink-0">{f.field}</code>
                      <span className="font-mono text-xs text-muted-foreground w-16 shrink-0">{f.type}</span>
                      <span className="text-sm text-muted-foreground">{f.desc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Error Handling */}
              <section className="mb-16 animate-fade-in-up">
                <h2 className="text-2xl font-bold tracking-tight mb-2">Error Handling</h2>
                <div className="h-px bg-border/50 mb-6" />
                <div className="rounded-xl border border-border overflow-hidden">
                  {[
                    { code: "400", label: "Bad Request", desc: "Missing or invalid parameters" },
                    { code: "401", label: "Unauthorized", desc: "Invalid or missing API key" },
                    { code: "429", label: "Too Many Requests", desc: "Rate limit exceeded" },
                    { code: "500", label: "Internal Error", desc: "Something went wrong on our end" },
                  ].map((err, i) => (
                    <div
                      key={err.code}
                      className={cn(
                        "flex items-center gap-4 px-5 py-4",
                        i !== 0 && "border-t border-border/50",
                      )}
                    >
                      <span className={cn(
                        "font-mono text-sm font-bold w-12 shrink-0",
                        err.code.startsWith("4") ? "text-yellow-500" : "text-destructive",
                      )}>
                        {err.code}
                      </span>
                      <span className="font-mono text-xs text-foreground w-36 shrink-0">{err.label}</span>
                      <span className="text-sm text-muted-foreground">{err.desc}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* SDKs */}
              <section className="animate-fade-in-up">
                <h2 className="text-2xl font-bold tracking-tight mb-2">SDKs & Libraries</h2>
                <div className="h-px bg-border/50 mb-6" />
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { lang: "Python", status: "available", install: "pip install kredal" },
                    { lang: "JavaScript", status: "available", install: "npm install @kredal/sdk" },
                    { lang: "PHP", status: "coming soon", install: "composer require kredal/sdk" },
                  ].map((sdk) => (
                    <div
                      key={sdk.lang}
                      className="rounded-xl border border-border/60 bg-card/40 glass p-5 hover:border-primary/40 transition-all duration-300 hover-lift"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm font-bold">{sdk.lang}</span>
                        <span className={cn(
                          "font-mono text-[10px] px-2 py-0.5 rounded border",
                          sdk.status === "available"
                            ? "text-primary border-primary/30 bg-primary/10"
                            : "text-muted-foreground border-border",
                        )}>
                          {sdk.status}
                        </span>
                      </div>
                      <code className="font-mono text-xs text-muted-foreground">{sdk.install}</code>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}