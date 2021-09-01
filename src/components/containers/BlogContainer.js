import styles from "./styles.module.css";

function BlogContainer(props) {
  return <div className={styles.blogContainer}>{props.children}</div>;
}

export default BlogContainer;
