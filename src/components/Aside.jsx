import TextSubtitle from "./TextSubtitle";
import { FaCode } from "react-icons/fa6";
import AsideLenguages from "./AsideLenguages";
 

const Aside = () => {
  return (
    <div>
      <TextSubtitle icon={<FaCode />} text={"Tecnologias"} subtitle={"Estas son algunas tecnologias que uso."} />
     <AsideLenguages/>
    </div>
  );
};

export default Aside;