import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const HeroTextTittle = () => {
  return (
      <div className="hero-text">
        <p className="sayHello"> 👋🏼 Hola, soy</p>
        <h2 className="name">Luis Alfredo</h2>
        <h2 className="name surname">Palomino Medina</h2>
        <h4 className="signature">Desarrollo de Software</h4>

        <p className="legend">
          Estudiante de Computación e informática apasionado por construir
          aplicaciones web escalables y software para resolver problemas reales
          mediante codigo limpio y buenas prácticas.
        </p>
        <div className="hero-btns-social">
          <div className="btns-hero">
            <button>Ver proyectos</button>
            <button>Contactarme</button>
          </div>

          <div className="socials">
            <FaGithub className="social" />
            <FaLinkedin className="social" />
            <MdMailOutline className="social" />
          </div>
        </div>
      </div>
  );
};

export default HeroTextTittle;