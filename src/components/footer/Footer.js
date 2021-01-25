import React from "react";
import "./Footer.css";
import Telefono from "../../media/telefono.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Luciano Ariel Moyano</h1>
        <p>Buenos Aires, Argentina</p>
      </div>
      <div className="footer-contact">
        <h2 className="">¡Hablemos!</h2>
        <br />
        <p>+54 9 1150053555</p>
        <br />
        <p>lucianoarielmoyano1@gmail.com</p>
        <br />
        <img className="img-footer" src={Telefono} />
      </div>
      <div className="footer-sns">
        <div className="design-by">© 2021 - continuara...</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/lucianoarielmoyano/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/LucianoMoyano"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
