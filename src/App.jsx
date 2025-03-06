import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import styles from "./App.module.css"; 

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

