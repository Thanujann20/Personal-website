import styles from "./Hero.module.css"
import { getImageUrl} from "../../utils.js"

const hero = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
        <img className={styles.profileImg} src={getImageUrl("picture.jpg")} alt="Me"/>
            <h1 className={styles.title}>Hi, I'm Thanujann!</h1>
            <p className={styles.description}>
            I'm a fourth year Computer Science student at Toronto Metropolitan University.
            </p>
        </div>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        </section>
    )
}

export default hero
