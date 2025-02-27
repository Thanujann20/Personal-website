import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";

const Hero = () => {
    return (
      <>
        <section className={styles.container}>
            <img className={styles.profileImg} src={getImageUrl("picture.jpg")} alt="Me" />
            <div className={styles.content}>
                <h1>Hi, My name is Thanujann!</h1>
                <p className={styles.desc}>
                  I'm a fourth-year Computer Science student at 
                  Toronto Metropolitan University passionate about creating amazing applications.
                </p>
            </div>
        </section>
      </>
    );
  };
  
  export default Hero;
  

