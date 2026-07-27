import React from "react";

 const BoxLenguageItem = ({ name, urlImage, icono }) => {
  return (
    <div>
      {urlImage ? <img src={urlImage}/> : icono}
      <p> {name} </p>
    </div>
  );
};

export default BoxLenguageItem;