import { projects } from "./data/projects";

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="Início">
          VM
        </a>

        <nav className="nav">
          <button onClick={() => scrollToSection("inicio")}>
            Início
          </button>

          <button onClick={() => scrollToSection("sobre")}>
            Sobre
          </button>

          <button onClick={() => scrollToSection("projetos")}>
            Projetos
          </button>

          <button onClick={() => scrollToSection("experiencia")}>
            Experiência
          </button>

          <button onClick={() => scrollToSection("formacao")}>
            Formação
          </button>

          <button onClick={() => scrollToSection("cursos")}>
            Cursos
          </button>

          <button onClick={() => scrollToSection("contato")}>
            Contato
          </button>
        </nav>

        <a
          className="github-button"
          href="https://github.com/vitomazeli"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </header>

      <main>
        <section id="inicio" className="hero section">
          <div className="hero-copy">
            <span className="eyebrow">OLÁ, EU SOU</span>
            <h1>
              Vitória
              <span> Moreno Tomazeli</span>
            </h1>

            <h3>Desenvolvimento de Software Multiplataforma</h3>
            <p className="hero-tags">
              QA • Software Development • Technology
            </p>

            <p className="hero-description">
              Estudante de Desenvolvimento de Software Multiplataforma,
              interessada em tecnologia, qualidade de software e criação de
              soluções digitais. Aqui você encontra os projetos que desenvolvi
              ao longo da faculdade e um pouco da minha trajetória profissional.
            </p>

            <div className="hero-actions">
              <button
                className="button primary"
                onClick={() => scrollToSection("projetos")}
              >
                Meus projetos →
              </button>
              <button
                className="button secondary"
                onClick={() => scrollToSection("contato")}
              >
                Contato
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-card">
              <img
                src="/images/foto-perfil.png"
                alt="Vitória Moreno Tomazeli"
                className="profile-photo"
              />
            </div>
          </div>
        </section>

        <section className="info-grid section">
          <article id="sobre" className="info-card">
            <div className="icon-box">✦</div>
            <div>
              <h3>Sobre mim</h3>
              <p>
                Estudante de Desenvolvimento de Software Multiplataforma e
                tenho interesse especial nas áreas de desenvolvimento,
                qualidade de software e experiência do usuário. Gosto de
                aprender, trabalhar em equipe e transformar ideias em soluções
                que façam sentido para as pessoas.
              </p>

              <div className="tags">
                <span>Desenvolvimento</span>
                <span>QA</span>
                <span>UX</span>
                <span>Trabalho em equipe</span>
              </div>
            </div>
          </article>

          <article id="formacao" className="info-card">
            <div className="icon-box">⌁</div>
            <div className="full-width">
              <h3>Formação acadêmica</h3>
              <div className="soft-box">
                <strong>Faculdade de Tecnologia (FATEC)</strong>
                <p>Desenvolvimento de Software Multiplataforma</p>
                <div className="meta-row">
                  <span>Início: 2023</span>
                  <span>Previsão de conclusão: 2026</span>
                </div>
              </div>
            </div>
          </article>

          <article id="experiencia" className="info-card">
            <div className="icon-box">▣</div>
            <div className="full-width">
              <h3>Experiência profissional</h3>
              <div className="soft-box">
                <strong>Qualidade de Software / QA</strong>
                <p>
                  Experiência com testes funcionais, regressivos e exploratórios voltados a meios de pagamento

                  análise de defeitos, documentação e validação de sistemas.
                </p>
                <span className="highlight">
                  Analista de Qualidade de Software / QA - Argotechno Engenharia Ltda. (2024 - 2026)
                </span>
              </div>
            </div>
          </article>

          <article id="cursos" className="info-card">
            <div className="icon-box">✎</div>
            <div className="full-width">
              <h3>Cursos e certificados</h3>
              <div className="timeline">
                <div>
                  <strong>Google Cloud Computing Foundations</strong>
                  <span>Google Learn</span>
                </div>
                <div>
                  <strong>Aspire Team Leaders </strong>
                  <span>Aspire Institute</span>
                </div>
                <div>
                  <strong>TOEIC</strong>
                  <span>ETS - Educational Testing Service  • B2 - Upper Intermediate</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section id="projetos" className="projects-section section">
          <SectionTitle
            eyebrow="MEUS PROJETOS"
            title="Projetos Acadêmicos"
            text="Uma linha do tempo com os principais projetos que desenvolvi no decorrer de cinco semestres da faculdade."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number-row">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{project.semester}</span>
                </div>

                <div className={`project-cover ${project.className}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                    />
                  ) : (
                    <span>{project.title}</span>
                  )}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a href={`#/projetos/${project.slug}`}>
                  Ver projeto →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="bottom-grid section">
          <article className="languages-card">
            <SectionTitle title="Idiomas" />

            <div className="language">
              <span>Português</span>
              <span>Nativo</span>
              <div className="bar">
                <div style={{ width: "100%" }} />
              </div>
            </div>

            <div className="language">
              <span>Inglês</span>
              <span>Intermediário / B2</span>
              <div className="bar">
                <div style={{ width: "72%" }} />
              </div>
            </div>

          </article>

        </section>
      </main>

      <footer id="contato" className="footer">
        <div>
          <span className="brand">VM</span>
          <p>
            <strong>Vitória Moreno Tomazeli</strong>
            <br />
            Desenvolvimento de Software Multiplataforma
          </p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/vitoria-tomazeli" target="_blank" rel="noreferrer">linkedin.com/in/vitoria-tomazeli</a></p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/vitomazeli"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <button
            className="footer-top-button"
            onClick={() => scrollToSection("inicio")}
          >
            Voltar ao topo ↑
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;