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
    { id: "overview", label: data.nav.overview },
    { id: "leadership", label: data.nav.leadership },
    { id: "experience", label: data.nav.experience },
    { id: "skills", label: data.nav.skills },
    { id: "education", label: data.nav.education },
    { id: "contact", label: data.nav.contact },
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
          className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-xl p-6"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-extrabold text-sm">
                JC
              </div>
              <span className="text-white font-bold text-base">
                Joseth Calderón
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5">
                <button
                  onClick={() => setLang("es")}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    lang === "es"
                      ? "bg-cyan-500 text-slate-950"
                      : "text-slate-400"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                    lang === "en"
                      ? "bg-cyan-500 text-slate-950"
                      : "text-slate-400"
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
              >
                <IoMdClose className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex flex-col gap-4 my-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-xl font-bold transition-all ${
                  activeSection === item.id
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-300 hover:text-white hover:bg-slate-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="flex flex-col gap-3 border-t border-slate-800 pt-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenCv();
              }}
              className="w-full py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <LuFileText className="w-4 h-4 text-cyan-400" />
              <span>{data.nav.viewCv} (ES / EN)</span>
            </button>
            <a
              href={externalLinks.calendar}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
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
