import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LuBriefcase,
  LuCalendar,
  LuMapPin,
  LuCheck,
  LuLayers,
  LuList,
} from "react-icons/lu";
import { TechBadge } from "../../ui/TechIcon";

const Experience = ({ data }) => {
  const [selectedId, setSelectedId] = useState("petsuplet");
  const [viewMode, setViewMode] = useState("interactive"); // "interactive" | "timeline"

  const jobs = data.experience.items;
  const activeJob = jobs.find((j) => j.id === selectedId) || jobs[0];

  return (
    <div className="w-full space-y-10">
      {/* Header & View Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            {data.experience.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {data.experience.sectionTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {data.experience.sectionSubtitle}
          </p>
        </div>

        {/* Interactive vs Timeline Toggle */}
        <div className="inline-flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 self-start md:self-auto shrink-0">
          <button
            onClick={() => setViewMode("interactive")}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === "interactive"
                ? "bg-cyan-500 text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <LuLayers className="w-3.5 h-3.5" />
            <span>{data.experience.viewModeInteractive}</span>
          </button>
          <button
            onClick={() => setViewMode("timeline")}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === "timeline"
                ? "bg-cyan-500 text-slate-950 shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <LuList className="w-3.5 h-3.5" />
            <span>{data.experience.viewModeTimeline}</span>
          </button>
        </div>
      </div>

      {viewMode === "interactive" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Company Selector Rail */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {jobs.map((job, idx) => {
              const isSelected = job.id === selectedId;
              return (
                <button
                  key={job.id}
                  onClick={() => setSelectedId(job.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600" />
                  )}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                      0{idx + 1} • {job.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    {job.company}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                    {job.role}
                  </p>
                  <span className="inline-block mt-2.5 text-[11px] px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-400">
                    {job.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Executive Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJob.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
                className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl space-y-7"
              >
                {/* Top Job Metadata */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                      <LuBriefcase className="w-3.5 h-3.5" />
                      <span>{activeJob.category}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeJob.company}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-cyan-400">
                      {activeJob.role}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200">
                      <LuCalendar className="w-3.5 h-3.5 text-cyan-400" />
                      {activeJob.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-slate-400">
                      <LuMapPin className="w-3.5 h-3.5 text-slate-500" />
                      {activeJob.location}
                    </span>
                  </div>
                </div>

                {/* Executive Summary of Role */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-950/50 border border-slate-800/80 rounded-xl p-4">
                  {activeJob.summary}
                </p>

                {/* Key Achievements */}
                <div className="space-y-3.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {data.experience.achievementsTitle}
                  </h4>
                  <div className="grid grid-cols-1 gap-3.5">
                    {activeJob.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-cyan-500/30 transition-all flex items-start gap-3.5"
                      >
                        <div className="p-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 mt-0.5 shrink-0">
                          <LuCheck className="w-4 h-4" />
                        </div>
                        <div className="space-y-1">
                          <h5 className="text-sm sm:text-base font-bold text-white">
                            {item.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied Tech Stack with Icons */}
                <div className="space-y-3 pt-2 border-t border-slate-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {data.experience.technologiesTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeJob.tags.map((tag) => (
                      <TechBadge key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : (
        /* Full Chronological Timeline View */
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-5"
            >
              {/* Timeline Node Dot */}
              <span className="absolute -left-[33px] sm:-left-[41px] top-7 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-slate-950" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {job.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                    {job.company}{" "}
                    <span className="text-slate-500 font-normal">|</span>{" "}
                    <span className="text-cyan-300 text-lg font-semibold">
                      {job.role}
                    </span>
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-300 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
                  {job.duration}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {job.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5"
                  >
                    <h4 className="text-sm font-bold text-white">{h.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {job.tags.map((tag) => (
                  <TechBadge key={tag} label={tag} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Experience };
