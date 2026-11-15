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
    <div className="min-h-screen w-full bg-[#070709] text-zinc-100 relative selection:bg-[#7C3AED] selection:text-white overflow-x-hidden">
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

      {/* Sticky Header with Spacious Layout & Submenu */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#070709]/90 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          {/* Brand Name (Removed white rectangle icon) */}
          <button
            onClick={() => scrollToSection("overview")}
            className="text-left group cursor-pointer shrink-0"
          >
            <span className="block text-white font-black text-sm sm:text-base uppercase tracking-[0.22em] group-hover:text-[#A78BFA] transition-colors whitespace-nowrap">
              Joseth Calderón
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">
              Product & Tech Leader
            </span>
          </button>

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
                    className="absolute right-0 mt-3 w-64 bg-[#0B0B0F] border border-white/15 shadow-2xl divide-y divide-white/10 z-50"
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

                    <div className="p-2 bg-[#08080B]">
                      <button
                        onClick={() => {
                          setIsSubmenuOpen(false);
                          setIsCvModalOpen(true);
                        }}
                        className="w-full px-4 py-3 bg-[#121218] hover:bg-[#6D28D9] text-white text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <span className="inline-flex items-center gap-2">
                          <LuFileText className="w-3.5 h-3.5 text-[#A78BFA]" />
                          {data.nav.viewCv} (ES / EN)
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Controls: Language Switcher (ES / EN) + CV + Book Call */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Bilingual Language Toggle */}
            <div
              className="flex items-center bg-[#121218] border border-white/15 p-0.5"
              role="group"
              aria-label="Language selector"
            >
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  lang === "es"
                    ? "bg-[#6D28D9] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-[#6D28D9] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Interactive CV Button */}
            <button
              onClick={() => setIsCvModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-white/5 text-white text-[11px] font-bold uppercase tracking-[0.16em] border border-white/20 hover:border-[#7C3AED] whitespace-nowrap transition-all cursor-pointer"
            >
              <LuFileText className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>{data.nav.viewCv}</span>
            </button>

            {/* Primary Calendar CTA */}
            <a
              href={externalLinks.calendar}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#6D28D9] text-black hover:text-white font-bold text-[11px] uppercase tracking-[0.16em] whitespace-nowrap transition-all"
            >
              <LuCalendar className="w-3.5 h-3.5" />
              <span>{data.nav.bookCall}</span>
            </a>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 bg-[#121218] border border-white/15 text-zinc-200 hover:text-white"
              aria-label="Open menu"
            >
              <IoMdMenu className="w-6 h-6" />
            </button>
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

      {/* Luxury Minimalist Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050507] py-10 mt-20">
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
