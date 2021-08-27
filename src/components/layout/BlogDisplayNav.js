import { Link } from "react-router-dom";

function BlogDisplayNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Blog posts </Link>
          </li>
          <li>
            <Link to="/blog-input"> Add blog posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BlogDisplayNav;
