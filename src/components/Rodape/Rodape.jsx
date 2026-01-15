import { rodape } from "../../data/ContentConfig";
import style from "./Rodape.module.css";

const Rodape = () => {
  return (
    <footer className={style.containerRodape}>
      <div className={`container ${style.rodape}`}>
        <div className={style.containerContent}>
          <div>
            <img
              src={rodape.logo}
              alt="logo da Rosolen Digital"
              className={style.logo}
            />
          </div>
          <div className={style.containerIcons}>
            {rodape.icon_sociais.map((icon, index) => (
              <a href={icon.link} target="_blank" key={index}>
                <img src={icon.icon} alt="icon" className={style.iconSocial} />
              </a>
            ))}
          </div>
        </div>
        <div className={style.containerCreditos}>
          <p>{rodape.creditos}</p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
