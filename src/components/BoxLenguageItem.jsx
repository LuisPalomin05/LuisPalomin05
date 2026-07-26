import React from 'react'

export const BoxLenguageItem = ({name,urlImage, icono}) => {
  return (
    <div>
       <p> {name} </p>
       {
       urlImage ? (
       <image src={urlImage}></image>) : (
       icono
       )
       }
       
    </div>
  )
}