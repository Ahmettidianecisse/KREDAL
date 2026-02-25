import type { Metadata } from "next"
import { Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Team | KREDAL",
  description: "Meet the team behind Kredal — building financial intelligence infrastructure for Africa.",
}

const team = [
  {
    id: 1,
    name: "Ahmet",
    role: "Founder & CEO",
    bio: "Visionnaire derrière Kredal. Entrepreneur sénégalais passionné par la technologie et l'inclusion financière en Afrique. Convaincu que l'IA peut transformer l'accès au crédit pour des millions d'Africains.",
    location: "Dakar, Sénégal 🇸🇳",
    status: "building",
    avatar: "A",
    color: "from-primary/20 to-emerald-500/20",
    socials: {
      twitter: "https://twitter.com/kredal_ai",
      linkedin: "https://linkedin.com/company/kredal",
      github: "https://github.com/kredal",
      email: "hello@kredal.ai",
    },
    tags: ["Strategy", "Product", "Business Development", "Fintech Africa"],
    featured: true,
  },
]

const values = [
  {
    title: "Africa First",
    description: "Chaque décision de produit est prise en pensant d'abord aux réalités africaines — pas en adaptant des solutions occidentales.",
    icon: "🌍",
  },
  {
    title: "Transparency",
    description: "Nos modèles sont explicables. Nos prix sont transparents. Notre impact est mesurable.",
    icon: "🔍",
  },
  {
    title: "Speed",
    description: "287ms pour scorer un emprunteur. Nous construisons vite, livrons vite, itérons vite.",
    icon: "⚡",
  },
  {
    title: "Inclusion",
    description: "Le crédit n'est pas un privilège. Kredal existe pour que chaque Africain puisse accéder aux services financiers qu'il mérite.",
    icon: "🤝",
  },
]

export default function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden scanlines">
      <div className="relative z-10 px-4 sm:px-6 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-16 sm:mb-20 space-y-4 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              Team
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Built by believers.
              <br />
              <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                For Africa.
              </span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Kredal est né à Dakar, Sénégal. Nous construisons l'infrastructure financière intelligente
              que l'Afrique mérite — de l'intérieur, pas de l'extérieur.
            </p>
          </div>

          {/* Team */}
          <div className="mb-20 sm:mb-28">
            {team.map((member, index) => (
              <article
                key={member.id}
                className="group relative overflow-hidden rounded-xl border border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8 glass p-8 sm:p-12 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  member.color,
                )} />

                <div className="relative z-10">
                  <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">

                    {/* Avatar */}
                    <div className="flex flex-col items-center gap-4 lg:items-start">
                      <div className="relative">
                        <div className="flex h-24 w-24 sm:h-32 sm:w-32 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 font-mono text-4xl sm:text-5xl font-bold text-primary animate-pulse-glow">
                          {member.avatar}
                        </div>
                        <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="font-mono text-[10px] text-primary">{member.status}</span>
                        </div>
                      </div>

                      {/* Socials */}
                      <div className="flex items-center gap-2">
                        {member.socials.github && (
                          <a href={member.socials.github} target="_blank" rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10">
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {member.socials.twitter && (
                          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10">
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.socials.linkedin && (
                          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.socials.email && (
                          <a href={`mailto:${member.socials.email}`}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10">
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                            {member.name}
                          </h2>
                          <span className="font-mono text-xs px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/10 text-primary">
                            {member.role}
                          </span>
                        </div>
                        <p className="font-mono text-xs text-muted-foreground">
                          📍 {member.location}
                        </p>
                      </div>

                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {member.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* Join us - Coming Soon */}
          <div className="mb-20 sm:mb-28 rounded-xl border border-border/60 bg-card/40 glass p-8 sm:p-12 animate-fade-in-up hover-lift text-center">
            <div className="max-w-xl mx-auto space-y-5">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                We're growing
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Join the mission.
                <br />
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Coming soon.
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                On construit Kredal. Les postes arrivent bientôt.
                En attendant, si tu es passionné par la tech et l'Afrique — écris-nous.
              </p>
              <a
                href="mailto:hello@kredal.ai"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-8 py-4 font-mono text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98]"
              >
                <span className="relative z-10">hello@kredal.ai</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </a>
            </div>
          </div>

          {/* Values */}
          <div className="animate-fade-in-up">
            <div className="mb-10 space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Values</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ce en quoi on croit.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group rounded-xl border border-border/60 bg-card/40 glass p-6 hover:border-primary/40 hover:bg-card/70 transition-all duration-300 hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="font-mono text-sm font-bold mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}