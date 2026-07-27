const GITHUB_API = "https://api.github.com";

async function fetchGitHub(url) {
  const response = await fetch(url);

  if (!response.ok) {
    `${response.status} ${response.statusText}`;
  }

  return response.json();
}
/**
 * Obtiene la información pública de un usuario.
 * @param {string} user
 * @returns {Promise<Object>}
 */
const getUser = (user) => fetchGitHub(`${GITHUB_API}/users/${user}`);

const getRepositories = (user) =>
  fetchGitHub(`${GITHUB_API}/users/${user}/repos`);

const getRepository = (user, repo) =>
  fetchGitHub(`${GITHUB_API}/repos/${user}/${repo}`);

const getLanguages = (user, repo) =>
  fetchGitHub(`${GITHUB_API}/repos/${user}/${repo}/languages`);

export { getUser, getRepositories, getRepository, getLanguages };
