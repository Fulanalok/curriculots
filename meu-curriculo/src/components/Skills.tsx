import React from "react";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiPostman,
  SiDocker,
  SiMysql,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillGroup = {
  category: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Linguagens",
    skills: [
      { name: "Javascript", icon: <FaJs className="text-yellow-500" /> },
      { name: "Typescript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Java", icon: <span className="text-xl">☕</span> },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Express", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-blue-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-blue-500" />,
      },
    ],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Trello", icon: <FaReact className="text-blue-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Postman", icon: <SiPostman className="text-red-500" /> },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Comunicação", icon: <FaReact className="text-blue-500" /> },
      {
        name: "Trabalho em equipe",
        icon: <FaReact className="text-blue-500" />,
      },
      {
        name: "Resolução de problemas",
        icon: <FaReact className="text-blue-500" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-200 mb-6">Habilidades</h2>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-3 text-gray-800">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center bg-gray-100 p-2 rounded-lg shadow-sm">
                  {skill.icon}
                  <span> {skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
