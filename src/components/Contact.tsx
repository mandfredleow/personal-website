import { Github, Linkedin, Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { SOCIALS } from "../data/socials";
import { useForm } from "@formspree/react";
import { toast } from "sonner";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [state, handleSubmit, reset] = useForm("xwvpeoqr");

  const copyEmail = async () => {
    if (!SOCIALS.email) return;
    try {
      await navigator.clipboard.writeText(SOCIALS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // fallback: do nothing 
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent — I'll get back to you soon.");
      reset();

      const form = document.getElementById(
        "contact-form"
      ) as HTMLFormElement | null;
      form?.reset();
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="relative min-h-screen bg-bg py-24 lg:py-0 text-text flex items-center">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl tracking-tight">
              Let’s build something people love using.
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              If you have an idea, a role, or a problem worth solving — send a note.
            </p>

            {/* Quick actions */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {SOCIALS.email && (
                <>
                  <a
                    href={`mailto:${SOCIALS.email}`}
                    className="group inline-flex items-center gap-2 rounded-xl bg-bg-muted px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110"
                  >
                    Email me
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-xl border border-bg-muted bg-bg px-5 py-3 text-sm font-medium text-text shadow-sm transition hover:bg-bg-muted/60"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-primary" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy email
                      </>
                    )}
                  </button>
                </>
              )}
            </div>

            {/* Meta row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Usually replies within 24–48h
              </div>

              <div className="flex items-center gap-4">
                {SOCIALS.github && (
                  <a
                    href={SOCIALS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text transition"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {SOCIALS.linkedin && (
                  <a
                    href={SOCIALS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-bg-muted bg-bg shadow-sm">
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium">Send a message</h3>
                    <p className="mt-1 text-sm text-text-muted">
                      Keep it short — I’ll ask follow-ups if needed.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full border border-bg-muted bg-bg px-3 py-1 text-xs text-text-muted">
                    <Mail className="h-3.5 w-3.5" />
                    Contact
                  </div>
                </div>
                <form id="contact-form" onSubmit={onSubmit} className="mt-6 grid gap-4 disabled:opacity-60">
                  <input type="hidden" name="_subject" value="New portfolio message" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="name"
                      required
                      placeholder="Name"
                      className="w-full rounded-xl border border-bg-muted bg-bg px-4 py-3"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="w-full rounded-xl border border-bg-muted bg-bg px-4 py-3"
                    />
                  </div>

                  <textarea
                    name="message"
                    required
                    placeholder="Message"
                    className="w-full min-h-[160px] rounded-xl border border-bg-muted bg-bg px-4 py-3"
                  />

                  {/* Honeypot */}
                  <input type="text" name="_gotcha" className="hidden" />

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="rounded-xl bg-bg-muted px-5 py-3 text-sm font-medium text-white transition hover:brightness-110 disabled:opacity-60"
                  >
                    {state.submitting ? "Sending…" : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-20" />
        </div>
      </div>
    </section>
  );
}
