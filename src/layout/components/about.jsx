import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  LuCrown,
  LuLayers,
  LuBrainCircuit,
  LuShieldCheck,
  LuArrowUpRight,
} from "react-icons/lu";

const pillarIcons = {
  leadership: LuCrown,
  fullstack: LuLayers,
  ai_web3: LuBrainCircuit,
  security_ux: LuShieldCheck,
};

const About = ({ data }) => {
  const [selectedId, setSelectedId] = useState("leadership");
  const pillars = data.pillars.items;
  const activePillar =
    pillars.find((p) => p.id === selectedId) || pillars[0];
  const ActiveIcon = pillarIcons[activePillar.id] || LuCrown;

  return (
    <div className="w-full space-y-10">
      {/* Section Header */}
      <div className="flex items-start gap-6 border-b border-white/10 pb-6">
        <div className="hidden sm:flex flex-col items-center pt-1">
          <span className="text-4xl font-black tracking-tighter text-white leading-none">
            02
          </span>
          <span className="w-8 h-[3px] bg-[#7C3AED] mt-2" />
        </div>
        <div className="space-y-1.5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A78BFA] font-semibold">
            {data.pillars.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {data.pillars.sectionTitle}
          </h2>
        </div>
      </div>

      {/* Symmetrical Full-Height Architectural Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-[#0B0B10]/90 backdrop-blur-xs items-stretch">
        {/* Left 4 Selector Rows — flex-1 ensures all 4 cards fill 100% of the height equally */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col divide-y divide-white/10 h-full">
          {pillars.map((item, idx) => {
            const isSelected = item.id === selectedId;
            const ItemIcon = pillarIcons[item.id] || LuCrown;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`flex-1 w-full text-left px-6 py-6 sm:px-7 transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
                  isSelected
                    ? "bg-[#6D28D9] text-white"
                    : "bg-transparent hover:bg-[#12121A] text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3.5 border transition-colors shrink-0 ${
                      isSelected
                        ? "bg-black/40 text-white border-white/30"
                        : "bg-[#121218] text-white border-white/10"
                    }`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className={`text-[11px] uppercase tracking-[0.2em] block ${
                        isSelected
                          ? "text-purple-200 font-semibold"
                          : "text-zinc-500"
                      }`}
                    >
                      0{idx + 1} — {item.badge}
                    </span>
                    <h3 className="text-base font-bold mt-1 text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <LuArrowUpRight
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    isSelected
                      ? "text-white translate-x-0.5 -translate-y-0.5"
                      : "text-zinc-600"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Detail Panel — matches exact height of Left Column */}
        <div className="lg:col-span-7 flex bg-[#08080D]/90 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="w-full p-7 sm:p-10 lg:p-12 flex flex-col justify-between gap-8"
            >
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#A78BFA] font-semibold">
                    <ActiveIcon className="w-4 h-4" />
                    {activePillar.badge}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {activePillar.metrics}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {activePillar.title}
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    {activePillar.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-1">
                  {activePillar.bullets.map((bullet, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-[#101017] border border-white/[0.08] hover:border-[#7C3AED]/50 transition-colors"
                    >
                      <span className="text-xs font-bold text-[#A78BFA] leading-none mt-1">
                        0{index + 1}
                      </span>
                      <p className="text-sm text-zinc-200 leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                <span className="uppercase tracking-[0.18em]">
                  {activePillar.metrics}
                </span>
                <div className="flex gap-2">
                  {pillars.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedId(p.id)}
                      className={`h-1.5 transition-all cursor-pointer ${
                        p.id === selectedId
                          ? "w-8 bg-[#7C3AED]"
                          : "w-3 bg-zinc-800 hover:bg-zinc-600"
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
