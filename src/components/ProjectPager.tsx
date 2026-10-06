import { Link } from "react-router-dom";
import { projects } from "../data/projects";

type ProjectPagerProps = {
  currentSlug: string;
};

export default function ProjectPager({ currentSlug }: ProjectPagerProps) {
  // O 4º semestre permanece fora da navegação até os dados serem adicionados.
  const published = projects.filter((project) => project.slug !== "quarto-semestre");
  const currentIndex = published.findIndex((project) => project.slug === currentSlug);

  if (currentIndex === -1) return null;

  const previous = published[currentIndex - 1];
  const next = published[currentIndex + 1];

  return (
    <nav className="project-pager" aria-label="Navegação entre projetos">
      {previous ? (
        <Link to={`/projetos/${previous.slug}`} className="project-pager-link">
          <small>← Projeto anterior </small>
          <strong>{previous.title}</strong>
        </Link>
      ) : <span />}
      {next ? (
        <Link to={`/projetos/${next.slug}`} className="project-pager-link project-pager-next">
          <small>Próximo projeto → </small>
          <strong>{next.title}</strong>
        </Link>
      ) : <span />}
    </nav>
  );
}
