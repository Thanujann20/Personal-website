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
                    <img className={styles.apocalypse} src={getImageUrl("PowerUp.png")} alt="PowerUp" />
                    <h1>PowerUp</h1>
                    <p>A fitness app that allows users to track their workouts and uses USDA food database API to search for over 400,000 food entries, allowing users to log their meals and view their macros</p>
                    <a href="https://github.com/Thanujann20/Fitness-App" target="blank"><img className={styles.gLogo} src={getImageUrl("github.webp")} alt="Github" /></a>
                </div>
            </section>
        </div>
    )
}

export default Projects
