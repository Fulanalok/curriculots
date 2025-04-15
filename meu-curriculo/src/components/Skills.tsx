import skillGroups, { SkillGroup, Skill } from "../data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group: SkillGroup, groupIndex: number) => (
            <div
              key={groupIndex}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-center dark:text-white">
                {group.category}
              </h3>

              <ul className="space-y-3">
                {group.skills.map((skill: Skill, skillIndex: number) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 dark:text-gray-200">
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
