import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { getImageUrl } from "../utils"; 
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <nav className={styles.navbar}>
        <img className={styles.logo} src={getImageUrl("logo.png")} alt="logo" />
        <div className={styles.menu}>
            <img 
                className={styles.menuBtn} 
                src={menuOpen ? getImageUrl("closeBtn.png") : getImageUrl("menuBtn.png")} 
                alt="menu" 
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul 
                className={`${styles.sections} ${menuOpen ? styles.menuOpen : ""}`}
                onClick={() => setMenuOpen(false)}
            >
                <li>
                    <Link to="/">Home</Link>  
                </li>
                <li>
                    <Link to="about">About</Link> 
                </li>
                <li>
                    <Link to="experience">Experience</Link> 
                </li>
                <li>
                    <Link to="projects">Projects</Link> 
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
      </nav>
    );
};

export default Navbar;
