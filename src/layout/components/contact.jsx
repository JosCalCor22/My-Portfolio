import { useState } from "react";
import {
  LuCalendar,
  LuFileText,
  LuMail,
  LuCopy,
  LuCheck,
  LuArrowUpRight,
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
    <div className="w-full space-y-12">
      {/* Section Header with 06 Index */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div className="flex items-start gap-6">
          <div className="hidden sm:flex flex-col items-center pt-1">
            <span className="text-4xl font-black tracking-tighter text-white leading-none">
              06
            </span>
            <span className="w-8 h-[3px] bg-[#7C3AED] mt-2" />
          </div>
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-[#A78BFA] font-semibold">
              {data.contact.sectionTag}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {data.contact.sectionTitle}
            </h2>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 text-xs text-zinc-400">
          <LuMapPin className="w-4 h-4 text-[#A78BFA]" />
          <span>{data.meta.location}</span>
        </div>
      </div>

      {/* Architectural Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-[#0B0B10]/90 backdrop-blur-xs">
        {/* Left Pitch & Equal-Sized Primary Actions */}
        <div className="lg:col-span-7 p-7 sm:p-12 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Joseth Calderón Corredor
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#A78BFA] font-semibold">
              {data.meta.role}
            </p>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl pt-1">
              {data.contact.sectionSubtitle}
            </p>
          </div>

          {/* Equal-Width Action Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
            <a
              href={externalLinks.calendar}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-[#6D28D9] text-black hover:text-white font-bold text-xs uppercase tracking-[0.16em] text-center transition-all duration-300 cursor-pointer"
            >
              <LuCalendar className="w-4 h-4 shrink-0" />
              <span>{data.contact.scheduleBtn}</span>
            </a>

            <button
              onClick={onOpenCv}
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-transparent hover:bg-white/5 text-white font-semibold text-xs uppercase tracking-[0.16em] text-center border border-white/25 hover:border-[#7C3AED] transition-all duration-300 cursor-pointer"
            >
              <LuFileText className="w-4 h-4 text-[#A78BFA] shrink-0" />
              <span>{data.contact.cvBtn}</span>
            </button>
          </div>
        </div>

        {/* Right Direct Channels Divide List */}
        <div className="lg:col-span-5 flex flex-col divide-y divide-white/10 bg-[#08080D]">
          {/* WhatsApp */}
          <a
            href={externalLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group p-6 flex items-center justify-between hover:bg-[#111118] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#121218] border border-white/10 group-hover:border-[#25D366]/50 text-white group-hover:text-[#25D366] transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                  WhatsApp Direct
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {data.meta.phone}
                </p>
              </div>
            </div>
            <LuArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#25D366] transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href={externalLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group p-6 flex items-center justify-between hover:bg-[#111118] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#121218] border border-white/10 group-hover:border-[#0A66C2]/50 text-white group-hover:text-[#0A66C2] transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                  LinkedIn
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  /in/joseth-calderon
                </p>
              </div>
            </div>
            <LuArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#0A66C2] transition-colors" />
          </a>

          {/* GitHub */}
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noreferrer"
            className="group p-6 flex items-center justify-between hover:bg-[#111118] transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#121218] border border-white/10 group-hover:border-[#A78BFA]/50 text-white group-hover:text-[#A78BFA] transition-colors">
                <FaGithub className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                  GitHub
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  github.com/JosCalCor22
                </p>
              </div>
            </div>
            <LuArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#A78BFA] transition-colors" />
          </a>

          {/* Email with One-Click Copy */}
          <div className="group p-6 flex items-center justify-between gap-2 hover:bg-[#111118] transition-colors">
            <a
              href={externalLinks.email}
              className="flex items-center gap-4 min-w-0 flex-1"
            >
              <div className="p-3 bg-[#121218] border border-white/10 group-hover:border-[#7C3AED]/50 text-white group-hover:text-[#A78BFA] transition-colors shrink-0">
                <LuMail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-white">
                  Email
                </p>
                <p className="text-xs text-zinc-400 truncate mt-0.5">
                  {data.meta.email}
                </p>
              </div>
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 bg-[#121218] hover:bg-[#6D28D9] hover:text-white border border-white/15 hover:border-[#7C3AED] text-[11px] uppercase tracking-wider font-bold text-zinc-200 flex items-center gap-1.5 shrink-0 cursor-pointer transition-all"
            >
              {copied ? (
                <>
                  <LuCheck className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>{data.hero.emailCopied}</span>
                </>
              ) : (
                <>
                  <LuCopy className="w-3.5 h-3.5" />
                  <span>{data.hero.copyEmail}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
