const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvimento de software",
      company: "São Braz S/A",
      location: "Presencial",
      date: "Dezembro 2024 - Presente",
      description: "Manutenção de aplicação web e mobile.",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-4xl font-bold mb-4 flex flex-col items-center justify-center  text-center">
        Experiência
      </h2>
      <ul className="list-disc pl-5">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold items-center justify-center  text-center">
              {exp.title}
            </h3>
            <p className="[dark]text-gray-100 text-center">{exp.company}</p>
            <p className="[dark]text-gray-100 text-center">{exp.location}</p>
            <p className="[dark]text-gray-100 text-center">{exp.date}</p>
            <p className="[dark]text-gray-100 text-center">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
