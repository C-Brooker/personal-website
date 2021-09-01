import styles from "./styles.module.css";

function Footer() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/charlie-brooker-081b241b0/">
        <img
          className={styles.footerImage}
          src="https://image.flaticon.com/icons/png/128/145/145807.png"
          alt="LinkedIn"
        />
      </a>
    </div>
  );
}

export default Footer;
