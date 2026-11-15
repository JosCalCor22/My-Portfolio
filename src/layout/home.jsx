import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoMdMenu } from "react-icons/io";
import { LuFileText, LuCalendar, LuChevronDown } from "react-icons/lu";

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
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

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
    const handleClickOutside = (e) => {
      if (submenuRef.current && !submenuRef.current.contains(e.target)) {
        setIsSubmenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    setIsSubmenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const primaryNavItems = [
    { id: "overview", label: data.nav.overview },
    { id: "leadership", label: data.nav.leadership },
    { id: "experience", label: data.nav.experience },
  ];

  const submenuItems = [
    { id: "skills", num: "04", label: data.nav.skills },
    { id: "education", num: "05", label: data.nav.education },
    { id: "contact", num: "06", label: data.nav.contact },
  ];

  const isSubmenuSectionActive = ["skills", "education", "contact"].includes(
    activeSection
  );

  return (
    <div className="min-h-screen w-full bg-[#06050B] text-zinc-100 relative selection:bg-[#7C3AED] selection:text-white">
      {/* Rich Ambient Background Gradient & Atmospheric Lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-15%,rgba(109,40,217,0.28),transparent_70%)]" />
        <div className="absolute top-[28%] -left-40 w-[620px] h-[620px] bg-[#5B21B6]/18 rounded-full blur-[150px]" />
        <div className="absolute top-[62%] -right-40 w-[580px] h-[580px] bg-[#3B0764]/25 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[650px] h-[420px] bg-[#4C1D95]/16 rounded-full blur-[140px]" />
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

      {/* Sticky Glassmorphic Header (No Name/Role, Equal-Height Controls) */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#07050E]/70 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Desktop Navigation with Submenu Dropdown */}
          <nav className="hidden lg:flex items-center gap-8">
            {primaryNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-2 text-xs uppercase tracking-[0.18em] font-bold whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#7C3AED]" />
                  )}
                </button>
              );
            })}

            {/* Submenu Dropdown Trigger */}
            <div className="relative" ref={submenuRef}>
              <button
                onClick={() => setIsSubmenuOpen((prev) => !prev)}
                className={`relative py-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-bold whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  isSubmenuSectionActive || isSubmenuOpen
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <span>{lang === "es" ? "Más Secciones" : "Explore More"}</span>
                <LuChevronDown
                  className={`w-4 h-4 text-[#A78BFA] transition-transform duration-200 ${
                    isSubmenuOpen ? "rotate-180" : ""
                  }`}
                />
                {isSubmenuSectionActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#7C3AED]" />
                )}
              </button>

              <AnimatePresence>
                {isSubmenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-3 w-64 bg-[#0B0B12]/95 backdrop-blur-xl border border-white/15 shadow-2xl divide-y divide-white/10 z-50"
                  >
                    <div className="py-1">
                      {submenuItems.map((sub) => {
                        const isSubActive = activeSection === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => scrollToSection(sub.id)}
                            className={`w-full px-5 py-3.5 text-left flex items-center justify-between text-xs uppercase tracking-[0.16em] font-bold transition-colors cursor-pointer ${
                              isSubActive
                                ? "bg-[#6D28D9]/25 text-[#A78BFA]"
                                : "text-zinc-300 hover:bg-[#121218] hover:text-white"
                            }`}
                          >
                            <span>{sub.label}</span>
                            <span className="text-[10px] text-zinc-500">
                              {sub.num}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-2 bg-[#08080D]">
                      <button
                        onClick={() => {
                          setIsSubmenuOpen(false);
                          setIsCvModalOpen(true);
                        }}
                        className="w-full px-4 py-3 bg-[#121218] hover:bg-[#6D28D9] text-white text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span className="inline-flex items-center gap-2">
                          <LuFileText className="w-3.5 h-3.5 text-[#A78BFA]" />
                          {data.nav.viewCv}
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Burger Trigger on Left when Nav is hidden */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden h-11 px-3.5 bg-[#121218] border border-white/15 text-zinc-200 hover:text-white inline-flex items-center justify-center"
            aria-label="Open menu"
          >
            <IoMdMenu className="w-6 h-6" />
          </button>

          {/* Right Controls: Equal-Size Language Switcher (ES / EN) + CV + Book Call */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            {/* Bilingual Language Toggle — exact same height (h-11) as buttons */}
            <div
              className="h-11 flex items-center bg-[#121218] border border-white/20 p-1"
              role="group"
              aria-label="Language selector"
            >
              <button
                onClick={() => setLang("es")}
                className={`h-full px-4 text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center justify-center ${
                  lang === "es"
                    ? "bg-[#6D28D9] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`h-full px-4 text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center justify-center ${
                  lang === "en"
                    ? "bg-[#6D28D9] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Interactive CV Button — exact same height (h-11) */}
            <button
              onClick={() => setIsCvModalOpen(true)}
              className="hidden sm:inline-flex h-11 items-center gap-2.5 px-5 bg-[#121218]/80 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-[0.16em] border border-white/20 hover:border-[#7C3AED] whitespace-nowrap transition-all cursor-pointer"
            >
              <LuFileText className="w-4 h-4 text-[#A78BFA]" />
              <span>{data.nav.viewCv}</span>
            </button>

            {/* Primary Calendar CTA — exact same height (h-11) */}
            <a
              href={externalLinks.calendar}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex h-11 items-center gap-2.5 px-6 bg-white hover:bg-[#6D28D9] text-black hover:text-white font-bold text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-all"
            >
              <LuCalendar className="w-4 h-4" />
              <span>{data.nav.bookCall}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36 py-8 sm:py-12">
        <section id="overview" className="scroll-mt-24">
          <Cover
            data={data}
            lang={lang}
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

      {/* Minimalist Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#05040A]/90 backdrop-blur-md py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span className="tracking-wide">{data.contact.footerNote}</span>
          <div className="flex items-center gap-5 uppercase tracking-widest text-[11px]">
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-[#A78BFA] hover:text-white font-bold cursor-pointer transition-colors"
            >
              {lang === "es" ? "English Version (EN)" : "Versión Español (ES)"}
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
