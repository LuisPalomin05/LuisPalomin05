import { Link } from "react-router-dom";
import BtnCvDownload from "./BtnCvDownload";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="shortLetter">
        <span className="capitalLetter">L</span>p.
      </h1>
      <div className="nav-links">
        <Link className="nav-links-item" to={"/"}>
          Inicio
        </Link>
        <Link className="nav-links-item" to={"/sobremi"}>
          Sobre mí
        </Link>
        <Link className="nav-links-item" to={"/proyectos"}>
          Proyectos
        </Link>
        <Link className="nav-links-item" to={"/tecnologia"}>
          Tecnologias
        </Link>
        <Link className="nav-links-item" to={"/blog"}>
          Blog
        </Link>
        <Link className="nav-links-item" to={"/contactar"}>
          Contacto
        </Link>
      </div>
      <BtnCvDownload />
    </div>
  );
};

export default Navbar;
