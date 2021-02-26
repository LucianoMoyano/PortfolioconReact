import React from "react";
import "./About.css";
import Descarga from "../../media/lucho1.png"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>¿ Quién soy ?</h3>
        <p>
          Soy Luciano Moyano un desarrollador web atípico y multidisciplinar,
          que decidí cambiar de rumbo mi vida laboral y convertir un hobby en
          mi profesión. <br/> Desde entonces se ha convertido en algo divertido y
          adictivo, ahora busco desarrollarme profesionalmente en el sector y
          seguir aprendiendo nuevas tecnologías.
        </p>
        
      </div>
      <div className="about-img">
        <img src= {Descarga} alt="about" />
      </div>
    </div>
  );
};

export default About;
