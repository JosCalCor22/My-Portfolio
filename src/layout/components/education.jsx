import { motion } from "motion/react";
import { LuAward, LuCalendar } from "react-icons/lu";
import { iconConfigMap } from "../../ui/TechIcon";

const Education = ({ data }) => {
  return (
    <div className="w-full space-y-20">
      {/* PART 1: HONORS & AWARDS (05 Index — Title Only, no description) */}
      <div className="space-y-10">
        <div className="flex items-start gap-6 border-b border-white/10 pb-6">
          <div className="hidden sm:flex flex-col items-center pt-1">
            <span className="text-4xl font-black tracking-tighter text-white leading-none">
              05
            </span>
            <span className="w-8 h-[3px] bg-[#7C3AED] mt-2" />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#A78BFA] font-semibold">
              {data.awards.sectionTag}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {data.awards.sectionTitle}
            </h2>
          </div>
        </div>

        {/* 3x Hackathon Architectural Grid (Solana, Chainlink, Filecoin) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.awards.items.map((award, idx) => {
            const cfg = iconConfigMap[award.iconKey] || iconConfigMap.solana;
            const AwardIcon = cfg.Icon;

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`group bg-[#0B0B0F] hover:bg-[#111117] border border-white/10 ${cfg.hoverBorder} p-7 sm:p-9 flex flex-col justify-between gap-6 transition-all duration-300`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3.5 bg-[#121218] border border-white/10 ${cfg.hoverBoxBorder} transition-colors duration-300`}
                    >
                      <AwardIcon
                        className={`w-6 h-6 text-white ${cfg.hoverIcon} transition-colors duration-300`}
                      />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.2em] px-3 py-1 bg-[#121218] border border-white/15 text-zinc-300 group-hover:text-white font-bold transition-colors">
                      0{idx + 1} • WINNER
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight">
                      {award.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#A78BFA] mt-1 font-semibold">
                      {award.organization} Global Competition
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                  <span>{award.highlight}</span>
                  <LuAward
                    className={`w-4 h-4 text-white ${cfg.hoverIcon} transition-colors duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PART 2: ACADEMIC & EXECUTIVE CREDENTIALS (Title Only, no description) */}
      <div className="space-y-10">
        <div className="border-b border-white/10 pb-6 space-y-1.5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A78BFA] font-semibold">
            {data.education.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {data.education.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.education.items.map((item, idx) => {
            const cfg = iconConfigMap[item.iconKey] || {
              Icon: null,
              hoverBorder: "hover:border-[#7C3AED]",
            };
            const EdIcon = cfg.Icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`group bg-[#0B0B0F] hover:bg-[#111117] border border-white/10 ${cfg.hoverBorder} p-7 sm:p-9 flex flex-col justify-between gap-6 transition-all duration-300`}
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Render icon ONLY when official identity icon exists (Google, Platzi) */}
                      {EdIcon && (
                        <div
                          className={`p-3.5 bg-[#121218] border border-white/10 ${cfg.hoverBoxBorder} shrink-0 mt-0.5 transition-colors duration-300`}
                        >
                          <EdIcon
                            className={`w-6 h-6 text-white ${cfg.hoverIcon} transition-colors duration-300`}
                          />
                        </div>
                      )}
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.22em] text-[#A78BFA] font-semibold">
                          0{idx + 1} — {item.type}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-white leading-snug mt-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs bg-[#08080B] border border-white/[0.08] px-4 py-2.5">
                    <span className="font-bold text-white uppercase tracking-wider">
                      {item.institution}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#A78BFA] font-medium">
                      <LuCalendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {item.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
                      >
                        <span className="font-editorial italic text-base text-[#A78BFA] leading-none mt-0.5">
                          /
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
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
