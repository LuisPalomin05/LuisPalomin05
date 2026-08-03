import { createRoot } from "react-dom/client";
import { GitHubProvider } from "./context/GitHubContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <GitHubProvider>
    <App />
  </GitHubProvider>,
);
