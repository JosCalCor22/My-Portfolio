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
    <div className="w-full space-y-10">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            {data.skills.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {data.skills.sectionTitle}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {data.skills.sectionSubtitle}
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {data.skills.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? "bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Skills Grid with Brand Icons */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const cfg = iconConfigMap[skill.iconKey] || {
              Icon: LuCode,
              color: "text-cyan-400",
              bg: "bg-cyan-500/15",
              border: "border-cyan-500/35",
            };
            const SkillIcon = cfg.Icon;

            return (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.22 }}
                className="group rounded-2xl bg-slate-900/75 hover:bg-slate-900 border border-slate-800/90 hover:border-cyan-500/40 p-5 flex flex-col justify-between gap-3.5 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`p-3 rounded-xl border ${cfg.bg} ${cfg.border} ${cfg.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <SkillIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-slate-400 group-hover:text-cyan-300 transition-colors">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
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
