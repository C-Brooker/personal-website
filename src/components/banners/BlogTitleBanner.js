import styles from "./styles.module.css";

function BlogTitleBanner(props) {
  return <div className={styles.blogTitleBanner}>{props.children}</div>;
}

export default BlogTitleBanner;
