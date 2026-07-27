import { useState } from "react";
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroTextTittle = () => {

  const mail =
    "lpalomino7030@gmail.com";

  function mailInfo(mail) {
   const mailtosend =
    `mailto:${mail}?subject=Hola%20Luis&body=Vi%20tu%20portfolio%20y%20me%20gustaría%20hablar%20contigo.`;
  
    return mailtosend;
  }

  
    const [mostrarTooltip, setMostrarTooltip] = useState(false);

    return (
    <div className="hero-text">
      <p className="sayHello"> 👋🏼 Hola, soy</p>
      <h2 className="name">Luis Alfredo</h2>
      <h2 className="name surname">Palomino Medina</h2>
      <h4 className="signature">Desarrollo de Software</h4>

      <p className="legend">
        Desarrollo aplicaciones enfocadas en resolver problemas reales mediante
        Java, Spring Boot y React. Me interesa crear software escalable y
        mantener un aprendizaje constante.
      </p>
      <div className="hero-btns-social">
        <div className="btns-hero">
          <Link className="Links-hero" to={"/project"}>
            Ver proyectos
          </Link>
          <Link className="Links-hero" to={"/contact"}>
            Contactarme
          </Link>
        </div>

        <div className="socials">
          <a className="social" href={"https://github.com/lpalomino7030"}>
            <FaGithub className="tooltip-icon-button GitHub" />
          </a>
          <a className="social" href={"/"}>
            <FaLinkedin className="tooltip-icon-button Linkdin" />
          </a>
          <a className="social" href={mailInfo(mail)} onMouseEnter={()=> setMostrarTooltip(!mostrarTooltip)} onMouseLeave={()=> setMostrarTooltip(!mostrarTooltip)}>
            <MdMailOutline className="tooltip-icon-button Email" />
            {mostrarTooltip && (<div className="tooltip-text"><p>📧 Enviarme un correo</p> <p>{mail}</p></div>)}
          </a>
          <a
            className="social Youtube"
            href={"https://www.youtube.com/@LuisAlfredoPalominoMedina"}
          >
            <FaYoutube className="tooltip-icon-button" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroTextTittle;
