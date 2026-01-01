import { Home, User, Briefcase, FolderOpen, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", icon: <Home size={20} />, label: "Home" },
    { id: "about", icon: <User size={20} />, label: "About" },
    { id: "experience", icon: <Briefcase size={20} />, label: "Experiences" },
    { id: "projects", icon: <FolderOpen size={20} />, label: "Projects" },
    { id: "contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-4 bg-bg/90 backdrop-blur-md p-4 rounded-full shadow-lg border border-bg-muted">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative group p-3 rounded-full transition-all ${
              activeSection === item.id
                ? "bg-accent text-white"
                : "text-text-muted hover:bg-primary/10 hover:text-primary"
            }`}
            aria-label={item.label}
          >
            {item.icon}

            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-text text-bg px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
