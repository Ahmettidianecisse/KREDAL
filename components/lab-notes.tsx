"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const notes = [
  {
    id: 1,
    title: "Scoring sans historique bancaire : comment Kredal utilise les données alternatives",
    excerpt:
      "80% des Africains n'ont pas de compte bancaire. Voici comment on exploite le mobile money, les tontines et les signaux comportementaux pour scorer n'importe quel emprunteur.",
    date: "Feb 2026",
    category: "credit scoring",
    color: "from-primary/20 to-emerald-500/20",
  },
  {
    id: 2,
    title: "Explainable AI pour la microfinance : pourquoi la boîte noire ne suffit pas",
    excerpt:
      "Les agents de crédit doivent justifier leurs décisions. On explique comment Kredal génère des explications humaines pour chaque score — en français et en anglais.",
    date: "Jan 2026",
    category: "explainable ai",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "LoanVoice : scorer un emprunteur en Wolof avec un agent IA vocal",
    excerpt:
      "Retour d'expérience sur la construction d'un agent vocal multilingue capable de mener un entretien de crédit en Wolof, Bambara et Hausa — sans smartphone requis.",
    date: "Jan 2026",
    category: "voice ai",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 4,
    title: "Architecture d'une API de scoring temps réel à moins de 300ms",
    excerpt:
      "FastAPI, XGBoost, Redis et feature engineering sur données africaines. Comment on a atteint 287ms de latence moyenne en production avec 99.9% d'uptime.",
    date: "Dec 2025",
    category: "engineering",
    color: "from-orange-500/20 to-amber-500/20",
  },
]

export function LabNotes() {
  const [expandedNote, setExpandedNote] = useState<number | null>(null)

  return (
    <section id="notes" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 sm:mb-14 space-y-3 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
            Field Notes
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            From the Lab
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Technical insights, engineering decisions, and observations from building financial intelligence
            infrastructure for Africa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {notes.map((note, index) => (
            <article
              key={note.id}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.99] hover-lift animate-fade-in-up",
                expandedNote === note.id && "border-primary/50 bg-card/70",
              )}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
              onClick={() => setExpandedNote(expandedNote === note.id ? null : note.id)}
            >
              {/* Gradient overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  note.color,
                )}
              />

              <div className="relative z-10">
                {/* Category + Date */}
                <div className="mb-4 sm:mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground">
                    {note.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{note.date}</span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient">
                  {note.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed text-muted-foreground">{note.excerpt}</p>

                {/* Read more */}
                <div className="mt-5 flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 sm:opacity-0 sm:translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0">
                  <span>read more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}