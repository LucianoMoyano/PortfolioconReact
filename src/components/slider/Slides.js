import React from "react";
import "./Slider.css";
import Navent from "../../media/Navent.png"
import ecommerce from "../../media/ecommerce.png";
import Prueba from "../../media/Prueba.png";

const slidesInfo = [
  {
    src:Navent,
    alt: "Project 1",
    desc: "Proyecto Profesional Navent",
    href:"https://github.com/LucianoMoyano/ProyectoprofesionalP5"
  },
  {
    src:ecommerce,
    alt: "Project 2",
    desc: "Ecommerce Lenceria",
    href: "https://github.com/seba-wetzel/ecommerce"
  },
  {
    src:Prueba,
    alt: "Project 3",
    desc: "Proyecto Tecnico ReactJs",
    href:"https://github.com/LucianoMoyano/App-prueba-tecnica"
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.href} target="_blank" >
      <img src={slide.src} alt={slide.alt}/>
    </a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
