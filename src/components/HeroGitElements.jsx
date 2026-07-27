import { useEffect, useState } from "react";
import { getUser } from "../services/GitApi";
import BoxLenguageItem from './BoxLenguageItem'
const HeroGitElements = () => {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    async function cargarPerfil() {
      const data = await getUser("lpalomino7030");

      setPerfil(data);
    }

    cargarPerfil();
  }, []);

  console.log(perfil);

  return (
    <div>
      <div className="GitInfoUser">
        <div className="avatarGit">
        <img
          className="perfilGitImage"
          src={perfil?.avatar_url}
          alt={perfil?.login}
        />
        <p className="nameGitUser">
            {perfil?.login}
        </p>
        </div>


        <img
          src="https://ghchart.rshah.org/lpalomino7030"
          alt="GitHub Contributions"
        />
      </div>
    </div>
  );
};

export default HeroGitElements;
