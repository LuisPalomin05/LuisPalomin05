import TextSubtitle from "./TextSubtitle";
import { IoPersonOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { BsGeoAlt } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { IoIosTimer } from "react-icons/io";
import { FaProjectDiagram, FaGithub, FaArrowRight } from "react-icons/fa";
import { useGitHub } from "../hooks/useGitHub";

const HeroTextAbout = () => {



  const AboutSubtitle = [
    "Soy estudiante de la carrera de computacion e informatica en Cibertec.",
    "Algunos de los proyectos que he trabajado.",
  ];

  const AboutElements = [
    {
      icon: <BsGeoAlt />,
      titulos: "Lima, Peru",
      texto: "I ❤️ Peru",
    },
    {
      icon: <PiStudentFill />,
      titulos: "Cibertec",
      texto: "Cursado : 2022 - Actualidad",
    },
    {
      icon: <MdWorkOutline />,
      titulos: "Ventas - Desarrollador",
      texto: "Torque-G46 : 2024 - Actualidad",
    },
    {
      icon: <IoIosTimer />,
      titulos: "Aprendizaje Constante",
      texto: "Me gusta aprender nuevas tecnologias :)",
    },
  ];

  const PROJECTSELEMENTS = [
    {
      icon: <FaProjectDiagram />,
      nombre: "SCE contable",
      informacion: "sistema para la gestion de cotizaciones y ventas",
      tags: ["Java", "Html", "Postgres"],
    },
    {
      icon: <FaProjectDiagram />,
      nombre: "SCE contable",
      informacion: "sistema para la gestion de cotizaciones y ventas",
      tags: ["Java", "Html", "Postgres"],
    },
  ];

  const { repos } = useGitHub();

  return (
    <div className="hero-text-about">
      <div className="hero-text-about-item">
        <TextSubtitle
          icon={<IoPersonOutline />}
          text={"Sobre mi"}
          subtitle={AboutSubtitle[0]}
        />
        <div className="itemAbouts">
          {AboutElements.map((element, index) => {
            return (
              <div key={index} className="elementItem">
                <span className="elementIcon"> {element.icon} </span>
                {element.titulos}
              </div>
            );
          })}
        </div>
      </div>
      <div className="hero-text-about-item">
        <TextSubtitle
          icon={<GoProjectSymlink />}
          text={"Proyectos destacados"}
          subtitle={AboutSubtitle[1]}
        />
        <div className="contentProject">
          {PROJECTSELEMENTS.map((elmt, index) => {
            return (
              <div key={index} className="cardProject">
                <div className="cardProjectTitle">
                  <span style={{ color: "#2d6fd1" }}>{elmt.icon} </span>{" "}
                  {elmt.nombre}
                </div>
                <div>
                  <p className="cardProjectInfo">{elmt.informacion}</p>
                  <div className="contentTagProject">
                    {elmt.tags.map((itm, idx) => {
                      return (
                        <div key={idx} className="tagProject">
                          {itm}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="actionProject">
                  <FaGithub className="tooltip-icon-button GitHub" />
                  <div className="arrowProject">
                    Ver Proyecto
                    
                      <FaArrowRight />
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroTextAbout;
