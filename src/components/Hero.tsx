import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/profile";
import { SOCIALS } from "../data/socials";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[100svh] overflow-hidden bg-[#0B0B0D] text-white"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top gradient only (doesn't reach the bottom) */}
        <div
          className="absolute inset-x-0 top-0 h-[72%] bg-gradient-to-b from-white/12 via-white/0 to-transparent [mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]"
        />

        {/* Radial glow */}
        <div
          className="absolute inset-x-0 top-0 h-[78%] [background:radial-gradient(1100px_620px_at_50%_30%,rgba(255,255,255,0.12),transparent_60%)] [mask-image:linear-gradient(to_bottom,black_0%,black_85%,transparent_100%)]"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[100svh] items-center justify-center">
          <div className="relative w-full text-center">
            <div className="mx-auto w-full text-center">
              {/* Name */}
              <h1 className="relative z-10 w-full font-semibold tracking-tight text-white text-[clamp(72px,12vw,160px)] leading-[0.9]">
                {PROFILE.name}
              </h1>

              {/* Role (partially overlapped) */}
              <div className="-mt-[0.35em] sm:-mt-[0.45em] w-full font-semibold tracking-tight text-white/[0.08] text-[clamp(28px,5vw,64px)] leading-[0.9] pointer-events-none select-none">
                {PROFILE.title}
              </div>
            </div>

            {/* Section links */}
            <div className="mt-12 flex justify-center items-center gap-3 sm:gap-6 text-sm uppercase tracking-[0.12em] sm:tracking-[0.22em] text-white/65 px-6 sm:px-8 lg:px-0">
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#experience" className="hover:text-white transition">Experiences</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>

            {/* Socials */}
            <div className="mt-14 flex justify-center gap-4">
              {SOCIALS.github && (
                <a href={SOCIALS.github} target="_blank" className="text-white/40 hover:text-white transition">
                  <Github className="h-5 w-5" />
                </a>
              )}
              {SOCIALS.linkedin && (
                <a href={SOCIALS.linkedin} target="_blank" className="text-white/40 hover:text-white transition">
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {SOCIALS.email && (
                <a href={`mailto:${SOCIALS.email}`} className="text-white/40 hover:text-white transition">
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
