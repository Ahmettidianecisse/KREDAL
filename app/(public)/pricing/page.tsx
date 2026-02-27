import type { Metadata } from "next"
import { Check, Zap, ArrowRight, Sparkles, TrendingUp, Shield, Clock } from "lucide-react"
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
    description: "Pour les développeurs qui testent l'API Kredal.",
    calls: "100",
    highlight: false,
    featured: false,
    badge: null,
    cta: "Start free",
    ctaHref: "/docs",
    features: [
      "100 API calls / month",
      "Kredal Score API",
      "JSON responses",
      "Community support",
      "API playground access",
      "Basic documentation",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: "79",
    period: "/ month",
    description: "Pour les petites MFIs qui démarrent leur intégration.",
    calls: "300",
    highlight: false,
    featured: false,
    badge: "Early Adopter",
    cta: "Get started",
    ctaHref: "/checkout/starter",
    features: [
      "300 API calls / month",
      "Kredal Score API",
      "Explainable AI output",
      "Email support",
      "99.9% uptime SLA",
      "Full documentation",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: "199",
    period: "/ month",
    description: "Pour les fintechs en croissance prêtes à passer en production.",
    calls: "1,000",
    highlight: false,
    featured: true,
    badge: "Most Popular",
    cta: "Scale up",
    ctaHref: "/checkout/growth",
    features: [
      "1,000 API calls / month",
      "Kredal Score API",
      "FraudShield API",
      "Explainable AI output",
      "Email + Slack support",
      "Webhook support",
      "99.9% uptime SLA",
      "Full documentation",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    price: "499",
    period: "/ month",
    description: "Pour les grandes MFIs et institutions avec des volumes élevés.",
    calls: "5,000",
    highlight: true,
    featured: true,
    badge: "Best Value",
    cta: "Go to Scale",
    ctaHref: "/checkout/scale",
    features: [
      "5,000 API calls / month",
      "All Growth features",
      "DocIntel API",
      "CashFlow Predictor",
      "Priority support 24h",
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
    description: "Pour les banques et grandes institutions à grande échelle.",
    calls: "Unlimited",
    highlight: false,
    featured: false,
    badge: null,
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

const roiStats = [
  {
    icon: TrendingUp,
    label: "Économies moyennes",
    value: "$9,240",
    sub: "par mois sur les défauts évités",
    color: "text-primary",
  },
  {
    icon: Shield,
    label: "Réduction des défauts",
    value: "-28%",
    sub: "en moyenne après 90 jours",
    color: "text-primary",
  },
  {
    icon: Clock,
    label: "Temps d'analyse",
    value: "300ms",
    sub: "vs 72h en processus manuel",
    color: "text-primary",
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
  {
    q: "Est-ce que je peux tester avant de payer ?",
    a: "Oui — le plan Sandbox est gratuit pour toujours. Testez l'API, intégrez, validez. Passez en payant quand vous êtes prêt.",
  },
  {
    q: "Que se passe-t-il si je dépasse mon quota ?",
    a: "Vous recevez une alerte à 80% du quota. Au-delà, les appels supplémentaires sont facturés à $0.02/appel ou vous pouvez upgrader votre plan.",
  },
]

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <div className="relative z-10 px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-10 sm:mb-14 text-center space-y-4 animate-fade-in-up">
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
            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <p className="font-mono text-xs text-muted-foreground">
                Early adopter pricing — locked in for your first 12 months
              </p>
            </div>
          </div>

          {/* ROI Banner */}
          <div className="mb-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-widest text-primary text-center mb-6">
              Pourquoi Kredal se paye tout seul
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {roiStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className={cn("text-2xl font-bold font-mono", stat.color)}>{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="text-[10px] text-muted-foreground/60">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6 font-mono">
              Un client Starter à $79/mois économise en moyenne{" "}
              <span className="text-primary font-bold">$9,240/mois</span> sur les défauts évités.
              ROI : <span className="text-primary font-bold">116x</span>.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 mb-20 sm:mb-28">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border bg-card/40 p-6 glass transition-all duration-400 hover-lift animate-fade-in-up",
                  plan.highlight
                    ? "border-primary/50 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8 lg:scale-105"
                    : "border-border/60 hover:border-primary/40 hover:bg-card/70",
                )}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                {plan.badge && (
                  <div className={cn(
                    "absolute left-1/2 -translate-x-1/2 -top-px flex items-center gap-2 rounded-b-lg border border-t-0 px-3.5 py-1.5",
                    plan.highlight
                      ? "border-primary/40 bg-primary/15 animate-pulse-glow"
                      : "border-primary/20 bg-primary/8"
                  )}>
                    {plan.highlight && <Sparkles className="h-3 w-3 text-primary" />}
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}

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
                      plan.price === "Custom" ? "text-3xl" : "text-4xl",
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
                  {plan.price !== "0" && plan.price !== "Custom" && (
                    <p className="font-mono text-[10px] text-muted-foreground/50 mt-0.5">
                      ≈ ${(Number(plan.price) / Number(plan.calls.replace(/,/g, "")) * 1000).toFixed(2)} / 1k calls
                    </p>
                  )}
                </div>

                <div className="h-px bg-border/50 mb-5" />

                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaHref}
                  className={cn(
                    "group/btn relative w-full inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-500 active:scale-[0.98]",
                    plan.highlight
                      ? "border-primary bg-primary/15 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10",
                  )}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <ArrowRight className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  {plan.highlight && (
                    <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover/btn:translate-x-0" />
                  )}
                </a>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* Annual pricing nudge */}
          <div className="mb-16 text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5">
              <Zap className="h-4 w-4 text-primary" />
              <p className="font-mono text-xs text-muted-foreground">
                Paiement annuel ?{" "}
                <span className="text-primary font-bold">2 mois offerts</span>
                {" "}— contactez-nous à hello@kredal.ai
              </p>
            </div>
          </div>

          {/* Revenue Share */}
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
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Pour les grandes institutions, on propose un modèle de revenue share — pas de frais fixes,
                  Kredal prend un petit pourcentage sur chaque décision de prêt alimentée par notre IA.
                  Vous payez uniquement quand vous gagnez.
                </p>
                <a
                  href="mailto:hello@kredal.ai"
                  className="group inline-flex items-center gap-3 font-mono text-sm text-primary transition-all duration-300 hover:gap-4"
                >
                  <span className="underline-animate">Parler du revenue share</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card/60 overflow-hidden">
                <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/40 px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground">roi_calculator.js</span>
                </div>
                <div className="p-5 font-mono text-xs space-y-2">
                  <div className="text-muted-foreground">
                    <span className="text-primary">{">"} </span>
                    <span>// Plan Starter — $79/mois · MFI Dakar</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span className="pl-4">prêts_par_mois</span>
                    <span className="text-primary">= 200</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span className="pl-4">montant_moyen</span>
                    <span className="text-primary">= $750</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span className="pl-4">défauts_évités</span>
                    <span className="text-primary">= -28%</span>
                  </div>
                  <div className="h-px bg-border/50 my-3" />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground pl-4">économies</span>
                    <span className="text-primary font-bold">= $9,240 / mois</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground pl-4">coût_kredal</span>
                    <span className="text-primary">= $79 / mois</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground pl-4">ROI</span>
                    <span className="text-primary font-bold text-sm">= 116x 🚀</span>
                  </div>
                  <div className="pt-2 text-muted-foreground/50 text-[10px]">
                    # based on avg MFI portfolio — Senegal
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
                    <h3 className="font-semibold tracking-tight text-sm">{faq.q}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center animate-fade-in-up">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 sm:p-12">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Prêt à commencer ?</p>
              <h2 className="text-3xl font-bold mb-4">Intégrez Kredal en moins de 10 minutes.</h2>
              <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
                Documentation complète, sandbox gratuit, support réactif.
                Vos équipes techniques seront opérationnelles aujourd'hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/docs"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary/15 px-6 py-3 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Zap className="h-4 w-4" />
                  Start for free
                </a>
                <a
                  href="mailto:hello@kredal.ai"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-mono text-sm text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  Talk to sales
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}