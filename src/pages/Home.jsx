import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { getImageUrl } from "../utils";

const Home = () => {
    return (
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <img className={styles.profileImg} src={getImageUrl("picture.jpg")} alt="Me"/>
          <div className={styles.content}>
            <h1>Hi, I'm Thanujann!</h1>
            <p className={styles.desc}>
              I'm a fourth-year Computer Science student at 
              Toronto Metropolitan University passionate about creating amazing applications.
            </p>
            <p className={styles.desc}>
              Check out some of my projects and past experience!
            </p>
            <div className={styles.buttons}>
              <Link to="/projects" className={styles.btn}>View Projects</Link>
              <Link to="/contact" className={styles.btn}>Contact Me</Link>
            </div>
          </div>
        </section>
      </div>
    );
};
  
export default Home;
