import { useEffect, useMemo, useRef, useState } from "react";
import { EXPERIENCES } from "../data/experience";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const isLg = useMediaQuery("(min-width: 1024px)");
  const isMd = useMediaQuery("(min-width: 768px)");

  const shift = useMemo(() => {
    if (isLg) return 105;
    if (isMd) return 86;
    return 78;
  }, [isLg, isMd]);

  const stageHeight = useMemo(() => {
    if (isLg) return 560;
    if (isMd) return 560;
    return 760;
  }, [isLg, isMd]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : EXPERIENCES.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < EXPERIENCES.length - 1 ? prev + 1 : 0));
  };

  const startXRef = useRef<number | null>(null);
  const draggingRef = useRef(false);

  const onTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    draggingRef.current = true;
  };

  const onTouchMove = (_e: React.TouchEvent) => {};

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!draggingRef.current || startXRef.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const dx = endX - startXRef.current;

    draggingRef.current = false;
    startXRef.current = null;

    const THRESHOLD = 45;
    if (dx > THRESHOLD) handlePrev();
    if (dx < -THRESHOLD) handleNext();
  };

  return (
    <section id="experience" className="min-h-screen py-20 lg:py-0 bg-bg flex items-center overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4 text-text text-center font-semibold">
            Work Experiences
          </h2>
          <p className="text-xl text-text-muted text-center mb-16">
            My professional journey
          </p>

          <div className="relative">
            <div
              className="relative mx-auto w-full max-w-[820px] px-6 md:px-8 lg:px-10"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              style={{ touchAction: "pan-y" }}
            >
              <div className="relative" style={{ height: stageHeight }}>
                {EXPERIENCES.map((exp, index) => {
                  const offset = index - activeIndex;
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={index}
                      className={`absolute left-1/2 top-6 transition-all duration-500 ease-out ${isActive ? "opacity-100 z-10" : "opacity-35 hover:opacity-60 z-1"}`}
                      style={{
                        transform: `translateX(calc(-50% + ${offset * shift}%)) scale(${isActive ? 1 : 0.95})`,
                        width: "min(860px, 88vw)",
                        pointerEvents: "auto",
                      }}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className={`rounded-2xl transition-all duration-300 cursor-pointer bg-bg-muted/60 backdrop-blur border border-bg-muted shadow-sm p-6 md:p-8 ${isActive ? "ring-2 ring-primary shadow-md bg-bg" : ""}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center overflow-hidden border border-bg-muted">
                            {exp.logo ? (
                              <img src={exp.logo} alt={`${exp.company} logo`} className="w-9 h-9 md:w-10 md:h-10 object-contain" />
                            ) : (
                              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10" />
                            )}
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                              <h3 className="text-2xl text-text">{exp.title}</h3>
                              <span className="text-text-muted mt-1 md:mt-0">{exp.period}</span>
                            </div>

                            <p className="text-primary mb-4">{exp.company}</p>
                            <p className="text-text-muted mb-4">{exp.description}</p>

                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-text-muted">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-10 md:mt-8 lg:mt-4">
              {EXPERIENCES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all border ${activeIndex === index ? "bg-primary w-8 border-primary" : "bg-bg-muted w-3 border-bg-muted hover:border-text-muted"}`}
                  aria-label={`Go to experience ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
