import gitIcon from "../assets/git-icon.png"
import jobs from "../assets/jobsfoto.png"
import hamb from "../assets/hamburguerfoto.png"
import hub from "../assets/kenziehubfoto.png"
import netclient from "../assets/netclientfoto.png"
export const projects = [
  {
    id: 0,
    description: "Atuando como tech leader de uma equipe de cinco pessoas neste projeto, desenvolvemos um aplicativo inovador de conexão entre empresas e profissionais. O projeto front-end, construído exclusivamente com React e diversas bibliotecas, oferece uma solução eficiente para publicação de vagas e candidaturas, simplificando o recrutamento.",
    img: gitIcon,
    imgProject: jobs,
    linkVercel:"https://kenzie-jobs-beta.vercel.app/",
    linkGit: "https://github.com/gusmfs/kenzie_jobs"
  },
  {
    id: 1,
    description: "Projeto de frontend tem como foco a criação de um dashboard para uma hamburgueria, utilizando a biblioteca React para proporcionar uma experiência de usuário fluida e interativa. O objetivo principal é oferecer aos usuários uma interface intuitiva e amigável para explorar o cardápio, realizar pedidos e gerenciar o carrinho de compras de forma eficiente.",
    imgProject: hamb,
    linkVercel: "https://hamburgueria-k.vercel.app/",
    linkGit: "https://github.com/Kenzie-Academy-Brasil-Developers/hamburgueria-k"
  },
  {
    id: 2,
    description: "Descrição do projeto",
    imgProject: hub,
    linkVercel: "https://kenziehub-gvs.vercel.app/",
    linkGit: "https://github.com/Kenzie-Academy-Brasil-Developers/kenziehub-gvs"
  },
  {
    id: 3,
    imgProject: netclient,
    description: "Descrição do projeto",
    linkVercel: "https://netclient.vercel.app/",
    linkGit: "https://github.com/Kenzie-Academy-Brasil-Developers/netclient-gvs",
  },
];
