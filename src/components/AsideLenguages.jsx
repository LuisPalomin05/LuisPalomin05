import { Java } from "@dev.icons/react";
import React from 'react'

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
      {LENGUAGESSKILL[0].Lenguajes[0].descripcion}
    </div>
  )
}