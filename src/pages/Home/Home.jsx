// Importando componentes
import Cabecalho from "../../components/Cabecalho/Cabecalho";
import SecaoHero from "../../components/SecaoHero/SecaoHero";
import SecaoSolucoes from "../../components/SecaoSolucoes/SecaoSolucoes";
import SecaoProjetos from "../../components/SecaoProjetos/SecaoProjetos";
import SecaoSobre from "../../components/SecaoSobre/SecaoSobre";
import Rodape from "../../components/Rodape/Rodape";

const Home = () => {
  return (
    <>
      <Cabecalho />
      <SecaoHero />
      <SecaoSolucoes />
      {/* <SecaoProjetos /> */}
      <SecaoSobre />
      <Rodape />
    </>
  );
};

export default Home;
