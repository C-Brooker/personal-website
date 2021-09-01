import { Link } from "react-router-dom";
import React from "react";
import styles from "./styles.module.css";

function AboutMeNav() {
  return (
    <div className={styles.stickyLink}>
      <nav>
        <ul className={styles.aboutMeList}>
          <li>
            <Link className={styles.aboutMeLink} to="/about-me">
              {" "}
              About me{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AboutMeNav;
