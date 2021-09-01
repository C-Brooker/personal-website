import styles from "./styles.module.css";

function BlogCard(props) {
  return (
    <div className={styles.blogCard}>
      <div>
        <div className={styles.blogTitle}>{props.title}</div>
        <div className={styles.blogContent}>{props.content}</div>
        <div className={styles.blogTime}>{props.time}</div>
      </div>
    </div>
  );
}

export default BlogCard;
