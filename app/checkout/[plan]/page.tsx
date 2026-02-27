"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowRight, Zap, Shield, Clock, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const PLANS = {
  starter: {
    name: "Starter",
    price: "$79",
    calls: "300 appels / mois",
    color: "border-primary/40",
    features: ["300 API calls / month", "Kredal Score API", "Explainable AI", "Email support"],
  },
  growth: {
    name: "Growth",
    price: "$199",
    calls: "1,000 appels / mois",
    color: "border-primary/60",
    features: ["1,000 API calls / month", "Kredal Score + FraudShield", "Webhook support", "Email + Slack support"],
  },
  scale: {
    name: "Scale",
    price: "$499",
    calls: "5,000 appels / mois",
    color: "border-primary",
    features: ["5,000 API calls / month", "All APIs included", "DocIntel + CashFlow", "Priority support 24h"],
  },
}

export default function CheckoutPage() {
  const params = useParams()
  const router = useRouter()
  const planId = params.plan as string
  const plan = PLANS[planId as keyof typeof PLANS]

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  if (!plan) {
    router.push("/pricing")
    return null
  }

  const handleCheckout = async () => {
    if (!email || !email.includes("@")) {
      setError("Entrez une adresse email valide.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_KREDAL_API}/v1/billing/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ plan: planId, email }),
        }
      )

      const data = await res.json()

      if (!res.ok) throw new Error(data.detail || "Erreur lors du checkout")

      // Redirect vers Stripe Checkout
      window.location.href = data.checkout_url

    } catch (err: any) {
      setError(err.message || "Une erreur est survenue. Réessayez.")
      setLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <div className="relative z-10 px-4 sm:px-6 pt-28 pb-20">
        <div className="mx-auto max-w-lg">

          {/* Header */}
          <div className="mb-10 text-center space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Checkout</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Plan <span className="text-primary">{plan.name}</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Vous serez redirigé vers Stripe pour finaliser votre paiement.
            </p>
          </div>

          {/* Plan summary */}
          <div className={cn(
            "mb-8 rounded-xl border bg-card/40 p-6 glass animate-fade-in-up",
            plan.color
          )}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">{plan.name}</p>
                <p className="text-3xl font-bold">{plan.price}<span className="text-sm font-normal text-muted-foreground font-mono"> / mois</span></p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-primary">{plan.calls}</p>
                <p className="font-mono text-[10px] text-muted-foreground/50 mt-1">facturation mensuelle</p>
              </div>
            </div>

            <div className="h-px bg-border/50 mb-4" />

            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-mono text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Email input */}
          <div className="mb-6 animate-fade-in-up">
            <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Adresse email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCheckout()}
              placeholder="vous@votreentreprise.com"
              className="w-full rounded-lg border border-border bg-card/40 px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            />
            {error && (
              <p className="mt-2 text-xs text-red-400 font-mono">{error}</p>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="group w-full inline-flex items-center justify-center gap-3 rounded-lg border border-primary bg-primary/15 px-6 py-3.5 font-mono text-sm uppercase tracking-wider text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Redirection vers Stripe...
              </>
            ) : (
              <>
                Payer {plan.price} / mois
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          {/* Trust badges */}
          <div className="mt-6 flex items-center justify-center gap-6 animate-fade-in-up">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Shield className="h-3.5 w-3.5 text-primary" />
              Paiement sécurisé Stripe
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-primary" />
              Annulable à tout moment
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" />
              Accès immédiat
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground/50 font-mono animate-fade-in-up">
            Des questions ? <a href="mailto:hello@kredal.ai" className="text-primary hover:underline">hello@kredal.ai</a>
          </p>

        </div>
      </div>
    </main>
  )
}