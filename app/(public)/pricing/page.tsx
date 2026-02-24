import type { Metadata } from "next"
import { Check, Zap, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Pricing | KREDAL",
  description: "Simple, transparent pricing for African fintechs. Start free, scale as you grow.",
}

const plans = [
  {
    id: "free",
    name: "Sandbox",
    price: "0",
    period: "forever",
    description: "Perfect for developers testing the Kredal API.",
    calls: "500",
    highlight: false,
    featured: false,
    cta: "Start free",
    ctaHref: "/docs",
    features: [
      "500 API calls / month",
      "Kredal Score API",
      "JSON responses",
      "Community support",
      "API playground access",
      "Basic documentation",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "99",
    period: "/ month",
    description: "For early-stage fintechs ready to go live.",
    calls: "10,000",
    highlight: false,
    featured: true,
    cta: "Get started",
    ctaHref: "/checkout/growth",
    features: [
      "10,000 API calls / month",
      "Kredal Score API",
      "FraudShield API",
      "Explainable AI output",
      "Email support",
      "Webhook support",
      "99.9% uptime SLA",
      "Full documentation",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: "299",
    period: "/ month",
    description: "For growing fintechs with high loan volumes.",
    calls: "50,000",
    highlight: true,
    featured: true,
    cta: "Scale now",
    ctaHref: "/checkout/scale",
    features: [
      "50,000 API calls / month",
      "All Growth features",
      "DocIntel API",
      "CashFlow Predictor",
      "Priority support",
      "Custom webhooks",
      "Advanced analytics",
      "Batch processing",
      "Dedicated onboarding",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For banks and large institutions at scale.",
    calls: "Unlimited",
    highlight: false,
    featured: false,
    cta: "Contact us",
    ctaHref: "mailto:hello@kredal.ai",
    features: [
      "Unlimited API calls",
      "Full Intelligence Suite",
      "LoanVoice API",
      "PortfolioGuard API",
      "KYC Intelligence API",
      "Custom model training",
      "Dedicated infrastructure",
      "24/7 SLA support",
      "Revenue share model",
      "Custom contract",
    ],
  },
]

const faqs = [
  {
    q: "Qu'est-ce qu'un appel API ?",
    a: "Un appel API correspond à une requête de scoring — c'est-à-dire chaque fois que vous demandez un score pour un emprunteur. Un emprunteur = un appel.",
  },
  {
    q: "Puis-je changer de plan à tout moment ?",
    a: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet immédiatement.",
  },
  {
    q: "Comment fonctionne la facturation ?",
    a: "Facturation mensuelle via Stripe. Vous pouvez payer par carte bancaire ou mobile money (Wave, Orange Money).",
  },
  {
    q: "Y a-t-il des frais cachés ?",
    a: "Non. Le prix affiché est le prix total. Pas de frais d'installation, pas de frais de support caché.",
  },
]

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <div className="relative z-10 px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-16 sm:mb-20 text-center space-y-4 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              Pricing
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Simple pricing.
              <br />
              <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                Serious scale.
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
              Start free, pay as you grow. No hidden fees, no surprises —
              just transparent pricing built for African fintechs.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-20 sm:mb-28">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 hover-lift animate-fade-in-up",
                  plan.highlight
                    ? "border-primary/50 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8 lg:scale-105"
                    : "border-border/60 hover:border-primary/40 hover:bg-card/70",
                )}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {/* Most popular badge */}
                {plan.highlight && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-px flex items-center gap-2 rounded-b-lg border border-t-0 border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                    <Sparkles className="h-3 w-3 text-primary" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <div className="mb-5 mt-2">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    {plan.price !== "Custom" && (
                      <span className="font-mono text-xs text-muted-foreground">$</span>
                    )}
                    <span className={cn(
                      "font-bold tracking-tight leading-none",
                      plan.price === "Custom" ? "text-3xl" : "text-4xl sm:text-5xl",
                    )}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="font-mono text-xs text-muted-foreground mb-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-primary">
                    {plan.calls} calls / month
                  </p>
                </div>

                <div className="h-px bg-border/50 mb-5" />

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={cn(
                    "group/btn relative w-full inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border px-6 py-3 font-mono text-xs uppercase tracking-wider transition-all duration-500 active:scale-[0.98]",
                    plan.highlight
                      ? "border-primary bg-primary/15 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10",
                  )}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  {plan.highlight && (
                    <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover/btn:translate-x-0" />
                  )}
                </a>

                {/* Bottom border animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Usage based section */}
          <div className="mb-20 sm:mb-28 rounded-xl border border-border bg-card/40 glass p-8 sm:p-12 animate-fade-in-up hover-lift">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                  Revenue Share
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Align incentives.
                  <br />
                  <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                    Grow together.
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For large institutions, we offer a revenue share model — instead of a fixed monthly fee,
                  Kredal takes a small percentage on each loan decision powered by our AI.
                  The more you lend, the more we earn together.
                </p>
                <a
                  href="mailto:hello@kredal.ai"
                  className="group inline-flex items-center gap-3 font-mono text-sm text-primary transition-all duration-300 hover:gap-4"
                >
                  <span className="underline-animate">Talk to us about revenue share</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Terminal */}
              <div className="rounded-xl border border-border bg-card/60 overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/40 px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">revenue_share.calc</span>
                </div>
                <div className="p-5 font-mono text-xs space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span className="text-primary">$</span>
                    <span>loans_this_month = 1_000_000 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground pl-4">kredal_share</span>
                    <span className="text-primary">= 0.5%</span>
                  </div>
                  <div className="h-px bg-border/50 my-3" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground pl-4">kredal_revenue</span>
                    <span className="text-primary font-bold">= $5,000 / month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground pl-4">your_savings_vs_fixed</span>
                    <span className="text-primary">= $0 fixed cost</span>
                  </div>
                  <div className="pt-2 text-muted-foreground/50 text-[10px]">
                    # only pay when you earn
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="animate-fade-in-up">
            <div className="mb-10 space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">FAQ</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Questions fréquentes</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/60 bg-card/40 glass p-6 hover:border-primary/40 hover:bg-card/70 transition-all duration-300 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-primary font-mono text-sm shrink-0">{">"}</span>
                    <h3 className="font-semibold tracking-tight">{faq.q}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}