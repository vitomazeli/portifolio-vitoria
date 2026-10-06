export type Project = {
  semester: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  participation: string;
  technologies: string[];
  className: string;
  image?: string;
  gallery: string[];
  github?: string;
};

export const projects: Project[] = [
  {
    semester: "1º semestre",
    title: "Glowing Sea",
    slug: "glowing-sea",

    description:
      "E-commerce com propósito socioambiental.",

    fullDescription:
      "O Glowing Sea foi desenvolvido como uma plataforma de comércio eletrônico com propósito socioambiental. A proposta consistia na venda de joias, destinando parte do valor arrecadado para iniciativas relacionadas à proteção e preservação de golfinhos.",

    participation:
      "Minha principal participação no projeto foi na área de banco de dados, contribuindo para a estruturação e organização das informações utilizadas pela plataforma.",

    technologies: [
      "HTML",
      "CSS",
      "JAVA",
      "JavaScript"
    ],

    className: "project-glowing",

    image: "/images/glowing-sea-inicial.jpeg",

    gallery: [
      "/images/glowing-sea-inicial.jpeg",
      "/images/glowing-sea-doacoes.jpeg",
      "/images/glowing-sea-vendas.jpeg"
    ],

    github: "https://github.com/VitorDAlbuquerque/PI-1sem"
  },

  {
    semester: "2º semestre",
    title: "Kiwi",
    slug: "kiwi",

    description:
      "Plataforma para amantes de cinema criarem listas e favoritos.",

    fullDescription:
      "O Kiwi foi desenvolvido como uma plataforma voltada para amantes de cinema. Inspirado em serviços como o Letterboxd, permitia que os usuários organizassem filmes, criassem listas personalizadas e adicionassem títulos aos favoritos.",

    participation:
      "Atuei tanto no desenvolvimento front-end quanto na parte de banco de dados. Contribuí para a construção das interfaces e funcionalidades da plataforma e também para a organização dos dados utilizados pelo sistema.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "JavaScript"
    ],

    className: "project-kiwi",

    image: "/images/kiwi-pagina-inicial.jpeg",

    gallery: [
      "/images/kiwi-pagina-inicial.jpeg",
      "/images/kiwi-pagina-filmes.jpeg",
      "/images/kiwi-login.jpeg"
    ],

    github: "https://github.com/VitorDAlbuquerque/PI-2sem"
  },

  {
    semester: "3º semestre",
    title: "Lune",
    slug: "lune",

    description:
      "Plataforma para freelancers encontrarem oportunidades.",

    fullDescription:
      "O Lune foi desenvolvido como uma plataforma destinada a conectar profissionais freelancers a oportunidades de trabalho, facilitando o encontro entre profissionais e pessoas ou empresas interessadas na contratação de serviços.",

    participation:
      "Minha principal participação esteve relacionada à experiência do usuário. Contribuí com estudos voltados à utilização da plataforma e às necessidades dos usuários, ajudando no desenvolvimento de uma experiência mais intuitiva.",

    technologies: [
      "TypeScript",
      "UX",
      "UI",
      "Pesquisa de experiência do usuário"
    ],

    className: "project-lune",

    image: "/images/lune-pagina-inicial.jpeg",

    gallery: [
      "/images/lune-pagina-inicial.jpeg",
      "/images/lune-cadastro.jpeg",
      "/images/lune-pagina-vagas.jpeg"
    ],

    github: "https://github.com/ec-mv-2"
  },

  {
    semester: "4º semestre",
    title: "Agenda do Aluno",
    slug: "agenda-do-aluno",

    description:
      "Projeto voltado para a organização de atividades acadêmicas.",

    fullDescription:
      "Projeto que visa facilitar a organização de atividades e horários acadêmicos para os alunos.",

    participation:
      "Desenvolvi a parte de frontend da aplicação, contribuindo para a criação da interface e a implementação das funcionalidades relacionadas à organização de atividades acadêmicas.",

    technologies: ["React Native", "TypeScript"],

    className: "project-agenda",

    image: "/images/agenda-aluno-capa.png",

    gallery: [
      "/images/agenda-aluno-capa.png",
      "/images/agenda-aluno-cadastro.png",
      "/images/agenda-aluno-login.png",
      "/images/agenda-aluno-calendario.png",
      "/images/agenda-aluno-menu.png"
    ]

    
  },

  {
    semester: "5º semestre",
    title: "Legato",
    slug: "legato",

    description:
      "Plataforma para músicos se conectarem por geolocalização.",

    fullDescription:
      "O Legato foi desenvolvido como uma plataforma destinada a conectar músicos utilizando recursos de geolocalização. A proposta era facilitar o encontro entre músicos próximos e criar novas oportunidades de colaboração.",

    participation:
      "Minha principal responsabilidade foi a criação e organização das documentações do projeto. Também prestei suporte ao desenvolvimento front-end da aplicação.",

    technologies: [
      "React Native",
      "PostgreSQL",
      "Geolocalização"
    ],

    className: "project-legato",

    image: "/images/legato-capa.png",

    gallery: ["/images/legato-capa.png", 
      "/images/legato-tela-descoberta.png", 
      "/images/legato-cadastro.png",
      "/images/legato-tela-edicao-perfil.png"],

    github: "https://github.com/tba-txt/legato-mobile-backend"
  }
];