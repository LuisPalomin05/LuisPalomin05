import TextSubtitle from "./TextSubtitle";
import { IoPersonOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { BsGeoAlt } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";

const HeroTextAbout = () => {
  const AboutSubtitle = [
    "Soy estudiante de la carrera de computacion e informatica en Cibertec.",
    "Algunos de los proyectos que he trabajado.",
  ];

  const AboutElements = [
    {
      icon: <PiStudentFill />,
      titulos: "Lima, Peru",
      texto: "I ❤️ Peru",
    },
    {
      icon: <BsGeoAlt />,
      titulos: "Cibertec",
      texto: "Cursado : 2022 - Actualidad",
    },
    {
      icon: <MdWorkOutline />,
      titulos: "Ventas - Desarrollador",
      texto: "Torque-G46 : 2024 - Actualidad",
    },
    {
      icon: <BsGeoAlt />,
      titulos: "Aprendizaje Constante",
      texto: "Me gusta aprender nuevas tecnologias :)",
    },
  ];

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
                <div>
                  <span className="elementIcon"> {element.icon} </span>{" "}
                  {element.titulos}
                </div>
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
      </div>
    </div>
  );
};

export default HeroTextAbout;
