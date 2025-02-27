import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import Hero from "./components/hero/hero";


function App() {
  return (
    
    <div className={styles.App}> 
      <Navbar />
      <Hero />
      
    </div>
  );
}

export default App
