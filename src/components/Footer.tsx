import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/profile";
import { SOCIALS } from "../data/socials";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0D] text-white">
      <div className="h-px w-full bg-white/10" />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-xl font-medium">{PROFILE.name}</p>
              <p className="mt-1 text-sm text-white/60">
                {PROFILE.title}
              </p>
            </div>

            <div className="flex items-center gap-6">
              {SOCIALS.github && (
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
              )}

              {SOCIALS.linkedin && (
                <a
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
              )}

              {SOCIALS.email && (
                <a
                  href={`mailto:${SOCIALS.email}`}
                  className="text-white/50 hover:text-white transition"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </a>
              )}
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/45">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
