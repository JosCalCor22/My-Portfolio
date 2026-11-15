import { motion } from "motion/react";
import { LuAward, LuCalendar } from "react-icons/lu";
import { iconConfigMap } from "../../ui/TechIcon";

const Education = ({ data }) => {
  return (
    <div className="w-full space-y-20">
      {/* PART 1: HONORS & AWARDS (05 Index) */}
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
                className={`group bg-[#0B0B10]/90 hover:bg-[#111118] border border-white/10 ${cfg.hoverBorder} p-7 sm:p-9 flex flex-col justify-between gap-6 transition-all duration-300`}
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

      {/* PART 2: ACADEMIC & EXECUTIVE CREDENTIALS (No icons, aligned by title line count) */}
      <div className="space-y-10">
        <div className="border-b border-white/10 pb-6 space-y-1.5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A78BFA] font-semibold">
            {data.education.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {data.education.sectionTitle}
          </h2>
        </div>

        {/* Row 1: Google Cybersecurity & SENA ADSO (2-line titles) | Row 2: UniAndes PEMP & Platzi (1-line titles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {data.education.items.map((item, idx) => {
            const cfg = iconConfigMap[item.iconKey] || {
              hoverBorder: "hover:border-[#7C3AED]",
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`group bg-[#0B0B10]/90 hover:bg-[#111118] border border-white/10 ${cfg.hoverBorder} p-7 sm:p-9 flex flex-col justify-between gap-6 transition-all duration-300 h-full`}
              >
                <div className="space-y-5 flex-1 flex flex-col">
                  {/* Header block without icons; paired rows have matching title heights */}
                  <div className={idx < 2 ? "md:min-h-[76px]" : "md:min-h-[48px]"}>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#A78BFA] font-semibold block">
                      0{idx + 1} — {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white leading-snug mt-1.5">
                      {item.title}
                    </h3>
                  </div>

                  {/* Institution & Duration Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs bg-[#08080D] border border-white/[0.08] px-4 py-2.5">
                    <span className="font-bold text-white uppercase tracking-wider">
                      {item.institution}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#A78BFA] font-medium">
                      <LuCalendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Key Points */}
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    {item.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
                      >
                        <span className="text-xs font-bold text-[#A78BFA] leading-none mt-1">
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
