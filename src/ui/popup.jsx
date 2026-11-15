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
  const [isLoading, setIsLoading] = useState(true);

  const data = portfolioData[initialLang] || portfolioData.es;

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 w-full h-full flex items-center justify-center p-3 sm:p-6 lg:p-10 z-50 backdrop-blur-md bg-black/85"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[90vh] bg-[#0B0B10] border border-white/15 shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Minimalist Clean Header: Only "Visualizador de CV" + Close button */}
        <header className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-[#07070B]">
          <h3 className="text-white font-black text-sm uppercase tracking-[0.2em]">
            {data.cvModal.title}
          </h3>

          <button
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </header>

        {/* Modal Body */}
        <main className="w-full flex-1 relative overflow-y-auto bg-[#07070B] p-4 sm:p-8 pb-24">
          {activeTab === "digital" ? (
            <div className="max-w-4xl mx-auto bg-[#0B0B10] border border-white/10 p-6 sm:p-10 space-y-8 text-zinc-200">
              {/* CV Header */}
              <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Joseth Calderón Corredor
                  </h1>
                  <p className="text-[#A78BFA] font-semibold text-sm sm:text-base uppercase tracking-wider mt-1">
                    {data.meta.role}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                  <a
                    href={externalLinks.email}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121218] border border-white/10 hover:border-[#7C3AED]"
                  >
                    <LuMail className="w-3.5 h-3.5 text-white" />
                    {data.meta.email}
                  </a>
                  <a
                    href={externalLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121218] border border-white/10 hover:border-[#7C3AED]"
                  >
                    <LuPhone className="w-3.5 h-3.5 text-white" />
                    {data.meta.phone}
                  </a>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121218] border border-white/10">
                    <LuMapPin className="w-3.5 h-3.5 text-white" />
                    {data.meta.location}
                  </span>
                  <a
                    href={externalLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121218] border border-white/10 hover:border-[#7C3AED]"
                  >
                    <FaLinkedin className="w-3.5 h-3.5 text-white" />
                    LinkedIn
                    <LuExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                  <a
                    href={externalLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121218] border border-white/10 hover:border-[#7C3AED]"
                  >
                    <FaGithub className="w-3.5 h-3.5 text-white" />
                    JosCalCor22
                    <LuExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Executive Summary */}
              <div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed border-l-2 border-[#7C3AED] pl-4">
                  {data.hero.summary}
                </p>
              </div>

              {/* Work Experience */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#A78BFA] font-bold uppercase tracking-[0.2em] text-xs border-b border-white/10 pb-2">
                  <LuBriefcase className="w-4 h-4" />
                  <span>{data.experience.sectionTitle}</span>
                </div>
                <div className="space-y-5">
                  {data.experience.items.map((job) => (
                    <div
                      key={job.id}
                      className="bg-[#08080D] border border-white/[0.08] p-5 space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <span className="text-white font-bold text-base">
                            {job.company}
                          </span>
                          <span className="text-zinc-600 mx-2">|</span>
                          <span className="text-[#A78BFA] font-medium text-sm">
                            {job.role}
                          </span>
                        </div>
                        <span className="text-xs text-zinc-400 bg-[#121218] px-2.5 py-1 border border-white/10 w-fit">
                          {job.duration}
                        </span>
                      </div>
                      <ul className="space-y-2 text-sm text-zinc-300">
                        {job.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-[#A78BFA] mt-1 text-xs">■</span>
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
                <div className="flex items-center gap-2 text-[#A78BFA] font-bold uppercase tracking-[0.2em] text-xs border-b border-white/10 pb-2">
                  <LuAward className="w-4 h-4" />
                  <span>{data.awards.sectionTitle}</span>
                </div>
                <div className="bg-[#121218] border border-[#7C3AED]/40 p-4">
                  <p className="text-sm text-zinc-200">
                    <strong className="text-[#A78BFA]">
                      {data.awards.bannerTitle}:
                    </strong>{" "}
                    {data.awards.bannerSubtitle}
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#A78BFA] font-bold uppercase tracking-[0.2em] text-xs border-b border-white/10 pb-2">
                  <LuGraduationCap className="w-4 h-4" />
                  <span>{data.education.sectionTitle}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.education.items.map((ed) => (
                    <div
                      key={ed.id}
                      className="bg-[#08080D] border border-white/[0.08] p-4 space-y-1.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-white font-bold text-sm">
                          {ed.title}
                        </h4>
                        <span className="text-[11px] text-[#A78BFA] shrink-0">
                          {ed.duration}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-zinc-400">
                        {ed.institution}
                      </p>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {ed.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#A78BFA] font-bold uppercase tracking-[0.2em] text-xs border-b border-white/10 pb-2">
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
            <div className="w-full h-full relative overflow-hidden bg-[#0B0B10]">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#07070B] z-20">
                  <Oval
                    visible={true}
                    height="50"
                    width="50"
                    color="#7C3AED"
                    secondaryColor="rgba(124,58,237,0.2)"
                    ariaLabel="loading-canvas"
                  />
                </div>
              )}
              <iframe
                src={externalLinks.cvDrivePreview}
                onLoad={() => setIsLoading(false)}
                title="Joseth Calderon CV Preview"
                className={`w-full h-full transition-all duration-500 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            </div>
          )}
        </main>

        {/* Floating Action Bubble for Print / Download & View Mode */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2 p-2 rounded-full bg-[#12101E]/95 backdrop-blur-xl border border-[#7C3AED]/50 shadow-[0_12px_40px_rgba(109,40,217,0.35)]">
          <button
            onClick={() =>
              setActiveTab(activeTab === "digital" ? "pdf" : "digital")
            }
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            title={
              activeTab === "digital"
                ? data.cvModal.tabPdf
                : data.cvModal.tabDigital
            }
          >
            {activeTab === "digital" ? (
              <>
                <LuGlobe className="w-4 h-4 text-[#A78BFA]" />
                <span className="hidden sm:inline">{data.cvModal.tabPdf}</span>
              </>
            ) : (
              <>
                <LuFileText className="w-4 h-4 text-[#A78BFA]" />
                <span className="hidden sm:inline">
                  {data.cvModal.tabDigital}
                </span>
              </>
            )}
          </button>

          {activeTab === "digital" && (
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#6D28D9] hover:bg-[#7C3AED] text-white shadow-md transition-all cursor-pointer"
            >
              <LuPrinter className="w-4 h-4" />
              <span>{data.cvModal.printBtn}</span>
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { Popup };
