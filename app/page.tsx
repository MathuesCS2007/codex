import "./css/globals.css";

import Menu from "../components/menu";
import Servicos from "../components/servicos";
import Sobre from "../components/sobre";
import Contato from "../components/contato";
import Portfolio from "../components/portfolio";
import Faq from "../components/faq";
import Avaliacao from "../components/avaliacao";

export default function Home() {
  return (
    <main>
      <Menu />
      <Servicos />
      <Portfolio />
      <Sobre />
      <Contato />
      <Faq />
      <Avaliacao />
    </main>
  );
}