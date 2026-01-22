import style from "./SecaoHero.module.css";

// Importando o conteudo
import { hero } from "../../data/ContentConfig";

// Importando componentes
import Botao from "../Botao/Botao";

const SecaoHero = () => {
  return (
    <section className={style.secaoHero} id="inicio">
      <div className={`container ${style.containerHero}`}>
        <div className={style.conteudoHero}>
          <h1>{hero.titulo}</h1>
          <p>{hero.texto}</p>
        </div>
        <Botao
          texto={hero.botao.texto}
          link={hero.botao.link}
          icon={hero.botao.icon}
          classe={hero.botao.classe}
        />
      </div>
    </section>
  );
};

export default SecaoHero;
