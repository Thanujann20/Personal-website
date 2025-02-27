import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";
import { getImageUrl} from "../../utils.js"
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <nav className={styles.navbar}>
        <img className={styles.Logo} src={getImageUrl("logo.png")} alt="logo"/>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? getImageUrl("closeBtn.png"): getImageUrl("menuBtn.png")} alt="menu" 
                onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.sections} ${menuOpen ? styles.menuOpen : ""}`}
                onClick={() => setMenuOpen(false)}>
                <li>
                    <Link to="/">Home</Link>  
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
      </nav>
    );
  }
  
export default Navbar;
  