import style from "./ModalMenu.module.css";

import Botao from "../Botao/Botao.jsx";

const ModalMenu = ({ toggleMenu, dados }) => {
  return (
    <div className={style.container_modal}>
      <header className={style.header_modal}>
        <div>
          <img
            className={style.logo}
            src={dados.logo}
            alt="logo da Rosolen Digital"
          />
        </div>
        <div className={style.container_close}>
          <button onClick={toggleMenu}>
            <img
              src={dados.icon_menu_mobile_close}
              alt="icone em formato de X para fechar o modal"
            />
          </button>
        </div>
      </header>
      <main>
        <nav className={style.container_links}>
          <ul>
            {dados.links.map((link) => (
              <li key={link.id}>
                <a href={link.link} onClick={toggleMenu}>
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
          <Botao texto={dados.botao.texto} link={dados.botao.link} />
        </nav>
      </main>
    </div>
  );
};

export default ModalMenu;
