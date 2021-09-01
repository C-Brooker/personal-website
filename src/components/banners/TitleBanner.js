import styles from "./styles.module.css";

function TitleBanner(props) {
  return <div className={styles.aboutTitleBanner}>{props.children}</div>;
}

export default TitleBanner;
