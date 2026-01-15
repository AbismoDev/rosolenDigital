import style from "./Botao.module.css";

const Botao = ({ texto, link }) => {
  return (
    <a href={link} target="_blank" className={style.botao}>
      {texto}
    </a>
  );
};

export default Botao;
