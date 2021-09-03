import styles from "./styles.module.css";

function Footer() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/charlie-brooker-081b241b0/">
        <img
          className={styles.footerImage}
          src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-1024.png"
          alt="LinkedIn"
        />
      </a>
      <a href="https://github.com/C-Brooker">
        <img
          className={styles.footerImage}
          src="https://cdn.iconscout.com/icon/free/png-128/github-online-project-hosting-website-logo-46235.png"
          alt="Github"
        />
      </a>
    </div>
  );
}

export default Footer;
