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
        <p >
            <h4 >Desarrollo</h4>
            <span >Html, </span>
            <span>JavaScript, </span>
            <span>React, </span>
            <span>React-Redux, </span>
            <span>Hooks, </span>
            <span>NodeJs(Express), </span>
            <span>MongoDb(Mongoose), </span>
            <span>PostgreSQL(sequelize).</span>

            <h4 >Diseño</h4>
            <span >Css, </span>
            <span >SASS, </span>
            <span >Figma, </span>
            <span >Styled Components, </span>
            <span >Material-UI, </span>
            <span >React-Bootstrap. </span>

            <h4 >Otras habilidades</h4>
            <span >GitHub, </span>
            <span >SCRUM, </span>
            <span >TRELLO, </span>
            <span >Metodologias agiles, </span>
            <span >User Experience. </span>

            <h4>Idiomas</h4>
            <span >Español: nativo, </span>
            <span >Ingles: intermedio. </span>
            
          </p>
      </div>
      <div className="about-img">
        <img src= {Descarga} alt="about" />
      </div>
    </div>
  );
};

export default About;
