import TextSubtitle from "./TextSubtitle";
import { FaCode } from "react-icons/fa6";

const Aside = () => {
  return (
    <div>
      <TextSubtitle icon={<FaCode />} text={"Tecnologias"} subtitle={"Estas son algunas tecnologias que uso."} />
    </div>
  );
};

export default Aside;