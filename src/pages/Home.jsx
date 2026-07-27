import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />



        
      </Routes>
    </Router>
  );
};

export default Home;
