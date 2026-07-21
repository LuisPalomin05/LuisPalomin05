import Home from "./pages/Home";
import Aside from "./components/Aside";
import "./App.css";

function App() {
  return <section class="layout">
  <div class="body">
    <Home />
  </div>
  <div class="right">
    <Aside />
  </div>
</section>;
}

export default App;
