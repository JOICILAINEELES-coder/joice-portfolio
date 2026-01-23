import React from "react";
import "./styles.css"; 
import joice from "../../../assets/joice.png";

const HeroGlass = () => {
  return (
    <section className="HeroGlassBg">
      <div className="ShapeBase Shape1"></div>
      <div className="ShapeBase Shape2"></div>

      <div className="GlassCard">
        <h1>Olá, eu sou Joicilaine</h1>
        <h2>Desenvolvedora Front-end</h2>
        <p>
          Crio experiências web interativas. Minha fundação é sólida em HTML/CSS/JS e minha especialidade é construir SPAs performáticas com React.
        </p>

        <div className="StackPillsContainer">
          <span className="Pill">JavaScript</span>
          <span className="Pill">HTML/CSS</span>
          <span className="Pill">React</span>
          
        </div>
        <div className="GlassCardFooter">
        <a className="BtnGlass" href="https://github.com/JOICILAINEELES-coder">Ver GitHub</a>
        <img className="HeroImage" src={joice} alt="Joicilaine Eles" />
        </div>
      </div>
    </section>
  );
};

export default HeroGlass;