import style from "./Cabecalho.module.css";

import { useState } from "react";

// Importando o conteudo do header
import { cabecalho } from "../../data/ContentConfig";
import ModalMenu from "../ModaMenu/ModalMenu.jsx";
import Botao from "../Botao/Botao.jsx";

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={style.header}>
      {/* MENU MOBILE */}
      <div
        className={`container ${style.container_header} ${style.header_mobile}`}
      >
        <div>
          <img
            className={style.logo}
            src={cabecalho.logo}
            alt="logo da Rosolen Digital"
          />
        </div>
        <button onClick={toggleMenu}>
          <img
            className={style.icon_menu}
            src={cabecalho.icon_menu_mobile}
            alt="icone hamburguer para menu mobile"
          />
        </button>
        {menuAberto && <ModalMenu toggleMenu={toggleMenu} dados={cabecalho} />}
      </div>

      {/* MENU DESKTOP */}
      <div
        className={`container ${style.container_header} ${style.header_desktop}`}
      >
        <div>
          <img
            className={style.logo}
            src={cabecalho.logo}
            alt="logo da Rosolen Digital"
          />
        </div>
        <nav className={style.containerLinks}>
          <ul>
            <li>
              <a href="#inicio">ÍNICIO</a>
            </li>
            <li>
              <a href="#solucoes">SOLUÇÕES</a>
            </li>
            {/* <li>
              <a href="#projetos">PROJETOS</a>
            </li> */}
          </ul>
          <Botao texto={cabecalho.botao.texto} link={cabecalho.botao.link} />
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
