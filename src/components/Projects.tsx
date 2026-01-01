import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-bg py-24 lg:py-0 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-text font-semibold">
            Projects
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            A small selection of things I’ve shipped and learned from.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* “Working on the next project” card */}
          <article className="group flex flex-col justify-between rounded-2xl border border-dashed border-bg-muted bg-bg-muted p-6">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-text-muted">
                In progress
              </span>

              <h3 className="mt-3 text-lg font-medium text-text">
                Working on the next project
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Exploring new ideas, refining details, and building something meaningful.
              </p>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Updates coming soon
            </div>
          </article>

          {/* Project cards */}
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-bg-muted bg-bg"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                {/* Top fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium text-text">
                    {project.title}
                  </h3>

                  {/* Tiny index marker */}
                  <span className="text-xs text-text-muted">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-bg-muted bg-bg-muted px-3 py-1 text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-5 text-sm">
                  {!!project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text-muted hover:text-text transition"
                    >
                      <Github size={16} />
                      <span>Code</span>
                      <ArrowUpRight size={14} className="opacity-60" />
                    </a>
                  )}

                  {!!project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-text-muted hover:text-text transition"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                      <ArrowUpRight size={14} className="opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Subtle line */}
        <div className="mt-16 h-px w-full bg-bg-muted" />
      </div>
    </section>
  );
}
