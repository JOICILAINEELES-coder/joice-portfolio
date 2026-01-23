import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import HeroGlass from "./componentes/Menu/HeroGlass";
import "./componentes/Menu/HeroGlass/styles.css";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Home = () => {
  return (
    <div>
      <HeroGlass />
    </div>
  );
};

const Sobre = () => (
  <section className="HeroGlassBg" style={{ minHeight: 'calc(100vh - 60px)' }}>
    <div className="ShapeBase Shape1"></div>
    <div className="ShapeBase Shape2"></div>


    <div className="GlassCardText">
      <p>   Desde cedo, a tecnologia sempre despertou minha curiosidade. No entanto, foi ao descobrir o universo da programação e o desenvolvimento web que encontrei minha verdadeira vocação. A possibilidade de dar vida a páginas na internet combinando cores, estilos e interatividade, trouxe-me uma sensação imediata de pertencimento. Isso porque a arte sempre fez parte da minha essência. Como desenhista desde muito nova, encontrei no Front-end a união perfeita entre a minha paixão pela expressão visual e a lógica da tecnologia.</p>
      <p>  Hoje, utilizo a programação como uma extensão da minha arte, transformando telas em branco em experiências digitais vibrantes e funcionais.</p>
    </div>
  </section>
);

const Contato = () => (
  <section className="HeroGlassBg" style={{ minHeight: 'calc(100vh - 60px)' }}>
    <div className="ShapeBase Shape1"></div>
    <div className="ShapeBase Shape2"></div>

    <div className="GlassCard">
      <h1>Entre em Contato</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
        <h2>Mande um e-mail para:</h2>
        <div className="GlassCardEmail">
          <h3><MdOutlineEmail style={{ marginRight: '8px' }} /><strong> joicilaineeles@hotmail.com</strong></h3>
        </div>
        <h4>Ou acesse minhas redes sociais:</h4>
        <ul className="GlassCardUl">
          <li><a href="https://www.linkedin.com/in/joicilaine-eles-ab2bbb396/" target="_blank" rel="noopener noreferrer"><CiLinkedin />LinkedIn</a></li>
          <li><a href="https://github.com/JOICILAINEELES-coder" target="_blank" rel="noopener noreferrer"><FaGithub />GitHub</a></li>
        </ul>
      </p>

    </div>
  </section>
);

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;