import { useState } from "react";
import { motion } from "motion/react";
import {
  LuCalendar,
  LuFileText,
  LuCopy,
  LuCheck,
  LuMapPin,
  LuAward,
  LuCrown,
  LuBrainCircuit,
  LuShieldCheck,
  LuArrowRight,
} from "react-icons/lu";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { externalLinks } from "../../scripts/portfolioData";
import { TechIcon } from "../../ui/TechIcon";

const Cover = ({ data, onOpenCv, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full space-y-12 pt-4 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Executive & Engineering Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Availability & Location Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>{data.meta.availability}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs">
              <LuMapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{data.meta.location}</span>
            </div>
          </div>

          {/* Executive Tagline & Name */}
          <div className="space-y-3">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              {data.meta.executiveTag}
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              {data.hero.name}
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              {data.meta.role}
            </h2>
          </div>

          {/* Strategic Headline & CV Summary */}
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed border-l-2 border-cyan-500 pl-4">
            {data.hero.headline}
          </p>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {data.hero.summary}
          </p>

          {/* Core Tech Icons Strip */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {[
              { key: "typescript", label: "TypeScript" },
              { key: "react", label: "React" },
              { key: "python", label: "Python" },
              { key: "fastapi", label: "FastAPI" },
              { key: "postgresql", label: "PostgreSQL" },
              { key: "gcp", label: "Google Cloud" },
              { key: "langchain", label: "Gemini AI" },
              { key: "figma", label: "Figma" },
            ].map((tech) => (
              <div
                key={tech.key}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all text-xs text-slate-300"
              >
                <TechIcon iconKey={tech.key} size="w-4 h-4" />
                <span>{tech.label}</span>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={externalLinks.calendar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all cursor-pointer"
            >
              <LuCalendar className="w-4 h-4" />
              <span>{data.hero.primaryCta}</span>
            </a>

            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <LuFileText className="w-4 h-4 text-cyan-400" />
              <span>{data.hero.secondaryCta}</span>
            </button>

            <button
              onClick={() => onNavigate("experience")}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
            >
              <span>{data.hero.experienceCta}</span>
              <LuArrowRight className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

          {/* Direct Social & Copy Email Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800/80">
            <a
              href={externalLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={externalLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <FaGithub className="w-4 h-4 text-white" />
              <span>JosCalCor22</span>
            </a>

            <a
              href={externalLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 text-xs font-medium text-slate-300 hover:text-white transition-all"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <LuCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">
                    {data.hero.emailCopied}
                  </span>
                </>
              ) : (
                <>
                  <LuCopy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{data.meta.email}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right Column: Executive Portrait & Floating Authority Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-indigo-500/20 rounded-3xl blur-2xl pointer-events-none" />

            {/* Portrait Container */}
            <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-950/95 border border-slate-700/80 shadow-2xl overflow-hidden pt-6 px-6 flex flex-col items-center">
              {/* Top Window Status Bar */}
              <div className="w-full flex items-center justify-between pb-4 border-b border-slate-800/80 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  EXECUTIVE_PROFILE.TSX
                </span>
              </div>

              <img
                src="/images/Photo_Profile.png"
                alt="Joseth Calderón Corredor"
                className="w-72 sm:w-80 h-auto object-contain drop-shadow-[0_20px_30px_rgba(6,182,212,0.18)]"
              />

              {/* Bottom Overlay Credentials Bar */}
              <div className="w-full bg-slate-950/90 backdrop-blur-md border-t border-slate-800 p-4 -mx-6 mt-2 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400">
                    <LuCrown className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      {data.hero.floatingBadges.founder}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {data.hero.floatingBadges.founderSub}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                    <LuAward className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      {data.hero.floatingBadges.hackathons}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {data.hero.floatingBadges.hackathonsSub}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge Top-Left */}
            <div className="hidden sm:flex absolute -left-5 top-14 items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/90 shadow-xl">
              <div className="p-2 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400">
                <LuBrainCircuit className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  {data.hero.floatingBadges.aiCloud}
                </p>
                <p className="text-[10px] text-slate-400 font-mono">
                  {data.hero.floatingBadges.aiCloudSub}
                </p>
              </div>
            </div>

            {/* Floating Badge Bottom-Right */}
            <div className="hidden sm:flex absolute -right-5 bottom-24 items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/90 shadow-xl">
              <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <LuShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  {data.hero.floatingBadges.security}
                </p>
                <p className="text-[10px] text-slate-400 font-mono">
                  {data.hero.floatingBadges.securitySub}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Executive Impact Metrics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.hero.metrics.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group relative rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/90 hover:border-cyan-500/40 p-5 transition-all duration-300 shadow-sm"
          >
            <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              {m.value}
            </div>
            <div className="text-sm font-bold text-white mt-1">{m.label}</div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              {m.detail}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export { Cover };
