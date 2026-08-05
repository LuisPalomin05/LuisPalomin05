import { createContext, useEffect, useState } from "react";
import { getUser, getRepositories } from "../services/gitApi";

export const GitHubContext = createContext();

export function GitHubProvider({ children }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const username = "lpalomino7030";

  useEffect(() => {
    async function cargarDatos() {
      const usuario = await getUser(username);
      const repositorios = await getRepositories(username);

      setUser(usuario);
      setRepos(
        repositorios.map((repo) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          language: repo.language,
        })),
      );
    }

    cargarDatos();
  }, []);

  return (
    <GitHubContext.Provider
      value={{
        user,
        repos,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
}
