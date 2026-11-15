import { motion } from "motion/react";
import {
  LuCalendar,
  LuArrowDownRight,
  LuMail,
} from "react-icons/lu";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { externalLinks } from "../../scripts/portfolioData";

const Cover = ({ data, onNavigate, lang = "es" }) => {
  return (
    <div className="w-full pt-2">
      {/* MAIN HERO FRAME */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full bg-[#0B0B0F] border border-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
      >
        {/* Subtle Architectural Purple Glow & Wireframe */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#6D28D9]/15 rounded-full blur-[120px] pointer-events-none" />
        <svg
          className="absolute right-10 top-10 w-[440px] h-[440px] text-white/[0.03] pointer-events-none hidden lg:block"
          viewBox="0 0 400 400"
          fill="none"
        >
          <polygon
            points="200,20 380,340 20,340"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="210"
            r="140"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10">
          {/* Left Vertical Social Icons & 01 Index Column */}
          <div className="hidden lg:flex lg:col-span-1 border-r border-white/[0.08] flex-col items-center justify-between py-12">
            <div className="flex flex-col items-center gap-6 text-zinc-400">
              <a
                href={externalLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#A78BFA] transition-colors p-2 border border-transparent hover:border-[#7C3AED]/40"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={externalLinks.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#A78BFA] transition-colors p-2 border border-transparent hover:border-[#7C3AED]/40"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={externalLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#A78BFA] transition-colors p-2 border border-transparent hover:border-[#7C3AED]/40"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={externalLinks.email}
                className="hover:text-[#A78BFA] transition-colors p-2 border border-transparent hover:border-[#7C3AED]/40"
                aria-label="Email"
              >
                <LuMail className="w-4 h-4" />
              </a>
            </div>

            {/* 01 Index */}
            <div className="flex flex-col items-center">
              <span className="text-4xl font-black tracking-tighter text-white leading-none">
                01
              </span>
              <span className="w-8 h-[3px] bg-[#7C3AED] mt-2" />
            </div>
          </div>

          {/* Center-Left Pitch */}
          <div className="lg:col-span-6 p-8 sm:p-12 xl:p-16 flex flex-col justify-center space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-editorial italic text-2xl sm:text-3xl text-[#A78BFA]">
                  {data.hero.greeting}
                </span>
                <span className="h-[1px] w-12 bg-white/20" />
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
                  {data.meta.location}
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-[64px] font-black tracking-tight text-white leading-[1.04]">
                Joseth Calderón
              </h1>

              {/* Architectural Tracked Subtitles */}
              <div className="pt-2 space-y-1.5">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-white">
                  {lang === "es"
                    ? "INGENIERO DE PRODUCTO  •  FULL-STACK"
                    : "PRODUCT ENGINEER  •  FULL-STACK"}
                </p>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[#A78BFA]">
                  {lang === "es"
                    ? "LÍDER EJECUTIVO & ARQUITECTO DE SOFTWARE"
                    : "EXECUTIVE TECH LEADER & ARCHITECT"}
                </p>
              </div>
            </div>

            {/* Concise Headline Statement */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed border-l-2 border-[#7C3AED] pl-5 max-w-xl">
              {data.hero.headline}
            </p>

            {/* Mobile Social Icons (Only icons, no text hyperlinks) */}
            <div className="flex lg:hidden items-center gap-4 text-zinc-300">
              <a
                href={externalLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#121218] border border-white/10 hover:border-[#7C3AED] hover:text-[#A78BFA] transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={externalLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#121218] border border-white/10 hover:border-[#7C3AED] hover:text-[#A78BFA] transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={externalLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#121218] border border-white/10 hover:border-[#7C3AED] hover:text-[#A78BFA] transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href={externalLinks.email}
                className="p-3 bg-[#121218] border border-white/10 hover:border-[#7C3AED] hover:text-[#A78BFA] transition-all"
                aria-label="Email"
              >
                <LuMail className="w-4 h-4" />
              </a>
            </div>

            {/* Action Buttons (Removed redundant CV EN/ES button) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={externalLinks.calendar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-[#7C3AED] text-black hover:text-white font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer"
              >
                <LuCalendar className="w-4 h-4" />
                <span>{data.hero.primaryCta}</span>
              </a>

              <button
                onClick={() => onNavigate("leadership")}
                className="inline-flex items-center gap-2 px-6 py-4 text-zinc-300 hover:text-white border border-white/15 hover:border-[#7C3AED] text-xs font-semibold uppercase tracking-[0.18em] transition-all cursor-pointer"
              >
                <span>{data.hero.experienceCta}</span>
                <LuArrowDownRight className="w-4 h-4 text-[#A78BFA]" />
              </button>
            </div>
          </div>

          {/* Right Portrait Studio Composition (Clean, without floating text label) */}
          <div className="lg:col-span-5 relative flex items-end justify-center pt-10 px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-transparent via-[#130D24]/35 to-[#08080A]">
            {/* Architectural Dark Backdrop Arch */}
            <div className="absolute bottom-0 w-[310px] sm:w-[360px] h-[360px] sm:h-[410px] rounded-t-full bg-[#12101B] border border-[#7C3AED]/20 pointer-events-none" />

            <img
              src="/images/Photo_Profile.png"
              alt="Joseth Calderón Corredor"
              className="relative z-10 w-72 sm:w-80 xl:w-[360px] h-auto object-contain filter contrast-105 brightness-95 hover:brightness-100 transition-all duration-500"
            />

            {/* Bottom Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { Cover };
