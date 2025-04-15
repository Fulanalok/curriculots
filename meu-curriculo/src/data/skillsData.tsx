import {
  FaJs,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaJava,
  FaGithub,
  FaComments,
  FaUsers,
  FaPuzzlePiece,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostman,
  SiDocker,
  SiMysql,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiTrello,
  SiExpress,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: React.ReactNode;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Linguagens",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
      { name: "SQL", icon: <SiMysql className="text-blue-800" /> },
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Express", icon: <SiExpress className="text-gray-500" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },
    ],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "Trello", icon: <SiTrello className="text-blue-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      {
        name: "GitHub",
        icon: <FaGithub className="text-gray-800 dark:text-white" />,
      },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Comunicação", icon: <FaComments className="text-blue-500" /> },
      {
        name: "Trabalho em equipe",
        icon: <FaUsers className="text-green-500" />,
      },
      {
        name: "Resolução de problemas",
        icon: <FaPuzzlePiece className="text-purple-500" />,
      },
    ],
  },
];

export default skillGroups;
