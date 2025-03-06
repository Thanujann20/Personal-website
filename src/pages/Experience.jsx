import styles from "./Experience.module.css";
import experienceData from "../data/experience.json"; 
import { getImageUrl } from "../utils";

const Experience = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Experience</h1>
            <div className={styles.experienceList}>
                {experienceData.map((job) => (
                    <div key={job.id} className={styles.experienceCard}>
                        <h2>{job.company}</h2>
                        <img className={styles.image} src={getImageUrl(job.image)} alt="Logo"/>
                        <h3>{job.role}</h3>
                        <p><strong>{job.duration}</strong></p>
                        <p>{job.description}</p>
                        <div className={styles.break}></div>
                    </div>
                ))}
        </div>
    </div>
  );
};

export default Experience;

