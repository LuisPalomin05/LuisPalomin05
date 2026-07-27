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
        <Link className="nav-links-item" to={"/about"}>
          Sobre mí
        </Link>
        <Link className="nav-links-item" to={"/project"}>
          Proyectos
        </Link>
        <Link className="nav-links-item" to={"/skill"}>
          Tecnologias
        </Link>
        <Link className="nav-links-item" to={"/blog"}>
          Blog
        </Link>
        <Link className="nav-links-item" to={"/contact"}>
          Contacto
        </Link>
      </div>
      <BtnCvDownload />
    </div>
  );
};

export default Navbar;
