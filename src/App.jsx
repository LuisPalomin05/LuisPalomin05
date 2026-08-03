import Home from "./pages/Home";
import Aside from "./components/Aside";
import "./App.css";

function App() {
  return (
    <section className="layout">
      <div className="body">
        <Home />
      </div>
      <div className="right">
        <Aside />
      </div>
    </section>
  );
}

export default App;
