const Projects = () => {
  return (
    <section className="projects">
      <h2 className="text-5x1 font-semibold flex flex-col items-center justify-center p-8 text-center">
        Projetos
      </h2>
      <div className="project-list">
        <div className="project-item">
          <a
            href="https://github.com/Fulanalok?tab=repositories"
            className="text-blue-600 hover:underline text-2xl flex flex-col items-center justify-center text-center"
            target="_blank">
            Meu GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
