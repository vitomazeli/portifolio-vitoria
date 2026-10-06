import { Link, useParams } from "react-router-dom";
import { projects } from "./data/projects";
import ProjectGallery from "./components/ProjectGallery";
import ProjectPager from "./components/ProjectPager";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return (
      <main className="project-page not-found">
        <h1>Projeto não encontrado</h1>

        <Link to="/">
          ← Voltar para o portfólio
        </Link>
      </main>
    );
  }

  return (
    <main className="project-page">

      <header className="project-page-header">
        <Link to="/" className="back-button">
          ← Voltar para o portfólio
        </Link>

        <span className="project-semester">
          {project.semester}
        </span>

        <h1>{project.title}</h1>

        <p className="project-intro">
          {project.description}
        </p>
      </header>


      {project.image && (
        <div className="project-main-image">
          <img
            src={project.image}
            alt={`Tela principal do projeto ${project.title}`}
          />
        </div>
      )}


      <section className="project-content">

        <article>
          <span className="project-label">
            SOBRE O PROJETO
          </span>

          <h2>O projeto</h2>

          <p>
            {project.fullDescription}
          </p>
        </article>


        <article>
          <span className="project-label">
            MINHA PARTICIPAÇÃO
          </span>

          <h2>O que desenvolvi</h2>

          <p>
            {project.participation}
          </p>
        </article>

      </section>


      <section className="project-technologies">

        <span className="project-label">
          TECNOLOGIAS
        </span>

        <h2>Tecnologias utilizadas</h2>

        <div className="technology-list">

          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>

      </section>



      <ProjectGallery
        title={project.title}
        images={project.gallery}
      />


      {project.github && (
        <section className="project-github">

          <h2>Veja o código do projeto</h2>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="button primary"
          >
            Acessar GitHub ↗
          </a>

        </section>
      )}

      <ProjectPager currentSlug={project.slug} />

    </main>
  );
}

export default ProjectPage;