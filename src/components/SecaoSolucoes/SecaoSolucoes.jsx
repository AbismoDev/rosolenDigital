import style from "./SecaoSolucoes.module.css";

// Importando o conteudo
import { solucoes } from "../../data/ContentConfig";

// Importando componente
import CardSolucoes from "../CardSolucoes/CardSolucoes";

const SecaoSolucoes = () => {
  return (
    <section id="solucoes">
      <div className={`container ${style.containerSolucoes}`}>
        <header>
          <h2>{solucoes.titulo}</h2>
        </header>
        <main className={style.containerCards}>
          {solucoes.cards.map((card) => (
            <CardSolucoes key={card.id} card={card} />
          ))}
        </main>
      </div>
    </section>
  );
};

export default SecaoSolucoes;
