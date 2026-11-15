import { useState } from "react";
import {
  LuCalendar,
  LuFileText,
  LuMail,
  LuCopy,
  LuCheck,
  LuExternalLink,
  LuMapPin,
} from "react-icons/lu";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import { externalLinks } from "../../scripts/portfolioData";

const Contact = ({ data, onOpenCv }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.meta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full space-y-10">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-950/30 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Pitch & Calendar CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                {data.contact.sectionTag}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {data.contact.sectionTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {data.contact.sectionSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={externalLinks.calendar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <LuCalendar className="w-4 h-4" />
                <span>{data.contact.scheduleBtn}</span>
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <LuFileText className="w-4 h-4 text-cyan-400" />
                <span>{data.contact.cvBtn}</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <LuMapPin className="w-4 h-4 text-cyan-400" />
                {data.meta.location}
              </span>
              <span>•</span>
              <span>{data.meta.role}</span>
            </div>
          </div>

          {/* Right Direct Channels Grid */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              {data.contact.directChannels}
            </h3>

            {/* WhatsApp */}
            <a
              href={externalLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group w-full p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    WhatsApp Direct
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    {data.meta.phone}
                  </p>
                </div>
              </div>
              <LuExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={externalLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group w-full p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-sky-500/50 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-sky-500/15 border border-sky-500/30 text-sky-400">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    LinkedIn
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    /in/joseth-calderon
                  </p>
                </div>
              </div>
              <LuExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={externalLinks.github}
              target="_blank"
              rel="noreferrer"
              className="group w-full p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-slate-600 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-white">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </p>
                  <p className="text-xs text-slate-400 font-mono">
                    github.com/JosCalCor22
                  </p>
                </div>
              </div>
              <LuExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </a>

            {/* Email with One-Click Copy */}
            <div className="w-full p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-2">
              <a
                href={externalLinks.email}
                className="flex items-center gap-3.5 min-w-0 flex-1"
              >
                <div className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <LuMail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white">Email</p>
                  <p className="text-xs text-slate-400 font-mono truncate">
                    {data.meta.email}
                  </p>
                </div>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 shrink-0 cursor-pointer transition-all"
              >
                {copied ? (
                  <>
                    <LuCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">
                      {data.hero.emailCopied}
                    </span>
                  </>
                ) : (
                  <>
                    <LuCopy className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{data.hero.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
