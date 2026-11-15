import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiPython,
  SiFastapi,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiFigma,
  SiNotion,
  SiJsonwebtokens,
  SiChainlink,
  SiGoogle,
  SiPlatzi,
  SiSqlalchemy,
} from "react-icons/si";
import {
  LuShieldCheck,
  LuLock,
  LuRadar,
  LuFileKey,
  LuFileCheck,
  LuBriefcase,
  LuRocket,
  LuCompass,
  LuKanban,
  LuCrown,
  LuGlobe,
  LuDatabase,
  LuSparkles,
  LuBrainCircuit,
  LuLayers,
  LuAward,
  LuGraduationCap,
  LuCode,
} from "react-icons/lu";

/* Custom crisp SVGs for Solana, Filecoin, and Gemini/LangChain where needed */
const SolanaSvg = ({ className }) => (
  <svg viewBox="0 0 397.7 311.7" fill="currentColor" className={className}>
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" />
    <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" />
    <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" />
  </svg>
);

const FilecoinSvg = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.43 6.29l-.34 1.38h-2.54l-.42 1.71h2.36l-.34 1.38h-2.36l-.96 3.89c-.22.89-.85 1.35-1.69 1.35-.47 0-.89-.15-1.15-.35l.42-1.26c.17.1.38.17.6.17.34 0 .56-.19.67-.63l.88-3.17H8.82l.34-1.38h1.74l.42-1.71H9.58l.34-1.38h1.74l.39-1.57c.25-1.02.98-1.65 2.04-1.65.54 0 1.01.14 1.31.34l-.43 1.27c-.21-.13-.47-.21-.76-.21-.45 0-.74.24-.87.76l-.27 1.06h2.36z" />
  </svg>
);

export const iconConfigMap = {
  typescript: { Icon: SiTypescript, color: "text-[#3178C6]", bg: "bg-[#3178C6]/15", border: "border-[#3178C6]/35" },
  javascript: { Icon: SiJavascript, color: "text-[#F7DF1E]", bg: "bg-[#F7DF1E]/15", border: "border-[#F7DF1E]/35" },
  react: { Icon: SiReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/15", border: "border-[#61DAFB]/35" },
  python: { Icon: SiPython, color: "text-[#3776AB]", bg: "bg-[#3776AB]/15", border: "border-[#3776AB]/40" },
  fastapi: { Icon: SiFastapi, color: "text-[#009688]", bg: "bg-[#009688]/15", border: "border-[#009688]/35" },
  tailwind: { Icon: SiTailwindcss, color: "text-[#38BDF8]", bg: "bg-[#38BDF8]/15", border: "border-[#38BDF8]/35" },
  postgresql: { Icon: SiPostgresql, color: "text-[#60A5FA]", bg: "bg-[#60A5FA]/15", border: "border-[#60A5FA]/35" },
  sql: { Icon: LuDatabase, color: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/35" },
  langchain: { Icon: LuBrainCircuit, color: "text-purple-400", bg: "bg-purple-500/15", border: "border-purple-500/35" },
  sqlalchemy: { Icon: SiSqlalchemy, color: "text-red-400", bg: "bg-red-500/15", border: "border-red-500/35" },
  alembic: { Icon: LuLayers, color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/35" },
  docker: { Icon: SiDocker, color: "text-[#2496ED]", bg: "bg-[#2496ED]/15", border: "border-[#2496ED]/35" },
  gcp: { Icon: SiGooglecloud, color: "text-[#4285F4]", bg: "bg-[#4285F4]/15", border: "border-[#4285F4]/35" },
  git: { Icon: SiGit, color: "text-[#F05032]", bg: "bg-[#F05032]/15", border: "border-[#F05032]/35" },
  github: { Icon: SiGithub, color: "text-slate-200", bg: "bg-slate-500/20", border: "border-slate-400/35" },
  cicd: { Icon: LuRocket, color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/35" },
  figma: { Icon: SiFigma, color: "text-[#F24E1E]", bg: "bg-[#F24E1E]/15", border: "border-[#F24E1E]/35" },
  notion: { Icon: SiNotion, color: "text-white", bg: "bg-white/10", border: "border-white/30" },
  nist: { Icon: LuShieldCheck, color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/35" },
  jwt: { Icon: SiJsonwebtokens, color: "text-pink-400", bg: "bg-pink-500/15", border: "border-pink-500/35" },
  encryption: { Icon: LuFileKey, color: "text-teal-400", bg: "bg-teal-500/15", border: "border-teal-500/35" },
  siem: { Icon: LuRadar, color: "text-sky-400", bg: "bg-sky-500/15", border: "border-sky-500/35" },
  audit: { Icon: LuFileCheck, color: "text-indigo-400", bg: "bg-indigo-500/15", border: "border-indigo-500/35" },
  product: { Icon: LuBriefcase, color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/35" },
  leadership: { Icon: LuCrown, color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/35" },
  agile: { Icon: LuKanban, color: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/35" },
  language: { Icon: LuGlobe, color: "text-blue-400", bg: "bg-blue-500/15", border: "border-blue-500/35" },
  languageEs: { Icon: LuGlobe, color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/35" },
  solana: { Icon: SolanaSvg, color: "text-[#14F195]", bg: "bg-[#14F195]/15", border: "border-[#14F195]/35" },
  chainlink: { Icon: SiChainlink, color: "text-[#375BD2]", bg: "bg-[#375BD2]/20", border: "border-[#375BD2]/45" },
  filecoin: { Icon: FilecoinSvg, color: "text-[#0090FF]", bg: "bg-[#0090FF]/15", border: "border-[#0090FF]/35" },
  google: { Icon: SiGoogle, color: "text-[#4285F4]", bg: "bg-[#4285F4]/15", border: "border-[#4285F4]/35" },
  uniandes: { Icon: LuAward, color: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/35" },
  sena: { Icon: LuGraduationCap, color: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/35" },
  platzi: { Icon: SiPlatzi, color: "text-[#98CA3F]", bg: "bg-[#98CA3F]/15", border: "border-[#98CA3F]/35" },
};

const tagToKeyMap = {
  react: "react",
  "react.js": "react",
  typescript: "typescript",
  javascript: "javascript",
  fastapi: "fastapi",
  python: "python",
  postgresql: "postgresql",
  "gemini ai": "langchain",
  "generative ai": "langchain",
  gcp: "gcp",
  figma: "figma",
  jwt: "jwt",
  "rbac security": "jwt",
  notion: "notion",
  tailwindcss: "tailwind",
  "ceo leadership": "leadership",
  "cto leadership": "leadership",
  "product strategy": "product",
  "client scoping": "product",
  "system architecture": "alembic",
  "qa & architecture": "audit",
  "ui/ux": "figma",
  "no-code": "agile",
};

export const TechIcon = ({ iconKey, tag, size = "w-5 h-5" }) => {
  const normalizedKey =
    iconKey || (tag ? tagToKeyMap[tag.toLowerCase()] : null) || "default";
  const cfg = iconConfigMap[normalizedKey] || {
    Icon: LuCode,
    color: "text-cyan-400",
    bg: "bg-cyan-500/15",
    border: "border-cyan-500/35",
  };
  const { Icon, color } = cfg;
  return <Icon className={`${size} ${color} shrink-0`} />;
};

export const TechBadge = ({ label, iconKey }) => {
  const normalizedKey =
    iconKey || (label ? tagToKeyMap[label.toLowerCase()] : null);
  const cfg = iconConfigMap[normalizedKey] || {
    Icon: LuSparkles,
    color: "text-cyan-400",
    bg: "bg-slate-800/80",
    border: "border-slate-700",
  };
  const { Icon, color } = cfg;

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-700/80 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800/90 transition-all duration-200 shadow-xs">
      <Icon className={`w-3.5 h-3.5 ${color} shrink-0`} />
      <span>{label}</span>
    </span>
  );
};
