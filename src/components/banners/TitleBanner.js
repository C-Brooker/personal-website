import styles from "./styles.module.css";

function TitleBanner(props) {
  return <div className={styles.titleBanner}>{props.children}</div>;
}

export default TitleBanner;
