import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { iconConfigMap } from "../../ui/TechIcon";
import { LuCode } from "react-icons/lu";

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? data.skills.items
      : data.skills.items.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full space-y-12">
      {/* Section Header (Title + Filters only, no description) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div className="flex items-start gap-6">
          <div className="hidden sm:flex flex-col items-center pt-1">
            <span className="text-4xl font-black tracking-tighter text-white leading-none">
              04
            </span>
            <span className="w-8 h-[3px] bg-[#7C3AED] mt-2" />
          </div>
          <div className="space-y-1.5">
            <p className="text-xs uppercase tracking-[0.25em] text-[#A78BFA] font-semibold">
              {data.skills.sectionTag}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {data.skills.sectionTitle}
            </h2>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {data.skills.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-[#6D28D9] text-white border-[#7C3AED]"
                    : "bg-[#0B0B0F] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid: White icons by default, Brand Color on Hover */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const cfg = iconConfigMap[skill.iconKey] || {
              Icon: LuCode,
              hoverIcon: "group-hover:text-[#A78BFA]",
              hoverBorder: "hover:border-[#7C3AED]",
              hoverBoxBorder: "group-hover:border-[#7C3AED]/50",
            };
            const SkillIcon = cfg.Icon || LuCode;

            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className={`group bg-[#0B0B0F] hover:bg-[#111117] border border-white/10 ${cfg.hoverBorder} p-6 flex flex-col justify-between gap-5 transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`p-3.5 bg-[#121218] border border-white/10 ${cfg.hoverBoxBorder} transition-colors duration-300`}
                  >
                    <SkillIcon
                      className={`w-6 h-6 text-white ${cfg.hoverIcon} transition-colors duration-300`}
                    />
                  </div>
                  <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 bg-[#08080A] border border-white/[0.08] text-zinc-400 group-hover:text-white transition-colors">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-zinc-500 group-hover:text-zinc-400 mt-1.5 leading-relaxed transition-colors">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export { Skills };
