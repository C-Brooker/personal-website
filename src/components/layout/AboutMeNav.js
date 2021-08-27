import { Link } from "react-router-dom";
import React from "react";

function AboutMeNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about-me"> About me </Link>
          </li>
          <li>
            <Link to="/blog-input"> Add blog posts </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AboutMeNav;
