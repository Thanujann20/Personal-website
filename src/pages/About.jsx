import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { getImageUrl } from "../utils";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.aboutMe}>
        <h1>About Me</h1>
        <p>I am currently in my 4th year at Toronto Metropolitan University pursuing a degree in Computer Science.
          I worked at FGF Brands as a Software QA co-op, and DSV Solutions as an Inventory Associate. Learn more about my previous
          experience <Link to="/experience" className={styles.btn}>here</Link>
        </p> 
        <p>
          Along my journey, I have learned many tools
          including programming languages such as Python, Java, Javascript, frameworks such as React as well as working with databases and
          software testing. I am interested in Software Engineering and Web Development and enjoy collaborating with others and building applications.
        </p>
      </section>
      <h1>Some of my Interests</h1>
      <section className={styles.interests}>
        <div className={styles.interestsBox}>
          <img src={getImageUrl("basketball.jpeg")} alt="Basketball"/>
          <p>I enjoy playing basketball and usually play every week. Some other sports I love include Football, Baseball, and Soccer.</p>
        </div>
        <div className={styles.interestsBox}>
          <img src={getImageUrl("game.jpeg")} alt="Video Games"/>
          <p>I love playing video games in my free time, including open world games, RPGs like Pokemon, and sports games like Madden and NBA2K.</p>
        </div>
        <div className={styles.interestsBox}>
          <img src={getImageUrl("gym.jpeg")} alt="Gym"/>
          <p>I have recently started going to the gym and am committed to keeping my mind and body right.</p>
        </div>
        <div className={styles.interestsBox}>
          <img src={getImageUrl("Anime.webp")} alt="Anime"/>
          <p>Along with live action tv shows, I enjoy watching anime. My all time favorite series is Attack on Titan.</p>
        </div>  
      </section>
    </div>
  );
};

export default About
