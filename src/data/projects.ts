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
    description: "Sistema fullstack para gerenciamento de depósito de materiais de construção. Conta com autenticação via JWT, CRUD completo de Produtos (com busca por nome e SKU), Categorias e Fornecedores, além de um Dashboard com resumo de movimentações de estoque (entradas e saídas). Desenvolvido como exercício prático de estágio.",
    tech: ["React", "Node.js", "PostgreSQL", "JavaScript"],
    images: ["/deposito-barra_dashboard.png", "/deposito-barra_produtos.png", "/deposito-barra_categorias.png", "/deposito-barra_fornecedores.png"]
  },
  {
    id: "inncommand-hotel",
    title: "InnCommand Hotel",
    description: "Aplicação web para um hotel fictício com foco em experiência do usuário. Inclui carrosséis de imagens interativos, página de serviços e galeria, formulário completo de reservas (seleção de datas, tipo de quarto e hóspedes) e integração com Google Maps. O banco de dados de reservas é gerenciado pelo Firebase Firestore.",
    tech: ["React", "Bootstrap", "JavaScript", "Firebase"],
    images: []
  },
  {
    id: "clone-spotify",
    title: "Clone Spotify",
    description: "Clone fullstack do Spotify desenvolvido como projeto de curso. Inclui listagem de artistas e músicas populares, página de perfil do artista e um player funcional com controle de reproducão. Os dados são servidos por uma API Node.js/Express conectada ao MongoDB Atlas, com deploy completo no Render.",
    tech: ["React", "JavaScript", "MongoDB"],
    images: ["/clone-spotify_capa.png", "/clone-spotify_artista.png", "/clone-spotify_musica.png"]
  },
  {
    id: "frogdash",
    title: "FrogDash",
    description: "Jogo do gênero plataforma 2D desenvolvido com Unity como projeto acadêmico na UFC para a cadeira de Introdução ao Desenvolvimento de Jogos. O jogador explora fases desafiadoras, desvia de obstáculos e deve alcançar a bandeira no final de cada nível. Envolve física, design de níveis e trabalho em equipe.",
    tech: ["Unity", "C#", "ShaderLab"],
    images: ["/frogdash_capa.png", "/frogdash-fase1.png", "/frogdash-fase2.png"]
  }
];
