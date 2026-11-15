import { motion, AnimatePresence } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { LuFileText, LuCalendar } from "react-icons/lu";
import { externalLinks } from "../scripts/portfolioData";

const BurgerMenu = ({
  isOpen,
  setIsOpen,
  onNavigate,
  activeSection,
  lang,
  setLang,
  data,
  onOpenCv,
}) => {
  const navItems = [
    { id: "overview", label: data.nav.overview, num: "01" },
    { id: "leadership", label: data.nav.leadership, num: "02" },
    { id: "experience", label: data.nav.experience, num: "03" },
    { id: "skills", label: data.nav.skills, num: "04" },
    { id: "education", label: data.nav.education, num: "05" },
    { id: "contact", label: data.nav.contact, num: "06" },
  ];

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    onNavigate(sectionId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="burger-menu"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.28 }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#07050E]/95 backdrop-blur-xl p-6"
        >
          {/* Top Bar (No Name/Role, Equal-Size Controls) */}
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="h-11 flex items-center bg-[#121218] border border-white/20 p-1">
              <button
                onClick={() => setLang("es")}
                className={`h-full px-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center ${
                  lang === "es" ? "bg-[#6D28D9] text-white" : "text-zinc-400"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`h-full px-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center ${
                  lang === "en" ? "bg-[#6D28D9] text-white" : "text-zinc-400"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="h-11 w-11 flex items-center justify-center text-zinc-300 hover:text-white bg-[#121218] border border-white/20"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex flex-col divide-y divide-white/10 my-auto border-y border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-4 px-2 flex items-center justify-between transition-all ${
                  activeSection === item.id
                    ? "text-[#A78BFA] font-black"
                    : "text-zinc-300 hover:text-white font-semibold"
                }`}
              >
                <span className="text-lg uppercase tracking-[0.15em]">
                  {item.label}
                </span>
                <span className="text-xs text-zinc-500">{item.num}</span>
              </button>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenCv();
              }}
              className="w-full py-4 bg-transparent border border-white/25 hover:border-[#7C3AED] text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <LuFileText className="w-4 h-4 text-[#A78BFA]" />
              <span>{data.nav.viewCv}</span>
            </button>
            <a
              href={externalLinks.calendar}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 bg-white hover:bg-[#6D28D9] text-black hover:text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors"
            >
              <LuCalendar className="w-4 h-4" />
              <span>{data.nav.bookCall}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { BurgerMenu };
