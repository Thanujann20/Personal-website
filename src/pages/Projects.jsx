import styles from "./Projects.module.css"
import { getImageUrl } from "../utils"

const Projects = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Check Out Some Of My Projects</h1>
            <section className={styles.container}>
                <div className={styles.projectCard}>
                    <img className={styles.projImg} src={getImageUrl("website.png")} alt="Website" /> 
                    <h1>Personal website</h1>
                    <p>I designed my website using React, JavaScript, HTML and CSS</p> 
                    <a href="https://github.com/Thanujann20/Personal-website" target="blank"><img className={styles.gLogo} src={getImageUrl("github.webp")} alt="Github" /></a> 
                </div>
                <div className={styles.projectCard}>
                    <img className={styles.projImg} src={getImageUrl("macula.png")} alt="Macula" />
                    <h1>Macula</h1>
                    <p>Macula is a prototype of an ecommerce system, designed using JavaScript, HTML and CSS, using firebase for hosting and user authentication</p>  
                    <a href="https://github.com/Thanujann20/Macula/tree/firebase" target="blank"><img className={styles.gLogo} src={getImageUrl("github.webp")} alt="Github" /></a>
                </div>
                <div className={styles.projectCard}>
                    <img className={styles.apocalypse} src={getImageUrl("Apocalypse.png")} alt="Apocalypse" />
                    <h1>Apocalypse</h1>
                    <p>This was a small game I made using Pygame.</p>
                    <a href="https://github.com/Thanujann20/Apocalypse" target="blank"><img className={styles.gLogo} src={getImageUrl("github.webp")} alt="Github" /></a>
                </div>
            </section>
        </div>
    )
}

export default Projects
