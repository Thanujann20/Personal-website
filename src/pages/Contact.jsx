import styles from "./Contact.module.css";
import { getImageUrl } from "../utils";

const Contact = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Feel Free to Reach out to Me!</h1>
            <section className={styles.container}>
                <div className={styles.imageContainer}>
                     <a href="https://www.instagram.com/thanu_.20" target="_blank" rel="noopener noreferrer">
                        <img className={styles.igLogo} src={getImageUrl("ig.png")} alt="Instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/in/thanujanndayaparan" target="_blank" rel="noopener noreferrer">
                        <img className={styles.linkedInLogo} src={getImageUrl("linkedin.webp")} alt="LinkedIn"/>
                    </a>
                    <a href="mailto:thanujann12345@gmail.com">
                        <div className={styles.contactItem}>
                            <img className={styles.mailLogo} src={getImageUrl("mail.webp")} alt="Email"/>
                            <p className={styles.contactText}>thanujann12345@gmail.com</p>
                        </div>
                    </a>
                    <div className={styles.contactItem}>
                        <img className={styles.phoneLogo} src={getImageUrl("phone.png")} alt="Phone"/>
                        <p className={styles.contactText}>647-504-7050</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
