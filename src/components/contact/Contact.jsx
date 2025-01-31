import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  return (
    <>
      <a href="#contact" onClick={handleClick}>
        Contact
      </a>
      {isVisible && (
        <footer id="contact" className={styles.container}>
          <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Contact;

