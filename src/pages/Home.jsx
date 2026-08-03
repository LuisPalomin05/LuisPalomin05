import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useGitHub } from "../hooks/useGitHub";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




const Home = () => {
    const { user } = useGitHub();

    console.log(user);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />



        
      </Routes>
      <footer>
        <br />
      </footer>
    </Router>
  );
};

export default Home;
