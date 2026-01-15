import style from "./CardSolucoes.module.css";

const CardSolucoes = ({ card }) => {
  const { icone, titulo, foco, texto } = card;
  return (
    <div className={style.containerCard}>
      <div>
        <img
          src={icone}
          alt={`Icone para a solução de ${titulo}`}
          className={style.iconeCard}
        />
      </div>
      <div className={style.containerConteudo}>
        <div className={style.containerTituloCard}>
          <h3>{titulo}</h3>
          <p>
            (
            <span className="texto-destaque-cor">
              <span className="texto-destaque texto-destaque-cor">Foco</span> em{" "}
              <span className="texto-destaque texto-destaque-cor">{foco}</span>
            </span>
            )
          </p>
        </div>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default CardSolucoes;
