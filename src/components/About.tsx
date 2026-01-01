export function About() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
  ];

  const highlights = [
    {
      title: "Clean, maintainable code",
      description: "Strong patterns, readable structure, and a focus on long-term maintainability.",
    },
    {
      title: "Design-first implementation",
      description: "I care about spacing, rhythm, interaction details, and how things feel.",
    },
    {
      title: "Fast, reliable delivery",
      description: "Practical trade-offs, iteration speed, and shipping with confidence.",
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-bg py-24 lg:py-0 flex items-center">
  <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left side */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-text">
              About
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
              I build modern web apps with an obsession for clarity — clean UI, responsive
              interactions, and codebases that stay maintainable as they grow.
            </p>

            {/* Divider */}
            <div className="mt-10 h-px w-full bg-bg-muted" />

            {/* Highlights */}
            <div className="mt-10 space-y-7">
              {highlights.map((h, i) => (
                <div key={i} className="grid grid-cols-[28px_1fr] gap-4">
                  <div className="text-sm font-medium text-text-muted">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="text-base font-medium text-text">{h.title}</div>
                    <div className="mt-1 text-sm leading-relaxed text-text-muted">
                      {h.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <aside className="lg:col-span-5 lg:pl-10">
            <div className="rounded-2xl border border-bg-muted bg-bg px-6 py-7">
              <div className="text-xs uppercase tracking-[0.22em] text-text-muted">
                Snapshot
              </div>

              <div className="mt-6 space-y-5">
                <div className="flex items-start justify-between gap-6">
                  <div className="text-sm text-text-muted">Focus</div>
                  <div className="text-sm font-medium text-text text-right">
                    Full Stack
                  </div>
                </div>

                <div className="h-px bg-bg-muted" />

                <div className="flex items-start justify-between gap-6">
                  <div className="text-sm text-text-muted">Stack</div>
                  <div className="text-sm font-medium text-text text-right">
                    React / TypeScript
                  </div>
                </div>

                <div className="h-px bg-bg-muted" />

                <div className="flex items-start justify-between gap-6">
                  <div className="text-sm text-text-muted">Currently</div>
                  <div className="text-sm font-medium text-text text-right">
                    Creating regression testing scripts
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle note line */}
            <div className="mt-6 text-sm leading-relaxed text-text-muted">
              I like minimal interfaces, strong hierarchy, and “quiet” UI — where the product
              gets out of the way.
            </div>
          </aside>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <h3 className="text-xl font-semibold tracking-tight text-text">
              Skills
            </h3>
            <div className="hidden sm:block text-xs uppercase tracking-[0.22em] text-text-muted">
              Technologies I use
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-bg-muted" />

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {skills.map((group) => (
              <div key={group.category}>
                <div className="text-sm font-medium text-text">
                  {group.category}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-bg-muted bg-bg px-3 py-1.5 text-sm text-text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
           <div className="mt-6 h-px w-full bg-bg-muted" />
        </div>
      </div>
    </section>
  );
}
