import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LuCrown,
  LuLayers,
  LuBrainCircuit,
  LuShieldCheck,
  LuCheck,
  LuChevronRight,
} from "react-icons/lu";

const pillarIcons = {
  leadership: {
    Icon: LuCrown,
    color: "text-amber-400",
    bg: "bg-amber-500/15",
    border: "border-amber-500/40",
    glow: "from-amber-500/15 to-transparent",
  },
  fullstack: {
    Icon: LuLayers,
    color: "text-cyan-400",
    bg: "bg-cyan-500/15",
    border: "border-cyan-500/40",
    glow: "from-cyan-500/15 to-transparent",
  },
  ai_web3: {
    Icon: LuBrainCircuit,
    color: "text-purple-400",
    bg: "bg-purple-500/15",
    border: "border-purple-500/40",
    glow: "from-purple-500/15 to-transparent",
  },
  security_ux: {
    Icon: LuShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/40",
    glow: "from-emerald-500/15 to-transparent",
  },
};

const About = ({ data }) => {
  const [selectedId, setSelectedId] = useState("leadership");
  const pillars = data.pillars.items;
  const activePillar =
    pillars.find((p) => p.id === selectedId) || pillars[0];
  const activeStyle = pillarIcons[activePillar.id] || pillarIcons.leadership;
  const ActiveIcon = activeStyle.Icon;

  return (
    <div className="w-full space-y-10">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
          {data.pillars.sectionTag}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {data.pillars.sectionTitle}
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {data.pillars.sectionSubtitle}
        </p>
      </div>

      {/* Interactive 2-Column Executive Architecture View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Selector Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {pillars.map((item) => {
            const isSelected = item.id === selectedId;
            const style = pillarIcons[item.id] || pillarIcons.leadership;
            const ItemIcon = style.Icon;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                  isSelected
                    ? `bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10`
                    : "bg-slate-900/50 border-slate-800/80 hover:bg-slate-900/90 hover:border-slate-700"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`p-3 rounded-xl border ${style.bg} ${style.border} ${style.color} shrink-0 mt-0.5`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      {item.badge}
                    </span>
                    <h3
                      className={`text-base font-bold mt-0.5 transition-colors ${
                        isSelected ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
                <LuChevronRight
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    isSelected
                      ? "text-cyan-400 translate-x-1"
                      : "text-slate-600"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Spotlight Detail Panel */}
        <div className="lg:col-span-7 flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.28 }}
              className={`w-full rounded-3xl bg-gradient-to-br ${activeStyle.glow} bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl`}
            >
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${activeStyle.bg} ${activeStyle.border} ${activeStyle.color}`}
                  >
                    <ActiveIcon className="w-4 h-4" />
                    {activePillar.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1 rounded-lg border border-slate-800">
                    {activePillar.metrics}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activePillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activePillar.description}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {activePillar.bullets.map((bullet, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80"
                    >
                      <div
                        className={`p-1 rounded-md ${activeStyle.bg} ${activeStyle.color} mt-0.5 shrink-0`}
                      >
                        <LuCheck className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Pillar Indicator */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono uppercase tracking-wider">
                  {activePillar.metrics}
                </span>
                <div className="flex gap-1.5">
                  {pillars.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedId(p.id)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        p.id === selectedId
                          ? "w-7 bg-cyan-400"
                          : "w-2 bg-slate-700 hover:bg-slate-500"
                      }`}
                      aria-label={p.title}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export { About };
