import BtnCvDownload from "./BtnCvDownload";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="shortLetter"> <span className="capitalLetter">L</span>p.</h1>
      <ul className="nav-links">
        <li> <a href="">Inicio</a> </li>
        <li> <a href="">Sobre mí</a> </li>
        <li> <a href="">Proyectos</a> </li>
        <li> <a href="">Tecnologias</a> </li>
        <li> <a href="">Blog</a> </li>
        <li> <a href="">Contacto</a></li>
      </ul>
      <BtnCvDownload />
    </div>
  );
};

export default Navbar;
