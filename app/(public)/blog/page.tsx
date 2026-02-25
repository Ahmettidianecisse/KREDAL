import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"



export const metadata: Metadata = {
  title: "Blog | KREDAL",
  description: "Technical insights, engineering decisions, and observations from building financial intelligence infrastructure for Africa.",
}

const posts = [
  {
    id: 1,
    slug: "scoring-sans-historique-bancaire",
    title: "Scorer sans historique bancaire : comment Kredal utilise les données alternatives",
    excerpt:
      "80% des Africains n'ont pas de compte bancaire. Voici comment on exploite le mobile money, les tontines et les signaux comportementaux pour scorer n'importe quel emprunteur en moins de 300ms.",
    date: "Feb 24, 2026",
    readTime: "8 min read",
    category: "credit scoring",
    color: "from-primary/20 to-emerald-500/20",
    featured: true,
  },
  {
    id: 2,
    slug: "explainable-ai-microfinance",
    title: "Explainable AI pour la microfinance : pourquoi la boîte noire ne suffit pas",
    excerpt:
      "Les agents de crédit doivent justifier leurs décisions. On explique comment Kredal génère des explications humaines pour chaque score — en français et en anglais.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "explainable ai",
    color: "from-blue-500/20 to-cyan-500/20",
    featured: true,
  },
  {
    id: 3,
    slug: "loanvoice-wolof",
    title: "LoanVoice : scorer un emprunteur en Wolof avec un agent IA vocal",
    excerpt:
      "Retour d'expérience sur la construction d'un agent vocal multilingue capable de mener un entretien de crédit en Wolof, Bambara et Hausa — sans smartphone requis.",
    date: "Jan 8, 2026",
    readTime: "10 min read",
    category: "voice ai",
    color: "from-purple-500/20 to-pink-500/20",
    featured: false,
  },
  {
    id: 4,
    slug: "architecture-api-300ms",
    title: "Architecture d'une API de scoring temps réel à moins de 300ms",
    excerpt:
      "FastAPI, XGBoost, Redis et feature engineering sur données africaines. Comment on a atteint 287ms de latence moyenne en production avec 99.9% d'uptime.",
    date: "Dec 20, 2025",
    readTime: "12 min read",
    category: "engineering",
    color: "from-orange-500/20 to-amber-500/20",
    featured: false,
  },
  {
    id: 5,
    slug: "fraud-detection-afrique",
    title: "Détecter la fraude mobile money en Afrique : patterns et solutions",
    excerpt:
      "SIM swap, identités synthétiques, fraude coordonnée — les patterns de fraude africains sont uniques. Voici comment FraudShield les détecte avec 97% de précision.",
    date: "Dec 5, 2025",
    readTime: "9 min read",
    category: "fraud detection",
    color: "from-rose-500/20 to-red-500/20",
    featured: false,
  },
  {
    id: 6,
    slug: "marche-credit-afrique-francophone",
    title: "Le marché du crédit en Afrique francophone : opportunités et défis",
    excerpt:
      "330 milliards de dollars de demande non satisfaite. Pourquoi l'Afrique francophone est le prochain grand marché fintech et comment Kredal se positionne pour le dominer.",
    date: "Nov 18, 2025",
    readTime: "7 min read",
    category: "market",
    color: "from-teal-500/20 to-cyan-500/20",
    featured: false,
  },
]

const categories = ["all", "credit scoring", "explainable ai", "voice ai", "engineering", "fraud detection", "market"]

export default function BlogPage() {
  const featuredPosts = posts.filter((p) => p.featured)
  const regularPosts = posts.filter((p) => !p.featured)

  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <div className="relative z-10 px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-16 sm:mb-20 space-y-4 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              Field Notes
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              From the lab.
              <br />
              <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                For the field.
              </span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Technical insights, engineering decisions, and observations from building
              financial intelligence infrastructure for Africa.
            </p>
          </div>

          {/* Featured posts */}
          <div className="mb-10 grid gap-5 sm:grid-cols-2 animate-fade-in-up stagger-2">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/60 bg-card/40 glass p-6 sm:p-8 transition-all duration-400 hover:border-primary/40 hover:bg-card/70 active:scale-[0.99] hover-lift"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  post.color,
                )} />

                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                      <span>{post.readTime}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h2 className="mb-3 text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                    {post.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    <span>read article</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* Regular posts */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {regularPosts.map((post, index) => (
              <article
                key={post.id}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-border/60 bg-card/40 glass p-6 transition-all duration-400 hover:border-primary/40 hover:bg-card/70 active:scale-[0.99] hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  post.color,
                )} />

                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
                    <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                      {post.category}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{post.date}</span>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                    {post.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 mb-5">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 sm:opacity-0 sm:-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                      <span>read more</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}