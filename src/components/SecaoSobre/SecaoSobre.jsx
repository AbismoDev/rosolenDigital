import style from "./SecaoSobre.module.css";

import { sobre } from "../../data/ContentConfig";

const SecaoSobre = () => {
  return (
    <section className={`container ${style.secao}`}>
      <div className={style.containerSobre}>
        <div className={style.containerConteudo}>
          <h2>{sobre.titulo}</h2>
          <p>{sobre.texto}</p>
          <div className={style.containerIcones}>
            {sobre.icons_tecnologias.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt="icone das tecnologia usadas"
                className={style.iconTec}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecaoSobre;
