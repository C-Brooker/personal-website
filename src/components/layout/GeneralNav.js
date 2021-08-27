import { Link } from "react-router-dom";

function GeneralNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Blog </Link>
          </li>
          <li>
            <Link to="/about-me"> About me </Link>
          </li>
          <li>
            <Link to="/blog-input"> Add blog posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GeneralNav;
