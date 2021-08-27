import { Link } from "react-router-dom";
//Link to changes the url of the website
function GeneralNav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/"> Blog Posts </Link>
          </li>
          <li>
            <Link to="/about-me"> About me </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GeneralNav;
