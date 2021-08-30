import { Link } from "react-router-dom";
import styles from "./styles.module.css";
//Link to changes the url of the website
function GeneralNav() {
  return (
    <div>
      <nav>
        <ul className={styles.generalNavList}>
          <li>
            <div>
              <Link className={styles.generalNavList} to="/">
                {" "}
                Blog Posts{" "}
              </Link>
            </div>
          </li>
          <li>
            <div>
              <Link className={styles.generalNavList} to="/about-me">
                {" "}
                About me{" "}
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GeneralNav;
