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
  LuFileKey,
  LuFileCheck,
  LuBriefcase,
  LuRocket,
  LuKanban,
  LuCrown,
  LuGlobe,
  LuDatabase,
  LuSparkles,
  LuBrainCircuit,
  LuLayers,
  LuCode,
  LuRadar,
} from "react-icons/lu";

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
  typescript: {
    Icon: SiTypescript,
    hoverIcon: "group-hover:text-[#3178C6]",
    hoverBorder: "hover:border-[#3178C6]",
    hoverBoxBorder: "group-hover:border-[#3178C6]/50",
  },
  javascript: {
    Icon: SiJavascript,
    hoverIcon: "group-hover:text-[#F7DF1E]",
    hoverBorder: "hover:border-[#F7DF1E]",
    hoverBoxBorder: "group-hover:border-[#F7DF1E]/50",
  },
  react: {
    Icon: SiReact,
    hoverIcon: "group-hover:text-[#61DAFB]",
    hoverBorder: "hover:border-[#61DAFB]",
    hoverBoxBorder: "group-hover:border-[#61DAFB]/50",
  },
  python: {
    Icon: SiPython,
    hoverIcon: "group-hover:text-[#3776AB]",
    hoverBorder: "hover:border-[#3776AB]",
    hoverBoxBorder: "group-hover:border-[#3776AB]/50",
  },
  fastapi: {
    Icon: SiFastapi,
    hoverIcon: "group-hover:text-[#009688]",
    hoverBorder: "hover:border-[#009688]",
    hoverBoxBorder: "group-hover:border-[#009688]/50",
  },
  tailwind: {
    Icon: SiTailwindcss,
    hoverIcon: "group-hover:text-[#38BDF8]",
    hoverBorder: "hover:border-[#38BDF8]",
    hoverBoxBorder: "group-hover:border-[#38BDF8]/50",
  },
  postgresql: {
    Icon: SiPostgresql,
    hoverIcon: "group-hover:text-[#60A5FA]",
    hoverBorder: "hover:border-[#60A5FA]",
    hoverBoxBorder: "group-hover:border-[#60A5FA]/50",
  },
  sql: {
    Icon: LuDatabase,
    hoverIcon: "group-hover:text-[#38BDF8]",
    hoverBorder: "hover:border-[#38BDF8]",
    hoverBoxBorder: "group-hover:border-[#38BDF8]/50",
  },
  langchain: {
    Icon: LuBrainCircuit,
    hoverIcon: "group-hover:text-[#A855F7]",
    hoverBorder: "hover:border-[#A855F7]",
    hoverBoxBorder: "group-hover:border-[#A855F7]/50",
  },
  sqlalchemy: {
    Icon: SiSqlalchemy,
    hoverIcon: "group-hover:text-[#EF4444]",
    hoverBorder: "hover:border-[#EF4444]",
    hoverBoxBorder: "group-hover:border-[#EF4444]/50",
  },
  alembic: {
    Icon: LuLayers,
    hoverIcon: "group-hover:text-[#F59E0B]",
    hoverBorder: "hover:border-[#F59E0B]",
    hoverBoxBorder: "group-hover:border-[#F59E0B]/50",
  },
  docker: {
    Icon: SiDocker,
    hoverIcon: "group-hover:text-[#2496ED]",
    hoverBorder: "hover:border-[#2496ED]",
    hoverBoxBorder: "group-hover:border-[#2496ED]/50",
  },
  gcp: {
    Icon: SiGooglecloud,
    hoverIcon: "group-hover:text-[#4285F4]",
    hoverBorder: "hover:border-[#4285F4]",
    hoverBoxBorder: "group-hover:border-[#4285F4]/50",
  },
  git: {
    Icon: SiGit,
    hoverIcon: "group-hover:text-[#F05032]",
    hoverBorder: "hover:border-[#F05032]",
    hoverBoxBorder: "group-hover:border-[#F05032]/50",
  },
  github: {
    Icon: SiGithub,
    hoverIcon: "group-hover:text-[#A855F7]",
    hoverBorder: "hover:border-[#A855F7]",
    hoverBoxBorder: "group-hover:border-[#A855F7]/50",
  },
  cicd: {
    Icon: LuRocket,
    hoverIcon: "group-hover:text-[#10B981]",
    hoverBorder: "hover:border-[#10B981]",
    hoverBoxBorder: "group-hover:border-[#10B981]/50",
  },
  figma: {
    Icon: SiFigma,
    hoverIcon: "group-hover:text-[#F24E1E]",
    hoverBorder: "hover:border-[#F24E1E]",
    hoverBoxBorder: "group-hover:border-[#F24E1E]/50",
  },
  notion: {
    Icon: SiNotion,
    hoverIcon: "group-hover:text-[#A855F7]",
    hoverBorder: "hover:border-[#A855F7]",
    hoverBoxBorder: "group-hover:border-[#A855F7]/50",
  },
  nist: {
    Icon: LuShieldCheck,
    hoverIcon: "group-hover:text-[#10B981]",
    hoverBorder: "hover:border-[#10B981]",
    hoverBoxBorder: "group-hover:border-[#10B981]/50",
  },
  jwt: {
    Icon: SiJsonwebtokens,
    hoverIcon: "group-hover:text-[#EC4899]",
    hoverBorder: "hover:border-[#EC4899]",
    hoverBoxBorder: "group-hover:border-[#EC4899]/50",
  },
  encryption: {
    Icon: LuFileKey,
    hoverIcon: "group-hover:text-[#14B8A6]",
    hoverBorder: "hover:border-[#14B8A6]",
    hoverBoxBorder: "group-hover:border-[#14B8A6]/50",
  },
  siem: {
    Icon: LuRadar,
    hoverIcon: "group-hover:text-[#38BDF8]",
    hoverBorder: "hover:border-[#38BDF8]",
    hoverBoxBorder: "group-hover:border-[#38BDF8]/50",
  },
  audit: {
    Icon: LuFileCheck,
    hoverIcon: "group-hover:text-[#8B5CF6]",
    hoverBorder: "hover:border-[#8B5CF6]",
    hoverBoxBorder: "group-hover:border-[#8B5CF6]/50",
  },
  product: {
    Icon: LuBriefcase,
    hoverIcon: "group-hover:text-[#8B5CF6]",
    hoverBorder: "hover:border-[#8B5CF6]",
    hoverBoxBorder: "group-hover:border-[#8B5CF6]/50",
  },
  leadership: {
    Icon: LuCrown,
    hoverIcon: "group-hover:text-[#A855F7]",
    hoverBorder: "hover:border-[#A855F7]",
    hoverBoxBorder: "group-hover:border-[#A855F7]/50",
  },
  agile: {
    Icon: LuKanban,
    hoverIcon: "group-hover:text-[#38BDF8]",
    hoverBorder: "hover:border-[#38BDF8]",
    hoverBoxBorder: "group-hover:border-[#38BDF8]/50",
  },
  language: {
    Icon: LuGlobe,
    hoverIcon: "group-hover:text-[#60A5FA]",
    hoverBorder: "hover:border-[#60A5FA]",
    hoverBoxBorder: "group-hover:border-[#60A5FA]/50",
  },
  languageEs: {
    Icon: LuGlobe,
    hoverIcon: "group-hover:text-[#10B981]",
    hoverBorder: "hover:border-[#10B981]",
    hoverBoxBorder: "group-hover:border-[#10B981]/50",
  },
  solana: {
    Icon: SolanaSvg,
    hoverIcon: "group-hover:text-[#14F195]",
    hoverBorder: "hover:border-[#14F195]",
    hoverBoxBorder: "group-hover:border-[#14F195]/50",
  },
  chainlink: {
    Icon: SiChainlink,
    hoverIcon: "group-hover:text-[#375BD2]",
    hoverBorder: "hover:border-[#375BD2]",
    hoverBoxBorder: "group-hover:border-[#375BD2]/50",
  },
  filecoin: {
    Icon: FilecoinSvg,
    hoverIcon: "group-hover:text-[#0090FF]",
    hoverBorder: "hover:border-[#0090FF]",
    hoverBoxBorder: "group-hover:border-[#0090FF]/50",
  },
  google: {
    Icon: SiGoogle,
    isOfficial: true,
    hoverIcon: "group-hover:text-[#4285F4]",
    hoverBorder: "hover:border-[#4285F4]",
    hoverBoxBorder: "group-hover:border-[#4285F4]/50",
  },
  platzi: {
    Icon: SiPlatzi,
    isOfficial: true,
    hoverIcon: "group-hover:text-[#98CA3F]",
    hoverBorder: "hover:border-[#98CA3F]",
    hoverBoxBorder: "group-hover:border-[#98CA3F]/50",
  },
  uniandes: {
    Icon: null,
    isOfficial: false,
    hoverBorder: "hover:border-[#FACC15]",
  },
  sena: {
    Icon: null,
    isOfficial: false,
    hoverBorder: "hover:border-[#FF6B00]",
  },
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

export const TechBadge = ({ label, iconKey }) => {
  const normalizedKey =
    iconKey || (label ? tagToKeyMap[label.toLowerCase()] : null);
  const cfg = iconConfigMap[normalizedKey] || {
    Icon: LuSparkles,
    hoverIcon: "group-hover:text-[#8B5CF6]",
    hoverBorder: "hover:border-[#8B5CF6]",
  };
  const Icon = cfg.Icon || LuCode;

  return (
    <span
      className={`group inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[#0E0E12] border border-white/10 ${cfg.hoverBorder} text-zinc-300 hover:text-white transition-all duration-200`}
    >
      <Icon
        className={`w-3.5 h-3.5 text-white ${cfg.hoverIcon} transition-colors duration-200 shrink-0`}
      />
      <span className="tracking-wide">{label}</span>
    </span>
  );
};
