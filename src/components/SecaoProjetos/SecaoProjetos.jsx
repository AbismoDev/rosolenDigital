import style from "./SecaoProjetos.module.css";

import { projetos } from "../../data/ContentConfig";

import CardProjetos from "../CardProjetos/CardProjetos";

const SecaoProjetos = () => {
  return (
    <section id="projetos">
      <div className={`container ${style.containerSecao}`}>
        <header className={style.containerTitulo}>
          <h2>{projetos.titulo}</h2>
        </header>
        <main className={style.containerCards}>
          {projetos.cards.map((card) => (
            <CardProjetos key={card.id} card={card} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default SecaoProjetos;
