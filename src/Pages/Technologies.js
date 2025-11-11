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

  // 기술 스택을 카테고리별로 그룹핑 (0-6단계)
  const SKILLS = [
    {
      title: "Languages",
      color: "emerald",
      items: [
        { name: "Java", proficiency: 6 },
        { name: "C", proficiency: 4 },
        { name: "C++", proficiency: 2 },
        { name: "Python", proficiency: 3 },
        { name: "PHP", proficiency: 3 },
      ],
    },
    {
      title: "Backend & Database",
      color: "indigo",
      items: [
        { name: "Spring Boot", proficiency: 6 },
        { name: "MySQL", proficiency: 6 },
        { name: "Redis", proficiency: 2 },
      ],
    },
    {
      title: "Frontend",
      color: "sky",
      items: [
        { name: "HTML", proficiency: 4 },
        { name: "CSS", proficiency: 4 },
        { name: "JavaScript", proficiency: 4 },
        { name: "React", proficiency: 2 },
      ],
    },
    {
      title: "DevOps",
      color: "amber",
      items: [
        { name: "AWS", proficiency: 4 },
        { name: "Docker", proficiency: 3 },
        { name: "Git/GitHub", proficiency: 5 },
      ],
    },
    {
      title: "Tools",
      color: "rose",
      items: [
        { name: "Postman", proficiency: 4 },
        { name: "Slack", proficiency: 4 },
        { name: "Jira", proficiency: 3 },
        { name: "Notion", proficiency: 5 },
        { name: "Cursor", proficiency: 4 },
        { name: "Figma", proficiency: 2 },
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
    }
  };

  function ProficiencyBar({ proficiency }) {
    const getProficiencyBar = (level) => {
      let width, color;
      switch (level) {
        case 6: // Expert
          width = "100%";
          color = "bg-blue-700";
          break;
        case 5: // Advanced+
          width = "83%";
          color = "bg-blue-600";
          break;
        case 4: // Advanced
          width = "67%";
          color = "bg-blue-500";
          break;
        case 3: // Intermediate+
          width = "50%";
          color = "bg-blue-400";
          break;
        case 2: // Intermediate
          width = "33%";
          color = "bg-blue-300";
          break;
        case 1: // Beginner
          width = "17%";
          color = "bg-blue-200";
          break;
        default: // 0 - No experience
          width = "0%";
          color = "bg-gray-200";
      }

      return (
        <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} rounded-full transition-all duration-300`}
            style={{ width }}
          ></div>
        </div>
      );
    };

    return getProficiencyBar(proficiency);
  }

  function SkillBadge({ label, proficiency, color = "indigo" }) {
    const c = COLOR[color];
    return (
      <span
        className={[
          "inline-flex items-center gap-2 rounded-xl border bg-white/80 dark:bg-slate-900/50 px-3 py-1 text-sm",
          "shadow-sm backdrop-blur",
          "border-slate-200 dark:border-slate-700",
          "text-slate-700 dark:text-slate-300",
          "ring-slate-100 dark:ring-slate-800",
          "ring-1 hover:ring-2 transition hover:bg-white/90 dark:hover:bg-slate-900/60",
        ].join(" ")}
      >
        {label}
        <ProficiencyBar proficiency={proficiency} />
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
            <SkillBadge key={item.name} label={item.name} proficiency={item.proficiency} color={color} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto max-width pt-24 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold  text-center">
          Tech Stack
        </h1>
        <p className="text-content py-8 lg:max-w-3xl mx-auto text-center">
          경험이 있는 기술을 성취도별로 정리했습니다.
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
