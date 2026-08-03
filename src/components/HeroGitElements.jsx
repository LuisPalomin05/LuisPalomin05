import { useEffect, useState } from "react";
import { getUser } from "../services/gitApi";
import BoxLenguageItem from "./BoxLenguageItem";
const HeroGitElements = () => {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    async function cargarPerfil() {
      const data = await getUser("lpalomino7030");

      setPerfil(data);
    }

    cargarPerfil();
  }, []);

  return (
    <div>
      <div className="GitInfoUser">
        <div className="avatarGit">
          <a href={perfil?.html_url}>
                      <img
            className="perfilGitImage"
            src={perfil?.avatar_url}
            alt={perfil?.login}
          />
          </a>

          <p className="nameGitUser">{perfil?.login}</p>
        </div>

        <img
          src={`https://ghchart.rshah.org/${perfil?.login}`}
          alt="GitHub Contributions"
        />
      </div>
    </div>
  );
};

export default HeroGitElements;
