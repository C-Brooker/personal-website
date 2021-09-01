import styles from "./styles.module.css";

function AboutMeCard(props) {
  return <div className={styles.aboutMeCard}>{props.children}</div>;
}

export default AboutMeCard;
