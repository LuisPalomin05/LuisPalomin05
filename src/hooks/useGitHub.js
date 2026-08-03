import { useContext } from "react";
import { GitHubContext } from "../context/GitHubContext";

export function useGitHub() {
    return useContext(GitHubContext);
}