const projetos = [
  {
    nome: "Lua",
    categoria: "Desenvolvimento",
    descricao: "Aplicativo de monitoramento do ciclo menstrual focado em privacidade.",
    tecnologias: ["Flutter", "Dart", "SQLite"],
    imagem: "assets/images/lua.png"
  },
  {
    nome: "RU Express",
    categoria: "Desenvolvimento",
    descricao: "Sistema de reservas de refeições universitárias.",
    tecnologias: ["Product Owner", "UX"],
    imagem: "assets/images/ruexpress.png"
  }
];


const projectsGrid = document.querySelector("#projects-grid");

function renderizarProjetos() {
  if (!projectsGrid) return;

  projectsGrid.replaceChildren();

  projetos.forEach((projeto) => {
    // Criando o card
    const card = document.createElement("article");
    card.classList.add("project-card");

    // Criando a imagem
    const imagem = document.createElement("img");
    imagem.src = projeto.imagem;
    imagem.alt = `Logo do projeto ${projeto.nome}`;
    imagem.classList.add("project-image");

    // Criando o título
    const titulo = document.createElement("h3");
    titulo.textContent = projeto.nome;

    // Criando a descrição
    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    // Criando as tecnologias
    const tecnologias = document.createElement("div");
    tecnologias.classList.add("project-technologies");

    projeto.tecnologias.forEach((tecnologia) => {
      const tag = document.createElement("span");
      tag.textContent = tecnologia;
      tecnologias.appendChild(tag);
    });

    // Montando o card
    card.append(imagem, titulo, descricao, tecnologias);

    // Adicionando ao container
    projectsGrid.appendChild(card);
  });
}

renderizarProjetos();