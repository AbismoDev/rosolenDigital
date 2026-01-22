// Logo do site
import logo from "../assets/icons/logo/logo.svg";

// Icones do header menu mobile
import iconMenu from "../assets/icons/menu/icon-menu.svg";
import iconMenuClose from "../assets/icons/menu/icon-menu-close.svg";

// Icones dos cards da seção de soluções
import iconLandingPage from "../assets/icons/solucoes/icon-landing-page.svg";
import iconOtimizacaoSEO from "../assets/icons/solucoes/icon-otimizacao-seo.svg";
import iconSitesInstitucionais from "../assets/icons/solucoes/icon-sites-institucionais.svg";

// Icones de tecnologias da seção sobre
import iconReact from "../assets/icons/tecnologia/icon-react.svg";
import iconJS from "../assets/icons/tecnologia/icon-javascript.svg";
import iconHTML from "../assets/icons/tecnologia/icon-html5.svg";
import iconCSS from "../assets/icons/tecnologia/icon-css3.svg";
import iconSEO from "../assets/icons/tecnologia/icon-seo.svg";

// Icones de Redes Sociais do rodapé
import iconGitHub from "../assets/icons/redes-sociais/icon-github.svg";
import iconLinkedin from "../assets/icons/redes-sociais/icon-linkedin.svg";
import iconWhatsapp from "../assets/icons/redes-sociais/icon-whatsapp.svg";
import iconWhatsappBtn from "../assets/icons/redes-sociais/icon-whatsapp-btn.svg";

export const cabecalho = {
  logo: logo,
  icon_menu_mobile: iconMenu,
  icon_menu_mobile_close: iconMenuClose,
  links: [
    { id: 1, texto: "ÍNICIO", link: "#inicio" },
    { id: 2, texto: "SOLUÇÕES", link: "#solucoes" },
    // { id: 3, texto: "PROJETOS", link: "#projetos" },
  ],
  botao: {
    texto: "Falar no WhatsApp",
    link: "https://wa.me/5532987052409?text=Opa%20Wellington!%20Vi%20seu%20site%20e%20quero%20levar%20meu%20neg%C3%B3cio%20para%20o%20pr%C3%B3ximo%20n%C3%ADvel.%20Podemos%20conversar%3F%20%F0%9F%9A%80",
    icon: iconWhatsappBtn,
    classe: "iconBtn",
  },
};

export const hero = {
  titulo: (
    <>
      <span className="texto-destaque-titulo">Não</span> é{" "}
      <span className="texto-destaque-titulo">só</span> um{" "}
      <span className="texto-destaque-titulo">site</span>.<br /> É sua{" "}
      <span className="texto-destaque-titulo texto-destaque-estilo-italic texto-destaque-cor">
        NOVA FILIAL
      </span>
      .
    </>
  ),
  texto: (
    <>
      Design <span className="texto-destaque">moderno</span> e{" "}
      <span className="texto-destaque">alta performance</span> para colocar sua{" "}
      <span className="texto-destaque">empresa à frente da concorrência</span>{" "}
      em <span className="texto-destaque">São João Del Rei</span>.
    </>
  ),
  botao: {
    texto: "Quero meu orçamento",
    link: "https://wa.me/5532987052409?text=Opa%20Wellington!%20Vi%20seu%20site%20e%20quero%20levar%20meu%20neg%C3%B3cio%20para%20o%20pr%C3%B3ximo%20n%C3%ADvel.%20Podemos%20conversar%3F%20%F0%9F%9A%80",
    icon: iconWhatsappBtn,
    classe: "iconeBtnHero",
  },
};

export const solucoes = {
  titulo: `Nossas Soluções`,
  cards: [
    {
      id: 1,
      icone: iconLandingPage,
      titulo: `Landing Pages`,
      foco: `Vendas`,
      texto: (
        <>
          <span className="texto-destaque">Páginas focadas</span> em uma única
          ação: <span className="texto-destaque">vender</span> seu{" "}
          <span className="texto-destaque">produto</span> ou{" "}
          <span className="texto-destaque">capturar contatos</span>.{" "}
          <span className="texto-destaque">
            <br />
            <br />
            Ideal
          </span>{" "}
          para <span className="texto-destaque">anúncios</span> no{" "}
          <span className="texto-destaque">Instagram</span> e{" "}
          <span className="texto-destaque">Google</span>.
        </>
      ),
    },
    {
      id: 2,
      icone: iconOtimizacaoSEO,
      titulo: `Sites Institucionais`,
      foco: `Autoridade`,
      texto: (
        <>
          <span className="texto-destaque">A apresentação oficial</span> da{" "}
          <span className="texto-destaque">sua empresa</span>. <br />
          <br />
          Mostre seus <span className="texto-destaque">serviços</span>,{" "}
          <span className="texto-destaque">história</span> e{" "}
          <span className="texto-destaque">localização</span> com{" "}
          <span className="texto-destaque">profissionalismo</span> e{" "}
          <span className="texto-destaque">credibilidade</span>.
        </>
      ),
    },
    {
      id: 3,
      icone: iconSitesInstitucionais,
      titulo: `Otimização & SEO`,
      foco: `Google`,
      texto: (
        <>
          Seu <span className="texto-destaque">site otimizado</span> para{" "}
          <span className="texto-destaque">carregar em milissegundos</span> e{" "}
          <span className="texto-destaque">aparecer nas pesquisas</span> do{" "}
          <span className="texto-destaque">Google</span> quando{" "}
          <span className="texto-destaque">seu cliente procurar</span>.
        </>
      ),
    },
  ],
};

export const projetos = {
  titulo: `O que andamos construindo`,
  cards: [
    {
      id: 1,
      imagem: `NADA AINDA`,
      titulo: `Projeto 1`,
      tags: ["Delivery", "Comida", "Restaurante"],
      botao: { texto: `Ver projeto ->`, link: `AQUI VAI O LINK DO PROJETO!` },
    },
    {
      id: 2,
      imagem: `NADA AINDA`,
      titulo: `Projeto 2`,
      tags: ["Delivery", "Comida", "Restaurante"],
      botao: { texto: `Ver projeto ->`, link: `AQUI VAI O LINK DO PROJETO!` },
    },
    {
      id: 3,
      imagem: `NADA AINDA`,
      titulo: `Projeto 3`,
      tags: ["Delivery", "Comida", "Restaurante"],
      botao: { texto: `Ver projeto ->`, link: `AQUI VAI O LINK DO PROJETO!` },
    },
    {
      id: 4,
      imagem: `NADA AINDA`,
      titulo: `Projeto 4`,
      tags: ["Delivery", "Comida", "Restaurante"],
      botao: { texto: `Ver projeto ->`, link: `AQUI VAI O LINK DO PROJETO!` },
    },
  ],
};

export const sobre = {
  titulo: (
    <>
      <span className="texto-destaque">Mais</span>{" "}
      <span className="texto-destaque-cor">que</span>{" "}
      <span className="texto-destaque">código</span>.<br />{" "}
      <span className="texto-destaque-titulo texto-destaque-cor texto-destaque-estilo-italic">
        Parceria
      </span>
      .
    </>
  ),
  texto: (
    <>
      A <span className="texto-destaque">Rosolen Digital</span> nasceu para{" "}
      <span className="texto-destaque">descomplicar</span> a internet{" "}
      <span className="texto-destaque">para negócios locais</span>. Sou um{" "}
      <span className="texto-destaque">desenvolvedor focado</span> em unir{" "}
      <span className="texto-destaque">design moderno</span> com a{" "}
      <span className="texto-destaque">velocidade</span> que o{" "}
      <span className="texto-destaque">Google exige</span>. Aqui você{" "}
      <span className="texto-destaque">não fala com robôs</span>: tem{" "}
      <span className="texto-destaque">atendimento direto</span> e{" "}
      <span className="texto-destaque">personalizado</span> para{" "}
      <span className="texto-destaque">fazer seu projeto crescer</span>.
    </>
  ),
  icons_tecnologias: [iconReact, iconJS, iconHTML, iconCSS, iconSEO],
};

export const rodape = {
  logo: logo,
  icon_sociais: [
    {
      icon: iconGitHub,
      link: `https://github.com/AbismoDev`,
    },
    {
      icon: iconLinkedin,
      link: `https://www.linkedin.com/in/abismodev/`,
    },
    {
      icon: iconWhatsapp,
      link: `https://wa.me/5532987052409?text=Opa%20Wellington!%20Vi%20seu%20site%20e%20quero%20levar%20meu%20neg%C3%B3cio%20para%20o%20pr%C3%B3ximo%20n%C3%ADvel.%20Podemos%20conversar%3F%20%F0%9F%9A%80`,
    },
  ],
  creditos: `© 2025 Rosolen Digital. Todos os direitos reservados.`,
};
