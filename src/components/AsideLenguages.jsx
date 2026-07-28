import { Java } from "@dev.icons/react";
import React from 'react'
import AsideLenguages from "./AsideLenguages";


export const AsideLenguages = () => {
  
  const LENGUAGESSKILL = [
    {
      titulo:"Lenguajes",
      Lenguajes:[{
        icono:<Java size={32} />,
        descripcion:'Java'
      }]
    }]
  
  return (
    <div>
      {LENGUAGESSKILL[0].Lenguajes[1].descripcion}
    </div>
  )
}