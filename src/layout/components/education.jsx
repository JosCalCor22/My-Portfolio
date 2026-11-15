import { motion } from "motion/react";
import {
  LuAward,
  LuGraduationCap,
  LuCheck,
  LuCalendar,
  LuSparkles,
} from "react-icons/lu";
import { iconConfigMap } from "../../ui/TechIcon";

const Education = ({ data }) => {
  return (
    <div className="w-full space-y-16">
      {/* PART 1: HONORS & AWARDS (3x International Web3 Hackathon Winner) */}
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
            {data.awards.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {data.awards.sectionTitle}
          </h2>
        </div>

        {/* Trophy Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-indigo-500/10 border border-amber-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-400 shrink-0">
              <LuAward className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
                <LuSparkles className="w-3.5 h-3.5" />
                <span>GLOBAL WEB3 RECOGNITION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {data.awards.bannerTitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {data.awards.bannerSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* 3x Hackathon Cards (Solana, Chainlink, Filecoin) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.awards.items.map((award, idx) => {
            const cfg = iconConfigMap[award.iconKey] || iconConfigMap.solana;
            const AwardIcon = cfg.Icon;

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="rounded-2xl bg-slate-900/85 border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between gap-4 transition-all duration-300 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3.5 rounded-xl border ${cfg.bg} ${cfg.border} ${cfg.color}`}
                    >
                      <AwardIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
                      Winner
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-extrabold text-white">
                      {award.title}
                    </h4>
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">
                      {award.organization} Ecosystem
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                  {award.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PART 2: EDUCATION & EXECUTIVE TRAINING */}
      <div className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            {data.education.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {data.education.sectionTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {data.education.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.education.items.map((item, idx) => {
            const cfg = iconConfigMap[item.iconKey] || {
              Icon: LuGraduationCap,
              color: "text-cyan-400",
              bg: "bg-cyan-500/15",
              border: "border-cyan-500/35",
            };
            const EdIcon = cfg.Icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-3xl bg-slate-900/85 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between gap-5 transition-all duration-300 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3.5 rounded-xl border ${cfg.bg} ${cfg.border} ${cfg.color} shrink-0`}
                      >
                        <EdIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                          {item.type}
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-slate-300 bg-slate-950/60 border border-slate-800/80 px-3.5 py-2 rounded-xl">
                    <span className="font-bold text-white">
                      {item.institution}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-cyan-400">
                      <LuCalendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <LuCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Education };
