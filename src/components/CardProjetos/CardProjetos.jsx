import style from "./CardProjetos.module.css";
import Botao from "../Botao/Botao";
import Tag from "../Tag/Tag";

const CardProjetos = ({ card }) => {
  const { imagem, titulo, tags, botao } = card;
  return (
    <div className={style.containerCard}>
      <div className={style.containerCardImagem}>Ainda não temos imagem</div>
      <div className={style.cardDescricao}>
        <h3>{titulo}</h3>
        <div className={style.containerTags}>
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
        <Botao texto={botao.texto} link={botao.link} />
      </div>
    </div>
  );
};

export default CardProjetos;
