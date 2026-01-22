import style from "./Botao.module.css";

const Botao = ({ texto, link, icon, classe }) => {
  return (
    <a href={link} target="_blank" className={style.botao}>
      <img src={icon} alt="icone de whatsapp" className={classe} /> {texto}
    </a>
  );
};

export default Botao;
