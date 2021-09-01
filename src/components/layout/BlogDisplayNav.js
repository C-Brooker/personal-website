import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function BlogDisplayNav() {
  return (
    <div className={styles.stickyLink}>
      <nav>
        <ul className={styles.blogDisplayList}>
          <li>
            <Link className={styles.blogDisplayLink} to="/">
              {" "}
              Blog posts{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BlogDisplayNav;
