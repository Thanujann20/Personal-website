import styles from "./Navbar.module.css"
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
                onClick={() => setMenuOpen(false)} 
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
                <li>
                    <a href="/">Home</a>
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
  