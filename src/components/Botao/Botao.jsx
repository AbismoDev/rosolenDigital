import style from "./Botao.module.css";

const Botao = ({ texto, link, icon, classe, temIcone }) => {
  return (
    <a href={link} target="_blank" className={style.botao}>
      {temIcone != false ? (
        <img src={icon} alt="icone de whatsapp" className={classe} />
      ) : (
        ""
      )}{" "}
      {texto}
    </a>
  );
};

export default Botao;
