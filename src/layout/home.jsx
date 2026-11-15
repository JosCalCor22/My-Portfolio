import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { IoMdMenu } from "react-icons/io";
import { LuGlobe, LuFileText, LuCalendar } from "react-icons/lu";

/* Data */
import { portfolioData, externalLinks } from "../scripts/portfolioData";

/* Components */
import { Cover } from "./components/cover";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Education } from "./components/education";
import { Contact } from "./components/contact";
import { BurgerMenu } from "../ui/burgermenu";
import { Popup } from "../ui/popup";

function Index() {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("portfolio_lang") || "es";
    } catch {
      return "es";
    }
  });
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const data = portfolioData[lang] || portfolioData.es;

  useEffect(() => {
    try {
      localStorage.setItem("portfolio_lang", lang);
    } catch {
      // Ignore storage errors
    }
    document.title = data.meta.title;
    document.documentElement.lang = lang;
  }, [lang, data.meta.title]);

  useEffect(() => {
    const sectionIds = [
      "overview",
      "leadership",
      "experience",
      "skills",
      "education",
      "contact",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { id: "overview", label: data.nav.overview },
    { id: "leadership", label: data.nav.leadership },
    { id: "experience", label: data.nav.experience },
    { id: "skills", label: data.nav.skills },
    { id: "education", label: data.nav.education },
    { id: "contact", label: data.nav.contact },
  ];

  return (
    <div className="min-h-screen w-full bg-[#060913] text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Subtle Corporate-Tech Ambient Lighting & Architectural Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Mobile Navigation Drawer */}
      <BurgerMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        onNavigate={scrollToSection}
        activeSection={activeSection}
        lang={lang}
        setLang={setLang}
        data={data}
        onOpenCv={() => setIsCvModalOpen(true)}
      />

      {/* Sticky Executive Command Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <button
            onClick={() => scrollToSection("overview")}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-extrabold text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              JC
            </div>
            <div>
              <span className="block text-white font-extrabold text-sm sm:text-base tracking-tight">
                Joseth Calderón
              </span>
              <span className="block text-[11px] font-mono text-cyan-400">
                Product & Full-Stack Leader
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/70 border border-slate-800/90 rounded-xl p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-slate-800 text-cyan-400 shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language Switcher (ES / EN) + CV + Book Call */}
          <div className="flex items-center gap-2.5">
            {/* Bilingual Language Toggle */}
            <div
              className="flex items-center bg-slate-900 border border-slate-700/90 rounded-xl p-1"
              role="group"
              aria-label="Language selector"
            >
              <LuGlobe className="w-3.5 h-3.5 text-cyan-400 ml-2 mr-1 hidden sm:block" />
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  lang === "es"
                    ? "bg-cyan-500 text-slate-950 shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-cyan-500 text-slate-950 shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Interactive CV Button */}
            <button
              onClick={() => setIsCvModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <LuFileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>{data.nav.viewCv}</span>
            </button>

            {/* Primary Calendar CTA */}
            <a
              href={externalLinks.calendar}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/15 transition-all"
            >
              <LuCalendar className="w-3.5 h-3.5" />
              <span>{data.nav.bookCall}</span>
            </a>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="xl:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
              aria-label="Open menu"
            >
              <IoMdMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 py-8 sm:py-12">
        <section id="overview" className="scroll-mt-24">
          <Cover
            data={data}
            onOpenCv={() => setIsCvModalOpen(true)}
            onNavigate={scrollToSection}
          />
        </section>

        <section id="leadership" className="scroll-mt-24">
          <About data={data} />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience data={data} />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills data={data} />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education data={data} />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact data={data} onOpenCv={() => setIsCvModalOpen(true)} />
        </section>
      </main>

      {/* Corporate Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-extrabold text-[11px]">
              JC
            </span>
            <span>{data.contact.footerNote}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-cyan-400 hover:underline font-semibold cursor-pointer"
            >
              {lang === "es" ? "Switch to English (EN)" : "Cambiar a Español (ES)"}
            </button>
            <span>•</span>
            <span>© {new Date().getFullYear()} Joseth Calderón</span>
          </div>
        </div>
      </footer>

      {/* Interactive Bilingual CV Modal */}
      <AnimatePresence>
        {isCvModalOpen && (
          <Popup
            isOpen={isCvModalOpen}
            setIsOpen={setIsCvModalOpen}
            initialLang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export { Index };
