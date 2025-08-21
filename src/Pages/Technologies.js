import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;

  // 기술 스택을 카테고리별로 그룹핑
  const SKILLS = [
    {
      title: "Frontend",
      color: "sky",
      items: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: js },
        { name: "React", icon: react },
        { name: "Redux", icon: redux },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "Bootstrap", icon: bootstrap },
        { name: "SASS", icon: sass },
      ],
    },
    {
      title: "Backend",
      color: "indigo",
      items: [
        { name: "Node.js", icon: js },
        { name: "Express", icon: js },
        { name: "Python", icon: js },
        { name: "Django", icon: js },
      ],
    },
    {
      title: "Database",
      color: "emerald",
      items: [
        { name: "MySQL", icon: js },
        { name: "PostgreSQL", icon: js },
        { name: "MongoDB", icon: js },
        { name: "Redis", icon: js },
      ],
    },
    {
      title: "Infrastructure",
      color: "amber",
      items: [
        { name: "AWS", icon: js },
        { name: "Docker", icon: js },
        { name: "Git", icon: git },
        { name: "GitHub", icon: github },
      ],
    },
    {
      title: "Tools",
      color: "rose",
      items: [
        { name: "VS Code", icon: vscode },
        { name: "NPM", icon: npm },
        { name: "Postman", icon: postman },
        { name: "Figma", icon: figma },
      ],
    },
  ];

  // Map color tokens to Tailwind classes
  const COLOR = {
    sky: {
      dot: "bg-sky-400",
      ring: "ring-slate-100 dark:ring-slate-800",
      border: "border-slate-200 dark:border-slate-700",
      text: "text-slate-700 dark:text-slate-300",
      accent: "from-sky-200 to-cyan-200",
      title: "text-slate-900 dark:text-slate-100",
    },
    indigo: {
      dot: "bg-indigo-400",
      ring: "ring-slate-100 dark:ring-slate-800",
      border: "border-slate-200 dark:border-slate-700",
      text: "text-slate-700 dark:text-slate-300",
      accent: "from-indigo-200 to-purple-200",
      title: "text-slate-900 dark:text-slate-100",
    },
    emerald: {
      dot: "bg-emerald-400",
      ring: "ring-slate-100 dark:ring-slate-800",
      border: "border-slate-200 dark:border-slate-700",
      text: "text-slate-700 dark:text-slate-300",
      accent: "from-emerald-200 to-lime-200",
      title: "text-slate-900 dark:text-slate-100",
    },
    amber: {
      dot: "bg-amber-400",
      ring: "ring-slate-100 dark:ring-slate-800",
      border: "border-slate-200 dark:border-slate-700",
      text: "text-slate-700 dark:text-slate-300",
      accent: "from-amber-200 to-orange-200",
      title: "text-slate-900 dark:text-slate-100",
    },
    rose: {
      dot: "bg-rose-400",
      ring: "ring-slate-100 dark:ring-slate-800",
      border: "border-slate-200 dark:border-slate-700",
      text: "text-slate-700 dark:text-slate-300",
      accent: "from-rose-200 to-pink-200",
      title: "text-slate-900 dark:text-slate-100",
    },
  };

  function SkillBadge({ label, icon, color = "indigo" }) {
    const c = COLOR[color];
    return (
      <span
        className={[
          "inline-flex items-center gap-1.5 rounded-xl border bg-white/80 dark:bg-slate-900/50 px-3 py-1 text-sm",
          "shadow-sm backdrop-blur",
          "border-slate-200 dark:border-slate-700",
          "text-slate-700 dark:text-slate-300",
          "ring-slate-100 dark:ring-slate-800",
          "ring-1 hover:ring-2 transition hover:bg-white/90 dark:hover:bg-slate-900/60",
        ].join(" ")}
      >
        <img src={icon} alt={label} className="h-3 w-3" />
        {label}
      </span>
    );
  }

  function CategoryCard({ title, items, color = "indigo" }) {
    const c = COLOR[color];
    return (
      <div className="relative rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 p-6 shadow-sm ring-1 ring-black/5">
        {/* Corner accent line */}
        <div className={`absolute -top-0.5 left-5 h-1 w-24 rounded-full bg-gradient-to-r ${c.accent}`}></div>

        <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <SkillBadge key={item.name} label={item.name} icon={item.icon} color={color} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>

      {/* 기술 카테고리별 그리드 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 pt-10">
        {SKILLS.map((cat) => (
          <CategoryCard key={cat.title} title={cat.title} items={cat.items} color={cat.color} />
        ))}
      </div>
    </main>
  );
}

export default Technologies;
