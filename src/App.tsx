import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          className: `
            bg-black
            text-white
            border border-white/10
            shadow-xl
            rounded-xl
            backdrop-blur
          `,
        }}
      />
    </div>
  );
}