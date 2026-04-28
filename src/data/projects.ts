export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: "deposito-barra",
    title: "Depósito Barra",
    description: "Sistema completo de gestão de estoque e fornecedores para o negócio da família. Possui autenticação robusta utilizando JWT e permite controle e auditoria das entradas e saídas do estoque de forma simples e responsiva.",
    tech: ["React", "Node.js", "PostgreSQL"],
    images: []
  },
  {
    id: "inncommand-hotel",
    title: "InnCommand Hotel",
    description: "Plataforma de reservas hoteleiras criada com forte apelo em UX (User Experience). O sistema facilita o cadastro de novos hóspedes, controle de quartos disponíveis e histórico de hospedagens.",
    tech: ["React", "Bootstrap", "Firebase"],
    images: []
  },
  {
    id: "clone-spotify",
    title: "Clone Spotify",
    description: "Réplica funcional da interface principal do player de música mais famoso do mundo. Inclui listagem de artistas, controle de play/pause da música e um design fiel à aplicação original.",
    tech: ["React", "Vite", "MongoDB"],
    images: ["../../public/clone-spotify_capa.png", "../../public/clone-spotify_artista.png", "../../public/clone-spotify_musica.png"]
  },
  {
    id: "frogdash",
    title: "FrogDash",
    description: "Jogo de plataforma 2D com fases desafiadoras, obstáculos variados e um level design pensado para reter a atenção do jogador. O projeto foi desenvolvido como trabalho acadêmico de Computação Gráfica na UFC.",
    tech: ["Unity", "C#", "ShaderLab"],
    images: ["../../public/frogdash_capa.png", "../../public/frogdash-fase1.png", "../../public/frogdash-fase2.png"]
  }
];
