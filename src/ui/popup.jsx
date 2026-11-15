import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Oval } from "react-loader-spinner";
import { motion } from "motion/react";
import {
  LuFileText,
  LuPrinter,
  LuGlobe,
  LuMail,
  LuPhone,
  LuMapPin,
  LuExternalLink,
  LuAward,
  LuGraduationCap,
  LuBriefcase,
  LuCpu,
} from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { portfolioData, externalLinks } from "../scripts/portfolioData";
import { TechBadge } from "./TechIcon";

const Popup = ({ setIsOpen, initialLang = "es" }) => {
  const [activeTab, setActiveTab] = useState("digital");
  const [cvLang, setCvLang] = useState(initialLang);
  const [isLoading, setIsLoading] = useState(true);

  const data = portfolioData[cvLang] || portfolioData.es;

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 w-full h-full flex items-center justify-center p-3 sm:p-6 lg:p-10 z-50 backdrop-blur-md bg-slate-950/80"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl h-[90vh] bg-slate-900 rounded-2xl border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Top Control Bar */}
        <header className="flex flex-wrap justify-between items-center gap-3 px-5 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              JC
            </div>
            <div>
              <h3 className="text-white font-bold text-sm sm:text-base">
                {data.cvModal.title}
              </h3>
              <p className="text-slate-400 text-xs hidden sm:block">
                {data.cvModal.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Language Switcher inside CV */}
            <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5">
              <button
                onClick={() => setCvLang("es")}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  cvLang === "es"
                    ? "bg-cyan-500 text-slate-950 shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ES • Español
              </button>
              <button
                onClick={() => setCvLang("en")}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  cvLang === "en"
                    ? "bg-cyan-500 text-slate-950 shadow-xs"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN • English
              </button>
            </div>

            {/* View Mode Switcher */}
            <div className="hidden md:flex items-center bg-slate-900 border border-slate-700 rounded-lg p-0.5">
              <button
                onClick={() => setActiveTab("digital")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  activeTab === "digital"
                    ? "bg-slate-800 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LuFileText className="w-3.5 h-3.5" />
                {data.cvModal.tabDigital}
              </button>
              <button
                onClick={() => setActiveTab("pdf")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                  activeTab === "pdf"
                    ? "bg-slate-800 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LuGlobe className="w-3.5 h-3.5" />
                {data.cvModal.tabPdf}
              </button>
            </div>

            {activeTab === "digital" && (
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all cursor-pointer"
              >
                <LuPrinter className="w-3.5 h-3.5 text-cyan-400" />
                {data.cvModal.printBtn}
              </button>
            )}

            <button
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Modal Body */}
        <main className="w-full flex-1 relative overflow-y-auto bg-slate-950/50 p-4 sm:p-8">
          {activeTab === "digital" ? (
            <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl space-y-8 text-slate-200">
              {/* CV Header */}
              <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Joseth Calderón Corredor
                  </h1>
                  <p className="text-cyan-400 font-semibold text-base sm:text-lg mt-1">
                    {data.meta.role}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                  <a
                    href={externalLinks.email}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-800 border border-slate-700"
                  >
                    <LuMail className="w-3.5 h-3.5 text-cyan-400" />
                    {data.meta.email}
                  </a>
                  <a
                    href={externalLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-800 border border-slate-700"
                  >
                    <LuPhone className="w-3.5 h-3.5 text-emerald-400" />
                    {data.meta.phone}
                  </a>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700">
                    <LuMapPin className="w-3.5 h-3.5 text-blue-400" />
                    {data.meta.location}
                  </span>
                  <a
                    href={externalLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:border-cyan-500/50 border border-slate-700"
                  >
                    <FaLinkedin className="w-3.5 h-3.5 text-sky-400" />
                    LinkedIn
                    <LuExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                  <a
                    href={externalLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800/90 hover:border-cyan-500/50 border border-slate-700"
                  >
                    <FaGithub className="w-3.5 h-3.5 text-white" />
                    JosCalCor22
                    <LuExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/60 border border-slate-800/90 rounded-xl p-4">
                  {data.hero.summary}
                </p>
              </div>

              {/* Work Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
                  <LuBriefcase className="w-4 h-4" />
                  <span>{data.experience.sectionTitle}</span>
                </div>
                <div className="space-y-6">
                  {data.experience.items.map((job) => (
                    <div
                      key={job.id}
                      className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-5 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <span className="text-white font-bold text-base">
                            {job.company}
                          </span>
                          <span className="text-slate-500 mx-2">|</span>
                          <span className="text-cyan-400 font-medium text-sm">
                            {job.role}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 w-fit">
                          {job.duration}
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {job.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1.5 text-xs">●</span>
                            <span>
                              <strong className="text-white">{h.title}:</strong>{" "}
                              {h.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {job.tags.map((t) => (
                          <TechBadge key={t} label={t} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honors & Awards */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
                  <LuAward className="w-4 h-4" />
                  <span>{data.awards.sectionTitle}</span>
                </div>
                <div className="bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-blue-500/10 border border-amber-500/30 rounded-xl p-4">
                  <p className="text-sm text-slate-200">
                    <strong className="text-amber-300">
                      {data.awards.bannerTitle}:
                    </strong>{" "}
                    {data.awards.bannerSubtitle}
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
                  <LuGraduationCap className="w-4 h-4" />
                  <span>{data.education.sectionTitle}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.education.items.map((ed) => (
                    <div
                      key={ed.id}
                      className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4 space-y-1.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-white font-bold text-sm">
                          {ed.title}
                        </h4>
                        <span className="text-[11px] font-mono text-cyan-400 shrink-0">
                          {ed.duration}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-400">
                        {ed.institution}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {ed.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-wider text-xs border-b border-slate-800 pb-2">
                  <LuCpu className="w-4 h-4" />
                  <span>{data.skills.sectionTitle}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.items.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      label={skill.name}
                      iconKey={skill.iconKey}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative rounded-xl overflow-hidden bg-slate-900">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-slate-950/90 backdrop-blur-xs z-20">
                  <Oval
                    visible={true}
                    height="56"
                    width="56"
                    color="#06b6d4"
                    secondaryColor="rgba(6,182,212,0.15)"
                    ariaLabel="loading-canvas"
                  />
                </div>
              )}
              <iframe
                src={externalLinks.cvDrivePreview}
                onLoad={() => setIsLoading(false)}
                title="Joseth Calderon CV Preview"
                className={`w-full h-full rounded-xl transition-all duration-500 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          )}
        </main>
      </motion.div>
    </motion.div>
  );
};

export { Popup };
