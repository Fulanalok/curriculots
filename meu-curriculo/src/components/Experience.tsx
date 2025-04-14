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
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <ul className="list-disc pl-5">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-100">{exp.company}</p>
            <p className="text-gray-100">{exp.location}</p>
            <p className="text-gray-3  00">{exp.date}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;