import { Java } from "@dev.icons/react";
import { Javascript } from "@dev.icons/react";
import React from "react";

const AsideLenguages = () => {
  const SKILLS = [
    {
      titulo: "Lenguajes",
      lenguajes: [
        {
          icono: <Java size={32} />,
          descripcion: "Java",
        },
        {
          icono: <Javascript size={32} />,
          descripcion: "JavaScript",
        },
      ],
    },
  ];

  return (
    <div className="asideLenguage">
      <p>{SKILLS[0].titulo}</p>
      <div className="iconoAsideBox">
        {SKILLS[0].lenguajes.map((lenguaje, index) => (
          <div className="iconoAside" key={index}>
            {lenguaje.icono}
            <span>{lenguaje.descripcion}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsideLenguages;
