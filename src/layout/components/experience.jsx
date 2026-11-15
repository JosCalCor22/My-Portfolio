import { motion } from "motion/react";
import { TechBadge } from "../../ui/TechIcon";

const Experience = ({ data }) => {
  const jobs = data.experience.items;

  return (
    <div className="w-full space-y-12">
      {/* Section Header */}
      <div className="flex items-start gap-6 border-b border-white/10 pb-6">
        <div className="hidden sm:flex flex-col items-center pt-1">
          <span className="text-4xl font-black tracking-tighter text-white leading-none">
            03
          </span>
          <span className="w-8 h-[3px] bg-[#7C3AED] mt-2" />
        </div>
        <div className="space-y-1.5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A78BFA] font-semibold">
            {data.experience.sectionTag}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {data.experience.sectionTitle}
          </h2>
        </div>
      </div>

      {/* Chronological Timeline View */}
      <div className="border-l border-white/15 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
        {jobs.map((job, idx) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0B0B10]/90 backdrop-blur-xs border border-white/10 hover:border-[#7C3AED]/45 p-6 sm:p-8 space-y-6 transition-colors duration-300"
          >
            {/* Timeline Marker */}
            <span className="absolute -left-[31px] sm:-left-[47px] top-8 w-3 h-3 bg-[#7C3AED] ring-4 ring-[#06050B]" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#A78BFA] font-semibold">
                  0{idx + 1} — {job.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {job.company}{" "}
                  <span className="text-zinc-600 font-light mx-1">/</span>{" "}
                  <span className="text-zinc-300 text-lg font-medium">
                    {job.role}
                  </span>
                </h3>
              </div>
              <span className="text-xs text-zinc-300 bg-[#121218] px-3.5 py-1.5 border border-white/10 w-fit">
                {job.duration}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {job.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 bg-[#08080D] border border-white/[0.07] hover:border-white/20 transition-colors space-y-2"
                >
                  <span className="text-xs font-bold text-[#A78BFA]">
                    0{i + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white">{h.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
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
    </div>
  );
};

export { Experience };
