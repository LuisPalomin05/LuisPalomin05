import {
  Java,
  Javascript,
  Spring,
  _React,
  Postgresql,
  Mysql,
  Git,
  Docker,
  TypescriptIcon,
  Css3,
  Html5,
  TailwindIcon,
  Github,
  Postman,
  VisualStudio,
  IntellijIdea,
} from "@dev.icons/react";
import React from "react";

const AsideLenguages = () => {
const SKILLS = [
  {
    titulo: "Frontend",
    tecnologias: [
      {
        icono: Html5,
        descripcion: "HTML5",
      },
      {
        icono: Css3,
        descripcion: "CSS3",
      },
      {
        icono: Javascript,
        descripcion: "JavaScript",
      },
      {
        icono: TypescriptIcon,
        descripcion: "TypeScript",
      },
      {
        icono: _React,
        descripcion: "React",
      },
      {
        icono: TailwindIcon,
        descripcion: "Tailwind CSS",
      },
    ],
  },
  {
    titulo: "Backend",
    tecnologias: [
      {
        icono: Java,
        descripcion: "Java",
      },
      {
        icono: Spring,
        descripcion: "Spring Boot",
      },
      {
        icono: Postgresql,
        descripcion: "PostgreSQL",
      },
      {
        icono: Mysql,
        descripcion: "MySQL",
      },
    ],
  },
  {
    titulo: "Herramientas",
    tecnologias: [
      {
        icono: Git,
        descripcion: "Git",
      },
      {
        icono: Github,
        descripcion: "GitHub",
      },
      {
        icono: Docker,
        descripcion: "Docker",
      },
      {
        icono: VisualStudio,
        descripcion: "VS Code",
      },
      {
        icono: IntellijIdea,
        descripcion: "IntelliJ IDEA",
      },
      {
        icono: Postman,
        descripcion: "Postman",
      },
    ],
  },
];

  return (
    <>
      {SKILLS.map((grupo) => (
        <div key={grupo.titulo.trim()}>
          <p>{grupo.titulo}</p>

          <div className="iconoAsideBox">
            {grupo.tecnologias.map((skill) => {
              const Icono = skill.icono;
              return (
                <a href={`/tecnologia/${skill.descripcion}`} className="iconoAside" key={skill.descripcion}>
                  <Icono size={32} />
                  <span>{skill.descripcion}</span>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default AsideLenguages;
